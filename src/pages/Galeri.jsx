import { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async"; // 1. BU SATIRI EKLEDİK
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const Gallery = lazy(() => import("../components/Gallery/Gallery"));

const Galeri = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="Galeri" className={`${containerStyle}`}>
      
      {/* 2. BU HELMET BLOĞUNU EKLEDİK - SEO AYARLARI */}
      <Helmet>
        {/* Tarayıcı sekmesinde görünecek başlık */}
        <title>Galeri - Ankara Mini Kepçe Kiralama Görselleri</title> 
        
        {/* Google'da çıkacak açıklama yazısı */}
        <meta 
          name="description" 
          content="Ankara'da tamamladığımız mini kepçe, hafriyat, kırım ve yıkım işlerine ait fotoğraf galerisi. İş makinelerimizi ve referans çalışmalarımızı inceleyin." 
        />
        
        {/* KRİTİK KISIM: Google'a bu sayfanın orijinal adresini bildiriyoruz */}
        <link rel="canonical" href="https://ankaramakinekiralama.com/galeri" />
      </Helmet>
      {/* HELMET SONU */}

      <PageTitle title={"Galeri"} />

      <Suspense fallback={<div>Galerimiz Yükleniyor...</div>}>
        <Gallery />
      </Suspense>

      {/* Optional: A back to homepage or explore button */}
      <div>
        <Link to="/" className="flex justify-center mt-10">
          <button
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Anasayfa
            {isHovered ? (
              <IoArrowBackOutline className="w-5 h-5 transition-transform duration-300 transform -rotate-180" />
            ) : (
              <IoIosArrowForward className="w-5 h-5 transition-transform duration-300" />
            )}
          </button>
        </Link>
      </div>

      <div className="mt-16 bg-[#1f1f1f]/70 backdrop-blur-md border border-yellow-500 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Bölgeye Özel Hizmet Sayfalarımız
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Keçiören", path: "/kecioren-mini-kepce-kiralama" },
            { name: "Çankaya", path: "/cankaya-mini-kepce-kiralama" },
            { name: "Gölbaşı", path: "/golbasi-mini-kepce-kiralama" },
            { name: "Altındağ", path: "/altindag-mini-kepce-kiralama" },
          ].map(({ name, path }, i) => (
            <Link
              to={path}
              key={i}
              className="bg-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition-colors duration-300 rounded-xl p-5 flex items-center gap-3 border border-zinc-700 hover:border-yellow-500"
            >
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              <span className="font-semibold text-lg">{name} Mini Kepçe Kiralama</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeri;