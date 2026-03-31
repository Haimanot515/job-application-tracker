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
│   ├── main.ts                  # Entry point - starts the NestJS server
│   ├── app.module.ts            # Root module connecting all feature modules
│   ├── app.controller.ts        # Default controller for root route
│   ├── app.service.ts           # Default service logic
│   ├── app.controller.spec.ts   # Unit test for AppController
│   │
│   └── jobs/                    # Jobs feature folder (CRUD)
│       ├── dto/                 # Data Transfer Objects
│       │   ├── create-job.dto.ts  # Request structure for creating a job
│       │   └── update-job.dto.ts  # Request structure for updating a job
│       │
│       ├── entities/
│       │   └── job.entity.ts    # Job entity/model definition
│       │
│       ├── jobs.controller.ts   # Handles HTTP routes for /jobs
│       ├── jobs.service.ts      # Business logic for jobs
│       ├── jobs.module.ts       # Module connecting controller & service
│       └── jobs.controller.spec.ts  # Unit test for JobsController
│
├── test/
│   ├── app.e2e-spec.ts          # End-to-end test file
│   └── jest-e2e.json            # Jest config for e2e testing
│
├── node_modules/                # Installed npm packages (ignored in Git)
├── .gitignore                   # Git ignore rules
├── .prettierrc                  # Prettier configuration
├── eslint.config.mjs            # ESLint configuration
├── nest-cli.json                # NestJS CLI configuration
├── package.json                 # Project metadata, scripts, and dependencies
├── package-lock.json            # Exact dependency versions
├── tsconfig.json                # TypeScript compiler configuration
├── tsconfig.build.json          # TypeScript build configuration
└── README.md                    # Project documentation
