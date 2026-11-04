# 📚 BookNook — Community Library Management Platform

A modern, community-driven library management platform built to simplify book discovery, collection management, and borrowing activities.

BookNook allows readers to explore a shared book collection, contribute books, borrow available titles, and manage their borrowing history through an intuitive and responsive interface. With secure authentication and a dedicated backend API, the platform provides an organized digital library experience.

---

## 🌐 Live Application

- **Live Website:** https://book-nook077.vercel.app
- **Backend API:** https://book-nook-server-two.vercel.app
- **Source Code:** https://github.com/sakibhasan077

---

## ✨ Key Features

### 📖 Book Discovery
- Browse the complete book collection.
- View detailed information about individual books.
- Explore featured arrivals on the homepage.
- Discover community reviews and recommendations.

### 🔐 Authentication & Account Management
- Register using email and password.
- Sign in with Google authentication.
- Manage authenticated user sessions.
- Access member-only features through protected routes.

### 📚 Book Management
- Add new books to the community collection.
- Update existing book information.
- Remove contributed books.
- View personally contributed books.

### 🔄 Borrowing Management
- Borrow books with available copies.
- Prevent duplicate borrowing of the same book.
- Track borrowing and return dates.
- Return borrowed books.
- Maintain borrowing history.

### 👤 Personal Library
- View contributed books.
- Track currently borrowed books.
- Review previous borrowing activities.
- Manage personal library activities.

### 📱 User Experience
- Responsive interface for desktop, tablet, and mobile.
- Interactive UI components.
- Accessible interface elements.
- Consistent navigation and user feedback.

---

## 🛠️ Technology Stack

| Technology | Description |
|---|---|
| [Next.js 16](https://nextjs.org/) | Full-stack React framework and App Router |
| [React 19](https://react.dev/) | Component-based UI development |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and improved code reliability |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Better Auth](https://www.better-auth.com/) | Authentication and session management |
| [MongoDB](https://www.mongodb.com/) | Authentication data storage |
| [Base UI](https://base-ui.com/) | Accessible UI components |
| [Lucide](https://lucide.dev/) | Icon library |
| Node.js | Backend runtime |
| Express.js | Backend API framework |
| MongoDB | Book and borrowing data storage |

---

## 🏗️ Application Architecture

BookNook follows a separated frontend and backend architecture.

```text
                 ┌──────────────────────┐
                 │       User           │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Next.js Frontend   │
                 │   React + TypeScript │
                 └──────────┬───────────┘
                            │
                ┌───────────┴────────────┐
                │                        │
                ▼                        ▼
       ┌────────────────┐      ┌────────────────┐
       │   Better Auth  │      │   Backend API  │
       │ Authentication │      │  Express.js    │
       └───────┬────────┘      └───────┬────────┘
               │                       │
               ▼                       ▼
       ┌────────────────┐      ┌────────────────┐
       │    MongoDB     │      │    MongoDB     │
       │ Auth Database  │      │ Application DB │
       └────────────────┘      └────────────────┘
```

**Architecture overview:**

- **Frontend:** Handles user interactions, navigation, and application interfaces.
- **Backend API:** Handles book management, borrowing, and returning operations.
- **Authentication:** Better Auth manages user authentication and sessions.
- **Database:** MongoDB stores authentication and application data.

---

## 🔄 Core Application Workflow

### 1. Authentication
Users create an account or sign in using email and password or Google authentication.

### 2. Discover Books
Authenticated and guest users can browse the available book collection and explore individual book details.

### 3. Manage Books
Members can contribute books and manage their submitted book information.

### 4. Borrow Books
Members can borrow available books. The system checks book availability and prevents duplicate borrowing.

### 5. Return Books
Members can return borrowed books, allowing the available copy count to be updated.

### 6. Track Activities
Members can review their contributed books and borrowing history.

---

## 🔒 Authentication & Security

BookNook uses Better Auth for authentication and session management.

Security considerations include:

- Email and password authentication.
- Google OAuth integration.
- Session-based authentication.
- Protected application routes.
- Server-side session verification.
- Backend authorization for restricted operations.
- JWT validation where required for API protection.
- Environment-based configuration for sensitive credentials.

> Authentication and authorization should be enforced on the server and backend API, not only through frontend route protection.

---

## 📋 Prerequisites

Make sure the following tools and services are available before setting up the project:

- [Node.js](https://nodejs.org/) — Current LTS version recommended.
- npm — Package manager.
- MongoDB — Database service.
- BookNook backend API — Required for book and borrowing operations.
- Google OAuth credentials — Required for Google sign-in.

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd book-nook
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000

# Better Auth Configuration
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Configuration
MONGODB_URI=mongodb://127.0.0.1:27017

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Environment Variable Reference

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the BookNook backend API |
| `BETTER_AUTH_URL` | Base URL of the Better Auth application |
| `MONGODB_URI` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

**Important:**
- Better Auth uses the MongoDB database named `book-nook`.
- Configure Google OAuth authorized origins and redirect URIs correctly.
- Never expose private credentials or commit `.env.local` to GitHub.
- Set production environment variables through your hosting provider.

### 4. Start the Backend API

Start your BookNook backend server separately and make sure it is accessible at the configured API URL.

### 5. Start the Frontend Development Server

```bash
npm run dev
```

Open the application:

**http://localhost:3000**

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint |

---

## 📁 Project Structure

```text
book-nook/
│
├── public/
│   └── assets/                 # Static images and assets
│
├── src/
│   ├── app/
│   │   ├── api/                # Authentication API routes
│   │   ├── (routes)/           # Application pages and route groups
│   │   ├── layout.tsx          # Root application layout
│   │   └── globals.css         # Global styles
│   │
│   ├── components/
│   │   ├── home/               # Homepage components
│   │   ├── layout/             # Navbar, footer, and shared layouts
│   │   └── ...                 # Reusable UI components
│   │
│   ├── lib/
│   │   └── ...                 # Authentication and utilities
│   │
│   └── types/
│       └── ...                 # Shared TypeScript definitions
│
├── .env.local                  # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

*Note: Adjust the directory tree to match the actual repository structure.*

---

## 🌍 Deployment

The frontend can be deployed using [Vercel](https://vercel.com/) or another Next.js-compatible hosting provider.

### Production Checklist

- [ ] Deploy the frontend application.
- [ ] Deploy the backend API.
- [ ] Configure production environment variables.
- [ ] Connect the production MongoDB database.
- [ ] Update `NEXT_PUBLIC_API_URL`.
- [ ] Update `BETTER_AUTH_URL`.
- [ ] Configure Google OAuth production URLs.
- [ ] Verify authentication and session persistence.
- [ ] Verify protected routes after page reload.
- [ ] Test book management and borrowing operations.
- [ ] Test the application on mobile and desktop.

For additional deployment guidance, see the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🚧 Future Improvements

Potential enhancements for future versions:

- Advanced book search and filtering.
- Category-based book discovery.
- Pagination and sorting.
- Reading wishlist and favorites.
- Admin dashboard and library analytics.
- Borrowing limits and overdue tracking.
- Automated return-date reminders.
- Enhanced community rating and review system.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

To contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit your changes with a descriptive message.
5. Push your branch.
6. Open a Pull Request.

---

## 👨‍💻 Author

**Sakib Hasan**

Full-Stack Developer

- GitHub: [@sakibhasan077](https://github.com/sakibhasan077)
- LinkedIn: [Sakib Hasan](https://linkedin.com/in/sakibhasan-web)

---

## 📄 License

No license has been specified yet. Please add an appropriate open-source license before allowing others to reuse or distribute this project.

---

<p align="center">
  Built with ❤️ by Sakib Hasan
  <br />
  <strong>BookNook — Discover. Borrow. Read. Repeat.</strong>
</p>