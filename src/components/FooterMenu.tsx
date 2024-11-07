import FooterItem from "./FooterItem";

const FooterMenu = () => {
  return (
    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
      <FooterItem label="About" />
      <FooterItem label="Carrers" />
      <FooterItem label="Events" />
      <FooterItem label="Products" />
      <FooterItem label="Support" />
    </div>
  );
};

export default FooterMenu;
