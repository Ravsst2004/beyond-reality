import FooterIcon from "./FooterIcon";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <h1 className="text-white md:ml-3 text-3xl font-bold">
                BeyondReality
              </h1>
            </div>
            <FooterMenu />
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center mx-auto  space-x-4 md:justify-end">
              <FooterIcon logoSrc="images/icon-facebook.svg" />
              <FooterIcon logoSrc="images/icon-twitter.svg" />
              <FooterIcon logoSrc="images/icon-pinterest.svg" />
              <FooterIcon logoSrc="images/icon-instagram.svg" />
            </div>
            <div className="font-bold">
              &copy; {currentYear} BeyondReality. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
