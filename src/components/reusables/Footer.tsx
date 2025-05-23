import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiSnapchat, SiTiktok } from "react-icons/si";

const Footer = () => {
  const socialColors = {
    facebook: "#1877F2",
    snapchat: "#FFFC00",
    instagram: "#E1306C",
    tiktok: "#000000",
  };

  return (
    <footer className="bg-gray-100 py-4 w-full text-center mt-auto">
      <div className="container-padding flex justify-center gap-6">
        <a
          href="https://www.facebook.com/share/19TxaTrAMG/?mibextid=wwXIfr" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook
            className="text-2xl hover:opacity-80"
            style={{ color: socialColors.facebook }}
          />
        </a>
        <a
          href="https://www.instagram.com/maison_de_la_creme_glacee?igsh=dmF5cWNwMmZvMHpr" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            className="text-2xl hover:opacity-80"
            style={{ color: socialColors.instagram }}
          />
        </a>
        <a
          href="https://www.tiktok.com/@lamaisondelacremeglacee?_t=ZM-8wZ7uusTGFi&_r=1" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <SiTiktok
            className="text-2xl hover:opacity-80"
            style={{ color: socialColors.tiktok }}
          />
        </a>
        <a
          href="https://snapchat.com/add/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Snapchat"
        >
          <SiSnapchat
            className="text-2xl hover:opacity-80"
            style={{ color: socialColors.snapchat }}
          />
        </a>
      </div>
      <p className="text-sm mt-2 text-gray-600">
        © 2025 La Maison de la Crème Glacée. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;