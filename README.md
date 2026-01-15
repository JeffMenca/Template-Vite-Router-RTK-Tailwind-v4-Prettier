# Vite + React + TypeScript Template

A modern, production-ready React template with TypeScript, React Router, Redux Toolkit, and Tailwind CSS v4.

## Features

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type safety and better DX
- **Vite 7** - Lightning-fast HMR and build
- **Tailwind CSS v4** - Latest version with native Vite plugin
- **Dark Mode** - Built-in theme switching with localStorage persistence
- **React Router v7** - File-based routing ready
- **Redux Toolkit** - Simplified Redux with TypeScript support
- **HTTP Client** - Pre-configured fetch wrapper with error handling
- **ESLint + Prettier** - Code quality and formatting
- **Path Aliases** - Clean imports with `@/` prefix

## Tech Stack

- React 19.2
- TypeScript 5.9
- Vite 7
- React Router v7
- Redux Toolkit 2.11
- Tailwind CSS 4.1
- ESLint 9 (Flat Config)
- Prettier 3

## Project Structure

```
src/
├── app/              # App-level configuration
│   ├── router.tsx    # React Router setup
│   └── ThemeProvider.tsx  # Dark/Light mode provider
├── components/       # Reusable components
├── features/         # Feature-based modules
│   ├── home/        # Home feature
│   └── not-found/   # 404 page
├── lib/             # Utilities and helpers
│   └── http.ts      # HTTP client with typed requests
├── store/           # Redux store
│   ├── index.tsx    # Store configuration
│   ├── hooks.tsx    # Typed Redux hooks
│   └── slices/      # Redux slices
├── App.tsx          # Root component
└── main.tsx         # App entry point
```

## Getting Started

1. **Clone or use this template**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Theme System

The template includes a simple theme provider with dark/light mode support:

```tsx
// Theme is automatically managed and persisted to localStorage
// Toggle in your components:
import { useTheme } from "@/app/ThemeProvider";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

## HTTP Client Usage

```tsx
import { http } from "@/lib/http";

// GET request
const data = await http.get<User[]>("/api/users");

// POST request
const newUser = await http.post<User>("/api/users", { name: "John" });

// Error handling
try {
  await http.get("/api/data");
} catch (error) {
  if (error instanceof HttpError) {
    console.log(error.status, error.data);
  }
}
```

## Redux Store Usage

```tsx
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment } from "@/store/slices/counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(increment())}>{count}</button>;
}
```

## Adding New Routes

Edit `src/app/router.tsx`:

```tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      // Add your routes here
    ],
  },
]);
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
```

Access in your code:

```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

## Path Aliases

The template uses `@/` as an alias for the `src/` directory:

```tsx
// Instead of: import { http } from '../../lib/http'
import { http } from "@/lib/http";
```

## License

MIT
