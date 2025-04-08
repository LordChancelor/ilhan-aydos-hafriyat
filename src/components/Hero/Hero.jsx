const Hero = () => {
    return (
      <section className="relative bg-[url('/assets/hero-bg.webp')] bg-cover bg-center text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center bg-[#1f1f1fcc] backdrop-blur-md p-10 rounded-xl shadow-xl border-4 border-yellow-500">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
            Ankara Mini İş Makinesi Kiralama
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            İlhan Aydos Hafriyat olarak Ankara genelinde profesyonel mini kepçe,
            ekskavatör ve bobcat kiralama hizmeti sunuyoruz.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  