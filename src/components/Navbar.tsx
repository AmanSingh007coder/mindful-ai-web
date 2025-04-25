
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserRound } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold gradient-text">EcoAI</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/user" label="UserPage" />
            <NavItem to="/leaderboard" label="Leaderboard" />
            <NavItem to="/login" label="Login" />
            <Button variant="ghost" size="icon" className="glow-effect">
              <UserRound className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 glow-effect px-3 py-2"
    >
      {label}
    </Link>
  );
};

export default Navbar;
