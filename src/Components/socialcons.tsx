import { FaGithub, FaLinkedin, FaTwitter,  } from "react-icons/fa";

const SocialIcons = () => (
  <div className="flex gap-4 mt-4 text-2xl text-gray-600">
    <a
      href="https://github.com/Githup-hana"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://linkedin.com/in/deinProfil"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
   <a href="https://x.com/hanaabrham25"    target="_blank"
      rel="noopener noreferrer"
      aria-label="x">   <FaTwitter /></a>
   
  </div>
);

export default SocialIcons;