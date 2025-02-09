
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-garden-dark/80 backdrop-blur-sm border-b border-garden-accent/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/23823012-483b-4996-b6f8-2b521ed8dd50.png" 
            alt="The Acceleration Project Logo" 
            className="h-8 w-auto"
          />
          {!isHomePage && (
            <Link
              to="/"
              className="flex items-center gap-2 text-garden-accent hover:text-garden-accent/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Link>
          )}
        </div>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white hover:text-garden-accent transition-colors"
          >
            SMB
          </Link>
          <Link
            to="/consultants"
            className="text-white hover:text-garden-accent transition-colors"
          >
            Consultants
          </Link>
          <Link
            to="/partners"
            className="text-white hover:text-garden-accent transition-colors"
          >
            Partners
          </Link>
        </nav>
        <Link
          to="/"
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-300 hover:opacity-80 transition-opacity"
        >
          TAP Agent Garden for SMB
        </Link>
      </div>
    </header>
  );
};
