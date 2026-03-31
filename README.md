## NestJS Folder Structure

- **src/** → Main application source code
- **main.ts** → Application entry point; starts the NestJS server
- **app.module.ts** → Root module that connects all feature modules
- **app.controller.ts** → Default controller that handles incoming requests
- **app.service.ts** → Default service containing business logic
- **app.controller.spec.ts** → Unit test for AppController

### Jobs Feature (`src/jobs/`)
- **jobs.module.ts** → Groups all jobs-related components
- **jobs.controller.ts** → Handles HTTP routes for jobs
- **jobs.service.ts** → Contains business logic for jobs
- **jobs.controller.spec.ts** → Unit test for JobsController

### DTOs (`src/jobs/dto/`)
- **create-job.dto.ts** → Defines request body structure for creating a job
- **update-job.dto.ts** → Defines request body structure for updating a job

### Entities (`src/jobs/entities/`)
- **job.entity.ts** → Represents the Job model/entity structure

### Testing
- **test/** → End-to-end testing files
- **app.e2e-spec.ts** → End-to-end test for application flow
- **jest-e2e.json** → Jest config for e2e tests

### Root Files
- **package.json** → Project metadata, scripts, and dependencies
- **package-lock.json** → Locks exact dependency versions
- **.gitignore** → Files/folders Git should ignore
- **.prettierrc** → Prettier formatting config
- **eslint.config.mjs** → ESLint configuration
- **nest-cli.json** → NestJS CLI configuration
- **tsconfig.json** → Main TypeScript configuration
- **tsconfig.build.json** → TypeScript build configuration
- **README.md** → Project documentation
- **node_modules/** → Installed packages (should not be committed)