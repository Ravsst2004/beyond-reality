import LinkMenu from "./LinkMenu";

const Menu = () => {
  return (
    <nav className="flex items-center justify-between font-bold">
      <img src="images/logo.svg" alt="" />
      <div className="hidden h-10 font-alata md:flex items-center md:space-x-8">
        <LinkMenu label="About" />
        <LinkMenu label="Carrers" />
        <LinkMenu label="Events" />
        <LinkMenu label="Products" />
        <LinkMenu label="Support" />
      </div>
    </nav>
  );
};

export default Menu;
