import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import TadobaZones from "./TadobaZones";
import TourPackages from "./TourPackages";
import NewsBlogs from "./NewsBlogs";
import Tourism from "./tourism";
import Banner from "./Banner";
import CorbettSection from "./CorbettSection";
import ImportantLinks from "./ImportantLinks";
import Faq from "./faq";
import MustSeeAttractions from "./MustSeeAttractions";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <TadobaZones />
      <MustSeeAttractions />
      <TourPackages />
      <CorbettSection />
      <Tourism />
      <NewsBlogs />
      <Faq />
      <ImportantLinks />
      <Footer />
    </>
  );
}

export default Home;
