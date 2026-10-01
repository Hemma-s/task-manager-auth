# TaskFlow — Task Manager with User Authentication

A full-stack, multi-user task management web app with secure authentication, built with Node.js, Express, MongoDB, and Passport.js. Users can sign up, log in, and manage their own private to-dos and reminders — complete with conditional validation, desktop notifications, and a custom terminal-style UI.

## Features

- **User Authentication** — Secure signup/login/logout using Passport.js with bcrypt password hashing. Passwords are never stored in plain text.
- **Multi-user data isolation** — Each user only sees and manages their own tasks, enforced at the database query level (`userId` scoping).
- **Two task types with conditional validation**:
  - **To-Dos** — simple tasks, due date optional
  - **Reminders** — due date and time are required, enforced via a custom Mongoose schema validator
- **Full CRUD** — create, read, update (mark complete/incomplete), and delete tasks
- **Desktop notifications** — the app checks for due reminders and triggers a native browser/OS notification when a reminder's time arrives
- **Day-aware UI messages** — the dashboard shows contextual banners (e.g. Friday, weekend, Monday motivation)
- **Custom terminal-themed UI** — signup and login are designed as an interactive "terminal" conversation rather than a standard form

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Authentication:** Passport.js (Local Strategy), express-session, bcryptjs
- **Frontend:** HTML, CSS, JavaScript (no framework — vanilla fetch-based API calls)

## Planned Enhancements

- **Push notifications** even when the browser is closed (would require Service Workers, push subscriptions, and VAPID key authentication)
- **Forgot password** flow with email-based reset tokens
- **Task tagging/goals** to group related tasks under a shared objective

## Author

Built by Hemma
