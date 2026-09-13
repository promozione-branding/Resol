"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Popup from "@/components/Popup";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

/* ================================================================
   NAVBAR
================================================================ */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const megaCloseTimer = useRef(null);

  /* ==============================================================
     SCROLL
  ============================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==============================================================
     MEGA MENU
  ============================================================== */

  const openMegaMenu = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
    }

    setMegaMenuOpen(true);
  };

  const closeMegaMenu = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
    }

    megaCloseTimer.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const cancelMegaClose = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
    }
  };

  useEffect(() => {
    return () => {
      if (megaCloseTimer.current) {
        clearTimeout(megaCloseTimer.current);
      }
    };
  }, []);

  /* ==============================================================
     SEARCH
  ============================================================== */

  const handleSearch = (e) => {
    e.preventDefault();

    const value = searchValue.trim();

    if (!value) return;

    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  };

  /* ==============================================================
     MOBILE
  ============================================================== */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ============================================================
          HEADER
      ============================================================ */}

      <header className="fixed left-0 top-0 z-[999] w-full">

        {/* ========================================================
            TOP CONTACT BAR
        ======================================================== */}

  <div
  className={`hidden overflow-hidden bg-[#111111] transition-all duration-300 lg:block ${
    isScrolled
      ? "h-0 opacity-0"
      : "h-[34px] opacity-100"
  }`}
>
  <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">

    {/* LEFT — CONTACT */}
    <div className="flex items-center gap-6">

      {/* PHONE */}
      <a
        href="tel:+911141417725"
        className="flex items-center gap-2 text-[11px] font-medium tracking-[0.4px] text-white/60 transition-colors hover:text-[#D4A017]"
      >
        <FaPhone className="text-[10px]" />
        <span>+91-11-41417725</span>
      </a>

      {/* EMAIL */}
      <a
        href="mailto:info@resolvinyls.com"
        className="flex items-center gap-2 text-[11px] font-medium tracking-[0.4px] text-white/60 transition-colors hover:text-[#D4A017]"
      >
        <FaEnvelope className="text-[11px]" />
        <span>info@resolvinyls.com</span>
      </a>

    </div>

    {/* RIGHT — SOCIAL */}
    <div className="flex items-center gap-3">

      <span className="mr-1 text-[10px] uppercase tracking-[1.5px] text-white/30">
        Follow us
      </span>

      {/* LINKEDIN */}
      <a
        href="#"
        aria-label="LinkedIn"
        className="flex h-5 w-5 items-center justify-center text-white/50 transition-all duration-200 hover:text-[#D4A017]"
      >
        <FaLinkedinIn className="text-[10px]" />
      </a>

      {/* INSTAGRAM */}
      <a
        href="#"
        aria-label="Instagram"
        className="flex h-5 w-5 items-center justify-center text-white/50 transition-all duration-200 hover:text-[#D4A017]"
      >
        <FaInstagram className="text-[11px]" />
      </a>

      {/* YOUTUBE */}
      <a
        href="#"
        aria-label="YouTube"
        className="flex h-5 w-5 items-center justify-center text-white/50 transition-all duration-200 hover:text-[#D4A017]"
      >
        <FaYoutube className="text-[11px]" />
      </a>

    </div>

  </div>
</div>

        {/* ========================================================
            MAIN NAVIGATION
        ======================================================== */}

        <div
          className={`border-b transition-all duration-300 ${
            isScrolled
              ? "border-black/10 bg-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border-black/5 bg-white"
          }`}
        >

          <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-8">

            {/* ======================================================
                LOGO
            ====================================================== */}

            <Link
              href="/"
              className="relative z-[1002] flex shrink-0 items-center"
            >
              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries"
                width={270}
                height={130}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-[45px]" : "h-[57px]"
                }`}
              />
            </Link>

            {/* ======================================================
                DESKTOP NAV
            ====================================================== */}

            <nav className="hidden items-center lg:flex">

              <NavItem href="/">
                Home
              </NavItem>

              <NavItem href="/about-us">
                About Us
              </NavItem>

              {/* ==================================================
                  PRODUCTS
              ================================================== */}

              <div
                className="relative"
                onMouseEnter={openMegaMenu}
                onMouseLeave={closeMegaMenu}
              >

                <button
                  type="button"
                  onFocus={openMegaMenu}
                  className={`group relative flex items-center gap-2 px-4 py-4 text-[15px] font-semibold tracking-[0.2px] transition-colors duration-300 ${
                    megaMenuOpen
                      ? "text-[#B8860B]"
                      : "text-[#111111] hover:text-[#B8860B]"
                  }`}
                >

                  <span>
                    Products
                  </span>

                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      megaMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span
                    className={`absolute bottom-[7px] left-4 right-4 h-[1.5px] origin-left bg-[#D4A017] transition-transform duration-300 ${
                      megaMenuOpen
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                </button>

                <MegaMenu
                  isOpen={megaMenuOpen}
                  isScrolled={isScrolled}
                  onMouseEnter={cancelMegaClose}
                  onMouseLeave={closeMegaMenu}
                />

              </div>

              <NavItem href="/articles">
                Articles
              </NavItem>

              <NavItem href="/contact-us">
                Contact Us
              </NavItem>

            </nav>

            {/* ======================================================
                DESKTOP ACTIONS
            ====================================================== */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* SEARCH */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() => setSearchOpen((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center text-[#111111] transition-colors hover:text-[#B8860B]"
                  aria-label="Search"
                >
                  <SearchIcon />
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearch}
                    className="absolute right-0 top-[410px] flex w-[280px] overflow-hidden border border-black/10 bg-white p-1.5 shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
                  >

                    <input
                      type="text"
                      autoFocus
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search products..."
                      className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[12px] text-black outline-none placeholder:text-black/30"
                    />

                    <button
                      type="submit"
                      className="flex w-10 items-center justify-center bg-[#D4A017] text-black transition-colors hover:bg-[#B8860B]"
                    >
                      →
                    </button>

                  </form>
                )}

              </div>

              {/* QUOTE */}

              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="bg-[#111111] px-5 py-3 text-[13px] font-bold uppercase tracking-[1.4px] text-white transition-all duration-300 hover:bg-[#D4A017] hover:text-black"
              >
                Get a Quote
              </button>

            </div>

            {/* ======================================================
                MOBILE ACTIONS
            ====================================================== */}

            <div className="flex items-center gap-1 lg:hidden">

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center text-[#111111]"
                aria-label="Search"
              >
                <SearchIcon />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
                aria-label="Menu"
              >

                <span
                  className={`h-[1.5px] w-6 bg-black transition-all duration-300 ${
                    mobileMenuOpen
                      ? "translate-y-[6.5px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-6 bg-black transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-6 bg-black transition-all duration-300 ${
                    mobileMenuOpen
                      ? "-translate-y-[6.5px] -rotate-45"
                      : ""
                  }`}
                />

              </button>

            </div>

          </div>

          {/* ========================================================
              MOBILE SEARCH
          ======================================================== */}

          <div
            className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-300 lg:hidden ${
              searchOpen
                ? "max-h-[80px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <form
              onSubmit={handleSearch}
              className="mx-auto flex max-w-[1400px] px-5 py-3"
            >

              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search products..."
                className="min-w-0 flex-1 border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#D4A017]"
              />

              <button
                type="submit"
                className="w-14 bg-[#D4A017] text-black"
              >
                →
              </button>

            </form>

          </div>

          {/* ========================================================
              MOBILE MENU
          ======================================================== */}

          <div
            className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-500 lg:hidden ${
              mobileMenuOpen
                ? "max-h-[650px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <div className="px-5 pb-6 pt-3">

              <MobileNavItem
                href="/"
                onClick={closeMobileMenu}
              >
                Home
              </MobileNavItem>

              <MobileNavItem
                href="/about-us"
                onClick={closeMobileMenu}
              >
                About Us
              </MobileNavItem>

              <Link
                href="/products/pvc-resin"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-black/10 py-4 text-[14px] font-semibold text-[#111111]"
              >
                <span>
                  Products
                </span>

                <span className="text-[#B8860B]">
                  →
                </span>
              </Link>

              <MobileNavItem
                href="/articles"
                onClick={closeMobileMenu}
              >
                Articles
              </MobileNavItem>

              <MobileNavItem
                href="/contact-us"
                onClick={closeMobileMenu}
              >
                Contact Us
              </MobileNavItem>

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setQuoteOpen(true);
                }}
                className="mt-5 w-full bg-[#111111] px-5 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white"
              >
                Get a Quote
              </button>

              <div className="mt-5 border-t border-black/10 pt-5">

                <a
                  href="tel:1141417725"
                  className="block text-[11px] text-black/50"
                >
                  +91-11-41417725
                </a>

                <a
                  href="mailto:info@resolvinyls.com"
                  className="mt-2 block text-[11px] text-black/50"
                >
                  info@resolvinyls.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* ============================================================
          POPUP
      ============================================================ */}

      <Popup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

    </>
  );
}


/* ==================================================================
   NAV ITEM
================================================================== */

function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative px-4 py-4 text-[15px] font-semibold tracking-[0.2px] text-[#111111] transition-colors duration-300 hover:text-[#B8860B]"
    >

      {children}

      <span className="absolute bottom-[7px] left-4 right-4 h-[1.5px] origin-left scale-x-0 bg-[#D4A017] transition-transform duration-300 group-hover:scale-x-100" />

    </Link>
  );
}


/* ==================================================================
   MOBILE NAV ITEM
================================================================== */

function MobileNavItem({
  href,
  children,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between border-b border-black/10 py-4 text-[14px] font-semibold text-[#111111] transition-colors hover:text-[#B8860B]"
    >

      <span>
        {children}
      </span>

      <span className="text-[#B8860B]">
        →
      </span>

    </Link>
  );
}


/* ==================================================================
   SEARCH ICON
================================================================== */

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >

      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

    </svg>
  );
}


/* ==================================================================
   PREMIUM DYNAMIC MEGA MENU
================================================================== */

function MegaMenu({
  isOpen,
  isScrolled,
  onMouseEnter,
  onMouseLeave,
}) {

  const [activeCategory, setActiveCategory] = useState(0);

  /* ================================================================
     CATEGORY DATA

     IMPORTANT:

     All images are directly inside PUBLIC folder.

     Example:

     public/polymers.webp
     public/pvc-resin.webp

     URL:

     /polymers.webp
     /pvc-resin.webp
  ================================================================ */

  const categories = [

    /* ==============================================================
       01 - POLYMERS
    ============================================================== */

    {
      number: "01",
      title: "Polymers",
      image: "/pvc (4).webp",

      items: [
        {
          name: "PVC Resin",
<<<<<<< HEAD
          image: "/pvc (4).webp",
=======
          image: "/pvc resin cate.webp",
>>>>>>> 8135b1f96b445292227b8c9393ac60ae591cbf90
          href: "/products/pvc-resin",
          tag: "PVC",
        },
        {
          name: "Suspension Grade",
          image: "/polystyrene.webp",
          href: "/products/pvc-resin/suspension-grade",
          tag: "Grade",
        },
        {
          name: "Emulsion Grade",
          image: "/polystyrene.webp",
          href: "/products/pvc-resin/emulsion-grade",
          tag: "Grade",
        },
        {
          name: "EVA Resin",
          image: "/2.webp",
          href: "/products/eva-resin",
          tag: "EVA",
        },
        {
          name: "Polyethylene (PE)",
          image: "/3 (1).webp",
          href: "/products/polyethylene",
          tag: "PE",
        },
        {
          name: "Polypropylene (PP)",
          image: "/4.webp",
          href: "/products/polypropylene",
          tag: "PP",
        },
        {
          name: "Polystyrene",
          image: "/banner2 (8).webp",
          href: "/products/polystyrene",
          tag: "PS",
        },
        {
          name: "POE",
          image: "/6.webp",
          href: "/products/poe",
          tag: "POE",
        },
      ],
    },


    /* ==============================================================
       02 - PET RESIN
    ============================================================== */

    {
      number: "02",
      title: "Pet Resin",
      image: "/Polymers.webp",

      items: [
        {
          name: "PET Resin",
          image: "/Polymers.webp",
          href: "/products/pet-resin",
          tag: "PET",
        },
      ],
    },


    /* ==============================================================
       03 - CALCIUM CARBONATE
    ============================================================== */

    {
      number: "03",
      title: "Calcium Carbonate",
      subtitle: "Mineral Fillers",
      image: "/cal.webp",

      items: [
        {
          name: "Calcium Carbonate",
          image: "/cal.webp",
          href: "/products/calcium-carbonate",
          tag: "CaCO₃",
        },
        {
          name: "Precipitated Calcium",
          image: "/celcium carbonate.webp",
          href: "/products/precipitated-calcium",
          tag: "PCC",
        },
      ],
    },


    /* ==============================================================
       04 - ZIKAI
    ============================================================== */

    {
      number: "04",
      title: "Zikai",
      image: "/zikai.webp",

      items: [
        {
          name: "Zikai",
          image: "/zikai.webp",
          href: "/products/zikai",
          tag: "Specialty",
        },
      ],
    },


    /* ==============================================================
       05 - CITRIC ACID
    ============================================================== */

    {
      number: "05",
      title: "Citric Acid",
      image: "/critic.webp",

      items: [
        {
          name: "Citric Acid",
          image: "/critic.webp",
          href: "/products/citric-acid",
          tag: "Chemical",
        },
      ],
    },


    /* ==============================================================
       06 - PLASTICIZERS
    ============================================================== */

    {
      number: "06",
      title: "Plasticizers",
      image: "/Dop.webp",

      items: [
        {
          name: "DOP",
          image: "/Dop.webp",
          href: "/products/plasticizers/dop",
          tag: "DOP",
        },
        {
          name: "DOTP",
          image: "/Dotp.webp",
          href: "/products/plasticizers/dotp",
          tag: "DOTP",
        },
        {
          name: "DINP",
          image: "/Dinp.webp",
          href: "/products/plasticizers/dinp",
          tag: "DINP",
        },
      ],
    },


    /* ==============================================================
       07 - RUBBER
    ============================================================== */

    {
      number: "07",
      title: "Natural & Synthetic Rubber",
      image: "/Polybutadiene Rubber.webp",

      items: [
        {
          name: "Natural & Synthetic Rubber",
          image: "/Polybutadiene Rubber.webp",
          href: "/products/rubber",
          tag: "Rubber",
        },
      ],
    },


    /* ==============================================================
       08 - FILLERS & COLOURANTS
    ============================================================== */

    {
      number: "08",
      title: "Fillers & Colourants",
      image: "/precipitated-silica.webp",

      items: [
        {
          name: "Precipitated Silica",
          image: "/precipitated-silica.webp",
          href: "/products/precipitated-silica",
          tag: "Silica",
        },
        {
          name: "Carbon Black",
          image: "/Carbon_black.webp",
          href: "/products/carbon-black",
          tag: "Black",
        },
        {
          name: "Zinc Oxide",
          image: "/zinc-oxide.webp",
          href: "/products/zinc-oxide",
          tag: "ZnO",
        },
        {
          name: "Titanium Dioxide",
          image: "/Titanium-Dioxide.webp",
          href: "/products/titanium-dioxide",
          tag: "TiO₂",
        },
        {
          name: "Stearic Acid",
          image: "/zinc-oxide (1).webp",
          href: "/products/stearic-acid",
          tag: "Acid",
        },
      ],
    },


    /* ==============================================================
       09 - MELAMINE
    ============================================================== */

    {
      number: "09",
      title: "Melamine",
      image: "/melamine.webp",

      items: [
        {
          name: "Melamine",
          image: "/melamine.webp",
          href: "/products/melamine",
          tag: "Melamine",
        },
      ],
    },

  ];


  const active = categories[activeCategory];


  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed left-1/2 z-[1000] w-[1160px] max-w-[calc(100vw-30px)] -translate-x-1/2 transition-all duration-300 ${
        isScrolled
          ? "top-[70px]"
          : "top-[75px]"
      } ${
        isOpen
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-3 opacity-0"
      }`}
    >

      {/* ==========================================================
          MAIN MENU
      ========================================================== */}

      <div className="overflow-hidden border border-black/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,0.30)]">

        {/* ========================================================
            HEADER
        ======================================================== */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-3.5">

        

    </div>


        {/* ========================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="grid grid-cols-[235px_1fr]">

          {/* ======================================================
              LEFT CATEGORIES
          ====================================================== */}

          <div className="border-r border-white/10 bg-[#111111] py-2.5">

            <div className="px-5 pb-2">

              <span className="text-[14px] font-medium uppercase tracking-[2px] text-white/25">
                Categories
              </span>

            </div>

            {categories.map((category, index) => (

              <button
                key={category.title}
                type="button"
                onMouseEnter={() => setActiveCategory(index)}
                onFocus={() => setActiveCategory(index)}
                className={`group flex w-full items-center gap-3 px-5 py-[7px] text-left transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-[#D4A017] text-black"
                    : "text-white/55 hover:bg-white/[0.035] hover:text-white"
                }`}
              >

                <span
                  className={`w-6 text-[10px] font-bold ${
                    activeCategory === index
                      ? "text-black/50"
                      : "text-[#D4A017]/50"
                  }`}
                >
                  {category.number}
                </span>

                <span className="flex-1 text-[15px] font-semibold">
                  {category.title}
                </span>

                <span
                  className={`text-xs transition-all duration-200 ${
                    activeCategory === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0"
                  }`}
                >
                  →
                </span>

              </button>

            ))}

          </div>


          {/* ======================================================
              RIGHT SHOWCASE
          ====================================================== */}

          <div className="bg-[#f4f2ec] p-5">

            {/* ====================================================
                TITLE
            ==================================================== */}

            <div className="mb-4 flex items-end justify-between">

              <div>

                <div className="mb-1.5 flex items-center gap-2">

                  <span className="h-[1px] w-5 bg-[#D4A017]" />

          

                </div>

                <h4 className="text-[25px] font-semibold tracking-tight text-[#111111]">
                  {active.title}
                </h4>

                <p className="mt-1 max-w-[500px] text-[12px] leading-relaxed text-black/45">
                  {active.description}
                </p>

              </div>

              <span className="text-[10px] font-light leading-none text-black/[0.055]">
                {active.number}
              </span>

            </div>


            {/* ====================================================
                PRODUCT AREA
            ==================================================== */}

            <div className="grid grid-cols-[190px_1fr] gap-3">

              {/* ==================================================
                  FEATURE IMAGE
              ================================================== */}

              <Link
                href={active.items[0]?.href || "#"}
                className="group relative h-[225px] overflow-hidden bg-[#111111]"
              >

                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="290px"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute right-0 top-0 h-9 w-9 border-b border-l border-[#D4A017]/60" />

                <div className="absolute bottom-3.5 left-3.5 right-3.5">

                  <span className="mb-1 inline-block text-[6px] font-bold uppercase tracking-[2px] text-[#D4A017]">
                    Featured
                  </span>

                  <h5 className="text-[15px] font-semibold text-white">
                    {active.items[0]?.name}
                  </h5>

                  <div className="mt-2.5 flex items-center justify-between border-t border-white/20 pt-2">

                    <span className="text-[7px] uppercase tracking-[1px] text-white/40">
                      View Product
                    </span>

                    <span className="text-[#D4A017]">
                      →
                    </span>

                  </div>

                </div>

              </Link>


              {/* ==================================================
                  PRODUCT CARDS
              ================================================== */}

              <div className="grid grid-cols-2 gap-2">

                {active.items.slice(1).map((item) => (

                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative flex items-center gap-2.5 overflow-hidden border border-black/[0.07] bg-white p-2.5 transition-all duration-300 hover:border-[#D4A017] hover:shadow-[0_10px_22px_rgba(0,0,0,0.07)]"
                  >

                    {/* IMAGE */}

                    <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-[#efede7]">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="410px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                    </div>


                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <span className="mb-1 block text-[8px] font-bold uppercase tracking-[1.5px] text-[#B8860B]">
                        {item.tag}
                      </span>

                      <h5 className="text-[14px] font-semibold leading-tight text-[#222222] transition-colors group-hover:text-[#B8860B]">
                        {item.name}
                      </h5>

                    </div>


                    {/* ARROW */}

                    <span className="absolute bottom-1.5 right-2 text-[11px] text-black/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4A017]">
                      →
                    </span>

                  </Link>

                ))}


                {/* SINGLE PRODUCT */}

                {active.items.length === 1 && (

                  <div className="flex items-center justify-center border border-dashed border-black/10 bg-white/50">

                    <p className="text-center text-[10px] uppercase tracking-[1.5px] text-black/25">
                      Premium
                      <br />
                      Material Solution
                    </p>

                  </div>

                )}

              </div>

            </div>


            {/* ====================================================
                BOTTOM BAR
            ==================================================== */}

            <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 bg-[#D4A017]" />

                <span className="text-[7px] font-medium uppercase tracking-[1.5px] text-black/35">
                  {active.items.length} Product
                  {active.items.length > 1 ? "s" : ""}
                  {" "}Available
                </span>

              </div>

              <Link
                href={active.items[0]?.href || "/products"}
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#111111] hover:text-[#B8860B]"
              >
                Explore {active.title}

                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>


      </div>

    </div>
  );
}

