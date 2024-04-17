import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-0	right-5	p-4 bg-black color mb-4 ml-4 text-white	 rounded"
        >
          Go Up
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
