# BookNook

BookNook is a community library web app for discovering books, managing a personal collection, and keeping track of borrowed books. It provides account registration and sign-in, a collection browsing experience, and member-only book management workflows.

## Features

- Browse the book collection and view individual book details.
- Create an account with email and password or Google sign-in.
- Add, edit, and remove books from your collection.
- Borrow available books and return them when you are finished.
- Review your contributed books and borrowing history.
- View featured arrivals and community reviews on the home page.

## Tech Stack

- [Next.js 16](https://nextjs.org/) App Router and [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Better Auth](https://www.better-auth.com/) with MongoDB
- [Base UI](https://base-ui.com/) and [Lucide](https://lucide.dev/) icons

## Prerequisites

- Node.js (use a current LTS release) and npm
- A running BookNook API server
- A MongoDB connection string for authentication
- Google OAuth credentials if Google sign-in is enabled

The web client calls the separate API configured by `NEXT_PUBLIC_API_URL`. Start that service before using book and borrowing features. Better Auth uses the MongoDB database named `book-nook`.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root and configure the required environment variables:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   BETTER_AUTH_URL=http://localhost:3000
   MONGODB_URI=mongodb://127.0.0.1:27017
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

   Set `NEXT_PUBLIC_API_URL` to the base URL of your BookNook API. Configure Google OAuth authorized origins and redirect URI to match your local Better Auth setup and deployment. Keep real credentials out of source control.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the local development server. |
| `npm run build` | Create a production build.          |
| `npm start`     | Serve the production build.         |
| `npm run lint`  | Run ESLint.                         |

## Project Structure

```text
src/
  app/                 App Router pages, layouts, and API routes
  components/          Home page and shared layout components
  lib/                 Authentication and shared utilities
  types/               Shared TypeScript types
public/                Static assets
```

## Production

Build and run the production app with:

```bash
npm run build
npm start
```

Set the environment variables for the production API, MongoDB, Better Auth base URL, and Google OAuth application in your hosting provider. For deployment details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
