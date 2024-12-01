import { motion } from "framer-motion";

const HamburgerMenu = ({
  isOpen,
  ...props
}: {
  isOpen: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className="md:hidden"
      {...props}
    >
      <motion.button
        onClick={props.onClick}
        className={`${isOpen && "open"} z-40 block hamburger md:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </motion.button>
    </motion.div>
  );
};

export default HamburgerMenu;
