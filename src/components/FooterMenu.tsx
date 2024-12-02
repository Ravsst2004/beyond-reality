import FooterItem from "./FooterItem";

const FooterMenu = () => {
  const navItems = [
    { id: 1, label: "Features", link: "#features" },
    { id: 2, label: "Products", link: "#products" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
      {navItems.map((item, index) => (
        <FooterItem
          key={index}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default FooterMenu;
