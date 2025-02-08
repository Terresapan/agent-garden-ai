export const Footer = () => {
  return (
    <footer className="bg-garden-dark/80 backdrop-blur-sm border-t border-garden-accent/20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} TAP AGENT Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
