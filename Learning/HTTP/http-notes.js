/*
  +-------------------------------------------------------------------------+
  |                              CLIENT (Browser/Postman)                   |
  +-------------------------------------------------------------------------+
       |                  |                   |                  |
   GET |             POST |               PUT |           DELETE |
       v                  v                   v                  v
  [ /users ]       [ /users ]         [ /users/1 ]       [ /users/1 ]
  (Fetch All)      (Create New)       (Update ID: 1)     (Delete ID: 1)
       |                  |                   |                  |
       +------------------+-------------------+------------------+
                                   |
                                   v
  +-------------------------------------------------------------------------+
  |                           NODE.JS HTTP SERVER                           |
  |                           (req.method Routing)                          |
  +-------------------------------------------------------------------------+
                                   |
                                   v
                        +---------------------+
                        |  Database / Memory  |
                        +---------------------+
*/









/* ==============================================================================
   NODE.JS HTTP SERVER & 5 MAIN HTTP METHODS
   ==============================================================================

   SUMMARY:
   1. GET    -> Read data
   2. POST   -> Create new data
   3. PUT    -> Update/Replace existing data
   4. PATCH  -> Update specific parts of data
   5. DELETE -> Remove data

   ============================================================================== */

import http from 'http';

// Sample dummy database array
let users = [
    { id: 1, name: 'Mehmood', role: 'Developer' },
    { id: 2, name: 'Ali', role: 'Designer' }
];

const server = http.createServer((req, res) => {
    // Set response header to JSON format
    res.setHeader('Content-Type', 'application/json');

    const { method, url } = req;

    // -------------------------------------------------------------------------
    // 1. GET METHOD - Fetch All Users
    // -------------------------------------------------------------------------
    if (method === 'GET' && url === '/api/users') {
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, data: users }));
    }

    // -------------------------------------------------------------------------
    // 2. POST METHOD - Create a New User
    // -------------------------------------------------------------------------
    else if (method === 'POST' && url === '/api/users') {
        let body = '';

        // Collect incoming data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length + 1; // Assign auto ID
            users.push(newUser);

            res.writeHead(201); // 201 Created
            res.end(JSON.stringify({ message: 'User created successfully', user: newUser }));
        });
    }

    // -------------------------------------------------------------------------
    // 3. PUT METHOD - Update / Replace Entire User Record
    // -------------------------------------------------------------------------
    else if (method === 'PUT' && url.startsWith('/api/users/')) {
        const id = parseInt(url.split('/')[3]);
        let body = '';

        req.on('data', chunk => { body += chunk.toString(); });

        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const index = users.findIndex(u => u.id === id);

            if (index !== -1) {
                // Completely replace user record
                users[index] = { id: id, ...updatedData };
                res.writeHead(200);
                res.end(JSON.stringify({ message: 'User replaced (PUT)', user: users[index] }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'User not found' }));
            }
        });
    }

    // -------------------------------------------------------------------------
    // 4. PATCH METHOD - Update Partial User Information
    // -------------------------------------------------------------------------
    else if (method === 'PATCH' && url.startsWith('/api/users/')) {
        const id = parseInt(url.split('/')[3]);
        let body = '';

        req.on('data', chunk => { body += chunk.toString(); });

        req.on('end', () => {
            const partialData = JSON.parse(body);
            const user = users.find(u => u.id === id);

            if (user) {
                // Modify only provided fields (e.g., update role only)
                Object.assign(user, partialData);
                res.writeHead(200);
                res.end(JSON.stringify({ message: 'User updated (PATCH)', user }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'User not found' }));
            }
        });
    }

    // -------------------------------------------------------------------------
    // 5. DELETE METHOD - Remove User
    // -------------------------------------------------------------------------
    else if (method === 'DELETE' && url.startsWith('/api/users/')) {
        const id = parseInt(url.split('/')[3]);
        const initialLength = users.length;
        users = users.filter(u => u.id !== id);

        if (users.length < initialLength) {
            res.writeHead(200);
            res.end(JSON.stringify({ message: `User with ID ${id} deleted successfully` }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }

    // Handle Unmatched Routes
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});

// Start Server on Port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});