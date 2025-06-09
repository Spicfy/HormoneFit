"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    const initScroll = () => {
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        smartphone: {
          smooth: true,
          multiplier: 1,
        },
        tablet: {
          smooth: true,
          multiplier: 1,
        },
      });

      scrollInstance.current = scroll;
    };

    // Initialize scroll
    initScroll();

    // Update scroll on window resize
    const handleResize = () => {
      scroll?.update();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scroll) {
        scroll.destroy();
        scroll = null;
        scrollInstance.current = null;
      }
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (scrollInstance.current) {
      // Reset scroll position
      scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });
      // Update scroll instance
      setTimeout(() => {
        scrollInstance.current?.update();
      }, 100);
    }
  }, [pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
} 