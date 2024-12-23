# Todo List App

This is a full-stack Todo List application built using **Next.js (App Router)**, **Express.js**, **Prisma**, **MySQL**, and **TypeScript**. The app allows users to add, edit, delete, and toggle tasks as completed/not completed. TailwindCSS is used for styling.

## Features

- **Task Management**:
  - Create new tasks with a title and color.
  - View a list of tasks with their current status.
  - Edit tasks (title and color).
  - Mark tasks as completed or not completed.
  - Delete tasks with confirmation.
- **Responsive Design**:
  - Fully responsive interface built with TailwindCSS.
- **API Integration**:
  - Uses an Express.js backend for CRUD operations.

---

## Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) (v15.1.2)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **HTTP Requests**: [Axios](https://axios-http.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)

### Backend

- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Prisma

### Programming Language

- **TypeScript**
- **JavaScript**

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MySQL](https://www.mysql.com/)

### Backend Setup

1. Clone the backend repository (refer to the backend's README for setup instructions).
2. Start the backend server.

### Frontend Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/AbdelSayedahmed/todo-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
frontend/
├── .next/
├── app/
│   ├── create/
│   │   └── page.tsx  # Create Task Page
│   ├── edit/[id]/
│   │   └── page.tsx  # Edit Task Page
│   ├── globals.css   # Global Styles
│   ├── layout.tsx    # Root Layout
│   └── page.tsx      # Home Page
├── node_modules/
├── .env.local         # Environment Variables
├── .gitignore         # Ignored Files
├── eslint.config.mjs  # ESLint configuration file
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json       # Project Metadata
├── postcss.config.mjs # TailwindCSS Configuration
├── README.md
├── tailwind.config.ts # TailwindCSS Configuration
└── tsconfig.json      # TypeScript Configuration
```

---

## Scripts

### Development

```bash
npm run dev
```

Start the Next.js development server.

### Production Build

```bash
npm run build
```

Build the application for production.

### Start

```bash
npm run start
```

Run the application in production mode.

### Lint

```bash
npm run lint
```

Lint the codebase using ESLint.

---

## Features Breakdown

### Home Page (`/`)

- Displays a list of tasks with their title, color, and completion status.
- Allows toggling task completion.
- Provides a delete button for each task.
- Includes a link to the "Create Task" page.

### Create Task Page (`/create`)

- Allows users to create a new task by specifying a title and color.
- Redirects to the home page upon successful creation.

### Edit Task Page (`/edit/[id]`)

- Fetches and pre-fills the selected task's details.
- Allows users to update the task's title and color.
- Redirects to the home page upon successful update.

---

## TailwindCSS Customization

TailwindCSS is configured in `tailwind.config.ts` to include custom colors:

```js
export default {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
};
```
