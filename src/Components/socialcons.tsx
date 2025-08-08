import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    {
      href: "https://github.com/Githup-hana",
      icon: <FaGithub />,
      label: "GitHub",
      hoverClass: "hover:text-gray-200 dark:hover:text-gray-100 hover:scale-125 hover:drop-shadow-xl"
    },
    {
      href: "https://www.linkedin.com/in/hana-abrham25/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      hoverClass: "hover:text-blue-300 dark:hover:text-blue-200 hover:scale-125 hover:drop-shadow-xl"
    },
    {
      href: "https://x.com/hanaabrham25",
      icon: <FaTwitter />,
      label: "Twitter",
      hoverClass: "hover:text-sky-300 dark:hover:text-sky-200 hover:scale-125 hover:drop-shadow-xl"
    },
    {
      href: "mailto:hanaabrham25@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
      hoverClass: "hover:text-red-300 dark:hover:text-red-200 hover:scale-125 hover:drop-shadow-xl"
    }
  ];

  return (
    <div className="flex gap-8 justify-center items-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`
            text-white/70 dark:text-app-text-dark/80 text-3xl
            transform transition-all duration-300
            hover:-translate-y-2 hover:drop-shadow-2xl
            dark:hover:drop-shadow-[0_10px_20px_rgba(232,221,212,0.3)]
            ${social.hoverClass}
          `}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;