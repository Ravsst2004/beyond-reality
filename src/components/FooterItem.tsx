const FooterItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="h-10 group">
      <a href={link}>{label}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
};

export default FooterItem;
