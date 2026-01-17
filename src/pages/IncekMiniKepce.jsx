import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQSection from "../components/SSS/FAQSection";

const IncekMiniKepce = () => {
  return (
    <div className="container mx-auto mt-10 p-6 max-w-5xl">
      <Helmet>
        <title>İncek Mini Kepçe Kiralama | İlhan Aydos Hafriyat</title>
        <meta
          name="description"
          content="İncek bölgesinde mini kepçe, bobcat ve ekskavatör kiralama hizmetleri. Bahçe düzenleme, temel kazı ve kırım işleri için profesyonel çözüm."
        />
        <link rel="canonical" href="https://ankaramakinekiralama.com/incek-mini-kepce-kiralama" />
      </Helmet>

      {/* --- OKUNABİLİRLİK İÇİN YENİ SİYAH KUTU BAŞLANGICI --- */}
      <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
        
        {/* BAŞLIK */}
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6 border-b border-zinc-600 pb-4">
          İncek Mini Kepçe Kiralama
        </h1>

        {/* İÇERİK METİNLERİ */}
        <div className="text-lg text-zinc-200 leading-relaxed space-y-4">
          <p>
            <strong className="text-white">İncek bölgesinde mini kepçe kiralama</strong>, ekskavatör kiralama, hafriyat ve kırım işleri için İlhan Aydos Hafriyat olarak sizlere profesyonel çözümler sunuyoruz.
          </p>

          <p>
            <strong className="text-white">Kazı, drenaj, kırım, kanal açma</strong> gibi işlerinizde İncek’e özel hızlı servis ve deneyimli operatör kadromuzla yanınızdayız. Geniş makine filomuzla hem küçük çaplı bireysel hem de büyük çaplı kurumsal projelerde çözüm ortağınız oluyoruz.
          </p>

          {/* Hizmet Listesi Kutusu (İç içe kutu olduğu için rengini biraz daha açtık veya sabit bıraktık) */}
          <div className="bg-white/5 p-6 rounded-xl border-l-4 border-yellow-500 my-8">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Hizmet Detaylarımız:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              {[
                "Mini ekskavatör ile kanal kazımı",
                "Peyzaj ve bahçe düzenleme",
                "Drenaj sistemleri kurulumu",
                "İnşaat yıkımı ve temel açma",
                "Bina içi kırım ve taşıma",
                "Havuz kazısı ve tesviye"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-200">
                  <span className="text-yellow-400 text-xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <p>
            <strong className="text-white">İncek mini kepçe kiralama</strong> hizmetinde hızlı fiyatlandırma, uygun maliyet ve kaliteli hizmet garantisi için hemen bizimle iletişime geçin.
          </p>
        </div>
      </div>
      {/* --- YENİ SİYAH KUTU BİTİŞİ --- */}


      {/* NEDEN BİZ KUTUSU (Zaten koyu renkliydi, uyumlu olması için şeffaflık ekledik) */}
      <div className="bg-black/70 backdrop-blur-sm p-8 rounded-3xl border border-white/10 mt-8 shadow-xl">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Neden İncek'te Bizi Tercih Etmelisiniz?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-300">
          <li className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <span className="text-yellow-400 font-bold text-xl">15+</span> Yıllık Tecrübe
          </li>
          <li className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <span className="text-yellow-400 font-bold text-xl">🚀</span> İncek’e Hızlı Ulaşım
          </li>
          <li className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <span className="text-yellow-400 font-bold text-xl">🚜</span> Yeni Model Makineler
          </li>
          <li className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <span className="text-yellow-400 font-bold text-xl">🕒</span> 7/24 Hizmet Desteği
          </li>
        </ul>
      </div>

      {/* BUTONLAR */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/ulasin"
          className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg text-center transform hover:scale-105"
        >
          Hemen Teklif Alın
        </Link>
        <Link
          to="/galeri"
          className="bg-black/50 border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition text-center backdrop-blur-sm"
        >
          Referansları İncele
        </Link>
      </div>

      {/* SSS */}
      <div className="mt-16 bg-black/70 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10">
        <FAQSection />
      </div>
    </div>
  );
};

export default IncekMiniKepce;