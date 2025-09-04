import image from "../images/footerimage/image.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-16 mt-30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Column 1: Logo + Text + Socials */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">E-sheba</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
          </p>
          <p className="text-sm mb-4">
            In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis
            id semper.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook
              className="text-white hover:text-blue-300 cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-white hover:text-blue-300 cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-white hover:text-blue-300 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Our Mission</li>
            <li>Our Team</li>
          </ul>
        </div>

        {/* Column 3: Address (Map Image Placeholder) */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <div className="w-full h-[160px] rounded-lg overflow-hidden">
            <img src={image} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-blue-400 mt-10 pt-6 text-center text-sm">
        © 2022 All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
