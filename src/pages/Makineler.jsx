import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // Link importu eklendi (CTA butonu için)
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { MachinesPage } from "../assets/assets.js";
import Certificate from "../components/Makineler/Makineler.jsx";

const Makineler = () => {
  return (
    <>
      {/* 1. SEO AYARLARI */}
      <Helmet>
        <title>Kiralık İş Makineleri ve Parkurumuz | İlhan Aydos Hafriyat</title>
        <meta
          name="description"
          content="Ankara kiralık mini kepçe, ekskavatör, bobcat ve iş makineleri listesi. Geniş makine parkurumuz ve teknik özellikler."
        />
        <link rel="canonical" href="https://ankaramakinekiralama.com/makineler" />
      </Helmet>

      <div id="Makineler" className={`${containerStyle} max-w-7xl mx-auto`}>
        <PageTitle title={"Makine Parkurumuz"} />

        {/* 2. ÖNE ÇIKAN MAKİNE BÖLÜMÜ */}
        <div className="bg-[#1f1f1f] rounded-2xl border border-zinc-700 p-8 mt-10 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          
          <h3 className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4 relative z-10">
            ⚡ En Çok Tercih Edilen: Mini Ekskavatör
          </h3>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl relative z-10">
            Peyzaj düzenlemeleri, drenaj kazıları ve bina içi yıkım işlerinde yüksek verimlilik sağlar. 
            Kompakt yapısı sayesinde dar alanlara kolayca girer, kauçuk paletleri zemine zarar vermez.
          </p>
        </div>

        {/* 3. KARŞILAŞTIRMA TABLOSU */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-yellow-500">
            Teknik Özellikler ve Karşılaştırma
          </h3>
          
          <div className="overflow-x-auto rounded-xl shadow-2xl border border-zinc-800">
            <table className="w-full text-left text-sm md:text-base border-collapse bg-[#1a1a1a] text-zinc-300">
              <thead>
                <tr className="bg-yellow-500 text-black font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Makine Tipi</th>
                  <th className="py-4 px-6">Yükseklik</th>
                  <th className="py-4 px-6">Genişlik</th>
                  <th className="py-4 px-6">İdeal Kullanım Alanı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                <tr className="hover:bg-zinc-800 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Mini Ekskavatör</td>
                  <td className="py-4 px-6">241 cm</td>
                  <td className="py-4 px-6">130 cm</td>
                  <td className="py-4 px-6 text-yellow-400">Peyzaj / Dar Alanlar</td>
                </tr>
                <tr className="hover:bg-zinc-800 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">3.5 Ton Ekskavatör</td>
                  <td className="py-4 px-6">251 cm</td>
                  <td className="py-4 px-6">170 cm</td>
                  <td className="py-4 px-6 text-yellow-400">Derin Kanal / Yıkım</td>
                </tr>
                <tr className="hover:bg-zinc-800 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Bobcat (Mini Yükleyici)</td>
                  <td className="py-4 px-6">215 cm</td>
                  <td className="py-4 px-6">185 cm</td>
                  <td className="py-4 px-6 text-yellow-400">Tesviye / Malzeme Taşıma</td>
                </tr>
                <tr className="hover:bg-zinc-800 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Büyük Ekskavatör</td>
                  <td className="py-4 px-6">251 cm</td>
                  <td className="py-4 px-6">185 cm</td>
                  <td className="py-4 px-6 text-yellow-400">Hafriyat / Bina Yıkımı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. MAKİNE LİSTESİ (Scroll) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-yellow-500">
            Makine Görselleri
          </h3>
          {/* Scroll Container */}
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-8 custom-scrollbar snap-x snap-mandatory">
            {MachinesPage.map(
              ({ img, title, description, issuedBy, credentialURL }, index) => (
                <div key={index} className="snap-center shrink-0">
                  <Certificate
                    isFlexShrink={true}
                    img={img}
                    title={title}
                    description={description}
                    issuedBy={issuedBy}
                    credentialURL={credentialURL}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* 5. CTA BUTTON (Yeni Eklendi) */}
        <div className="mt-12 flex justify-center pb-10">
          <Link
            to="/ulasin"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1"
          >
            Hangi Makine Size Uygun? Hemen Danışın 📞
          </Link>
        </div>

      </div>
    </>
  );
};

export default Makineler;