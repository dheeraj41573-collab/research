# Research Paper Database

A full-stack research-data web application for browsing, searching and presenting structured scientific information across multiple domain-specific databases. The project combines a **React + Vite frontend** with an **Express + MongoDB backend** and exposes separate modules for cereals, spices, lichens, medicinal/fruit data, plants, Trichoderma, and other research datasets.

The application is designed as a scientific information portal rather than a conventional CRUD dashboard: each database has dedicated species/item pages, taxonomy or descriptive information, pharmacological/biological information, statistics, ADME-related information, and downloadable research resources.

---

## ✨ Highlights

- Multi-database scientific research portal
- React single-page application with React Router
- Express REST API
- MongoDB/Mongoose data layer
- Dedicated pages for individual scientific entities
- Taxonomy and classification information
- Pharmacological and biological activity sections
- Plant/cereal pharmacology modules
- ADME-related data pages
- Statistics and analytics dashboards
- Toxicity prediction module for GMDB
- Downloadable research papers/data
- Email-based download workflow
- Responsive UI with Tailwind CSS and Sass
- Large local scientific image/data asset collection
- Separate backend routes, controllers and models for database modules

---

# 🧬 Database Modules

The frontend and backend are organized around several scientific databases.

| Module | Focus |
|---|---|
| **CMDB** | Cereal / cereal-related scientific and pharmacological data |
| **SMDB** | Spice and medicinal/spice plant data |
| **LichMDb** | Lichen species and associated biological/pharmacological data |
| **GMDB** | General/plant-related scientific database with toxicity prediction |
| **FMDB** | Fruit-related scientific and pharmacological data |
| **DMDB / LeSeMeDa** | Dedicated DMDB research-data module |
| **Trichoderma** | Trichoderma species and research information |

The source tree contains dedicated pages, route handlers and data models for these modules.

---

# 🖥️ Frontend

The client is a **React 18 + Vite** application.

### Main technologies

- React 18
- Vite 5
- React Router DOM
- Redux Toolkit
- React Redux
- Redux Persist
- Tailwind CSS
- Sass
- Material Tailwind
- Flowbite React
- Heroicons
- Lucide React
- React Icons
- React Quill
- Recharts-style dashboard components where applicable
- React Data Table
- TanStack React Table
- XLSX
- File Saver
- React Toastify
- Moment.js

### Frontend entry points

```text
client/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── components/
    ├── hooks/
    ├── pages/
    └── Image/
```

---

# 🧭 Frontend Pages

The application contains a large number of dedicated scientific pages.

Important shared pages include:

- Home
- Author
- Help
- Acknowledgements
- Analytics Dashboard

Each major database has its own page namespace.

### CMDB

```text
client/src/pages/cmdb/
```

Includes pages for cereals such as:

- Bajra
- Barley
- Maize
- Ragi
- Rice
- Sorghum
- Wheat

and supporting pages for:

- About
- Statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Cereal pharmacology
- Citation/reference information

### SMDB

```text
client/src/pages/smdb/
```

Contains individual pages for many spices and medicinal plants, including examples such as:

- Ajwain
- Adrak
- Dalchini
- Dhaniya
- Elaichi
- Haldi
- Hing
- Jeera
- Kalimirch
- Kalonji
- Kesar
- Lahsun
- Loung
- Pudina
- Pyaj
- Ratanjot
- Tezpatta
- Tamarind
- Thyme

It also provides biological, plant and cereal pharmacology pages plus statistics and ADME sections.

### LichMDb

```text
client/src/pages/lichMDb/
```

Contains a large collection of individual lichen species pages, along with:

- Lichen statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Cereal pharmacology
- Pharmacological tables
- Biological activity statistics
- Citation information

### GMDB

```text
client/src/pages/gmdb/
```

Provides:

- Scientific entity pages
- Statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Cereal pharmacology
- Pharmacological tables
- Toxicity prediction

### FMDB

```text
client/src/pages/fmdb/
```

Provides fruit-oriented scientific data pages and supporting:

- Statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Cereal pharmacology

### DMDB / LeSeMeDa

```text
client/src/pages/LeSeMeDa/
```

Contains DMDB-specific:

- Entity pages
- Statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Cereal pharmacology

### Trichoderma

```text
client/src/pages/trichoderma/
```

Contains individual Trichoderma species pages and:

- Statistics
- ADME
- Biological pharmacology
- Plant pharmacology
- Pharmacological summaries
- Biological activity counting

---

# 🧪 Scientific Data Presentation

Individual database pages follow a common scientific-information pattern.

Depending on the database/entity, a user can access information such as:

- Scientific name
- Classification/taxonomy
- Images
- Species/entity description
- Biological activity
- Pharmacological activity
- Plant-related activity
- Cereal-related activity
- ADME information
- Statistical summaries
- Toxicity predictions
- Research-paper/download resources

The project also contains structured frontend data files such as `fmdb.js` that map scientific names to local images and classification information.

---

# 🗂️ Assets

The frontend contains a large local image collection under:

```text
client/src/Image/
```

Major asset groups include:

```text
Image/
├── cmdb/
├── dmdb/
├── fmdb/
├── gmdb/
├── lichMDb/
├── smdb/
└── trichoderma/
```

The repository includes images for many scientific entities and a research-paper PDF resource. Public assets also include project branding and author/profile images.

---

# ⚙️ Backend

The backend is a Node.js application built with:

- Express 4
- MongoDB
- Mongoose
- CORS
- Body Parser
- dotenv
- JSON Web Token
- bcrypt
- Multer
- Nodemon

Backend source is organized into:

```text
server/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── index.js
└── package.json
```

The backend currently contains a large number of scientific data models and route/controller modules.

---

# 🏗️ Backend Architecture

The backend follows a conventional:

```text
Route
  ↓
Controller
  ↓
Mongoose Model
  ↓
MongoDB
```

architecture.

This separation makes it possible to maintain individual datasets without placing all business/data-access logic in one file.

The repository contains approximately **226 Mongoose model files** and a large collection of route/controller files across the scientific modules.

---

# 🔌 API

The Express server exposes REST endpoints under `/api`.

Representative endpoint groups include:

```text
/api/bajra
/api/maize
/api/ragi
/api/rice
/api/sorghum
/api/wheat
/api/barley

/api/ADMEpass
/api/statistics
/api/pharmacologyBiological
/api/pharmacologyPlant
/api/pharmacologyCereals

/api/smdb/...
/api/lichmdb/...
/api/gmdb/...
/api/fmdb/...
/api/dmdb/...

/api/downloads
```

The exact entity-level endpoints are split into dedicated route files inside:

```text
server/routes/
```

---

# 🧩 Database-specific API Groups

## CMDB

```text
/api/bajra
/api/maize
/api/ragi
/api/rice
/api/sorghum
/api/wheat
/api/barley
/api/ADMEpass
/api/statistics
/api/pharmacologyBiological
/api/pharmacologyPlant
/api/pharmacologyCereals
```

## SMDB

The backend provides individual routes for spice/medicinal entities and supporting research modules under:

```text
/api/smdb/
```

Examples:

```text
/api/smdb/adrak
/api/smdb/ajwain
/api/smdb/dalchini
/api/smdb/dhaniya
/api/smdb/haldi
/api/smdb/jeera
/api/smdb/kalimirch
/api/smdb/kesar
/api/smdb/pudina
/api/smdb/...
```

## GMDB

```text
/api/gmdb
/api/gmdb/ADMEpass
/api/gmdb/statistics
/api/gmdb/pharmacologyBiological
/api/gmdb/pharmacologyPlant
/api/gmdb/pharmacologyCereal
/api/gmdb/pharmacologicalTable
/api/gmdb/toxicityPrediction
```

## FMDB

```text
/api/fmdb
/api/fmdb/ADMEpass
/api/fmdb/statistics
/api/fmdb/pharmacologyBiological
/api/fmdb/pharmacologyPlant
/api/fmdb/pharmacologyCereal
```

## DMDB

```text
/api/dmdb
/api/dmdb/ADMEpass
/api/dmdb/statistics
/api/dmdb/pharmacologyBiological
/api/dmdb/pharmacologyPlant
/api/dmdb/pharmacologyCereal
```

## Trichoderma

Trichoderma routes are registered through a dedicated route-registration module and include endpoints such as:

```text
/api/trichoderma/<species>
/api/trichoderma/statistics
/api/trichoderma/ADMEpass
/api/trichoderma/pharmacologyBiological
/api/trichoderma/pharmacologyPlant
/api/trichoderma/pharmacologyBiologicalCounting
```

## Downloads

Research resources are handled through:

```text
/api/downloads
```

The frontend contains a download-with-email workflow using:

```text
client/src/components/DownloadWithEmail.jsx
client/src/hooks/useDownloadWithEmail.js
```

---

# 🩺 Health Check

The server provides a health endpoint for deployment/platform monitoring:

```http
GET /health
```

Successful response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

# 🗄️ MongoDB

The backend uses Mongoose to connect to MongoDB.

The connection is configured through:

```env
DATA_BASE_CONNECTION=<mongodb-connection-string>
```

The application connects during backend startup.

---

# 🔐 Authentication

The backend contains user/authentication functionality and JWT middleware.

Environment variable:

```env
TOKEN_SECRET=<strong-secret>
```

Authentication middleware is located at:

```text
server/middlewares/check-auth.js
```

JWT verification is handled using the configured token secret.

---

# 📧 Download & Email Workflow

The application includes a download workflow where a user can request research resources through an email-enabled flow.

Relevant frontend files:

```text
client/src/components/DownloadWithEmail.jsx
client/src/hooks/useDownloadWithEmail.js
```

The backend provides:

```text
/api/downloads
```

for download-related operations.

> If the download workflow is configured with external services in a specific deployment, make sure those services and environment variables are available before testing production downloads.

---

# 📊 Analytics

The frontend contains a dedicated:

```text
client/src/pages/AnalyticsDashboard.jsx
```

The dashboard fetches research/statistical information from backend endpoints and presents aggregate scientific data.

Database-specific statistics pages are also available throughout the CMDB, SMDB, GMDB, FMDB, DMDB, LichMDb and Trichoderma modules.

---

# 🤖 Toxicity Prediction

GMDB contains a dedicated toxicity-prediction module.

Frontend:

```text
client/src/pages/gmdb/ToxicityPredictionPostGMDB.jsx
```

Backend:

```text
server/controllers/gmdb/ToxicityPredictionGMDBController.js
server/routes/gmdb/ToxicityPredictionGMDBRoutes.js
```

API:

```text
/api/gmdb/toxicityPrediction
```

---

# 🧬 ADME & Pharmacology Modules

The project repeatedly provides three major pharmacology groupings:

### Biological Pharmacology

Information associated with biological activity and research findings.

### Plant Pharmacology

Information organized around plant-related pharmacological data.

### Cereal Pharmacology

Information organized around cereal-related pharmacological data.

In addition, several modules provide:

```text
ADME
Statistics
Pharmacological Tables
Toxicity Prediction
```

depending on the database.

---

# 🛠️ Installation

## Prerequisites

Install:

- Node.js
- npm
- MongoDB or a MongoDB-compatible hosted database

Recommended modern Node.js LTS version:

```text
Node.js 18+
```

---

## 1. Clone the project

```bash
git clone <repository-url>
cd research-paper-main
```

---

## 2. Install root dependencies

```bash
npm install
```

---

## 3. Install server dependencies

```bash
cd server
npm install
cd ..
```

---

## 4. Install client dependencies

```bash
cd client
npm install
cd ..
```

---

# 🔑 Environment Configuration

## Client

Create/update:

```text
client/.env
```

The current project expects:

```env
VITE_APP_URI_API=http://localhost:5000
```

For a deployed backend, change it to the backend's public URL:

```env
VITE_APP_URI_API=https://your-backend-domain.example.com
```

Do not include an unnecessary trailing slash if the application code already appends `/api/...`.

---

## Server

Create:

```text
server/.env
```

At minimum, the backend source expects:

```env
PORT=5000
DATA_BASE_CONNECTION=<mongodb-connection-string>
TOKEN_SECRET=<strong-jwt-secret>
```

Example:

```env
PORT=5000
DATA_BASE_CONNECTION=mongodb://127.0.0.1:27017/research-paper
TOKEN_SECRET=replace-with-a-long-random-secret
```

Use your actual MongoDB connection string in production.

---

# ▶️ Run the Backend

From the project root:

```bash
npm run dev:server
```

or:

```bash
cd server
npm start
```

The server listens on the port supplied by:

```env
PORT
```

For local development, the usual configuration is:

```text
http://localhost:5000
```

---

# ▶️ Run the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Vite will display the local development URL, normally:

```text
http://localhost:5173
```

The frontend reads the backend URL from:

```env
VITE_APP_URI_API
```

---

# 🧪 Development Workflow

Use two terminals.

### Terminal 1 — Backend

```bash
cd server
npm run dev
```

### Terminal 2 — Frontend

```bash
cd client
npm run dev
```

Then open the Vite URL shown in the terminal.

---

# 📦 Production Build

## Build the client

```bash
cd client
npm run build
```

This generates the Vite production build:

```text
client/dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🚀 Deployment

The repository includes root scripts suitable for server-oriented deployment platforms.

Available root commands include:

```bash
npm run build
npm start
npm run build:render
npm run start:server
npm run install:server
```

### Render-style deployment

The project includes:

```bash
npm run build:render
```

which installs the root and server dependencies.

A typical backend deployment can use:

**Build Command**

```bash
npm run build:render
```

**Start Command**

```bash
npm start
```

Set the server environment variables in the deployment platform:

```env
PORT=<platform-provided-port>
DATA_BASE_CONNECTION=<mongodb-uri>
TOKEN_SECRET=<jwt-secret>
```

For the frontend, configure:

```env
VITE_APP_URI_API=<deployed-backend-url>
```

---

# 📁 Project Structure

```text
research-paper-main/
│
├── package.json
│
├── client/
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   │
│   ├── public/
│   │   ├── logo.png
│   │   ├── Dr. Gourav Choudhir.jpeg
│   │   ├── Dr. Sushil Kumar.jpeg
│   │   ├── Sakshi Sharma.jpeg
│   │   └── ...
│   │
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       │   ├── cmdb/
│       │   ├── smdb/
│       │   ├── lichMDb/
│       │   ├── gmdb/
│       │   ├── fmdb/
│       │   ├── LeSeMeDa/
│       │   └── trichoderma/
│       └── Image/
│
└── server/
    ├── index.js
    ├── package.json
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    └── ...
```

---

# 🔄 Application Flow

```text
User
 │
 ▼
React + Vite Frontend
 │
 │ fetch()
 │
 ▼
Express REST API
 │
 ├── Database Routes
 ├── Scientific Entity Routes
 ├── Statistics
 ├── Pharmacology
 ├── ADME
 ├── Toxicity Prediction
 └── Downloads
 │
 ▼
Controllers
 │
 ▼
Mongoose Models
 │
 ▼
MongoDB
```

---

# 🧭 Routing

The frontend uses:

```text
react-router-dom
```

and maintains a large set of routes for the individual database pages.

`App.jsx` acts as the central route registry and imports:

- Shared layout components
- Database landing/about pages
- Individual species/entity pages
- Statistics pages
- ADME pages
- Pharmacology pages
- Citation pages
- Analytics pages
- Download/help-related components

`ScrollToTop` is used to improve navigation between scientific detail pages.

---

# 📚 Citation & Research Resources

The project includes citation/reference-related pages and downloadable research resources.

Relevant frontend components include:

```text
client/src/components/CitationPage.jsx
client/src/components/DownloadWithEmail.jsx
```

There is also a research-paper PDF resource inside the frontend image/resource tree.

---

# 🔒 Security Recommendations

Before production deployment:

- Never commit `server/.env` or secrets to Git.
- Use a strong random `TOKEN_SECRET`.
- Restrict MongoDB network access.
- Use HTTPS for the deployed frontend and API.
- Configure CORS for trusted origins rather than allowing every origin.
- Validate all uploaded/downloaded files.
- Protect authenticated endpoints with the JWT middleware.
- Avoid exposing database connection strings to the frontend.
- Review any debug/network logging before production.
- Remove local debugging endpoints or instrumentation that are not required in production.

---

# 🐛 Troubleshooting

## Frontend shows API/network errors

Check:

```env
VITE_APP_URI_API=http://localhost:5000
```

and make sure the backend is actually running.

Test:

```text
http://localhost:5000/health
```

You should receive:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## MongoDB connection fails

Check:

```env
DATA_BASE_CONNECTION=<valid-mongodb-uri>
```

Then restart the backend.

---

## Authentication fails

Check:

```env
TOKEN_SECRET=<same-secret-used-by-your-environment>
```

Also verify that the client is sending the expected authentication token to protected endpoints.

---

## Vite cannot load API data

Verify all three:

1. Backend is running.
2. `VITE_APP_URI_API` points to the correct backend.
3. The requested `/api/...` route exists on the backend.

---

## Production frontend still requests localhost

Update:

```env
client/.env
```

from:

```env
VITE_APP_URI_API=http://localhost:5000
```

to your deployed API URL, then rebuild:

```bash
cd client
npm run build
```

---

# 📜 Available Scripts

## Root

| Command | Description |
|---|---|
| `npm run dev:server` | Start backend |
| `npm run start:server` | Start backend |
| `npm start` | Start server workspace |
| `npm run build` | Install server dependencies |
| `npm run build:render` | Install root + server dependencies for deployment |
| `npm run install:server` | Install root and server dependencies |

## Client

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Server

| Command | Description |
|---|---|
| `npm start` | Start Express server |
| `npm run dev` | Start server with Nodemon |
| `npm run migrate-trichoderma` | Run the Trichoderma data migration script when available |

---

# 🧱 Extending the Project

To add a new scientific database/entity, follow the existing module pattern:

1. Add the MongoDB/Mongoose model.
2. Create the controller.
3. Create the route.
4. Register the route in `server/index.js`.
5. Add the frontend data/detail page.
6. Add the corresponding route in `client/src/App.jsx`.
7. Add local images/resources under the relevant `client/src/Image/` directory.
8. Add statistics/pharmacology/ADME modules if required.
9. Update this README with the new module.

---

# 📝 Project Summary

This project is a **research-oriented scientific database portal** that brings multiple specialized datasets into a single web application.

Its architecture separates:

- **Presentation** — React/Vite
- **Navigation** — React Router
- **State management** — Redux Toolkit / Redux Persist
- **API layer** — Express
- **Business/data logic** — Controllers
- **Persistence** — MongoDB/Mongoose
- **Scientific assets** — Local image/PDF resources

The result is a modular platform for researchers, students and scientific users to explore structured information about cereals, spices, fruits, lichens, Trichoderma and other biological/scientific entities, together with pharmacological, biological, ADME, statistical and downloadable research information.

---

## 👨‍💻 Technology Summary

```text
Frontend
React 18
Vite
React Router
Redux Toolkit
Tailwind CSS
Sass

Backend
Node.js
Express.js
Mongoose
MongoDB

Authentication
JWT
bcrypt

Utilities
Multer
CORS
dotenv
XLSX
File Saver

Scientific Modules
CMDB
SMDB
LichMDb
GMDB
FMDB
DMDB / LeSeMeDa
Trichoderma
```

---

## 📌 Important

This README describes the project based on the source tree, package configuration, frontend routing, backend route registration, environment references and bundled scientific resources present in the supplied repository.

For production deployment, configure the actual MongoDB connection, JWT secret, frontend API URL and any deployment-specific environment values in the hosting platform rather than committing secrets into the repository.
