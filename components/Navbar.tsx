"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { RiSunLine } from "react-icons/ri";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div className="justify-between md:items-center md:flex">
          {/* Logo */}
          <div className="md:py-5 md-block">
            <h2 className="text-2xl font-bold">Lucas Moraes</h2>
          </div>
          {/* Nav Items */}
          <div className="items-center justify-center md:flex md:space-x-6">
            {NAV_ITEMS.map((item, idx) => {
              return <a key={idx}>{item.label}</a>;
            })}
            {/* Theme Switcher */}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-state-100 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="balck" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-state-100 p-2 rounded-xl"
              >
                <RiMoonLine size={25} />
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
