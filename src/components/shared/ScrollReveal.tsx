"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const alvos = document.querySelectorAll<HTMLElement>(
      "main > section:not(:first-child), [data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    alvos.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
