import { useState, useEffect } from "react";

const LazyMap = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: "200px" }
    );
    const el = document.querySelector("#google-map");
    if (el) observer.observe(el);
  }, []);

  return (
    <div id="google-map" className="w-full h-[400px] rounded-xl overflow-hidden border border-yellow-500 shadow-md">
      {loaded && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.0170884920708!2d32.70974667529301!3d39.823693882011646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33f147d202ea1%3A0x4ce36fc47a2f2363!2sAnkara%20Mini%20Kep%C3%A7e%20Kiralama!5e0!3m2!1str!2str!4v1744802761459!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="İlhan Aydos Hafriyat Konumu"
        />
      )}
    </div>
  );
};

export default LazyMap;
