import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom"; // 1. Adres çubuğunu kontrol etmek için bunu ekledik
import AboutSection from "../components/About/About";

const Hakkinda = () => {
  const location = useLocation(); // Mevcut URL yolunu alıyoruz
  const isHomePage = location.pathname === "/"; // Eğer yol "/" ise, Ana Sayfadayız demektir

  return (
    <>
      <Helmet>
        {/* Başlık ve Açıklama: Ana sayfa ve Hakkında sayfası için farklı olsun */}
        <title>
          {isHomePage 
            ? "Ankara Mini Kepçe Kiralama | İlhan Aydos Hafriyat" 
            : "Hakkımızda | İlhan Aydos Hafriyat - Ankara"}
        </title>
        
        <meta 
          name="description" 
          content={isHomePage
            ? "Ankara'da kiralık mini kepçe, ekskavatör, bobcat ve hafriyat işleri. Uygun fiyatlı, hızlı ve profesyonel iş makinesi kiralama hizmetleri."
            : "Ankara mini kepçe kiralama sektöründe 15 yıllık tecrübe. İlhan Aydos Hafriyat vizyonu ve müşteri memnuniyeti ilkelerimiz."
          }
        />

        {/* KRİTİK KISIM: Canonical Link Dinamik Yapıldı */}
        <link 
          rel="canonical" 
          href={isHomePage 
            ? "https://ankaramakinekiralama.com/" 
            : "https://ankaramakinekiralama.com/hakkinda"
          } 
        />
      </Helmet>

      <AboutSection />
    </>
  );
};

export default Hakkinda;