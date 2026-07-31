## 🚀 Node.js, MongoDB & Express.js Backend Master Repository

🟢 Node.js Core Fundamentals ⚡ — A lightweight &amp; dependency-free HTTP server 🌐 built strictly using pure Node.js modules (`http` &amp; `fs` 📁) without Express! 🚀 Features asynchronous file system read/write operations 💾, native request routing 🔄, custom npm execution scripts 📜, and deep Event Loop architecture practice 🧠💻 with MongoDB Data Base


The **Node.js, Express & MongoDB Practice Repository**! This repository tracks my step-by-step learning journey—from core Node.js modules and HTTP servers to building full RESTful APIs and real-world micro-services like a **URL Shortener Application** using the **MVC (Model-View-Controller) pattern**.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js (v18+)
* **Framework:** Express.js
* **Template Engine:** EJS (Embedded JavaScript)
* **Database:** MongoDB (Local Community Server & Atlas Ready)
* **ODM Library:** Mongoose
* **Utilities:** nanoid, nodemon, cookie-parser, uuid
* **API Testing:** Postman

---

## ✨ Features

- 🏗️ **MVC Architecture** – Clean separation of concerns with Models, Views, Controllers, and Routes
- 🖼️ **Server-Side Rendering (SSR)** – Dynamic UI rendering powered by EJS templating engine
- 🔗 **Dynamic URL Shortening** – Generates short, unique 8-character IDs using `nanoid`
- 🎯 **Smart Redirection & Analytics** – Instantly redirects short links and logs visit timestamps in MongoDB
- ⚡ **Auto-Reload Development** – Powered by `nodemon` for zero-restart developer workflow
- 🛡️ **Robust Middleware Pipeline** – Body parsing for JSON/URL-encoded data & custom request logging
- 🗄️ **Mongoose Data Validation** – Schema-level type checking and unique constraints
- 🧪 **Production-Ready REST Endpoints** – Clean HTTP status codes and structured JSON responses

---

### 🎯 Architecture & Modules Overview

| Component / Module | Purpose |
| :--- | :--- |
| **`index.js`** | Main entry point that initializes Express, registers global middlewares (`express.json`), and starts the server. |
| **`connect.js`** | Handles async database connection setup using Mongoose to connect with MongoDB. |
| **`models/url.js`** | Defines the Mongoose Schema for URLs, including `shortID`, `redirectURL`, and `visitHistory` array. |
| **`controllers/url.js`** | Contains core business logic for generating short IDs (`GenShortURL`) and handling redirects/click tracking (`GetByShortId`). |
| **`routes/url.js`** | Defines API endpoints (`POST /`, `GET /:nanoid`) and maps them to their respective controller functions. |
| **`RestAPI/` Module** | A standalone REST microservice demonstrating full user CRUD operations and custom logging middlewares. |
| **`Learning/` Modules** | Hands-on code practice covering Node.js native modules (`fs`, `events`, `http`), NPM versioning, and basic server creation. |

---

## 🛠️ Tech Stack & Dependencies

| Tool / Library | Type | Purpose |
| :--- | :--- | :--- |
| **Node.js** | Runtime | JavaScript execution engine on server-side |
| **Express.js** | Framework | Fast, unopinionated web framework for Node.js |
| **MongoDB** | Database | NoSQL Document-based database |
| **Mongoose** | ODM Library | Schema-based modeling for MongoDB & Express |
| **nodemon** | Developer Tool | Automatically restarts the node application when file changes in the directory are detected |
| **nanoid** | Utility | Small, secure, URL-friendly unique string ID generator |
| **EJS** | Template Engine | Server-side rendering (SSR) of dynamic HTML templates |
| **uuid** | Utility | Cryptographically strong Universally Unique Identifier (UUID) generator (e.g., `v4` for unique session/user IDs) |
| **cookie-parser** | Middleware | Express middleware to parse incoming request `Cookie` headers and populate `req.cookies` |
| **Postman**| API Client | Testing REST API endpoints (GET, POST, PATCH, DELETE) |

---

## 📂 Project Directory Structure


**Generated:** 7/27/2026, 10:29:03 PM

**Root Path:** `workspace\Node`

```
├── 📁 Learning
│   ├── 📁 Events
│   │   ├── 📄 main.js
│   │   └── 📄 test.txt
│   ├── 📁 Express
│   │   ├── ⚙️ .gitignore
│   │   ├── 📄 index.js
│   │   ├── ⚙️ package-lock.json
│   │   └── ⚙️ package.json
│   ├── 📁 First
│   │   ├── 📁 my-docs
│   │   ├── 📁 my-docx
│   │   │   └── 📁 Folder
│   │   │       └── 📁 File
│   │   ├── 📄 contacts.txt
│   │   ├── 📄 file.js
│   │   ├── 📄 file.txt
│   │   ├── 📄 math.js
│   │   ├── 📄 modules.js
│   │   ├── ⚙️ package.json
│   │   └── 📄 test.txt
│   ├── 📁 HTTP
│   │   └── 📄 http-notes.js
│   ├── 📁 RestAPI
│   │   ├── 📁 controllers
│   │   │   └── 📄 user.js
│   │   ├── 📁 logs
│   │   │   └── 📄 logs.txt
│   │   ├── 📁 middlewares
│   │   │   └── 📄 middleware.js
│   │   ├── 📁 models
│   │   │   └── 📄 user.js
│   │   ├── 📁 routes
│   │   │   └── 📄 user.js
│   │   ├── 📁 views
│   │   │   └── ⚙️ .gitkeep
│   │   ├── ⚙️ .gitignore
│   │   ├── ⚙️ MOCK_DATA.json
│   │   ├── 📄 connection.js
│   │   ├── 📄 index.js
│   │   ├── ⚙️ package-lock.json
│   │   └── ⚙️ package.json
│   ├── 📁 Server
│   │   ├── 📄 index.js
│   │   ├── 📄 log.txt
│   │   ├── ⚙️ package.json
│   │   └── 📄 url_note.js
│   └── 📁 Versions
│       └── 📄 version.js
├── 📁 Shortener_URL
│   ├── 📁 controllers
│   │   ├── 📄 static.js
│   │   └── 📄 url.js
│   ├── 📁 models
│   │   └── 📄 url.js
│   ├── 📁 routes
│   │   ├── 📄 static.js
│   │   └── 📄 url.js
│   ├── 📁 views
│   │   └── 📄 home.ejs
│   ├── ⚙️ .gitignore
│   ├── 📄 connect.js
│   ├── 📄 index.js
│   ├── ⚙️ package-lock.json
│   └── ⚙️ package.json
└── 📝 README.md
```

---

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of JavaScript

---

## 📜 Available Scripts

In the project directory, you can run the following commands configured in `package.json`:

### 🚀 Start Server
```bash
npm start
```
---

## ⚙️ Environment Setup & Tool Installation Guide

### 1. Installing Node.js & NPM
Download and install the LTS version from [Node.js Official Site](https://nodejs.org/).
Verify installation in your terminal:
```bash
node -v
npm -v
```

### 2. Installing MongoDB Community Server & Mongosh
1. Download **MongoDB Community Server** from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
2. Download **MongoDB Shell (`mongosh`)** to run CLI database operations.
3. Start the local server daemon:
```bash
# Verify connection using mongosh CLI
mongosh
```

### 3. Setting Up `package.json` with ES Modules
Initialize your Node project inside any project directory:
```bash
npm init
```

## During the prompt configuration, fill out the selections like this:

package name: (name)

version: (1.0.0) 

description: may add
​
entry point: (index.js)​

test command: just enter​

git repository: (https://github.com/username/repo_name.git)

keywords: may add

author: may add

license: (ISC) 

type: (commonjs) recommended module

Is this OK? (yes) 

---

To enable modern ES6 `import/export` syntax instead of `require()`, open `package.json` and add `"type": "module"`:
```json
{
  "name": "node",
  "version": "1.0.0",
  "bugs": {
    "url": "https://github.com/username/repo/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/repo.git"
  },
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" // add manually write "nodemon index.js" if installed
  }
}

```

### 4. Installing Core Dependencies
Run this command inside your project directory to install npm pakages in pakages.json file:
```bash
npm i express
npm i mongoose
npm i nanoid
npm i nodemon
npm i ejs
npm i cookie-parser
npm i uuid
```

**It automatically Create package.json if not exists. Like**

```json
{
  "name": "pakage name",
  "version": "1.0.0",
  "description": "Something",
  "keywords": [
    "keywords"
  ],
  "homepage": "https://github.com/github.com/username#readme",
  "bugs": {
    "url": "https://github.com/github.com/username/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/github.com/username.git"
  },
  "license": "ISC",
  "author": "Auther",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "ejs": "^6.0.1",
    "express": "^5.2.1",
    "mongoose": "^9.8.0",
    "nanoid": "^6.0.0",
    "nodemon": "^3.1.14",
    "uuid": "^14.0.1",

  }
}

```

**Note:**  Install pakages when needed

---

## 🧪 Postman & API Endpoint Testing

* **Install Postman from** 🌐 [postman.com](https://postman.com) to test API's

### Endpoint 1: Create Short URL
* **HTTP Method:** `POST`
* **URL:** `http://localhost:4000/url`
* **Headers:** `Content-Type: application/json`
* **Body (raw JSON):**
```json
{
  "url": "https://github.com/Username"
}
```
* **Success Response (`201 Created`):**
```json
{
  "id": "A1b2C3d4"
}
```

---

## 🗑️ Database Maintenance via `mongosh`

If you need to clear all test documents without dropping the collection structure:

```bash

# 1. Open mongosh CLI
mongosh

# 2. Show All DB's
show dbs

# 3. Switch to project DB
use project-db-name

# 4. Show Exist DB collections
show collections

# 5. Show All Documents
db.collection.find({})

# 6. Delete all documents inside 'project-db-name' collection if wants
db.project-db-name.deleteMany({})

# 5. Exit the interactive MongoDB Shell session and return to the system terminal
.exit

```

---

## 📚 Learning Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Express.js API Reference](https://expressjs.com/)
- [MongoDB Manual](https://www.mongodb.com/docs/manual/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Postman Learning Center](https://learning.postman.com/docs/publishing-your-api/summary/)

---

## 💡 Core Concepts Covered

- ✅ **Node.js Core Modules** – Working with `fs` (File System), `events`, and native `http` modules
- ✅ **MVC Architecture** – Structuring backend apps using Models, Views, and Controllers
- ✅ **Server-Side Rendering (SSR)** – Rendering dynamic web views and passing backend data using the EJS templating engine
- ✅ **RESTful API Design** – Building standard HTTP routes (GET, POST, PUT, DELETE) with proper status codes
- ✅ **Middleware Pipeline** – Creating custom loggers and handling request body parsing (`express.json`, `urlencoded`)
- ✅ **MongoDB & Mongoose** – Designing Schemas, Models, and performing CRUD operations
- ✅ **Database Aggregation & Analytics** – Tracking array updates (`$push`) and dynamic timestamp logs
- ✅ **Routing & Parameter Handling** – Extracting path variables with `req.params` and body payloads with `req.body`
- ✅ **Environment & CLI Setup** – Managing ES Modules (`type: "module"`), `nodemon`, and database management via `mongosh`

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- 🚀 **Core Fundamentals** – Built custom HTTP servers, learned EventEmitters, File System (`fs`) operations, and NPM module handling.
- 🛠️ **RESTful API Architecture** – Structured scalable Express servers following clean MVC (Model-View-Controller) patterns.
- ⚡ **URL Shortener Microservice** – Implemented `nanoid` logic to generate unique short IDs for long URLs.
- 🗄️ **MongoDB Integration** – Connected Mongoose schemas with real-time URL redirect logic and automated visit analytics tracking.
- 🛠️ **Developer Experience** – Configured `nodemon` for auto-reloading during development and created custom logging middlewares.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

### *Happy Coding without Chai ! ☕*
