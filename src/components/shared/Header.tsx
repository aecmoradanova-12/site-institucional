"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "História", path: "/historia" },
  { name: "Contato", path: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-noite text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img src="/logo.webp" alt="Escudo da A.E.C. Morada Nova" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading text-2xl font-extrabold uppercase tracking-wide">Morada Nova</span>
        </Link>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" className="md:hidden h-10 w-10 grid place-items-center">
          <span className="sr-only">Abrir menu principal</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
        <nav id="menu" className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-16 inset-x-0 bg-noite md:bg-transparent flex-col md:flex-row md:gap-10 px-6 pb-4 md:p-0`}>
          {navLinks.map((l) => {
            const active = pathname === l.path;
            return (
              <Link key={l.path} href={l.path} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}
                className={`py-3 md:py-1 font-semibold border-b-4 transition-colors ${active ? "border-secondary text-white" : "border-transparent text-white/70 hover:text-white"}`}>
                {l.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="faixa" />
    </header>
  );
}
