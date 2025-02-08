
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToFeedback = () => {
    // If not on home page, navigate home first
    if (!isHomePage) {
      window.location.href = '/#feedback';
    } else {
      // If already on home page, just scroll
      const feedbackSection = document.getElementById('feedback');
      if (feedbackSection) {
        feedbackSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-garden-dark/80 backdrop-blur-sm border-b border-garden-accent/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-300 hover:opacity-80 transition-opacity"
          >
            TAP Agent Garden for SMB
          </Link>
          <button
            onClick={scrollToFeedback}
            className="text-garden-accent hover:text-garden-accent/80 transition-colors"
          >
            Tell Us What You Think
          </button>
        </div>
      </div>
    </header>
  );
};
