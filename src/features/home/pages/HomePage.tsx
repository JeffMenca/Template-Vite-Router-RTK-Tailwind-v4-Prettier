import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment, reset } from "@/store/slices/counterSlice";

export function HomePage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((s) => s.counter.value);

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome to Vite + React Template</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A modern template with React Router, Redux Toolkit, and Tailwind CSS
          v4
        </p>
      </div>

      {/* Redux Example */}
      <div className="space-y-3 rounded-lg border p-6 dark:border-gray-800">
        <h2 className="text-xl font-semibold">Redux Toolkit Example</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Counter state managed with Redux. Check{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
            src/store/slices/counterSlice.ts
          </code>
        </p>

        <div className="flex items-center gap-3">
          <button
            className="rounded border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <span className="min-w-16 text-center text-2xl font-mono font-semibold">
            {count}
          </span>

          <button
            className="rounded border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="rounded border px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Routing Example */}
      <div className="space-y-3 rounded-lg border p-6 dark:border-gray-800">
        <h2 className="text-xl font-semibold">React Router Example</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Navigation is configured in{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
            src/app/router.tsx
          </code>
        </p>
        <div>
          <Link
            to="/non-existent-route"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Visit non-existent route →
          </Link>
          <p className="mt-1 text-xs text-gray-500">
            (This will show the 404 page)
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <div className="space-y-3 rounded-lg border p-6 dark:border-gray-800">
        <h2 className="text-xl font-semibold">Template Features</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>
              <strong>Theme Toggle:</strong> Dark/light mode in navbar
              (persisted to localStorage)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>
              <strong>HTTP Client:</strong> Check{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
                src/lib/http.ts
              </code>{" "}
              for typed fetch wrapper
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>
              <strong>Path Aliases:</strong> Use{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
                @/
              </code>{" "}
              instead of relative imports
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>
              <strong>Feature-based Structure:</strong> Organize code by
              features in{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
                src/features/
              </code>
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>
          Edit this page in{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
            src/features/home/pages/HomePage.tsx
          </code>
        </p>
      </div>
    </section>
  );
}
