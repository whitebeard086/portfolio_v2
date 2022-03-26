import { useState, useEffect } from "react";
import { ScrollButton, ScrollButtonContainer, ScrollIcon } from "./ScrollToTopStyles";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <ScrollButtonContainer>
        <ScrollButton type="button" onClick={scrollToTop} isVisible={isVisible}>
          <ScrollIcon  />
        </ScrollButton>
      </ScrollButtonContainer>
    </>
  );
};

export default ScrollToTop;
