import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";
import { useState } from "react";

const {
  authorProfile,
  authorDescription,
  getInTouchUrl,
  authorName,
  profileImgTagLine,
} = AboutPage;

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        className="bg-[#1f1f1f] text-white flex flex-col bedar-sc1:flex-row justify-between items-center gap-6 mt-[.5rem] bedar-sc2:mt-2 rounded-2xl px-6 bedar-sc2:px-10 bedar-sc1:px-16 pt-8 pb-5 bedar-sc2:py-10 border-4 border-yellow-500 shadow-xl"
        id="Hakkında"
      >
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <div className="text-3xl">
            <strong className="text-yellow-400">{authorName}</strong>
          </div>
          <div className="leading-7 text-lg text-zinc-300">{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-yellow-400 text-black px-4 py-2 rounded-full w-fit hover:bg-yellow-300 hover:text-black font-semibold transition-all ease-linear text-[1rem]"
          >
            Bize Ulaşın
          </Link>
        </div>
        <div className="w-full bedar-sc1:w-1/2 flex justify-center bedar-sc1:justify-end">
          <div className="relative w-full h-full bedar-sc2:w-[25rem] bedar-sc2:h-[25rem] rounded-2xl cursor-pointer shadow-md border border-yellow-500 transition-shadow ease-linear hover:shadow-lg overflow-hidden group">
            <img
              src={authorProfile}
              onLoad={() => setIsLoading(false)}
              className={`bg-[#2c2c2c] aspect-square bedar-sc2:w-full bedar-sc2:h-full object-cover ${
                isLoading ? "skeleton" : ""
              }`}
              alt="author-profile"
            />
            <div
              className="absolute bottom-0 text-white w-full px-4 py-3 backdrop-blur-md bg-black/30 flex gap-1 justify-center flex-wrap text-center transition-all ease-linear invisible opacity-0 group-hover:opacity-100 group-hover:visible"
            >
              <span>{authorName}:</span>
              <span>{profileImgTagLine}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
