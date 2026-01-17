import { Link } from "react-router-dom";
import { AboutPage } from "../../assets/assets.js";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";
import LazyMap from "../../components/LazyMap";

const {
  authorProfile,
  authorDescription,
  getInTouchUrl,
  authorName,
  profileImgTagLine,
} = AboutPage;

const Hakkinda = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>Ankara Mini Kepçe Kiralama | İlhan Aydos Hafriyat</title>
        <meta
          name="description"
          content="İlhan Aydos Hafriyat olarak Ankara genelinde mini kepçe, bobcat ve ekskavatör kiralama hizmeti sunuyoruz. Hakkımızda detaylı bilgi alın."
        />
        <link rel="canonical" href="https://ankaramakinekiralama.com/" />
      </Helmet>

           {/* Optimized & SEO-Enhanced Hero Section */}
           <section className="relative bg-[url('/assets/hero-bg.webp')] bg-cover bg-center text-white py-16 px-4 mb-10">
  <div className="max-w-6xl mx-auto bg-[#1f1f1f]/90 backdrop-blur-md p-10 md:p-12 rounded-2xl shadow-2xl border-4 border-yellow-500 animate-fade-in">
    <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center">
      Ankara Mini Kepçe Kiralama
    </h1>
    
    <div className="text-zinc-200 text-lg leading-relaxed space-y-4">
      <p>
        İlhan Aydos Hafriyat olarak Ankara genelinde <strong>mini kepçe kiralama</strong>,
        <strong> ekskavatör kiralama</strong>, <strong>bobcat hizmetleri</strong> ve <strong>hafriyat işleri </strong>
          hizmetleri sunmaktayız. Projelerinize uygun, ekonomik ve zamanında çözümler sunarak, tüm Ankara ilçelerine hizmet veriyoruz.
      </p>
      <p>  
         Deneyimli ekibimizle <strong>kanal kazımı</strong>, <strong>temel açma</strong>,
        <strong> inşaat yıkımı</strong>, <strong>drenaj sistemleri kurulumu</strong>, 
        <strong> peyzaj düzenleme</strong>, <strong>kırım işleri</strong> gibi alanlarda profesyonel çözümler sağlıyoruz.
      </p>

      <p>
        <strong>Çankaya, Keçiören, Altındağ, Gölbaşı, İncek</strong> gibi Ankara'nın dört bir yanına hizmet sağlıyoruz. Modern makine parkurumuz ve uzman operatörlerimizle <strong>bahçe düzenleme, temel kazımı, bina yıkım işleri</strong> gibi her türlü kazı ve hafriyat işlerinizde yanınızdayız.
      </p>

      <p>
        İlhan Aydos Hafriyat; <strong>güvenilir, uygun fiyatlı, deneyimli ve müşteri memnuniyetine odaklı</strong> bir hizmet anlayışı ile çalışır. <strong>Mini ekskavatör kiralama, bobcat kiralama, kırıcı kiralama, kanal kazımı, drenaj çalışmaları, peyzaj çalışmaları, hafriyat, yıkım, kırım </strong> gibi işlemleriniz için detaylı bilgi almak veya hızlı teklif talep etmek için hemen bizimle iletişime geçin.
      </p>
    </div>
  </div>
</section>

      {/* About Section */}
      <div className="bg-[#1f1f1f]/80 backdrop-blur-sm text-white flex flex-col bedar-sc1:flex-row justify-between items-center gap-6 mb-10 rounded-2xl px-6 bedar-sc2:px-10 bedar-sc1:px-16 pt-10 pb-6 border-2 border-yellow-500 shadow-md">
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <div className="text-3xl font-semibold text-yellow-400">{authorName}</div>
          <div className="leading-7 text-lg text-zinc-300">{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-yellow-400 text-black px-4 py-2 rounded-full w-fit hover:bg-yellow-300 font-semibold transition"
          >
            Bize Ulaşın
          </Link>
        </div>

        <div className="w-full bedar-sc1:w-1/2 flex justify-center bedar-sc1:justify-end">
          <div className="relative w-full h-full bedar-sc2:w-[25rem] bedar-sc2:h-[25rem] rounded-2xl shadow-md border border-yellow-500 overflow-hidden group">
            <img
              src={authorProfile}
              onLoad={() => setIsLoading(false)}
              className={`aspect-square w-full h-full object-cover ${
                isLoading ? "skeleton" : ""
              }`}
              alt="İlhan Aydos Profil"
            />
            <div className="absolute bottom-0 text-white w-full px-4 py-3 backdrop-blur-md bg-black/30 flex gap-1 justify-center flex-wrap text-center opacity-0 group-hover:opacity-100 transition">
              <span>{authorName}:</span>
              <span>{profileImgTagLine}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-industrial-light mt-10 p-6">
  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Neden Bizi Seçmelisiniz?</h2>
  <ul className="list-disc pl-5 space-y-2 text-zinc-200">
    <li>15+ Yıllık Hafriyat Tecrübesi</li>
    <li>Mini Kepçe, Bobcat, Ekskavatör Kiralama</li>
    <li>Hızlı İletişim ve Anında Fiyatlandırma</li>
    <li>Profesyonel Operatör Hizmeti</li>
    <li>Ankara Geneli Hizmet Ağı</li>
  </ul>
</div>
<div className="container-industrial-light mt-10 p-6">
  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Müşteri Yorumları</h2>
  <div className="space-y-4">
    <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-md">
      <p className="text-sm italic">“Denli ormancılık olarak İlhan beyin ekibinden çok memnunuz Allah yolunu açık etsin 10 numara.”</p>
      <div className="mt-2 text-yellow-400 font-bold">— Lokman DENLİ</div>
    </div>
    <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-md">
      <p className="text-sm italic">“Evimizin bahçesine 2 kere havuz yaptırmak için bir çok hafriyat işletmesini aradık, ama en temiz en titiz ve en ilgili İlhan Aydos beyefendi ilgilendi şuanda havuzumuzu bitirdi.Çok güzel bir ekip çalışması ile işimizi teslim etti gayet güvenilir ekonomik şartlarınıza göre sizleri üzmeyen bir ANKARA BEYEFENDİSİ ben de bir mühendis olarak tüm işlerimizi İlhan bey yaptıracağım.”</p>
      <div className="mt-2 text-yellow-400 font-bold">— Tuncay ÇELİK</div>
    </div>
    <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-md">
      <p className="text-sm italic">“Tecrübeleri kesinlikle tartışılmaz.Yıllardır çalıştığımız işimizi güvenle teslim ettiğimiz temiz insanlar.Özverinizden dolayı teşekkürler.Başarınız daim olsun.”</p>
      <div className="mt-2 text-yellow-400 font-bold">— Yasin YILDIZ</div>
    </div>
  </div>
</div>

<div className="mt-10 p-4 bg-[#1f1f1f]/80 backdrop-blur-sm border-4 border-yellow-500 rounded-xl shadow-xl">
  <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Konumumuz</h2>
  <LazyMap />
</div>
<div className="mt-16 bg-[#1f1f1f]/70 backdrop-blur-md border border-yellow-500 rounded-2xl shadow-2xl p-8">
  <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
    Bölgeye Özel Hizmet Sayfalarımız
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    {[
      { name: "Keçiören", path: "/kecioren-mini-kepce-kiralama" },
      { name: "Çankaya", path: "/cankaya-mini-kepce-kiralama" },
      { name: "Gölbaşı", path: "/golbasi-mini-kepce-kiralama" },
      { name: "Altındağ", path: "/altindag-mini-kepce-kiralama" },
      { name: "İncek", path: "/incek-mini-kepce-kiralama" },
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



    </>
  );
};

export default Hakkinda;
