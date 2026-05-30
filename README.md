# Express TypeScript Prisma Zod - Production Ready API Boilerplate

> 🚀 A modern, production-ready REST API boilerplate built with **Express.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **Zod** for schema validation. Perfect as a starter template for your next Express TypeScript project.

## 📋 Table of Contents

- [Why This Project?](#why-this-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Libraries Documentation](#libraries-documentation)
- [Code Quality](#code-quality)
- [Project Status](#project-status)

---

## Why This Project?

Ketika membangun REST API dengan Express dan TypeScript, Anda sering menghadapi tantangan seperti:

- ⚠️ Setup boilerplate yang kompleks dan berulang-ulang
- ⚠️ Kesulitan dalam mengelola dependency versions
- ⚠️ Kurangnya struktur project yang konsisten dan scalable
- ⚠️ Integrasi database yang rumit tanpa ORM yang tepat
- ⚠️ Validasi schema yang tidak type-safe

**Express TypeScript Prisma Zod** mengatasi semua masalah tersebut dengan menyediakan:

✅ **Production-ready setup** dengan best practices yang sudah terbukti  
✅ **Type-safe database operations** menggunakan Prisma ORM  
✅ **Schema validation** dengan Zod untuk request/response validation  
✅ **Security features** built-in (Helmet, CORS, Rate Limiting)  
✅ **Structured logging** dengan Winston untuk monitoring production  
✅ **Comprehensive testing** setup dengan Vitest  
✅ **ESLint & Prettier** configuration untuk code quality  
✅ **Graceful shutdown** handling untuk reliable deployments  

Gunakan project ini sebagai **template/starter** untuk memulai project Express TypeScript Anda dengan cepat dan fokus pada business logic, bukan pada infrastructure setup! 🎯

---

## Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Runtime** | Node.js | v24.15.0 | JavaScript runtime environment |
| **Language** | TypeScript | ^6.0.3 | Type-safe JavaScript |
| **Framework** | Express.js | ^5.2.1 | Web application framework |
| **ORM** | Prisma | ^7.8.0 | Database ORM & migrations |
| **Database** | PostgreSQL | Native | Relational database |
| **Validation** | Zod | ^4.4.3 | TypeScript-first schema validation |
| **Package Manager** | pnpm | ^11.4.0 | Fast & efficient package manager |
| **Testing** | Vitest | ^4.1.7 | Unit & integration testing |
| **Testing HTTP** | Supertest | ^7.2.2 | HTTP assertion library |
| **Code Quality** | ESLint | ^10.4.0 | JavaScript linting |
| **Code Formatting** | Prettier | ^3.8.3 | Code formatter |
| **Logging** | Winston | ^3.19.0 | Structured logging |
| **Security** | Helmet | ^8.2.0 | HTTP headers security |
| **Security** | bcrypt | ^6.0.0 | Password hashing |
| **CORS** | cors | ^2.8.6 | Cross-origin resource sharing |
| **Compression** | compression | ^1.8.1 | Response compression |
| **Rate Limiting** | express-rate-limit | ^8.5.2 | DDoS protection |
| **UUID** | uuid | ^14.0.0 | Unique identifier generation |
| **Environment** | dotenv | ^17.4.2 | Environment variables management |

---

## Features

- ✅ **Type-Safe Development** - Full TypeScript support dengan strict mode enabled
- ✅ **Express Framework** - Lightweight & flexible web framework
- ✅ **Prisma ORM** - Type-safe database access dengan automatic migrations
- ✅ **PostgreSQL** - Production-grade relational database
- ✅ **Zod Schema Validation** - Runtime type-checking untuk request validation
- ✅ **Security Hardened** - Helmet, CORS, Rate Limiting, Password Hashing
- ✅ **Structured Logging** - Winston logger dengan daily file rotation
- ✅ **HTTP Compression** - Gzip response compression untuk performance
- ✅ **Graceful Shutdown** - Proper signal handling untuk deployment
- ✅ **Comprehensive Testing** - Vitest unit & integration tests dengan coverage reports
- ✅ **Code Quality** - ESLint & Prettier configuration
- ✅ **Path Aliases** - `@/` alias untuk cleaner imports
- ✅ **CI/CD Ready** - Docker-friendly, environment-based configuration

---

## Prerequisites

Sebelum memulai, pastikan Anda sudah install:

### Required
- **Node.js** v24.15.0 atau lebih tinggi
- **pnpm** v11.4.0 atau lebih tinggi (package manager)
- **PostgreSQL** v12 atau lebih tinggi (database server)
- **Git** (version control)

### Optional
- **Docker** & **Docker Compose** (untuk containerization)
- **Postman** atau **Insomnia** (untuk API testing)
- **pgAdmin** atau **DBeaver** (untuk database management GUI)

### Verification

Jalankan perintah berikut untuk memverifikasi instalasi:

```bash
# Check Node.js version
node --version
# Expected: v24.15.0 or higher

# Check pnpm version
pnpm --version
# Expected: 11.4.0 or higher

# Check PostgreSQL version
psql --version
# Expected: PostgreSQL 12 or higher
```

---

## Project Structure

```
fajar-typescript-express-prisma-zod/
├── src/
│   ├── app.ts                 # Express app configuration & middleware setup
│   ├── server.ts              # HTTP server & graceful shutdown handler
│   ├── config/
│   │   ├── index.ts          # Centralized configuration object
│   │   └── schema.ts         # Zod schema untuk environment variables
│   ├── utils/
│   │   ├── http-logger.ts    # HTTP request/response logger
│   │   └── [other utils]/
│   ├── routes/
│   │   └── [API routes]/
│   ├── controllers/
│   │   └── [Business logic]/
│   ├── services/
│   │   └── [Business services]/
│   ├── middleware/
│   │   └── [Custom middleware]/
│   ├── types/
│   │   └── [Type definitions]/
│   └── constants/
│       └── [App constants]/
├── prisma/
│   ├── schema.prisma          # Database schema definition
│   └── migrations/            # Database migration files
├── tests/
│   ├── unit/                  # Unit tests
│   └── integration/           # Integration tests
├── logs/
│   └── [Generated log files]
├── dist/
│   └── [Compiled JavaScript]
├── .env.example               # Environment variables template
├── .nvmrc                      # Node version specification
├── .npmrc                      # pnpm configuration
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── eslint.config.js           # ESLint rules
├── prettier.config.js         # Prettier formatting rules
├── vitest.config.ts           # Vitest testing configuration
├── prisma.config.ts           # Prisma configuration
└── README.md                  # This file
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/fajar7xx/fajar-typescript-express-prisma-zod.git
cd fajar-typescript-express-prisma-zod
```

### 2. Install Node Version Manager (Optional but Recommended)

Untuk ensure semua developer menggunakan Node.js version yang sama:

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Load nvm
source ~/.bashrc

# Install Node.js version from .nvmrc
nvm install
nvm use
```

### 3. Install pnpm (jika belum)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Verify installation
pnpm --version
```

### 4. Install Dependencies

```bash
# Install all project dependencies
pnpm install

# Verify installation
pnpm --version
```

### 5. Setup Environment Variables

```bash
# Copy .env.example ke .env
cp .env.example .env

# Edit .env dengan konfigurasi Anda
nano .env  # atau gunakan text editor favorit Anda
```

Lihat section [Configuration](#configuration) untuk detail semua environment variables.

### 6. Setup Database

```bash
# Generate Prisma Client
pnpm run db:generate

# Create database & run migrations
pnpm run db:migrate:dev

# Optional: Seed database (jika ada seed file)
# pnpm run db:seed
```

### 7. Verify Installation

```bash
# Start development server
pnpm run dev

# Di terminal lain, test health endpoint
curl http://localhost:3000/health

# Expected response:
# {
#   "status": "OK",
#   "timestamp": "2026-05-30T10:30:45.123Z"
# }
```

✅ Jika semua berjalan lancar, instalasi berhasil!

---

## Configuration

Semua configuration diatur melalui **environment variables** di file `.env`. Berikut adalah penjelasan detail setiap variable:

### Server Configuration

```env
# Node environment: development, production, atau staging
NODE_ENV=development

# Port untuk menjalankan server
PORT=3000

# Hostname/IP address untuk bind server
HOST=localhost
```

### Database Configuration

```env
# PostgreSQL connection string
# Format: postgresql://[user]:[password]@[host]:[port]/[database]?schema=[schema]
DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"

# Example untuk local development:
# DATABASE_URL="postgresql://postgres:password@localhost:5432/my_app_db?schema=public"
```

**Tips untuk setup PostgreSQL:**

```bash
# Create database user (run di PostgreSQL console)
CREATE USER your_username WITH PASSWORD 'your_password';

# Create database
CREATE DATABASE your_database_name;

# Grant privileges
ALTER DATABASE your_database_name OWNER TO your_username;
```

### JWT/Authentication Configuration

```env
# Secret key untuk JWT signing (minimum 32 characters)
JWT_SECRET="your-super-secret-key-min-32-chars"

# Token expiration time (contoh: 7d, 24h, 30m)
JWT_EXPIRY=7d

# JWT algorithm
JWT_ALGORITHM=HS256
```

### Redis Configuration (Optional)

```env
# Redis connection URL
REDIS_URL=redis://localhost:6379

# Redis password (jika ada)
REDIS_PASSWORD=
```

### Logging Configuration

```env
# Log level: error, warn, info, http, debug, silly
LOG_LEVEL=info

# Directory untuk menyimpan log files
LOG_DIR=./logs

# Maximum size per log file (in bytes)
LOG_MAX_SIZES=10485760  # 10MB

# Maximum number of log files to keep
LOG_MAX_FILES=10

# Delete log files older than (in days)
LOG_RETENTION_DAYS=7
```

### CORS Configuration

```env
# Comma-separated list of allowed origins
CORS_ORIGIN=http://localhost:3000,http://localhost:5000,http://localhost:8000

# Example untuk production:
# CORS_ORIGIN=https://app.example.com,https://api.example.com
```

### Rate Limiting Configuration

```env
# Time window untuk rate limiting (in milliseconds)
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes

# Maximum requests per window
RATE_LIMIT_MAX_REQUESTS=100  # 100 requests per 15 minutes
```

### Email Configuration (Optional)

```env
# SMTP server details untuk email notifications
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
SMTP_FROM=noreply@example.com
```

### Validation & Best Practices

1. **Never commit `.env` file** - selalu gunakan `.env.example` untuk template
2. **Use strong JWT_SECRET** - minimum 32 characters dengan mix of uppercase, lowercase, numbers, symbols
3. **Different configs per environment** - setup separate `.env` untuk dev, staging, production
4. **Store sensitive data securely** - use environment variable injection di CI/CD pipeline
5. **Validate on startup** - aplikasi akan fail jika required variables tidak ada

---

## Database Setup

### PostgreSQL Installation

**macOS (using Homebrew):**
```bash
brew install postgresql@16
brew services start postgresql@16
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

**Windows:**
- Download installer dari [postgresql.org](https://www.postgresql.org/download/windows/)
- Run installer & follow instructions

### Initialize Database

```bash
# Connect ke PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE my_app_db;

# Create user with password
CREATE USER app_user WITH PASSWORD 'secure_password_here';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE my_app_db TO app_user;

# Exit psql
\q
```

### Prisma Migration

```bash
# Generate Prisma Client based on schema.prisma
pnpm run db:generate

# Create & run migrations untuk development
pnpm run db:migrate:dev
# Will prompt untuk migration name, contoh: "init"

# Push schema changes tanpa creating migration (dev only!)
pnpm run db:push

# Deploy migrations (production)
pnpm run db:migrate:deploy

# Reset database completely (dev only - destructive!)
pnpm run db:reset

# Open Prisma Studio GUI (port 5555)
pnpm run db:studio
```

### Prisma Schema Example

File: `prisma/schema.prisma`

```prisma
datasource db {
  provider = "postgresql"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id    Int     @id @default(autoincrement())
  title String
  body  String
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

---

## Running the Project

### Development Mode

```bash
# Start dev server with hot reload
pnpm run dev

# Output:
# server running on http://localhost:3000
```

Server akan auto-reload saat ada perubahan file `.ts`.

### Production Build

```bash
# Build project (compile TypeScript to JavaScript)
pnpm run build

# Output: TypeScript compiled to ./dist folder

# Run production server
pnpm run start

# Output:
# server running on http://localhost:3000
```

### Watch Mode Build

```bash
# Build with watch mode (rebuild saat ada perubahan)
pnpm run build:watch
```

---

## Development Workflow

### Code Quality

```bash
# Lint code (check untuk violations)
pnpm run lint

# Auto-fix lint violations
pnpm run lint:fix

# Check code formatting
pnpm run format:check

# Auto-format code dengan Prettier
pnpm run format
```

### Testing

```bash
# Run semua tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run unit tests only
pnpm run test:unit

# Run integration tests only
pnpm run test:integration

# Run tests dengan coverage report
pnpm run test:coverage

# Run tests dengan UI dashboard
pnpm run test:ui
```

### Database Management

```bash
# Open Prisma Studio (visual database browser)
pnpm run db:studio
# Opens: http://localhost:5555

# View database CLI help
pnpm run db -- --help

# Create migration from schema changes
pnpm run db:migrate:dev

# Reset database (destructive - dev only!)
pnpm run db:reset
```

### Tips untuk Development:

1. **Use Prisma Studio** untuk explore & edit data secara visual
2. **Enable hot reload** saat development untuk faster iteration
3. **Run tests regularly** untuk catch bugs early
4. **Format code** sebelum commit dengan `pnpm run format`
5. **Check linting** untuk consistent code style dengan `pnpm run lint`

---

## Testing

Project menggunakan **Vitest** untuk unit & integration testing, dengan **Supertest** untuk HTTP assertions.

### Test Structure

```typescript
// Example: tests/unit/auth.test.ts
import { describe, it, expect } from 'vitest';

describe('Auth Service', () => {
  it('should hash password correctly', () => {
    const password = 'test123';
    // Test logic here
    expect(true).toBe(true);
  });
});
```

```typescript
// Example: tests/integration/api.test.ts
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '@/app';

describe('Health Endpoint', () => {
  it('GET /health should return OK', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body.status).toBe('OK');
    expect(response.body.timestamp).toBeDefined();
  });
});
```

### Coverage Thresholds

Coverage requirements di `vitest.config.ts`:
- **Lines**: 80%
- **Functions**: 80%
- **Branches**: 70%
- **Statements**: 80%

Jika tidak meet thresholds, test akan fail.

---

## Building for Production

### Build Steps

```bash
# 1. Install dependencies
pnpm install --prod

# 2. Build TypeScript
pnpm run build

# 3. Verify dist folder
ls -la dist/

# 4. Run production server
NODE_ENV=production pnpm run start
```

### Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure all required environment variables
- [ ] Run database migrations: `pnpm run db:migrate:deploy`
- [ ] Verify all tests pass: `pnpm run test`
- [ ] Check code quality: `pnpm run lint`
- [ ] Build production bundle: `pnpm run build`
- [ ] Test production build locally: `NODE_ENV=production pnpm run start`

### Docker Deployment (Optional)

```dockerfile
# Dockerfile
FROM node:24.15.0-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy files
COPY . .

# Install dependencies
RUN pnpm install --prod

# Build
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["pnpm", "run", "start"]
```

```bash
# Build Docker image
docker build -t my-api:1.0.0 .

# Run Docker container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=postgresql://user:pass@host:5432/db \
  -e JWT_SECRET=your-secret \
  my-api:1.0.0
```

---

## Libraries Documentation

Berikut adalah penjelasan singkat dan link dokumentasi untuk setiap library yang digunakan:

### Core Framework & Runtime

| Library | Purpose | Documentation |
|---------|---------|---|
| **Express.js** | Web application framework untuk RESTful API development | [expressjs.com](https://expressjs.com/) |
| **TypeScript** | Superset of JavaScript dengan static type checking untuk code safety | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Node.js** | JavaScript runtime untuk server-side development | [nodejs.org](https://nodejs.org/) |

### Database & ORM

| Library | Purpose | Documentation |
|---------|---------|---|
| **Prisma** | Modern ORM untuk type-safe database access dengan automatic migrations | [prisma.io](https://www.prisma.io/) |
| **@prisma/adapter-pg** | PostgreSQL adapter untuk Prisma dengan native driver support | [prisma.io/docs/concepts/database-connectors/postgresql](https://www.prisma.io/docs/concepts/database-connectors/postgresql) |
| **pg** | Native PostgreSQL client driver untuk Node.js | [node-postgres.com](https://node-postgres.com/) |
| **@prisma/client** | Generated client untuk querying database dengan full type support | [prisma.io/docs/reference/tools-and-interfaces/prisma-client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) |

### Validation & Schema

| Library | Purpose | Documentation |
|---------|---------|---|
| **Zod** | TypeScript-first schema validation dengan runtime type-checking untuk API requests | [zod.dev](https://zod.dev/) |

### Security & Middleware

| Library | Purpose | Documentation |
|---------|---------|---|
| **Helmet** | Express middleware untuk securing HTTP headers dengan best practices | [helmetjs.github.io](https://helmetjs.github.io/) |
| **bcrypt** | Password hashing library dengan salt generation untuk secure credential storage | [www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt) |
| **cors** | Middleware untuk enabling Cross-Origin Resource Sharing (CORS) requests | [expressjs.com/resources/middleware/cors](https://expressjs.com/resources/middleware/cors.html) |
| **express-rate-limit** | Rate limiting middleware untuk DDoS protection & API abuse prevention | [github.com/nfriedly/express-rate-limit](https://github.com/nfriedly/express-rate-limit) |

### Performance & Optimization

| Library | Purpose | Documentation |
|---------|---------|---|
| **compression** | Express middleware untuk gzip compression of HTTP responses untuk reduced bandwidth | [github.com/expressjs/compression](https://github.com/expressjs/compression) |

### Logging & Monitoring

| Library | Purpose | Documentation |
|---------|---------|---|
| **Winston** | Structured logging library dengan multiple transports & log levels untuk production monitoring | [github.com/winstonjs/winston](https://github.com/winstonjs/winston) |
| **winston-daily-rotate-file** | Winston transport untuk automatic daily log file rotation dengan retention policies | [github.com/winstonjs/winston-daily-rotate-file](https://github.com/winstonjs/winston-daily-rotate-file) |

### Development Tools

| Library | Purpose | Documentation |
|---------|---------|---|
| **Vitest** | Unit testing framework dengan Vite speed & TypeScript support untuk fast test execution | [vitest.dev](https://vitest.dev/) |
| **Supertest** | HTTP assertion library untuk testing Express endpoints dengan fluent API | [github.com/visionmedia/supertest](https://github.com/visionmedia/supertest) |
| **ESLint** | JavaScript linter untuk enforcing code quality & consistency rules | [eslint.org](https://eslint.org/) |
| **typescript-eslint** | ESLint integration untuk TypeScript-specific rules & type-aware linting | [typescript-eslint.io](https://typescript-eslint.io/) |
| **Prettier** | Code formatter untuk consistent code formatting across entire project | [prettier.io](https://prettier.io/) |
| **tsc-alias** | TypeScript compiler wrapper untuk resolving path aliases di compiled output | [github.com/justkey007/tsc-alias](https://github.com/justkey007/tsc-alias) |
| **tsx** | TypeScript executor untuk running `.ts` files directly tanpa compilation | [github.com/esbuild-kit/tsx](https://github.com/esbuild-kit/tsx) |

### Utilities

| Library | Purpose | Documentation |
|---------|---------|---|
| **dotenv** | Environment variable loader untuk managing `.env` files secara safe | [github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) |
| **uuid** | UUID generator untuk creating unique identifiers | [github.com/uuidjs/uuid](https://github.com/uuidjs/uuid) |

---

## Code Quality

### ESLint Configuration

Konfigurasi ESLint enforce:
- ✅ No `any` types - enforce explicit typing
- ✅ No unused variables - clean code
- ✅ Strict null checks - prevent null reference errors
- ✅ Type-aware linting - catch type errors during development
- ✅ Return type annotations - improve code documentation
- ✅ Consistent import types - use `import type` for type-only imports

### Prettier Configuration

Konfigurasi Prettier untuk:
- ✅ Consistent code formatting
- ✅ Line width: 80 characters
- ✅ Tab width: 2 spaces
- ✅ Single quotes for strings
- ✅ Trailing commas: es5

### TypeScript Configuration

Konfigurasi TypeScript dengan:
- ✅ Strict mode enabled untuk maximum type safety
- ✅ ES2022 as target & lib untuk modern JavaScript features
- ✅ Path aliases (`@/*` → `src/*`) untuk cleaner imports
- ✅ Source maps untuk debugging compiled code
- ✅ Declaration files untuk library usage

### Pre-commit Hooks (Optional Setup)

```bash
# Install husky untuk git hooks
pnpm install --save-dev husky

# Setup husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "pnpm run lint && pnpm run format:check && pnpm run test"
```

Dengan ini, setiap commit akan divalidasi sebelum disubmit.

---

## Project Status

🚀 **Status**: On Progress

### Current Features
- ✅ Express.js setup dengan TypeScript
- ✅ Prisma ORM integration dengan PostgreSQL
- ✅ Security middleware (Helmet, CORS, Rate Limiting)
- ✅ Request validation dengan Zod
- ✅ Structured logging dengan Winston
- ✅ Testing framework setup (Vitest + Supertest)
- ✅ Code quality tools (ESLint + Prettier)
- ✅ Environment configuration management
- ✅ Graceful shutdown handling

### Planned Features
- 🔄 Authentication/Authorization endpoints
- 🔄 JWT token refresh mechanism
- 🔄 Seed database scripts
- 🔄 Docker & Docker Compose setup
- 🔄 API documentation (Swagger/OpenAPI)
- 🔄 Error handling & custom error classes
- 🔄 Request/Response interceptors
- 🔄 File upload handling dengan Multer
- 🔄 Caching strategy dengan Redis
- 🔄 CI/CD pipeline configuration

---

## Contributing

Project ini masih dalam tahap development. Contributions sangat welcome! 🙌

### How to Contribute

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## License

Project ini menggunakan **MIT License** - see [LICENSE](LICENSE) file untuk details.

---

## Support & Contact

Jika ada pertanyaan atau issues:

- 📧 Email: [fajar@example.com]
- 🐙 GitHub: [@fajar7xx](https://github.com/fajar7xx)
- 📖 Documentation: [docs folder](./docs)

---

## Acknowledgments

Terima kasih kepada:
- Express.js community
- Prisma team untuk amazing ORM
- TypeScript team untuk type safety
- Vitest team untuk fast testing experience

---

**Made with ❤️ by [Fajar Siagian](https://github.com/fajar7xx)**

*Last updated: May 30, 2026*
