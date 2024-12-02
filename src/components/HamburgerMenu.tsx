import { motion } from "framer-motion";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <motion.div className="md:hidden">
      <motion.button
        onClick={onClick} // Make sure onClick is passed here
        className={`${isOpen && "open"} z-50 block hamburger md:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </motion.button>
    </motion.div>
  );
};

export default HamburgerMenu;
