import { FaFacebook, FaInstagram } from "react-icons/fa"; // Facebook et Instagram
import { SiSnapchat, SiTiktok } from "react-icons/si"; // Snapchat et TikTok

const Footer = () => {
  // Couleurs officielles des réseaux sociaux
  const socialColors = {
    facebook: "#1877F2", // Bleu officiel de Facebook
    snapchat: "#FFFC00", // Jaune officiel de Snapchat (avec contour noir)
    instagram: "#E1306C", // Rose/Gradient d'Instagram (simplifié en rose ici)
    tiktok: "#000000", // Noir officiel de TikTok (parfois avec des accents teal/rose)
  };

  return (
    <footer className="bg-[var(--background-color)] py-4 w-full text-center mt-auto">
      <div className="container-padding flex justify-center gap-6">
        <a
          href="https://www.facebook.com/share/19TxaTrAMG/?mibextid=wwXIfr" 
          target="_blank"
          rel="noopener noreferrer"
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
        >
          <SiSnapchat
            className="text-2xl hover:opacity-80"
            style={{ color: socialColors.snapchat }}
          />
        </a>
      </div>
      <p className="text-sm mt-2 text-gray-600">
        © 2025 La Masión de Glace. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;