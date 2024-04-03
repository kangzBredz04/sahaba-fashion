import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Unauthorized Access
        </h2>
        <p className="text-center text-gray-700 mb-4">
          You do not have permission to access this page.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
