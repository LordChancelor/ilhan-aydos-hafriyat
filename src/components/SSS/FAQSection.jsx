// src/components/SSS/FAQSection.jsx
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Mini kepçeler hangi işler için uygundur?",
    answer:
      "Mini kepçeler bina yıkımı, drenaj, hafriyat ve peyzaj gibi dar alanlı işler için idealdir.",
  },
  {
    question: "Kiralama süresi ne kadar olabilir?",
    answer:
      "Günlük, haftalık veya aylık olarak esnek kiralama seçeneklerimiz mevcuttur.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Ankara genelinde hizmet sunmaktayız. Özellikle İncek, Çankaya, Gölbaşı, Keçiören gibi bölgelerde yoğun olarak çalışıyoruz.",
  },
  {
    question: "Operatörlü kiralama yapıyor musunuz?",
    answer: "Evet, tecrübeli operatörlerimiz ile birlikte kiralama yapılabilir.",
  },
  {
    question: "Fiyatlara nakliye dahil mi?",
    answer:
      "Fiyatlara nakliye dahil değildir ancak uygun fiyatla nakliye hizmeti de sunuyoruz.",
  },
  {
    question: "Peyzaj uygulaması ve projelendirme yapıyor musunuz?",
    answer:
      "Evet, bünyemizde bulunan mimarımız projelendirme ve uygulama çalışmaları yapmaktadır.",
  },
  {
    question: "Moloz nakliyesi yapıyor musunuz?",
    answer:
      "Evet, kamyon ve kamyonet sınıfı araçlarımızla moloz nakliyesi de yapıyoruz.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="my-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        Sıkça Sorulan Sorular
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-yellow-500 rounded-lg shadow-sm bg-[#1f1f1f] text-white"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-5 py-4 focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-5 pb-4 text-zinc-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
