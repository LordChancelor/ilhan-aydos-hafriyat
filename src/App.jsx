import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Hakkinda = lazy(() => import("./pages/Hakkinda"));
const Makineler = lazy(() => import("./pages/Makineler"));
const Galeri = lazy(() => import("./pages/Galeri"));
const Ulasin = lazy(() => import("./pages/Ulasin"));
const KeciorenMiniKepce = lazy(() => import("./pages/KeciorenMiniKepce"));
const CankayaMiniKepce = lazy(() => import("./pages/CankayaMiniKepce"));
const GolbasiMiniKepce = lazy(() => import("./pages/GolbasiMiniKepce"));
const AltindagMiniKepce = lazy(() => import("./pages/AltindagMiniKepce"));
const IncekMiniKepce = lazy(() => import("./pages/IncekMiniKepce"));
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <>
     <ScrollToTop />
      <Navbar />
      <div className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <Routes>
        <Route path="/" element={<Suspense fallback={<div>Yükleniyor...</div>}><Hakkinda /></Suspense>} />
  <Route path="/hakkinda" element={<Suspense fallback={<div>Yükleniyor...</div>}><Hakkinda /></Suspense>} />
  <Route path="/makineler" element={<Suspense fallback={<div>Yükleniyor...</div>}><Makineler /></Suspense>} />
  <Route path="/galeri" element={<Suspense fallback={<div>Yükleniyor...</div>}><Galeri /></Suspense>} />
  <Route path="/ulasin" element={<Suspense fallback={<div>Yükleniyor...</div>}><Ulasin /></Suspense>} />
  <Route path="/kecioren-mini-kepce-kiralama" element={<Suspense fallback={<div>Yükleniyor...</div>}><KeciorenMiniKepce /></Suspense>} />
  <Route path="/cankaya-mini-kepce-kiralama" element={<Suspense fallback={<div>Yükleniyor...</div>}><CankayaMiniKepce /></Suspense>} />
  <Route path="/golbasi-mini-kepce-kiralama" element={<Suspense fallback={<div>Yükleniyor...</div>}><GolbasiMiniKepce /></Suspense>} />
  <Route path="/altindag-mini-kepce-kiralama" element={<Suspense fallback={<div>Yükleniyor...</div>}><AltindagMiniKepce /></Suspense>} />
  <Route path="/incek-mini-kepce-kiralama" element={<Suspense fallback={<div>Yükleniyor...</div>}><IncekMiniKepce /></Suspense>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
