"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!scrollRef.current) return;

    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      const scroll = new LocomotiveScroll({
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

    initScroll();

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });
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