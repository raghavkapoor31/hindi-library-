
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F5]">
      <div className="bg-hindi-maroon text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold font-martel">हिंदी कथा पुस्तकालय</h1>
        </div>
      </div>
      
      <main className="flex-grow library-pattern flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-hindi-maroon mb-4 font-martel">404</h1>
          <h2 className="text-2xl font-semibold mb-4 font-martel">पृष्ठ नहीं मिला</h2>
          <p className="mb-6 text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-hindi-maroon hover:bg-hindi-maroon/90 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              पुस्तकालय में वापस जाएँ (Return to Library)
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
