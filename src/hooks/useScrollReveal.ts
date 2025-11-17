import { useEffect } from "react";

const useScrollReveal = (selector = "[data-animate]") => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-view");
          } else {
            entry.target.classList.remove("animate-in-view");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${index * 40}ms`);
      element.classList.add("animate-init");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [selector]);
};

export default useScrollReveal;
