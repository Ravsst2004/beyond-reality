const LinkMenu = ({ label }: { label: string }) => {
  return (
    <div className="group text-white">
      <a href="#">{label}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
};

export default LinkMenu;
