import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import LinkMenu from "./LinkMenu";

const Menu = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between font-bold">
      <h1 className="text-white md:ml-3 text-3xl font-bold">BeyondReality</h1>
      <div className="hidden h-10 font-alata md:flex items-center md:space-x-8">
        <LinkMenu label="About" />
        <LinkMenu label="Carrers" />
        <LinkMenu label="Events" />
        <LinkMenu label="Products" />
        <LinkMenu label="Support" />
      </div>
      <HamburgerMenu
        onClick={handleMenu}
        isOpen={isOpen}
      />
    </nav>
  );
};

export default Menu;
