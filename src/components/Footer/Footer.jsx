import { Link } from "react-router-dom";
import { imgLogo, textLogo, footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="bg-[#1f1f1f] border-t-4 border-yellow-500 text-white flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-3 bedar-sm:gap-0 px-5 bedar-sc1:px-20 py-6 mt-10 shadow-inner">
      <div>
        {imgLogo ? (
          <img 
          src={imgLogo} 
          alt="İlhan Aydos Hafriyat Logo – Ankara Mini Kepçe Kiralama"
          className="w-[120px] h-[40px]"  // Set both width and height
          width="120"
          height="40"
        />
        
        ) : (
          <a
            href={`#${navElements[0]}`}
            onClick={() => setActiveElem(navElements[0])}
            className="text-white select-none text-[24px] bedar-sm:text-2xl font-semibold"
          >
            {textLogo}
          </a>
        )}
      </div>

      <div className="flex gap-4">
        {footerIcons.map(({ name, component: IconComponent, link }) => (
          link && !link.includes("Your") ? (
            <Link
              to={link}
              key={name}
              className="flex"
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent className="w-6 bedar-sm:w-9 h-6 bedar-sm:h-9 p-1 rounded-md text-zinc-300 hover:text-yellow-400 hover:bg-zinc-700 transition-all ease-in-out duration-200" />
            </Link>
          ) : (
            <span
              key={name}
              title={`${name} - bağlantı yok`}
              className="cursor-not-allowed opacity-40"
            >
              <IconComponent className="w-6 bedar-sm:w-9 h-6 bedar-sm:h-9 p-1 rounded-md text-zinc-500" />
            </span>
          )
        ))}
      </div>
    </div>
  );
};

export default Footer;
