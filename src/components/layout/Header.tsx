
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-school-primary text-white py-1">
        <div className="container-custom flex justify-between items-center">
          <p className="text-sm">Welcome to Jimba Gede Secondary School</p>
          <div className="flex items-center space-x-4">
            <a href="/contact" className="text-sm hover:text-school-light transition">Contact Us</a>
            <a href="#" className="text-sm hover:text-school-light transition flex items-center gap-1">
              <User size={14} />
              <span>Portal Login</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-12 w-12 bg-school-secondary rounded-full flex items-center justify-center text-white font-bold">JG</div>
            <div>
              <h1 className="font-bold text-xl text-school-primary">Jimba Gede</h1>
              <p className="text-xs text-gray-600">Secondary School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    className="px-3 py-2 text-gray-700 hover:text-school-primary font-medium flex items-center gap-1"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className="px-3 py-2 text-gray-700 hover:text-school-primary font-medium"
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
            
            <Button variant="outline" size="sm" className="ml-2">
              <Search size={16} />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-school-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                      <span className="font-medium">{item.name}</span>
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
                    className="block py-3 px-4 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button className="w-full bg-school-primary hover:bg-school-secondary">
                Portal Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
