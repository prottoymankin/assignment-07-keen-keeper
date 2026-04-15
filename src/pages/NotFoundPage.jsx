import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-[#F8FAFC] flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-black text-8xl text-[#244D3F]">404</h1>

      <h2 className="font-black text-3xl">Page Not Found</h2>

      <p className="max-w-125 text-center text-gray-500 text-lg mb-6 mt-5">
        We're sorry, that page you requested could not be found please go back to the homepage
      </p>

      <Link to='/' className="bg-[#244D3F] btn text-white rounded-full">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;