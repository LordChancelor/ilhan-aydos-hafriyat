import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FAQSection from "../components/SSS/FAQSection";
import LazyMap from "../components/LazyMap.jsx";

const LinkStyles = `flex items-center gap-2 hover:text-yellow-400 transition-colors ease-linear`;

const Ulasin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  return (
    <div id="Ulaşın" className={`${containerStyle}`}>
      <Helmet>
        <title>Bize Ulaşın | Ankara Mini Kepçe Kiralama</title>
        <meta
          name="description"
          content="İlhan Aydos Hafriyat ile iletişime geçin. Ankara genelinde mini kepçe, ekskavatör ve hafriyat hizmetleri."
        />
        <link rel="canonical" href="https://ankaramakinekiralama.com/ulasin" />
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "İlhan Aydos Hafriyat",
  "image": "https://ankaramakinekiralama.com/logo.webp",
  "url": "https://ankaramakinekiralama.com/",
  "telephone": "+905323204800",
  "email": "ilhanaydos06@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ankara",
    "addressRegion": "TR",
    "addressCountry": "Turkey"
  },
  "description": "Ankara’da mini kepçe, ekskavatör, bobcat kiralama ve hafriyat işleri. Gölbaşı, İncek, Keçiören ve Çankaya bölgelerinde hızlı hizmet.",
  "openingHours": "Mo-Sa 08:00-20:00"
}
`}
</script>

      </Helmet>

      <PageTitle title={"Ulaşın"} />

<div className="bg-[#1f1f1f] border-4 border-yellow-500 shadow-xl rounded-xl p-6 flex flex-col gap-6 mb-10">
  {/* Top Section with Image & Title */}
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-4xl bedar-sc2:text-5xl font-extrabold text-yellow-400 text-center">
      Bize Ulaşın
    </h1>
    <p className="text-center text-zinc-300 max-w-2xl">
      İşiniz hakkında detaylı bilgi almak için, iş planı yapmak için, işinize uygun kepçe seçimi, güncel fiyat listesi ve hizmet detayları için bizimle iletişime geçebilirsiniz.
    </p>
  </div>

  {/* Contact Info */}
  <div className="flex flex-col items-center gap-3">
    <img
      src={AboutPage.authorProfile}
      alt="author-profile"
      onLoad={() => setIsProfileLoading(false)}
      className={`w-36 h-36 rounded-full border-4 border-yellow-500 shadow-md ${isProfileLoading ? "skeleton" : ""}`}
    />

    <Link to={`mailto:${AboutPage.authorContactMail}`} className={LinkStyles}>
      <MdEmail className="w-6 h-6" /> <span>{AboutPage.authorContactMail}</span>
    </Link>
    <Link to={`tel:${AboutPage.authorContactNumber}`} className={LinkStyles}>
      <FaPhoneAlt className="w-[18px] h-[18px]" /> <span>{AboutPage.authorContactNumber}</span>
    </Link>

    <a
      href="https://wa.me/905323204800"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition mt-2 flex items-center gap-2"
    >
      <FaWhatsapp className="w-5 h-5" />
      WhatsApp ile İletişime Geç
    </a>

    <div className="flex justify-center gap-3 flex-wrap mt-4">
      {footerIcons.map(({ name, component: IconComponent, link }, index) => (
        <Link to={link} key={index} title={name}>
          <IconComponent className="h-9 w-9 rounded-lg text-zinc-400 hover:text-yellow-400 transition-colors ease-in-out" />
        </Link>
      ))}
    </div>
  </div>
</div>
 {/* SSS / FAQ Section */}
 <div className="bg-[#1f1f1f] border-2 border-yellow-500 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">SSS</h2>
        <FAQSection />
      </div>
      {/* Google Map */}
      <div className="mt-10 p-4 bg-[#1f1f1f]/80 backdrop-blur-sm border-4 border-yellow-500 rounded-xl shadow-xl">
  <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Konumumuz</h2>
  <LazyMap />
</div>
    </div>
  );
};

export default Ulasin;
