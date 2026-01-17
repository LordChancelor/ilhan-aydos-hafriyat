import { useState } from "react";
import { containerStyle } from "../../pages/styles";
import { PageTitle } from "../components";
import { AboutPage, footerIcons } from "../../assets/assets";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LinkStyles = `flex items-center gap-2 hover:text-yellow-400 transition-colors ease-linear`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  return (
    <div id="Ulaşın" className={`${containerStyle}`}>
      <PageTitle title={"Ulaşın"} />
      
      <div className="flex flex-col bedar-sc2:flex-row bg-[#1f1f1f] rounded-xl overflow-hidden border-4 border-yellow-500 shadow-xl">
        <div className="hidden bedar-sc2:flex justify-center items-center w-1/2 bg-black">
          <img
            src={`${import.meta.env.BASE_URL}bize-ulaşın.webp`}
            onLoad={() => setIsLoading(false)}
            className={`${
              isLoading ? "skeleton w-96 h-80" : "w-full h-auto object-cover"
            }`}
            alt="contact-us-image"
          />
        </div>
        <div className="w-full bedar-sc2:w-1/2 flex flex-col items-center gap-1 py-12 px-5 text-white font-light leading-[26px] text-[18px]">
          <img
            onLoad={() => setIsProfileLoading(false)}
            src={AboutPage.authorProfile}
            className={`bg-zinc-700 w-36 h-36 rounded-full border-4 border-yellow-500 shadow-md ${
              isProfileLoading ? "skeleton" : ""
            }`}
            alt="author-profile"
          />
          <h1 className="text-4xl bedar-sc2:text-5xl font-extrabold text-yellow-400 my-4 text-center">
            Bize Ulaşın
          </h1>
          <div className="text-center mb-4 text-zinc-300">
            İşiniz hakkında detaylı bilgi almak için, iş planı yapmak için, işinize uygun kepçe bilgisi almak için, güncel fiyat listesi ve profesyonel hizmet için bize ulaşın.
          </div>
          <Link to={`mailto:${AboutPage.authorContactMail}`} className={LinkStyles}>
            <MdEmail className="w-6 h-6" />
            <span>{AboutPage.authorContactMail}</span>
          </Link>
          <Link to={`tel:${AboutPage.authorContactNumber}`} className={LinkStyles}>
            <FaPhoneAlt className="w-[18px] h-[18px]" />
            <span>{AboutPage.authorContactNumber}</span>
          </Link>
          <div className="flex justify-center gap-3 flex-wrap mt-6">
            {footerIcons.map(({ name, component: IconComponent, link }, index) => (
              <Link to={link} key={index} title={name}>
                <IconComponent className="h-9 w-9 rounded-lg text-zinc-400 hover:text-yellow-400 transition-colors ease-in-out" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
