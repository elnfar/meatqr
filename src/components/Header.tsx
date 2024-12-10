import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: DropdownItem[];
}

const dropdownVariants = {
  hidden: { 
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navItems: NavItem[] = [
    {
      label: 'Products',
      dropdownItems: [
        { 
          label: 'Meat Orders',
          href: '#orders',
          description: 'Order placing and payment'
        },
        { 
          label: 'Meat Pay',
          href: '#pay',
          description: 'Bill splitting and payment'
        },
        { 
          label: 'Meat Tips',
          href: '#tips',
          description: 'Tip solution'
        },
        { 
          label: 'Meat Menu',
          href: '#menu',
          description: 'Menu solutions'
        },
      ],
    },
    {
      label: 'Use Cases',
      dropdownItems: [
        { label: 'Restaurants', href: '#restaurants' },
        { label: 'Hotels', href: '#hotels' },
        { label: 'Cafes', href: '#cafes' },
        { label: 'Food Trucks', href: '#food-trucks' },
      ],
    },
    {
      label: 'Guest Experience',
      dropdownItems: [
        { label: 'Mobile Ordering', href: '#mobile-ordering' },
        { label: 'Multi-language', href: '#languages' },
        { label: 'Accessibility', href: '#accessibility' },
        { label: 'Customer Support', href: '#support' },
      ],
    },
    {
      label: 'About Us',
      dropdownItems: [
        { label: 'Our Story', href: '#story' },
        { label: 'Team', href: '#team' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-filter transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-gray-400/50' : ''
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 flex items-center">
            <Image src="/logo.png" width={40} height={40} alt='Image logo'/>
            <h1>MeatQR</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Items with Dropdowns */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative dropdown-container"
                >
                  <button 
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownClick(item.label);
                    }}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdownItems && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 "
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <motion.a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            variants={itemVariants}
                            className="block px-4 py-3 text-sm hover:bg-gray-50"
                          >
                            <span className="block text-gray-900 font-medium mb-0.5">
                              {dropdownItem.label}
                            </span>
                            {dropdownItem.description && (
                              <span className="block text-gray-500 text-xs">
                                {dropdownItem.description}
                              </span>
                            )}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
                Sign in
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Contact us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-3 pt-4 pb-3">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-2"
                      onClick={() => handleDropdownClick(item.label)}
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && item.dropdownItems && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="pl-4 space-y-2"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <motion.a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              variants={itemVariants}
                              className="block py-2"
                            >
                              <span className="block text-gray-900 text-sm font-medium">
                                {dropdownItem.label}
                              </span>
                              {dropdownItem.description && (
                                <span className="block text-gray-500 text-xs mt-0.5">
                                  {dropdownItem.description}
                                </span>
                              )}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Action Buttons */}
                <div className="pt-4 border-t flex flex-col space-y-2">
                  <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
                    Sign in
                  </button>
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Contact us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
