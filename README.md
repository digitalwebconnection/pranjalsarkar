# Product Leadership Studio — CRM & Marketing Platform

> A full-stack Marketing Website and CRM tailored for Pranjal Sarkar's Product Leadership Studio. 

This project integrates a client-facing marketing frontend with a secure, backend-powered admin panel. It handles lead generation, communication, and a comprehensive CRM funnel.

## 🚀 Key Features

### Marketing Website
- **Dynamic Frontend:** Built with React 18, Vite, and TypeScript for a fast, responsive user experience.
- **Lead Generation:** Contact forms with 10-digit phone number validation and seamless submission.
- **Security:** Integrated reCAPTCHA to prevent spam.
- **Client-Side Routing:** Utilizes `react-router-dom` for smooth navigation across the landing page and specific routes.

### Admin Panel & CRM Funnel
- **Secure Authentication:** Single-admin JWT authentication with OTP support and direct login capabilities.
- **Leads CRM Dashboard:** A comprehensive, modular admin panel featuring full CRUD operations for lead management.
- **Funnel Tracking:** Track leads effectively with visual funnel tracking, status updates, and dynamic "Applied Date" columns.
- **Advanced Filtering:** Custom Date Range filters and status tracking to efficiently manage applicants.
- **Modular Architecture:** Extracted modular sub-components (Login, Sidebar, OverviewTab, LeadsTab) for scalable development.
- **Blog Management:** Backend support for blog management, integrated with Cloudinary for image and file uploads.
- **Notifications:** Automated email notifications triggered on new lead submissions using Nodemailer/Brevo.

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18 · TypeScript · Vite · React Router v6 |
| **Backend** | Express.js · Node.js 18+ (ESM) |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JWT (single admin / OTP support) |
| **Email/Notifications** | Nodemailer (Gmail SMTP) / Brevo APIs |
| **Media Storage** | Cloudinary |
| **Deployment** | Vercel (Frontend) · Render (Backend) · Docker Support |

## 📁 Project Structure

```text
pranjalsarkar-r/
├── .github/workflows/        # CI & deploy GitHub Actions
├── docker/                   # Dockerfiles & docker-compose
├── docs/                     # Architecture, API ref, deployment
├── backend/                  # Express REST API
│   ├── src/
│   │   ├── config/           # DB, CORS, Sentry, env setup
│   │   ├── constants/        # Shared constants
│   │   ├── controllers/      # Route controllers
│   │   ├── errors/           # AppError + error codes
│   │   ├── jobs/             # Background tasks
│   │   ├── middlewares/      # Auth, error handler, rate limiter
│   │   ├── models/           # Mongoose schemas (e.g., Lead.js)
│   │   ├── routes/           # Express routes + aggregator
│   │   ├── services/         # Business logic
│   │   ├── upload/           # Cloud file uploads (Cloudinary)
│   │   ├── utils/            # Helpers (email, logger)
│   │   ├── validators/       # Request validators
│   │   ├── app.js            # Express app setup
│   │   └── server.js         # Server entrypoint
│   └── tests/                # Unit + integration tests
└── frontend/                 # React SPA
    ├── src/
    │   ├── admin/            # Admin panel feature & CRM Dashboard
    │   ├── api/              # HTTP client + API modules
    │   ├── components/       # Layout, sections, UI
    │   ├── constants/        # App-wide constants
    │   ├── context/          # React context providers
    │   ├── hooks/            # Custom hooks
    │   ├── lib/              # Library utilities
    │   ├── pages/            # Page components
    │   ├── routes/           # Route definitions
    │   ├── styles/           # CSS files
    │   ├── utils/            # Helper functions
    │   ├── assets/           # Static assets (logos)
    │   └── __tests__/        # Component tests
    └── public/               # Static public assets
```

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `backend/.env` file:

| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | Your MongoDB Connection String |
| `PORT` | Backend port (default: 5000) |
| `FRONTEND_URL` | URL of the frontend (e.g., `http://localhost:5173`) |
| `JWT_SECRET` | Secret key for JWT signing |
| `BREVO_API_KEY_OFFICE` | API key for Brevo email service |
| `RECAPTCHA_SECRET_KEY` | Secret key for Google reCAPTCHA |
| `ADMIN_OTP_TARGET_EMAIL` | Target email for OTPs |
| `ADMIN_DIRECT_LOGIN_EMAIL` | Email to bypass OTP for direct login |
| `BLOG_ADMIN_USERNAME` | Username for blog admin |
| `BLOG_ADMIN_PASSWORD` | Password for blog admin |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for media |
| `CLOUDINARY_API_KEY` | Cloudinary API Key |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret |

*(See `backend/.env.example` for a complete list)*

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) ≥ 18
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- Optional: Docker Desktop

### Installation

1. **Clone the repository and install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Development

Run the frontend and backend in separate terminal windows:

```bash
# Start backend server (runs on port 5000)
cd backend
npm run dev

# Start frontend development server (runs on port 5173)
cd frontend
npm run dev
```

### Docker

To run the entire stack using Docker Compose:

```bash
cd docker
docker compose up --build
```

## 📖 Documentation

For more detailed information on specific topics, see our dedicated docs:

- [Architecture Overview](docs/architecture.md)
- [API Reference](docs/api-reference.md)
- [Deployment Guide](docs/deployment.md)
- [AI Prompt Notes](docs/ai-prompt-notes.md)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
