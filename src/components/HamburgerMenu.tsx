const HamburgerMenu = ({ isOpen, ...props }: { isOpen: boolean }) => {
  return (
    <div className="md:hidden" {...props}>
      <button className={`${isOpen && "open"} z-40 block hamburger md:hidden`}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
