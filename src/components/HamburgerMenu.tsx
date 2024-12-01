import { motion } from "framer-motion";

const HamburgerMenu = ({ isOpen, ...props }: { isOpen: boolean }) => {
  return (
    <motion.div
      className="md:hidden"
      {...props}
    >
      <motion.button
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
