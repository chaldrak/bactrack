import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section";
import QuickSearchSection from "../../components/quick-search-section";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    const section = document.getElementById(hash.substring(1));

    section && scrollToTarget(section, 70);
  }, [location]);

  function scrollToTarget(element, offset) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  return (
    <>
      <HeroSection />
      <QuickSearchSection />
    </>
  );
};

export default Home;
