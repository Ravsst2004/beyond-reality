import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface DesktopMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  navItems: { id: number; label: string; link: string }[];
}

const DesktopMenu = ({ setIsOpen, isOpen, navItems }: DesktopMenuProps) => {
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between font-bold">
      <a
        href="#hero"
        className="text-white md:ml-3 text-3xl font-bold"
      >
        BeyondReality
      </a>
      <div className="hidden h-10 font-alata md:flex items-center md:space-x-8">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.id * 0.01 }}
            href={item.link}
            className="relative text-white group"
            style={{ textDecoration: "none", textUnderlineOffset: "2px" }}
          >
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>
      <HamburgerMenu
        onClick={handleMenu}
        isOpen={isOpen}
      />
    </nav>
  );
};

export default DesktopMenu;
