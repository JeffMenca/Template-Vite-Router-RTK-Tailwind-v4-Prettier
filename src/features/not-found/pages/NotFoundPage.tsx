import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="opacity-80">This page does not exist.</p>
      <Link className="underline underline-offset-4" to="/">
        Go home
      </Link>
    </section>
  );
}
