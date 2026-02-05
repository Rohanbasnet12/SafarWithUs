import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server"; // optional for SSR context
import "./App.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import FloatingEnquiry from "./Component/GeneralEnquiry";

// Import components are visible here
import Aboutpage from "./Component/pages/Aboutpage";
import Home from "./Component/Home";
import Moharli from "./Component/pages/Moharli";
import AgarzariGate from "./Component/pages/AgarzariGate";
import JunonaGate from "./Component/pages/JunonaGate";
import KhutwandaGate from "./Component/pages/KhutwandaGate";
import KolaraGate from "./Component/pages/KolaraGate";
import NavegaonGate from "./Component/pages/NavegaonGate";
import ZariGate from "./Component/pages/ZariGate";
import SafariGate from "./Component/pages/SafariGate";
import Tourismzone from "./Component/pages/Tourismzone";
import CanterSafari from "./Component/pages/CanterSafari";
import PermitTips from "./Component/pages/PermitTips";
import CovidPage from "./Component/pages/CovidPage";
import RanthamboreHistory from "./Component/pages/RanthamboreHistory";
import HowToReach from "./Component/pages/HowToReach";
import HowToPlan from "./Component/pages/HowToPlan";
import TimeToVisit from "./Component/pages/TimeToVisit";
import TermandCondition from "./Component/pages/TermandCondition";
import PrivacyPolicy from "./Component/pages/PrivacyPolicy";
import Refund from "./Component/pages/Refund";
import Climate from "./Component/pages/Climate";
import TadobaFaqs from "./Component/pages/TadobaFaqs";
import RanthamboreFort from "./Component/pages/RanthamboreFort";
import TadobaMap from "./Component/pages/TadobaMap";
import TadobaFlora from "./Component/pages/TadobaFlora";
import TadobaFauna from "./Component/pages/TadobaFauna";
import SafariBooking from "./Component/pages/SafariBooking";
import TravellerDetails from "./Component/pages/TravellerDetails";
import TourPackage from "./Component/pages/TourPackage";
import PaymentSuccess from "./Component/Paymentsucessful";
import TourPackageDetail from "./Component/pages/TourPackageDetail";
import HotelPage from "./Component/pages/HotelPage";
import HotelDetails from "./Component/pages/HotelDetails";
import ReviewBookingHotel from "./Component/pages/ReviewBookingHotel";
import RanthamboreGeography from "./Component/pages/RanthamboreGeography";
import GoldenTraingleTourPackage from "./Component/pages/GoldenTraingleTourPackage";
import ElevenDayGoldenTriangleWildlifeTour from "./Component/pages/ElevenDayGoldenTriangleWildlifeTour";
import SixDayGoldenTriangleWildlifeTour from "./Component/pages/SixDayGoldenTriangleWildlifeTour";
import SevenDayHeritageTourPackage from "./Component/pages/SevenDayHeritageTourPackage";
import WeekendWildlifeGetawayTourPackage from "./Component/pages/WeekendWildlifeGetawayTourPackage";
import SixDayDelhiRanthamboreWildlifeTourPackage from "./Component/pages/SixDayDelhiRanthamboreWildlifeTourPackage";
import SevenToEightDayGoldenTraingleTourPackage from "./Component/pages/SevenToEightDayGoldenTraingleTourPackage";
import PaymentPage from "./Component/pages/PaymentPage";
import ReviewBookingTour from "./Component/pages/ReviewBookingTour";
import Birdwatching from "./Component/pages/Birdwatching";
import ChambalBoatSafari from "./Component/pages/ChambalBoatSafari";
import BestPlacesToVisit from "./Component/pages/BestPlacesToVisit";
import ContactUs from "./Component/pages/ContactUs";
import TestTailwind from "./Component/tailwindtest";
import NewsBlogDetail from "./Component/pages/NewsBlogDetail";
import SafariBookingSuccess from "./Component/pages/SafariBookingSuccess";
import BestTigerZone from "./Component/pages/BestTigerZone";
import HotelDevVilas from "./Component/pages/HotelDevVilas";
import RajPalaceResort from "./Component/pages/RajPalaceResort";
import AnuragaPalace from "./Component/pages/AnuragaPalace";
import AmanIKhas from "./Component/pages/AmanIKhas";
import NahargarhRanthambhore from "./Component/pages/NahargarhRanthambhore";
import TigerDenResort from "./Component/pages/TigerDenResort";
import RanthamboreSafari from "./Component/pages/RanthamboreSafari";
import JeepSafari from "./Component/pages/JeepSafari";
import RanthamborePermitTips from "./Component/pages/RanthamborePermitTips";

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}`;

function App({ router, location, settings: initialSettings }) {
  const [settings, setSettings] = useState(initialSettings || null);

  useEffect(() => {
    if (!initialSettings) {
      axios
        .get(`${BASE_URL}/api/global-setting`)
        .then((res) => setSettings(res.data))
        .catch((err) => console.error("Failed to fetch global settings", err));
    }
  }, [initialSettings]);

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/moharli" element={<Moharli />} />
      <Route path="/agarzari-gate" element={<AgarzariGate />} />
      <Route path="/best-places-to-visit" element={<BestPlacesToVisit />} />
      <Route
        path="/9-day-Golden-Triangle-Wildlife-Tour-Package"
        element={<GoldenTraingleTourPackage />}
      />
      <Route
        path="/7-day-Heritage-Tour-Package"
        element={<SevenDayHeritageTourPackage />}
      />
      <Route
        path="/11-day-Golden-Triangle-Wildlife-Tour-Package"
        element={<ElevenDayGoldenTriangleWildlifeTour />}
      />
      <Route
        path="/6-day-Golden-Triangle-Wildlife-Tour-Package"
        element={<SixDayGoldenTriangleWildlifeTour />}
      />
      <Route
        path="/weekend-Wildlife-Tour-Package"
        element={<WeekendWildlifeGetawayTourPackage />}
      />
      <Route
        path="/6-day-delhi-ranthambore-Wildlife-Tour-Package"
        element={<SixDayDelhiRanthamboreWildlifeTourPackage />}
      />
      <Route
        path="/8-day-golden-Triangle-Tour-Package"
        element={<SevenToEightDayGoldenTraingleTourPackage />}
      />
      <Route path="/hotel-dev-vilas" element={<HotelDevVilas />} />
      <Route path="/raj-palace-resort" element={<RajPalaceResort />} />
      <Route path="/anuraga-palace" element={<AnuragaPalace />} />
      <Route path="/aman-i-khas" element={<AmanIKhas />} />
      <Route
        path="/nahargarh-ranthambhore"
        element={<NahargarhRanthambhore />}
      />
      <Route path="/ranthambore-fort" element={<RanthamboreFort />} />
      <Route path="/tiger-den-resort" element={<TigerDenResort />} />
      <Route path="/ranthambore-history" element={<RanthamboreHistory />} />
      <Route path="/ranthambore-safari" element={<RanthamboreSafari />} />
      <Route path="/jeep-safari" element={<JeepSafari />} />
      <Route
        path="/ranthambore-permit-tips"
        element={<RanthamborePermitTips />}
      />
      <Route path="/birdwatching" element={<Birdwatching />} />
      <Route path="/chambal-boat-safari" element={<ChambalBoatSafari />} />
      <Route path="/junonagate-gate" element={<JunonaGate />} />
      <Route path="/khutwanda-gate" element={<KhutwandaGate />} />
      <Route path="/kolara-gate" element={<KolaraGate />} />
      <Route path="/navegaon-gate" element={<NavegaonGate />} />
      <Route path="/zari-gate" element={<ZariGate />} />
      <Route path="/safari-gate" element={<SafariGate />} />
      <Route path="/tourism-zones" element={<Tourismzone />} />
      <Route path="/ranthambore-geography" element={<RanthamboreGeography />} />
      <Route path="/canter-safari" element={<CanterSafari />} />
      <Route path="/permit-tips" element={<PermitTips />} />
      <Route path="/covid-safety-tips" element={<CovidPage />} />
      <Route path="/best-tiger-zone" element={<BestTigerZone />} />
      <Route path="/how-to-reach" element={<HowToReach />} />
      <Route path="/how-to-plan" element={<HowToPlan />} />
      <Route path="/best-time-to-visit" element={<TimeToVisit />} />
      <Route path="/terms-conditions" element={<TermandCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/climate" element={<Climate />} />
      <Route path="/faq" element={<TadobaFaqs />} />
      <Route path="/map" element={<TadobaMap />} />
      <Route path="/flora" element={<TadobaFlora />} />
      <Route path="/fauna" element={<TadobaFauna />} />
      <Route path="/safari-booking" element={<SafariBooking />} />
      <Route path="/travellerdetail" element={<TravellerDetails />} />
      <Route path="/tourpackage" element={<TourPackage />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/tourpackagedetail/:id" element={<TourPackageDetail />} />
      <Route path="/hoteldetail/:id" element={<HotelDetails />} />
      <Route path="/hotels" element={<HotelPage />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
      <Route path="/reviewbookinghotel" element={<ReviewBookingHotel />} />
      <Route path="/booking/:id" element={<ReviewBookingTour />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/tailwindtest" element={<TestTailwind />} />
      <Route path="/news-blog/:slug" element={<NewsBlogDetail />} />
      <Route
        path="/booking-success/:bookingId"
        element={<SafariBookingSuccess />}
      />
    </Routes>
  );

  return (
    <>
      {/* Helmet should render only when settings are available */}
      {settings && (
        <Helmet>
          <title>{settings.metaTitle || "Ranthambore national park"}</title>
          <meta name="description" content={settings.metaDescription} />
          <meta name="keywords" content={settings.metaKeywords} />
          <link rel="icon" href={`${BASE_URL}${settings.faviconUrl}`} />
          <meta property="og:title" content={settings.metaTitle} />
          <meta property="og:description" content={settings.metaDescription} />
          <meta
            property="og:image"
            content={`${BASE_URL}${settings.ogImageUrl}`}
          />
          {settings.analyticsScript && (
            <script
              dangerouslySetInnerHTML={{ __html: settings.analyticsScript }}
            />
          )}
        </Helmet>
      )}

      <FloatingEnquiry />
      {routes}
    </>
  );
}

export default App;
