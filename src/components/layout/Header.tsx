
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown and menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  // Check if the path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Our History', path: '/about#history' },
        { name: 'Leadership', path: '/about#leadership' },
        { name: 'Achievements', path: '/about#achievements' }
      ]
    },
    { 
      name: 'Academics',
      path: '/academics',
      dropdown: [
        { name: 'Programs', path: '/academics#programs' },
        { name: 'Resources', path: '/academics#resources' },
        { name: 'Policies', path: '/academics#policies' }
      ]
    },
    { 
      name: 'News & Events', 
      path: '/news' 
    },
    { 
      name: 'Gallery', 
      path: '/gallery' 
    },
    { 
      name: 'Staff', 
      path: '/staff' 
    },
    { 
      name: 'Contact', 
      path: '/contact' 
    },
  ];

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      {/* Top Bar */}
      <div className="bg-school-primary text-white py-2">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">Welcome to Jimba Gede Secondary School</p>
          <div className="flex items-center space-x-6">
            <Link to="/news" className="text-sm hover:underline transition flex items-center gap-1">
              <Bell size={14} />
              <span>Announcements</span>
            </Link>
            <a href="#" className="text-sm hover:underline transition flex items-center gap-1">
              <User size={14} />
              <span>Portal Login</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-br from-school-secondary to-school-accent rounded-lg flex items-center justify-center text-white font-bold shadow-md">JG</div>
            <div>
              <h1 className="font-bold text-xl text-school-primary">Jimba Gede</h1>
              <p className="text-xs text-gray-500">Secondary School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    className={`px-3 py-2 font-medium flex items-center gap-1 rounded-md transition-colors ${
                      isActive(item.path) ? 'text-school-secondary' : 'text-gray-700 hover:text-school-secondary'
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`px-3 py-2 font-medium rounded-md transition-colors ${
                      isActive(item.path) ? 'text-school-secondary' : 'text-gray-700 hover:text-school-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all origin-top-right ${
                    activeDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
                  }`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-light hover:text-school-primary"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Button variant="ghost" size="sm" className="ml-2 text-gray-700">
              <Search size={16} />
            </Button>
            
            <Button asChild className="ml-4 bg-school-secondary hover:bg-school-accent">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} className="p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                {item.dropdown ? (
                  <>
                    <button 
                      className="w-full text-left py-3 px-4 flex justify-between items-center"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span className={`font-medium ${isActive(item.path) ? 'text-school-secondary' : ''}`}>
                        {item.name}
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="bg-gray-50 pl-6 animate-fade-in">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-2 px-4 text-sm"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 font-medium ${isActive(item.path) ? 'text-school-secondary' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 flex flex-col space-y-2">
              <Button asChild className="w-full bg-school-secondary hover:bg-school-accent">
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href="#">Portal Login</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
