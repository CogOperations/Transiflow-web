import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#007C91]">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#111827] md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-[#6B7280]">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#007C91] px-6 py-3 font-semibold text-white"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}