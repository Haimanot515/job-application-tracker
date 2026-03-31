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
