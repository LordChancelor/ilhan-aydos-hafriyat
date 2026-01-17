// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "x", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: null, // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: null, // Replace with your actual LinkedIn URL
  },
  {
    name: "facebook",
    component: FaFacebookSquare, // Facebook icon
    link: null,
  },
  {
    name: "instagram",
    component: FaInstagramSquare, // Instagram icon
    link: null,
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Ilhan Aydos Hafriyat"; // Replace with your name or brand name
const imgLogo = `${import.meta.env.BASE_URL}bar-logo.webp`; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = [
  { label: "Hakkında", path: "/hakkinda" },
  { label: "Makineler", path: "/makineler" },
  { label: "Galeri", path: "/galeri" },
  { label: "Ulaşın", path: "/ulasin" },
];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: `${import.meta.env.BASE_URL}logo.webp`, // Your profile image link
  authorDescription:
    "Sektörde 15+ yılı aşkın zamandır hizmet vermekteyiz yılların verdiği bilgi ve birikimin siz değerli müşterilerimize daha iyi hizmet vermek adına geliştirmeye ve dönüştürmeye  çalışmaktayız.", // Short bio or description about yourself
  getInTouchUrl: "https://www.google.com/maps/place/Ankara+Mini+Kep%C3%A7e+Kiralama/@39.8235302,32.7093661,17z/data=!3m1!4b1!4m6!3m5!1s0x14d33f147d202ea1:0x4ce36fc47a2f2363!8m2!3d39.8235302!4d32.7093661!16s%2Fg%2F11mpml52cp?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D", // URL for your contact or form page
  authorName: "İlhan Aydos Hafriyat", // Replace with your name
  profileImgTagLine: "Ankara mini kepçe kiralama", // Your tagline or job title
  authorContactMail: "ilhanaydos06@hotmail.com", // Your email address
  authorContactNumber: "05323204800", // Your contact number (optional)
};

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const MachinesPage = [
  {
    img: `${import.meta.env.BASE_URL}ankara-bobcat-kiralama.webp`, // Certificate image URL
    title: "Bobcat ", // Certificate title
    description: "Dar alanlar için yüksek manevra kabiliyetine sahiptir.  Yükseklik:215cm   Genişlik:185cm", // Short description of the certification
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: `${import.meta.env.BASE_URL}ankara-mini-ekskavatör-kiralama.webp`, // Certificate image URL
    title: "3.5 Ton Ekskavatör", // Certificate title
    description: "Bina yıkım,güçlendirme,peyzaj ve drenaj işlerinde yüksek verim sağlar.   Yükseklik:251cm  Genişlik:170cm", // Short description of the certification
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: `${import.meta.env.BASE_URL}ankara-makine-kiralama.webp`, // Certificate image URL
    title: "Mini Ekskavatör", // Certificate title
    description: "Bina içi kırım ve peyzaj çalışmalarında yüksek verim sağlar.    Yükseklik:241cm   Genişlik:130cm", // Short description of the certification
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: `${import.meta.env.BASE_URL}ankara-makina-kiralama.webp`, // Certificate image URL
    title: "Mini Ekskavatör", // Certificate title
    description: "Bina yıkım,güçlendirme,peyzaj ve drenaj işlerinde yüksek verim sağlar.      Yükseklik:241cm   Genişlik:130cm", // Short description of the certification
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: `${import.meta.env.BASE_URL}ankara-kepce-kiralama.webp`, // Certificate image URL
    title: "Bobcat", // Certificate title
    description: "Bina yıkım,güçlendirme,peyzaj ve drenaj işlerinde yüksek verim sağlar.      Yükseklik:251cm   Genişlik:170cm", // Short description of the certification
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: `${import.meta.env.BASE_URL}ankara-ekskavatör-kiralama.webp`, // Certificate image URL
    title: "13-20-30 Ton Ekskavatör", // Certificate title
    description: "Bina yıkım,kanal ve hafriyat işlerinde yüksek verim sağlar.                           ", 
    issuedBy: "İlhan Aydos Hafriyat", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.



// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  MachinesPage,
};
