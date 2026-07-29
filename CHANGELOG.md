# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Lead CRM Funnel Backend**:
  - Created `Lead.js` Mongoose model for storing applicant data.
  - Added `leads.js` routes (`POST /`, `GET /`, `GET /stats`, `PUT /:id/status`, `PUT /:id`, `DELETE /:id`).
  - Added notification templates to `sendEmail.js` using `nodemailer` (Gmail SMTP).
  - Updated `server.js` to mount lead API routes.
- **Lead CRM Funnel Frontend**:
  - Implemented client-side routing using `react-router-dom` in `main.tsx` and `App.tsx` (to distinguish `/admin` from the landing page).
  - Connected the Contact Section form to the API endpoint and added a phone number field.
  - Added `Leads CRM` tab in `AdminPage.tsx` with full CRUD and funnel tracking logic.
  - Fixed pre-existing TypeScript types and build issues inside `AdminPage.tsx`.
- **Branding Update**:
  - Updated the Admin Dashboard title and login visual from "Shivam" to "Product Leadership Studio".
- **Codebase Refactoring**:
  - Refactored `AdminPage.tsx` monolithic component into modular files.
  - Created modular sub-components in `src/admin/components` (Login, Sidebar, OverviewTab, LeadsTab, LeadModal, LogoutModal).
  - Extracted type definitions and constants to `src/admin/types.ts` and `src/admin/constants.ts`.

### Fixed
- Added `vercel.json` to the frontend to fix 404 NOT_FOUND errors on client-side routes (like `/admin`) during Vercel deployment.
- Fixed TypeScript errors with missing `types.ts` imports and implicit `any` usage.
- Fixed an unresolved image import (`logo.png`) breaking the frontend build.
