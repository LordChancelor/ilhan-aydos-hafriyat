import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Certificate = ({ isFlexShrink, img, title, description, issuedBy, credentialURL }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`${
        isFlexShrink && "w-[300px] flex-shrink-0"
      } min-h-[470px] bg-[#2b2b2b] text-white flex flex-col justify-between rounded-xl p-4 border-2 border-yellow-500 shadow-lg overflow-hidden`}
    >
      {/* Image Wrapper */}
      <div className="h-[200px] flex justify-center items-center bg-[#1f1f1f] rounded-lg mb-2">
        <img
          src={img}
          alt={title || "Makine görseli"}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={`max-h-full max-w-full object-contain transition-opacity duration-300 ease-in-out ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Title */}
      <strong className="text-xl text-yellow-400 mb-1">{title}</strong>

      {/* Description */}
      <p className="text-sm text-zinc-300 flex-1 line-clamp-4">{description}</p>

      {/* Footer: Issuer + Link */}
      <div className="flex justify-between items-center text-sm text-zinc-400 mt-4">
        <div className="font-semibold" title={`Sahibi: ${issuedBy}`}>
          {issuedBy}
        </div>
        {credentialURL && (
          <Link
            to={credentialURL}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors ease-linear font-semibold"
            title="Makine detayını görüntüle"
          >
            <IoEyeSharp className="w-5 h-5" />
            Görüntüle
          </Link>
        )}
      </div>
    </div>
  );
};

export default Certificate;
