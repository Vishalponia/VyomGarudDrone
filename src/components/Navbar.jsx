
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Capabilities", to: "capabilities" },
    { name: "Highlights", to: "highlights" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-transparent z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-orange-500">VyomGarud</h1>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-70} 
              className="cursor-pointer hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-orange-500 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
