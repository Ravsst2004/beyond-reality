import React from "react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: { id: number; label: string; link: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          className="absolute z-20 top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.id * 0.1 }}
              href={item.link}
              className="hover:text-pink-500"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
