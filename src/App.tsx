import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
