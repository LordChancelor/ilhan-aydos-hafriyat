import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import Gallery from "../components/Project/Gallery"; // ✅ Make sure Gallery is default exported

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="Galeri" className={`${containerStyle}`}>
      <PageTitle title={"Galeri"} />

      {/* Gallery Section - Image Slider */}
      <div className="gallery-section">
        <Gallery />
      </div>

      {/* Back to Home / More Projects Button */}
      <div>
        <Link to={"/"} className="flex justify-center mt-5">
          
        </Link>
      </div>
    </div>
  );
};

export default Projects;
