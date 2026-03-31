# Job Application Tracker

A backend REST API built with **NestJS** to track job applications.  
This project uses a **feature-based modular architecture** with controllers, services, DTOs, and entities.

---

## 🚀 Tech Stack

- **Backend:** NestJS (Node.js + TypeScript)  
- **Testing:** Jest  
- **Package Manager:** npm  
- **Architecture:** Modular, feature-based  
- **Version Control:** Git

---

## 📂 Project Structure

```txt
application-tracker/
│
├── src/
│   ├── main.ts                  # Application entry point
│   ├── app.module.ts            # Root module connecting all feature modules
│   ├── app.controller.ts        # Default controller for root route
│   ├── app.service.ts           # Default service for root logic
│   ├── app.controller.spec.ts   # Unit test for AppController
│   │
│   └── jobs/                    # Jobs feature folder
│       ├── dto/                 # Data Transfer Objects
│       │   ├── create-job.dto.ts  # Structure of data for creating a job
│       │   └── update-job.dto.ts  # Structure of data for updating a job
│       │
│       ├── entities/
│       │   └── job.entity.ts    # Job model/entity definition
│       │
│       ├── jobs.controller.ts   # Handles HTTP routes for jobs
│       ├── jobs.service.ts      # Business logic for jobs
│       ├── jobs.module.ts       # Jobs module that ties controller & service
│       └── jobs.controller.spec.ts  # Unit test for JobsController
│
├── test/
│   ├── app.e2e-spec.ts          # End-to-end test file
│   └── jest-e2e.json            # Jest config for e2e testing
│
├── node_modules/                # Installed npm packages (ignored in Git)
├── .gitignore                   # Git ignore rules
├── .prettierrc                  # Prettier formatting config
├── eslint.config.mjs            # ESLint configuration
├── nest-cli.json                # NestJS CLI configuration
├── package.json                 # Project metadata, scripts, and dependencies
├── package-lock.json            # Exact versions of installed packages
├── tsconfig.json                # TypeScript configuration
├── tsconfig.build.json          # TypeScript build config
└── README.md                    # Project documentation







# Job Application Tracker - NestJS Project

A backend REST API built with **NestJS** to track job applications.  
This README explains the **folder structure, each file, and its purpose**.

---

## 📂 Folder & File Structure

### `src/` - Main Application Source
- **main.ts** – Entry point of the application; bootstraps the NestJS server.  
- **app.module.ts** – Root module; imports all feature modules and connects them.  
- **app.controller.ts** – Default controller handling the root route (`GET /`).  
- **app.service.ts** – Contains logic for the root controller.  
- **app.controller.spec.ts** – Unit test for `AppController`.

---

### `src/jobs/` - Jobs Feature Module
Handles all **job-related operations** (CRUD).

- **jobs.module.ts** – Module that groups the Jobs feature (controller + service).  
- **jobs.controller.ts** – Handles all HTTP routes for `/jobs`.  
- **jobs.service.ts** – Contains business logic for jobs (create, read, update, delete).  
- **jobs.controller.spec.ts** – Unit tests for `JobsController`.

#### `dto/` - Data Transfer Objects
- **create-job.dto.ts** – Defines the request body structure for creating a job.  
- **update-job.dto.ts** – Defines the request body structure for updating a job.

#### `entities/` - Data Models
- **job.entity.ts** – Represents the Job entity (fields like id, company, position, status, notes).

---

### `test/` - Testing Files
- **app.e2e-spec.ts** – End-to-end test for the entire application flow.  
- **jest-e2e.json** – Jest configuration for end-to-end tests.

---

### Root Files

- **package.json** – Project metadata, scripts, and dependencies.  
- **package-lock.json** – Locks exact versions of dependencies.  
- **.gitignore** – Lists files/folders that Git should ignore.  
- **.prettierrc** – Prettier configuration for code formatting.  
- **eslint.config.mjs** – ESLint configuration for linting rules.  
- **nest-cli.json** – NestJS CLI configuration (used for generating modules/resources).  
- **tsconfig.json** – TypeScript compiler configuration.  
- **tsconfig.build.json** – TypeScript configuration for building the project.  
- **README.md** – Project documentation.  
- **node_modules/** – Installed packages (should not be committed).

---

### 📌 Summary of Responsibilities

| Folder/File | Purpose |
|-------------|---------|
| `src/` | Main application source code |
| `main.ts` | Entry point; starts the NestJS server |
| `app.module.ts` | Root module connecting all feature modules |
| `app.controller.ts` | Default root controller |
| `app.service.ts` | Default root service logic |
| `app.controller.spec.ts` | Unit test for root controller |
| `src/jobs/` | Jobs feature folder (CRUD logic) |
| `jobs.module.ts` | Module connecting jobs controller & service |
| `jobs.controller.ts` | Handles HTTP routes for jobs |
| `jobs.service.ts` | Business logic for jobs |
| `jobs.controller.spec.ts` | Unit tests for jobs controller |
| `dto/` | Defines request body data structures |
| `entities/` | Defines data models (entities) |
| `test/` | End-to-end testing |
| `package.json` | Project metadata and dependencies |
| `.gitignore` | Files/folders to ignore in Git |
| `.prettierrc` | Prettier configuration |
| `eslint.config.mjs` | ESLint configuration |
| `nest-cli.json` | Nest CLI configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `tsconfig.build.json` | Build-time TypeScript configuration |

---

This structure follows **NestJS feature-based modular architecture**, making it easy to scale with additional modules like `users/`, `auth/`, `notes/`, or `analytics/`.
