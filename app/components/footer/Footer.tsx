import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="bg-foody-green-10">
      <div className="max-w-screen-2xl mx-auto px-4">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
