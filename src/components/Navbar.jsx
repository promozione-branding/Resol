"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Popup from "./Popup";

/* ============================================================
   PRODUCTS MEGA MENU DATA
============================================================ */

/* ============================================================
   PRODUCTS MEGA MENU DATA
   EXACT CATEGORY + SUBCATEGORY AS PER DESIGN
============================================================ */

const productMegaMenu = [
  {
    title: "Polymers",
    items: [
      {
        label: "PVC Resin",
        href: "/products/pvc-resin",
      },
      {
        label: "-- Suspension Grade",
        href: "/products/pvc-resin#suspension-grade",
      },
      {
        label: "-- Emulsion Grade",
        href: "/products/pvc-resin#emulsion-grade",
      },
      {
        label: "EVA Resin",
        href: "/products/eva-resin",
      },
      {
        label: "Polyethylene (PE)",
        href: "/products/polyethylene-pe",
      },
      {
        label: "Polypropylene (PP)",
        href: "/products/polypropylene-pp",
      },
      {
        label: "Polystyrene",
        href: "/products/polystyrene",
      },
      {
        label: "POE",
        href: "/products/poe",
      },
    ],
  },

  {
    title: "",
    items: [
      {
        label: "Pet Resin",
        href: "/products/pet-resin",
        category: true,
      },
      {
        label: "Pet Resin",
        href: "/products/pet-resin",
      },
      {
        label: "Calcium Carbonate",
        href: "/products/calcium-carbonate",
        category: true,
      },
      {
        label: "Calcium Carbonate",
        href: "/products/calcium-carbonate",
      },
      {
        label: "Precipitated Calcium",
        href: "/products/precipitated-calcium",
      },
      {
        label: "Zaikai",
        href: "/products/zaikai",
        category: true,
      },
    ],
  },

  {
    title: "",
    items: [
      {
        label: "Citric Acid",
        href: "/products/citric-acid",
        category: true,
      },
      {
        label: "Citric Acid",
        href: "/products/citric-acid",
      },
      {
        label: "Plasticizers",
        href: "/products/plasticizers",
        category: true,
      },
      {
        label: "DOP",
        href: "/products/dop",
      },
      {
        label: "DOTP",
        href: "/products/dotp",
      },
      {
        label: "DINP",
        href: "/products/dinp",
      },
      {
        label: "Natural & Synthetic Rubber",
        href: "/products/natural-synthetic-rubber",
        category: true,
      },
    ],
  },

  {
    title: "",
    items: [
      {
        label: "Fillers, Activators & Colourants",
        href: "/products/fillers-activators-colourants",
        category: true,
      },
      {
        label: "Precipitated Silica",
        href: "/products/precipitated-silica",
      },
      {
        label: "Carbon Black",
        href: "/products/carbon-black",
      },
      {
        label: "Zinc Oxide",
        href: "/products/zinc-oxide",
      },
      {
        label: "Titanium Dioxide",
        href: "/products/titanium-dioxide",
      },
      {
        label: "Stearic Acid",
        href: "/products/stearic-acid",
      },
      {
        label: "Melamine",
        href: "/products/melamine",
        category: true,
      },
      {
        label: "Melamine",
        href: "/products/melamine",
      },
    ],
  },
];

/* ============================================================
   NAVBAR
============================================================ */

export default function Navbar() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [search, setSearch] = useState("");

  /* ============================================================
     SCROLL EFFECT
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     MOBILE BODY LOCK
  ============================================================ */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ============================================================
     SEARCH
  ============================================================ */

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    window.location.href = `/search?q=${encodeURIComponent(value)}`;

    setIsMenuOpen(false);
  };

  /* ============================================================
     CLOSE MENU
  ============================================================ */

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileProductsOpen(false);
  };

  /* ============================================================
     OPEN QUOTE
  ============================================================ */

  const openQuote = () => {
    setQuoteOpen(true);
    setIsMenuOpen(false);
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
          className={`overflow-hidden bg-[#111111] text-white transition-all duration-500 ${
            isScrolled
              ? "max-h-0 opacity-0"
              : "max-h-[48px] opacity-100"
          }`}
        >
          <div className="mx-auto flex h-[48px] max-w-[1500px] items-center justify-between px-5 lg:px-10 xl:px-14">

            {/* LEFT */}

            <div className="flex items-center gap-6">

              {/* PHONE */}

              <a
                href="tel:+911141417725"
                className="group flex items-center gap-2 text-[12px] font-medium tracking-wide text-white/75 transition hover:text-[#D4A017]"
              >
                <span className="text-[#D4A017] transition-transform duration-300 group-hover:scale-110">
                  ☎
                </span>

                <span>
                  +91-11-41417725
                </span>
              </a>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              {/* EMAIL */}

              <a
                href="mailto:info@resolvinyls.com"
                className="group hidden items-center gap-2 text-[12px] font-medium tracking-wide text-white/75 transition hover:text-[#D4A017] sm:flex"
              >
                <span className="text-[#D4A017]">
                  ✉
                </span>

                <span>
                  info@resolvinyls.com
                </span>
              </a>
            </div>

            {/* RIGHT */}

            <div className="hidden items-center gap-4 lg:flex">

              <span className="text-[10px] uppercase tracking-[2px] text-white/40">
                Follow Us
              </span>

              <span className="h-4 w-px bg-white/20" />

              <a
                href="#"
                aria-label="Facebook"
                className="text-[12px] font-semibold text-white/60 transition hover:text-[#D4A017]"
              >
                f
              </a>

              <a
                href="#"
                aria-label="X"
                className="text-[13px] font-medium text-white/60 transition hover:text-[#D4A017]"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-[15px] text-white/60 transition hover:text-[#D4A017]"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[12px] font-semibold text-white/60 transition hover:text-[#D4A017]"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            MAIN NAVBAR
        ======================================================== */}

        <div
          className={`relative border-b border-black/10 bg-white/95 backdrop-blur-xl transition-all duration-500 ${
            isScrolled
              ? "py-1 shadow-[0_8px_35px_rgba(0,0,0,0.08)]"
              : "py-2.5"
          }`}
        >
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 lg:px-10 xl:px-14">

            {/* ====================================================
                LOGO
            ==================================================== */}

            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-10 block shrink-0"
            >
              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries"
                width={270}
                height={130}
                priority
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled
                    ? "h-[43px] sm:h-[46px]"
                    : "h-[55px] sm:h-[62px]"
                }`}
              />
            </Link>

            {/* ====================================================
                DESKTOP NAVIGATION
            ==================================================== */}

            <nav className="hidden items-center gap-1 xl:flex">

              <NavItem
                href="/"
                label="Home"
              />

              <NavItem
                href="/about-us"
                label="About Us"
              />

              {/* ==================================================
                  PRODUCTS MEGA MENU
              ================================================== */}

              <div className="group relative">

                {/* PRODUCTS LINK */}

                <Link
                  href="/products/pvc-resin"
                  className="relative flex items-center gap-2 px-4 py-4 font-(--font-outfit) text-[15px] font-semibold tracking-[0.2px] text-[#111111] transition-colors duration-300 hover:text-[#D4A017]"
                >
                  <span>
                    Products
                  </span>

                  {/* CHEVRON */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* GOLD UNDERLINE */}

                  <span className="absolute bottom-[7px] left-4 h-[2px] w-0 bg-[#D4A017] transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
                </Link>

                {/* ==================================================
                    MEGA MENU
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    invisible
                    absolute
                    left-1/2
                    top-full
                    z-[1000]
                    w-[1080px]
                    -translate-x-1/2
                    translate-y-3
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:pointer-events-auto
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >

                  {/* TOP GOLD LINE */}

                  <div className="h-[1px] w-full bg-[#D4A017]" />

                  {/* MENU */}

                  <div className="border border-black/10 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.16)]">

                    {/* HEADER STRIP */}

                    <div className="flex items-center justify-between border-b border-black/10 bg-[#fafafa] px-8 py-5">


                     
                    </div>

                    {/* ==================================================
                        FOUR COLUMNS
                    ================================================== */}

                    <div className="grid grid-cols-4">

                      {productMegaMenu.map((column, index) => (
                        <MegaMenuColumn
                          key={column.title}
                          column={column}
                          index={index}
                        />
                      ))}

                    </div>

                    {/* BOTTOM BAR */}

                    <div className="flex items-center justify-between border-t border-black/10 bg-[#111111] px-8 py-3.5">

                      <span className="text-[9px] font-medium uppercase tracking-[2px] text-white/45">
                        PVC • Polymers • Additives • Rubber
                      </span>

                      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#D4A017]">
                        Resol Industries
                      </span>

                    </div>
                  </div>
                </div>
              </div>

              <NavItem
                href="/articles"
                label="Articles"
              />

              <NavItem
                href="/contact-us"
                label="Contact Us"
              />
            </nav>

            {/* ====================================================
                DESKTOP RIGHT AREA
            ==================================================== */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* SEARCH */}

              <form
                onSubmit={handleSearch}
                className="group flex h-[44px] w-[205px] items-center border border-black/15 bg-white transition-all duration-300 focus-within:border-[#D4A017] focus-within:shadow-[0_8px_25px_rgba(212,160,23,0.10)]"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  aria-label="Search"
                  className="h-full min-w-0 flex-1 bg-transparent px-4 text-[12px] font-medium text-[#111111] outline-none placeholder:text-black/35"
                />

                <button
                  type="submit"
                  aria-label="Submit search"
                  className="flex h-full w-[44px] items-center justify-center text-black/45 transition duration-300 hover:text-[#D4A017]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[17px] w-[17px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M16 16L21 21"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>

              {/* QUOTE BUTTON */}

              <button
                type="button"
                onClick={openQuote}
                className="group relative flex h-[44px] shrink-0 items-center gap-4 overflow-hidden bg-[#D4A017] px-6 text-[11px] font-bold uppercase tracking-[1.5px] text-[#111111] transition-all duration-500 hover:bg-[#B8860B] hover:text-white"
              >
                <span className="relative z-10">
                  Get a Quote
                </span>

                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </div>

            {/* ====================================================
                MOBILE MENU BUTTON
            ==================================================== */}

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isMenuOpen}
              className="relative z-10 flex h-11 w-11 items-center justify-center border border-black/10 bg-white xl:hidden"
            >
              <span className="relative flex h-5 w-6 flex-col justify-between">

                <span
                  className={`block h-[2px] w-full bg-[#111111] transition-all duration-300 ${
                    isMenuOpen
                      ? "translate-y-[9px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`block h-[2px] w-full bg-[#111111] transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                <span
                  className={`block h-[2px] w-full bg-[#111111] transition-all duration-300 ${
                    isMenuOpen
                      ? "-translate-y-[9px] -rotate-45"
                      : ""
                  }`}
                />

              </span>
            </button>
          </div>

          {/* ========================================================
              MOBILE MENU
          ======================================================== */}

          <div
            className={`absolute left-0 top-full w-full overflow-hidden border-b border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 xl:hidden ${
              isMenuOpen
                ? "visible max-h-[900px] opacity-100"
                : "invisible max-h-0 opacity-0"
            }`}
          >

            <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-5 pb-7 pt-5 sm:px-8">

              {/* MOBILE SEARCH */}

              <form
                onSubmit={handleSearch}
                className="mb-5 flex h-[48px] border border-black/15"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-black outline-none placeholder:text-black/35"
                />

                <button
                  type="submit"
                  aria-label="Search"
                  className="flex w-[52px] items-center justify-center border-l border-black/10 text-black/60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M16 16L21 21"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>

              {/* ==================================================
                  MOBILE LINKS
              ================================================== */}

              <nav className="flex flex-col">

                <MobileNavItem
                  href="/"
                  label="Home"
                  onClick={closeMenu}
                />

                <MobileNavItem
                  href="/about-us"
                  label="About Us"
                  onClick={closeMenu}
                />

                {/* MOBILE PRODUCTS */}

                <div className="border-b border-black/10">

                  <div className="flex items-center justify-between">

                    <Link
                      href="/products/pvc-resin"
                      onClick={closeMenu}
                      className="flex-1 py-[17px] text-[14px] font-semibold text-[#111111] transition-colors duration-300 hover:text-[#D4A017]"
                    >
                      Products
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setMobileProductsOpen(
                          !mobileProductsOpen
                        )
                      }
                      aria-label="Toggle products"
                      aria-expanded={mobileProductsOpen}
                      className="flex h-[50px] w-[50px] items-center justify-center text-black/40 transition-colors hover:text-[#D4A017]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileProductsOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* MOBILE PRODUCTS CONTENT */}

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileProductsOpen
                        ? "max-h-[800px] pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >

                    <div className="border-l-2 border-[#D4A017] bg-[#fafafa]">

                      {productMegaMenu.map((column) => (
                        <div
                          key={column.title}
                          className="px-4 py-4"
                        >

                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#D4A017]">
                            {column.title}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2">

                            {column.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                className="group flex items-center gap-2 border-b border-black/5 py-2.5 pr-3 text-[12px] font-medium text-black/65 transition-colors hover:text-[#D4A017]"
                              >
                                <span className="h-[3px] w-[3px] bg-black/25 transition-all duration-300 group-hover:w-[7px] group-hover:bg-[#D4A017]" />

                                {item.label}
                              </Link>
                            ))}

                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>

                <MobileNavItem
                  href="/articles"
                  label="Articles"
                  onClick={closeMenu}
                />

                <MobileNavItem
                  href="/contact-us"
                  label="Contact Us"
                  onClick={closeMenu}
                />

              </nav>

              {/* MOBILE QUOTE */}

              <button
                type="button"
                onClick={openQuote}
                className="group mt-6 flex w-full items-center justify-center gap-4 bg-[#D4A017] px-5 py-4 text-[11px] font-bold uppercase tracking-[2px] text-[#111111] transition duration-300 hover:bg-[#B8860B] hover:text-white"
              >
                <span>
                  Get a Quote
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </button>

              {/* MOBILE CONTACT */}

              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">

                <a
                  href="tel:+911141417725"
                  className="text-[11px] font-medium text-black/55 transition hover:text-[#D4A017]"
                >
                  <span className="mb-1 block text-[9px] uppercase tracking-[2px] text-black/35">
                    Call Us
                  </span>

                  +91-11-41417725
                </a>

                <a
                  href="mailto:info@resolvinyls.com"
                  className="text-[11px] font-medium text-black/55 transition hover:text-[#D4A017]"
                >
                  <span className="mb-1 block text-[9px] uppercase tracking-[2px] text-black/35">
                    Email Us
                  </span>

                  info@resolvinyls.com
                </a>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          QUOTE POPUP
      ============================================================ */}

      <Popup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}

/* ================================================================
   MEGA MENU COLUMN
================================================================ */

function MegaMenuColumn({ column, index }) {
  return (
    <div
      className={`min-h-[300px] px-6 py-6 lg:px-7 ${
        index !== 0 ? "border-l border-black/10" : ""
      }`}
    >
      <div className="flex flex-col">

        {column.items.map((item, itemIndex) => {

          /* ======================================================
             CATEGORY HEADING
          ====================================================== */

          if (item.category) {
            return (
              <div
                key={`${item.label}-${itemIndex}`}
                className="mb-1 mt-3 first:mt-0"
              >
                <Link
                  href={item.href}
                  className="block font-(--font-outfit) text-[16px] font-semibold leading-[1.25] text-[#D4A017] transition-colors duration-300 hover:text-[#D4A017]"
                >
                  {item.label}
                </Link>
              </div>
            );
          }

          /* ======================================================
             SUBCATEGORY / PRODUCT
          ====================================================== */

          return (
            <Link
              key={`${item.label}-${itemIndex}`}
              href={item.href}
              className="group flex items-center border-b border-black/10 py-[8px] text-[12px] font-medium text-[#444444] transition-all duration-300 hover:pl-1 hover:text-[#D4A017]"
            >
              <span className="transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          );
        })}

      </div>
    </div>
  );
}

/* ================================================================
   DESKTOP NAV ITEM
================================================================ */

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="group relative px-4 py-4 font-(--font-outfit) text-[15px] font-semibold tracking-[0.2px] text-[#111111] transition-colors duration-300 hover:text-[#D4A017]"
    >
      <span>
        {label}
      </span>

      <span className="absolute bottom-[7px] left-4 h-[2px] w-0 bg-[#D4A017] transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
    </Link>
  );
}

/* ================================================================
   MOBILE NAV ITEM
================================================================ */

function MobileNavItem({
  href,
  label,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between border-b border-black/10 py-[17px] text-[14px] font-semibold text-[#111111] transition-colors duration-300 hover:text-[#D4A017]"
    >
      <span>
        {label}
      </span>

      <span className="text-lg font-light text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4A017]">
        →
      </span>
    </Link>
  );
}