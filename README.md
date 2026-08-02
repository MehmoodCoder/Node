# 🚀 URL Shortener Application — Node.js, Express, MongoDB & JWT (MVC Architecture)

A full-featured, secure **URL Shortener RESTful Web Application** built using **Node.js, Express.js, MongoDB (Mongoose)**, and Server-Side Rendering (EJS). The project implements strict **MVC Architecture**, stateless **JWT Authentication (via HTTP-Only Cookies)**, and **Role-Based Access Control (RBAC)**.

---

## 🔥 Key Features & Implementation Highlights

* **🏗️ Clean MVC Architecture:** Modular structure separating Models (Schemas), Views (EJS Templates), Controllers (Business Logic), and Middlewares/Services.
* **🔐 JWT Authentication:** Stateless session management using **JSON Web Tokens** set in secure browser cookies.
* **🛡️ Role-Based Access Control (RBAC) Middleware:**
  * **`Normal` Users:** Can generate short URLs, view, manage, and track click analytics for **only their own generated links**.
  * **`Admin` Users:** Possess elevated privileges to view and manage **all generated URLs across the entire platform**.
* **📈 Real-Time Click Analytics:** Dynamic redirection tracking total visits and timestamps for each generated short URL.
* **🔒 Security & Best Practices:** Middleware-level authorization checks, custom error handling, and environment-variable-ready (`.env`) configuration.

---

## 🛠️ Tech Stack & Tools

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js
* **Template Engine:** EJS (Embedded JavaScript)
* **Database:** MongoDB (Local Community Server & Atlas Ready)
* **ODM Library:** Mongoose
* **Utilities:** nanoid, nodemon, cookie-parser, uuid, jsonwebtoken, dotenv
* **API Testing:** Postman
* **Version Control:** Git, GitHub

---

## ✨ Features

- 🏗️ **MVC Architecture** – Clean separation of concerns with Models, Views, Controllers, Routes, and Services.
- 🔐 **JWT Authentication & Cookies** – Secure user signup/login system powered by JSON Web Tokens stored in HTTP-only cookies.
- 🛡️ **Role-Based Access Control (RBAC)** – Middleware-level authorization layer restricting routes based on user roles (`Admin`, `Normal`).
- 🖼️ **Server-Side Rendering (SSR)** – Clean, dynamic user interfaces rendered using the **EJS** templating engine.
- 🔗 **Dynamic URL Shortening** – Generates short, unique IDs using `nanoid` for fast link management.
- 📊 **Click Analytics & History** – Tracks total clicks and logs visit timestamps inside MongoDB for every generated link.
- ⚙️ **Centralized Environment Vault** – Secure handling of sensitive keys (`MONGO_URL`, `JWT_SECRET`, `PORT`) via `.env` integration.
- 🗄️ **MongoDB & Mongoose Validation** – Schema-level data validation and efficient database connectivity.
- ⚡ **Developer Workflow** – Instant auto-reloads during development powered by `nodemon`.

---

### 🎯 Architecture & Modules Overview

| Component / Module | Purpose |
| :--- | :--- |
| **`index.js`** | Main entry point; configures `dotenv`, EJS view engine, global middlewares (`cookie-parser`, `express.json`), DB connection, and routes. |
| **`connect.js`** | Handles async database connection setup using Mongoose to connect with MongoDB. |
| **`models/url.js`** | Mongoose schema for short links; stores `shortId`, `redirectURL`, `visitHistory`, and reference to `createdBy` user. |
| **`models/user.js`** | Mongoose schema for authentication; manages user details including `name`, `email`, `password`, and `role` (`Normal`, `Admin`). |
| **`controllers/url.js`** | Core URL business logic; generates unique `shortId`s via `nanoid` and logs click timestamps upon redirection. |
| **`controllers/user.js`** | Handles user authentication logic (`HandleUserSignup`, `HandleUserLogin`) and sets JWT cookies. |
| **`services/auth.js`** | Pure JWT token manager; encodes user payload on login (`setUser`) and decodes/verifies incoming tokens (`getUser`). |
| **`middlewares/auth.js`** | Security layer (`AuthorizationHeaderVal`, `RestrictTo`); extracts JWT cookies and enforces role-based access control. |
| **`routes/url.js`** | Protected URL endpoints (`POST /url`); restricted to authenticated roles (`Normal`, `Admin`). |
| **`routes/static.js`** | Handles SSR page rendering for home dashboard (`/`), signup (`/signup`), and login (`/login`) views. |
| **`routes/user.js`** | Endpoints for authentication workflows (`POST /user/signup`, `POST /user/login`). |
| **`views/`** | Contains EJS template files (`home.ejs`, `signup.ejs`, `login.ejs`) for rendering the user interface. |

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
| **jsonwebtoken** | Authentication | Generates and verifies digital signatures/tokens (JWT) to securely pass information between client & server |
| **cookie-parser** | Middleware | Express middleware to parse incoming request `Cookie` headers and populate `req.cookies` |
| **dotenv** | Utility | Loads environment variables from a `.env` file into `process.env` |
| **Postman**| API Client | Testing REST API endpoints (GET, POST, PATCH, DELETE) |

---

## 📂 Project Directory Structure


**Generated:** 8/2/2026, 1:35:39 PM
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
│   │   ├── 📄 url.js
│   │   └── 📄 user.js
│   ├── 📁 middlewares
│   │   └── 📄 auth.js
│   ├── 📁 models
│   │   ├── 📄 url.js
│   │   └── 📄 user.js
│   ├── 📁 routes
│   │   ├── 📄 static.js
│   │   ├── 📄 url.js
│   │   └── 📄 user.js
│   ├── 📁 services
│   │   └── 📄 auth.js
│   ├── 📁 views
│   │   ├── 📄 home.ejs
│   │   ├── 📄 login.ejs
│   │   └── 📄 signup.ejs
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
npm i jsonwebtoken
npm i dotenv
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
    "dotenv": "^17.4.2",
    "ejs": "^6.0.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.8.0",
    "nanoid": "^6.0.0",
    "nodemon": "^3.1.14",
    "uuid": "^14.0.1"
  }
}

```

**Note:**  Install pakages when needed

---

## 🧪 Postman & API Endpoint Testing

* **Install Postman from** 🌐 [postman.com](https://postman.com) to test API's

> 💡 **Note:** Postman automatically manages the HTTP-only `token` cookie after login.

---

### 1. User Signup
* **Method & Route:** `POST /user/signup`
* **Body (JSON):**
```json
{
  "name": "Mehmood Coder",
  "email": "mehmood@example.com",
  "password": "Password123"
}
```

### 2. User Login
* **Method & Route:** `POST /user/login`
* **Body (JSON):**
```json
{
  "email": "mehmood@example.com",
  "password": "Password123"
}
```

* **Response:** Sets HTTP-only `token` cookie.

---

### 3. Create Short URL *(Protected)*
* **Method & Route:** `POST /url`
* **Body (JSON):**
```json
{
  "url": "[https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)"
}
```

* **Response (201 Created):**

```JSON
{
  "id": "8xK9p2Lm"
}
```

---

### 4. Redirect Link
* **Method & Route:** `GET /url/:shortId`
* **Example:** `http://localhost:4000/url/8xK9p2Lm`
* **Response (`302 Found`):** Redirects to target destination & updates analytics.

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

# 6. And more

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

- ✅ **MVC Architecture** – Structuring backend apps using Models, Views, Controllers, Routes, and Services
- ✅ **Authentication & JWT** – Issuing, signing, and verifying JSON Web Tokens (JWT) for user authentication
- ✅ **Cookie Management** – Storing and parsing HTTP-only cookies safely with `cookie-parser`
- ✅ **Role-Based Access Control (RBAC)** – Restricting route access dynamically based on user roles (`Admin`, `Normal`)
- ✅ **Server-Side Rendering (SSR)** – Dynamic UI rendering with EJS and passing session data to views
- ✅ **MongoDB & Mongoose Schema Design** – Managing schemas, data types, unique constraints, and population
- ✅ **Database Aggregation & Analytics** – Array updates (`$push`) for recording link click history and timestamps
- ✅ **Express Middleware Pipeline** – Request body parsing (`json`, `urlencoded`), auth state injection, and protected route guards
- ✅ **RESTful Endpoints & Redirection** – Dynamic parameter handling (`req.params`) and 302 HTTP redirects
- ✅ **Environment Vault & Tooling** – Managing configuration variables via `.env` and automated dev workflows with `nodemon`

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

### v2.0.0 (Latest Update)
- 🔐 **JWT Authentication System** – Implemented user signup and login flows using JSON Web Tokens (JWT) for stateless authentication.
- 🍪 **Cookie-Based Sessions** – Integrated `cookie-parser` middleware to securely pass and verify HTTP-only auth tokens.
- 🛡️ **Role-Based Access Control (RBAC)** – Added authorization middlewares (`RestrictTo`) to restrict endpoints based on user roles (`Admin`, `Normal`).
- 🖼️ **SSR Dashboard (EJS Integration)** – Built server-side rendered views for user login, registration, and URL management dashboard.
- ⚙️ **Environment Management** – Centralized sensitive configurations (`PORT`, `MONGO_URL`, `JWT_SECRET`) into `.env` file setup.

---

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
