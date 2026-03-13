"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skill", href: "/skill" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0  w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          Md.<span className="text-purple-400">Ragib</span>
        </Link>


        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-800 w-1/2 rounded-2xl">
          <ul className="flex flex-col font-bold items-center py-6 space-y-5">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-lg ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


