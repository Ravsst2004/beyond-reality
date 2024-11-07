const FooterIcon = ({logoSrc}: {logoSrc: string}) => {
  return (
    <div className="h-8 group">
      <img src={logoSrc} alt="" className="h-6" />
    </div>
  );
}

export default FooterIcon
