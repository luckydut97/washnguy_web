'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type DesktopNavProps = {
  links: NavLink[];
};

export default function DesktopNav({ links }: DesktopNavProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const activeIndex = useMemo(() => {
    if (pathname === "/") return links.findIndex((link) => link.href === "/");
    return links.findIndex((link) => {
      if (link.href === "/") return pathname === "/";
      return pathname.startsWith(link.href);
    });
  }, [links, pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const linkEl = linkRefs.current[activeIndex];
      const containerEl = containerRef.current;
      if (!linkEl || !containerEl) {
        setIndicator((prev) => ({ ...prev, opacity: 0 }));
        return;
      }
      const linkRect = linkEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setIndicator({
        width: linkRect.width,
        left: linkRect.left - containerRect.left,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-1 justify-center gap-16 text-base font-semibold tracking-wide"
    >
      <span
        className="pointer-events-none absolute inset-y-1 rounded-2xl bg-slate-200/80 transition-[left,width,opacity] duration-300 ease-out"
        style={{
          width: indicator.width,
          left: indicator.left,
          opacity: indicator.opacity,
        }}
      />
      {links.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
          className="relative whitespace-nowrap rounded-2xl px-4 py-2 transition hover:text-blue-600"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
