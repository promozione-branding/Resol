"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./Popup";

/* ============================================================
   PRODUCT MEGA MENU DATA
   ONLY YOUR EXISTING CATEGORIES / SUB-CATEGORIES
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
   CATEGORY IMAGES
============================================================ */

const categoryImages = {
  Polymers: "/Polymers.webp",
  "Pet Resin": "/banner2 (8).webp",
  "Calcium Carbonate": "/calcium.webp",
  Zaikai: "/pvc resin.webp",
  "Citric Acid": "/banner 3 (7).webp",
  Plasticizers: "/pvc resin.webp",
  "Natural & Synthetic Rubber":
    "/Polystyrene banner.webp",
  "Fillers, Activators & Colourants":
    "/calcium.webp",
  Melamine: "/pvc (4).webp",
};

/* ============================================================
   SUB CATEGORY IMAGES
============================================================ */

const subCategoryImages = {
  "pvc-resin": "/pvc resin.webp",
  "suspension-grade": "/pvc resin.webp",
  "emulsion-grade": "/pvc resin.webp",

  "eva-resin": "/pvc (4).webp",
  "polyethylene-pe": "/banner2 (8).webp",
  "polypropylene-pp": "/banner2 (8).webp",
  polystyrene: "/Polystyrene banner.webp",
  poe: "/Polymers.webp",

  "pet-resin": "/banner2 (8).webp",

  "calcium-carbonate": "/calcium.webp",
  "precipitated-calcium": "/calcium.webp",

  zaikai: "/pvc resin.webp",

  "citric-acid": "/banner 3 (7).webp",

  dop: "/pvc resin.webp",
  dotp: "/pvc resin.webp",
  dinp: "/pvc resin.webp",

  "natural-synthetic-rubber":
    "/Polystyrene banner.webp",

  "precipitated-silica": "/calcium.webp",
  "carbon-black": "/Polymers.webp",
  "zinc-oxide": "/calcium.webp",
  "titanium-dioxide": "/pvc (4).webp",
  "stearic-acid": "/calcium.webp",

  melamine: "/pvc (4).webp",
};

/* ============================================================
   IMAGE HELPERS
============================================================ */

const getItemKey = (item) => {
  const href = item?.href || "";

  if (href.includes("#")) {
    return href.split("#")[1];
  }

  return href.split("/").filter(Boolean).pop() || "";
};

const getItemImage = (item) => {
  const key = getItemKey(item);

  return (
    subCategoryImages[key] ||
    categoryImages[item?.label] ||
    "/pvc resin.webp"
  );
};

/* ============================================================
   BUILD CATEGORY STRUCTURE
============================================================ */

function buildProductCategories() {
  const categories = [];

  /* ---------------- POLYMERS ---------------- */

  const polymers = productMegaMenu[0];

  categories.push({
    title: polymers.title,
    href: polymers.items[0]?.href || "/products",
    image:
      categoryImages[polymers.title] ||
      "/Polymers.webp",
    items: polymers.items,
  });

  /* ---------------- OTHER CATEGORIES ---------------- */

  productMegaMenu.slice(1).forEach((column) => {
    let currentCategory = null;

    column.items.forEach((item) => {
      if (item.category) {
        currentCategory = {
          title: item.label,
          href: item.href,
          image:
            categoryImages[item.label] ||
            getItemImage(item),
          items: [],
        };

        categories.push(currentCategory);
      } else if (currentCategory) {
        currentCategory.items.push(item);
      }
    });
  });

  return categories;
}

const productCategories = buildProductCategories();

/* ============================================================
   IMAGE COMPONENT
============================================================ */

function MenuImage({
  src,
  alt,
  className = "",
  sizes = "400px",
}) {
  const [imageSrc, setImageSrc] = useState(
    src || "/pvc resin.webp"
  );

  useEffect(() => {
    setImageSrc(src || "/pvc resin.webp");
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt || ""}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (imageSrc !== "/pvc resin.webp") {
          setImageSrc("/pvc resin.webp");
        }
      }}
    />
  );
}

/* ============================================================
   NAVIGATION
============================================================ */

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Products",
    href: "/products/pvc-resin",
    mega: true,
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

/* ============================================================
   NAVBAR
============================================================ */

export default function Navbar() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [productsOpen, setProductsOpen] =
    useState(false);
  const [mobileOpen, setMobileOpen] =
    useState(false);
  const [searchOpen, setSearchOpen] =
    useState(false);
  const [searchValue, setSearchValue] =
    useState("");
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [activeMegaCategory, setActiveMegaCategory] =
    useState(0);

  const [mobileProductOpen, setMobileProductOpen] =
    useState(false);

  /* ==========================================================
     SCROLL
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ==========================================================
     MOBILE BODY LOCK
  ========================================================== */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ==========================================================
     ESC KEY
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* ==========================================================
     SEARCH
  ========================================================== */

  const handleSearch = (event) => {
    event.preventDefault();

    const value = searchValue.trim();

    if (!value) return;

    window.location.href =
      `/search?q=${encodeURIComponent(value)}`;
  };

  /* ==========================================================
     OPEN PRODUCTS
  ========================================================== */

  const openProductsMenu = () => {
    setProductsOpen(true);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  /* ==========================================================
     ACTIVE CATEGORY
  ========================================================== */

  const activeCategory =
    productCategories[activeMegaCategory] ||
    productCategories[0];

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <>
      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{
              y: -30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -30,
              opacity: 0,
            }}
            className="fixed left-0 top-0 z-[1000] hidden w-full bg-black text-white lg:block"
          >
            <div className="mx-auto flex h-[34px] max-w-[1500px] items-center justify-between px-6 text-[10px] uppercase tracking-[0.22em]">
              <div>
                Resol Industries Ltd.
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="tel:+911141417725"
                  className="transition-colors hover:text-[#D4A017]"
                >
                  +91 11-41417725
                </a>

                <a
                  href="mailto:info@resolvinyls.com"
                  className="transition-colors hover:text-[#D4A017]"
                >
                  info@resolvinyls.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          MAIN HEADER
      ====================================================== */}

      <header
        className={`fixed left-0 z-[1001] w-full transition-all duration-300 ${
          isScrolled
            ? "top-0"
            : "top-0 lg:top-[34px]"
        }`}
      >
        <div
          className={`border-b transition-all duration-300 ${
            productsOpen
              ? "border-[#D4A017]/40 bg-black"
              : "border-black/10 bg-white/95 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-10">

            {/* LOGO */}

            <Link
              href="/"
              onClick={() => {
                setProductsOpen(false);
                setMobileOpen(false);
              }}
              className="relative z-[1003] shrink-0"
            >
              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries"
                width={170}
                height={65}
                priority
                className={`h-auto w-[60px] object-contain ${
                  productsOpen
                    ? "brightness-0 invert"
                    : ""
                }`}
              />
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-7 xl:flex">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.mega) {
                      openProductsMenu();
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (item.mega) {
                        setProductsOpen(false);
                      }
                    }}
                    className={`group relative flex items-center gap-2 py-7 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                      productsOpen
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.label}

                    {item.mega && (
                      <span
                        className={`h-[5px] w-[5px] rotate-45 border-r border-t ${
                          productsOpen
                            ? "border-[#D4A017]"
                            : "border-black"
                        }`}
                      />
                    )}

                    <span className="absolute bottom-[17px] left-0 h-[1px] w-0 bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* SEARCH */}

              <button
                type="button"
                aria-label="Search"
                onClick={() => {
                  setSearchOpen(
                    (prev) => !prev
                  );
                  setProductsOpen(false);
                }}
                className={`flex h-[42px] w-[42px] items-center justify-center border transition ${
                  productsOpen
                    ? "border-white/20 text-white"
                    : "border-black/10 text-black"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />
                  <path d="m20 20-4-4" />
                </svg>
              </button>

              {/* QUOTE */}

              <button
                type="button"
                onClick={() => {
                  setQuoteOpen(true);
                  setProductsOpen(false);
                }}
                className="flex h-[42px] items-center gap-3 bg-[#D4A017] px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-[#B8860B]"
              >
                Get a Quote

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => {
                setMobileOpen(true);
                setProductsOpen(false);
              }}
              className={`flex h-[42px] w-[42px] items-center justify-center border lg:hidden ${
                productsOpen
                  ? "border-white/20 text-white"
                  : "border-black/10 text-black"
              }`}
            >
              <div className="flex w-[19px] flex-col gap-[5px]">
                <span className="h-[1px] w-full bg-current" />
                <span className="h-[1px] w-[75%] bg-current" />
                <span className="h-[1px] w-full bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* ====================================================
            SEARCH PANEL
        ==================================================== */}

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden border-b border-black/10 bg-[#f5f2eb]"
            >
              <form
                onSubmit={handleSearch}
                className="mx-auto flex max-w-[1100px] items-center gap-3 px-6 py-5"
              >
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) =>
                    setSearchValue(e.target.value)
                  }
                  autoFocus
                  placeholder="Search products..."
                  className="h-[50px] flex-1 border border-black/15 bg-white px-5 font-(--font-lexend) text-sm outline-none placeholder:text-black/35 focus:border-[#D4A017]"
                />

                <button
                  type="submit"
                  className="h-[50px] bg-black px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ======================================================
          DESKTOP MEGA MENU
      ====================================================== */}

      <AnimatePresence>
        {productsOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            onMouseEnter={() =>
              setProductsOpen(true)
            }
            onMouseLeave={() =>
              setProductsOpen(false)
            }
            className={`fixed inset-x-0 bottom-0 z-[999] overflow-hidden bg-black ${
              isScrolled
                ? "top-[76px]"
                : "top-[110px]"
            }`}
          >
            <div className="flex h-[calc(100vh-110px)] min-h-0 flex-col bg-[#111]">

              {/* ==================================================
                  MEGA HEADER
              ================================================== */}

              <div className="flex h-[52px] shrink-0 items-center justify-between border-b border-white/10 px-6 lg:px-10">
                <div className="flex items-center gap-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D4A017]">
                    Products
                  </span>

                  <span className="hidden h-[1px] w-10 bg-white/20 sm:block" />

                  <span className="hidden text-[10px] uppercase tracking-[0.16em] text-white/40 sm:block">
                    Explore Our Product Range
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setProductsOpen(false)
                  }
                  className="flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/60 transition hover:text-[#D4A017]"
                >
                  Close

                  <span className="flex h-7 w-7 items-center justify-center border border-white/15">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 6l12 12" />
                      <path d="M18 6 6 18" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* ==================================================
                  MAIN AREA
              ================================================== */}

              <div className="grid min-h-0 flex-1 lg:grid-cols-[300px_minmax(0,1fr)]">

                {/* ==================================================
                    LEFT CATEGORY SIDEBAR
                ================================================== */}

                <aside className="min-h-0 overflow-y-auto border-r border-white/10 bg-[#0c0c0c] p-3 lg:p-4">

                  <div className="mb-3 px-2">
                    <p className="font-(--font-lexend) text-[9px] uppercase tracking-[0.18em] text-white/35">
                      Categories
                    </p>
                  </div>

                  <div className="space-y-1">

                    {productCategories.map(
                      (category, index) => {
                        const active =
                          index ===
                          activeMegaCategory;

                        return (
                          <button
                            type="button"
                            key={category.title}
                            onMouseEnter={() =>
                              setActiveMegaCategory(
                                index
                              )
                            }
                            onClick={() =>
                              setActiveMegaCategory(
                                index
                              )
                            }
                            className={`group relative flex w-full items-center gap-3 border p-1.5 text-left transition-all duration-300 ${
                              active
                                ? "border-[#D4A017]/50 bg-[#D4A017]"
                                : "border-transparent bg-white/[0.025] hover:border-white/10 hover:bg-white/[0.06]"
                            }`}
                          >

                            {/* SQUARE CATEGORY IMAGE */}

                            <div className="relative aspect-square w-[58px] shrink-0 overflow-hidden bg-black">
                              <MenuImage
                                src={category.image}
                                alt={category.title}
                                sizes="100px"
                                className="object-cover transition duration-500 group-hover:scale-110"
                              />

                              <div className="absolute inset-0 bg-black/10" />
                            </div>

                            {/* CATEGORY TEXT */}

                            <div className="min-w-0 flex-1">
                              <p
                                className={`font-(--font-outfit) text-[11px] font-medium leading-tight ${
                                  active
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                {category.title}
                              </p>

                              <p
                                className={`mt-1 font-(--font-lexend) text-[7px] uppercase tracking-[0.12em] ${
                                  active
                                    ? "text-black/50"
                                    : "text-white/30"
                                }`}
                              >
                                {category.items.length}{" "}
                                {category.items.length ===
                                1
                                  ? "Product"
                                  : "Products"}
                              </p>
                            </div>

                            {/* ARROW */}

                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className={`shrink-0 transition-transform duration-300 ${
                                active
                                  ? "text-black"
                                  : "text-white/30 group-hover:translate-x-1"
                              }`}
                            >
                              <path d="M5 12h14" />
                              <path d="m13 6 6 6-6 6" />
                            </svg>

                          </button>
                        );
                      }
                    )}

                  </div>
                </aside>

                {/* ==================================================
                    RIGHT CONTENT
                    NO SCROLL
                ================================================== */}

                <main className="min-h-0 overflow-hidden bg-[#f5f2eb]">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={activeCategory.title}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex h-full min-h-0 flex-col"
                    >

                      {/* ==================================================
                          CATEGORY HERO
                      ================================================== */}

                      <div className="grid shrink-0 border-b border-black/10 md:grid-cols-[1fr_220px]">

                        <div className="flex min-h-[118px] flex-col justify-between p-5">

                          <div>
                            <p className="mb-2 font-(--font-lexend) text-[8px] uppercase tracking-[0.25em] text-[#B8860B]">
                              Product Category
                            </p>

                            <h2 className="font-(--font-outfit) text-[30px] font-medium leading-[0.95] tracking-[-0.04em] text-black lg:text-[38px]">
                              {activeCategory.title}
                            </h2>
                          </div>

                          <Link
                            href={activeCategory.href}
                            onClick={() =>
                              setProductsOpen(false)
                            }
                            className="mt-3 flex w-fit items-center gap-3 border-b border-black pb-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-black transition hover:border-[#D4A017] hover:text-[#B8860B]"
                          >
                            View Category

                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M5 12h14" />
                              <path d="m13 6 6 6-6 6" />
                            </svg>
                          </Link>
                        </div>

                        {/* CATEGORY HERO IMAGE */}

                        <Link
                          href={activeCategory.href}
                          onClick={() =>
                            setProductsOpen(false)
                          }
                          className="group relative hidden min-h-[118px] overflow-hidden bg-black md:block"
                        >
                          <MenuImage
                            src={activeCategory.image}
                            alt={activeCategory.title}
                            sizes="300px"
                            className="object-cover transition duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />

                          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                            <span className="font-(--font-outfit) text-[10px] uppercase tracking-[0.12em] text-white">
                              {activeCategory.title}
                            </span>

                            <span className="flex h-6 w-6 items-center justify-center bg-[#D4A017] text-[11px] text-black">
                              ↗
                            </span>
                          </div>
                        </Link>
                      </div>

                      {/* ==================================================
                          PRODUCTS AREA
                      ================================================== */}

                      <div className="min-h-0 flex-1 overflow-hidden p-3 lg:p-4">

                        {activeCategory.items.length >
                        0 ? (
                          <div className="flex h-full min-h-0 flex-col">

                            {/* PRODUCT TITLE */}

                            <div className="mb-2 flex shrink-0 items-end justify-between">

                              <div>
                                <p className="font-(--font-lexend) text-[7px] uppercase tracking-[0.2em] text-black/40">
                                  Products
                                </p>

                                <h3 className="mt-0.5 font-(--font-outfit) text-[17px] font-medium text-black">
                                  Available Products
                                </h3>
                              </div>

                              <span className="font-(--font-lexend) text-[8px] text-black/40">
                                {activeCategory.items.length
                                  .toString()
                                  .padStart(2, "0")}
                              </span>

                            </div>

                            {/* PRODUCT GRID */}

                            <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-2 md:grid-cols-3 xl:grid-cols-4">

                              {activeCategory.items.map(
                                (item, index) => {

                                  const image =
                                    getItemImage(item);

                                  const isIndented =
                                    item.label.startsWith(
                                      "--"
                                    );

                                  const cleanLabel =
                                    item.label.replace(
                                      /^--\s*/,
                                      ""
                                    );

                                  return (
                                    <Link
                                      key={`${item.href}-${index}`}
                                      href={item.href}
                                      onClick={() =>
                                        setProductsOpen(
                                          false
                                        )
                                      }
                                      className={`group relative overflow-hidden border border-black/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A017] ${
                                        isIndented
                                          ? "ring-1 ring-[#D4A017]/20"
                                          : ""
                                      }`}
                                    >

                                      {/* =================================
                                          SQUARE PRODUCT IMAGE
                                      ================================= */}

                                      <div className="relative mx-auto aspect-square w-full max-w-[82px] overflow-hidden bg-[#dedbd3]">

                                        <MenuImage
                                          src={image}
                                          alt={cleanLabel}
                                          sizes="150px"
                                          className="object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                                        {isIndented && (
                                          <div className="absolute left-1 top-1 bg-[#D4A017] px-1 py-0.5 text-[5px] font-semibold uppercase tracking-[0.1em] text-black">
                                            Grade
                                          </div>
                                        )}

                                        <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center bg-black text-[9px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                                          ↗
                                        </span>

                                      </div>

                                      {/* PRODUCT NAME */}

                                      <div className="min-h-[38px] p-1.5">

                                        <p className="font-(--font-outfit) text-[9px] font-medium leading-tight text-black">
                                          {cleanLabel}
                                        </p>

                                        <div className="mt-1 h-[1px] w-3 bg-[#D4A017] transition-all duration-300 group-hover:w-6" />

                                      </div>

                                    </Link>
                                  );
                                }
                              )}

                            </div>
                          </div>
                        ) : (

                          /* ==================================================
                             CATEGORY WITHOUT SUB PRODUCTS
                          ================================================== */

                          <Link
                            href={activeCategory.href}
                            onClick={() =>
                              setProductsOpen(false)
                            }
                            className="group grid min-h-[180px] overflow-hidden border border-black/10 bg-black md:grid-cols-[1fr_230px]"
                          >

                            <div className="flex flex-col justify-center p-6">

                              <p className="font-(--font-lexend) text-[8px] uppercase tracking-[0.2em] text-[#D4A017]">
                                Category
                              </p>

                              <h3 className="mt-2 font-(--font-outfit) text-2xl font-medium text-white">
                                {activeCategory.title}
                              </h3>

                              <span className="mt-5 flex w-fit items-center gap-3 border-b border-[#D4A017] pb-1.5 text-[8px] uppercase tracking-[0.16em] text-white">
                                Explore Product
                                <span>↗</span>
                              </span>

                            </div>

                            <div className="relative min-h-[180px] overflow-hidden">

                              <MenuImage
                                src={
                                  activeCategory.image
                                }
                                alt={
                                  activeCategory.title
                                }
                                sizes="300px"
                                className="object-cover transition duration-700 group-hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-black/20" />

                            </div>

                          </Link>
                        )}

                      </div>
                    </motion.div>

                  </AnimatePresence>

                </main>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[2000] overflow-y-auto bg-[#0c0c0c] text-white lg:hidden"
          >

            {/* MOBILE HEADER */}

            <div className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-white/10 bg-[#0c0c0c] px-5">

              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries"
                width={150}
                height={60}
                className="w-[130px] brightness-0 invert"
              />

              <button
                type="button"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center border border-white/15"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>

            </div>

            {/* MOBILE NAV */}

            <div className="px-5 pb-10 pt-6">

              {navigation.map((item) => {

                if (item.mega) {
                  return (
                    <div
                      key={item.label}
                      className="border-b border-white/10"
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setMobileProductOpen(
                            (prev) => !prev
                          )
                        }
                        className="flex w-full items-center justify-between py-5"
                      >

                        <span className="font-(--font-outfit) text-lg">
                          {item.label}
                        </span>

                        <span
                          className={`text-[#D4A017] transition-transform ${
                            mobileProductOpen
                              ? "rotate-45"
                              : ""
                          }`}
                        >
                          +
                        </span>

                      </button>

                      <AnimatePresence>

                        {mobileProductOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            className="overflow-hidden"
                          >

                            <div className="space-y-5 pb-6">

                              {productCategories.map(
                                (category) => (
                                  <div
                                    key={
                                      category.title
                                    }
                                    className="border border-white/10 bg-white/[0.025]"
                                  >

                                    {/* MOBILE CATEGORY IMAGE */}

                                    <Link
                                      href={
                                        category.href
                                      }
                                      onClick={() =>
                                        setMobileOpen(
                                          false
                                        )
                                      }
                                      className="group relative block h-[150px] overflow-hidden"
                                    >

                                      <MenuImage
                                        src={
                                          category.image
                                        }
                                        alt={
                                          category.title
                                        }
                                        sizes="600px"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                      />

                                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                      <div className="absolute bottom-4 left-4 right-4">

                                        <p className="font-(--font-outfit) text-xl font-medium">
                                          {
                                            category.title
                                          }
                                        </p>

                                      </div>
                                    </Link>

                                    {/* MOBILE PRODUCTS */}

                                    {category.items
                                      .length > 0 && (
                                      <div className="grid grid-cols-2 gap-2 p-2">

                                        {category.items.map(
                                          (
                                            item,
                                            index
                                          ) => {

                                            const image =
                                              getItemImage(
                                                item
                                              );

                                            const cleanLabel =
                                              item.label.replace(
                                                /^--\s*/,
                                                ""
                                              );

                                            return (
                                              <Link
                                                key={`${item.href}-${index}`}
                                                href={
                                                  item.href
                                                }
                                                onClick={() =>
                                                  setMobileOpen(
                                                    false
                                                  )
                                                }
                                                className="group overflow-hidden border border-white/10 bg-black"
                                              >

                                                {/* SQUARE MOBILE IMAGE */}

                                                <div className="relative aspect-square w-full overflow-hidden">

                                                  <MenuImage
                                                    src={
                                                      image
                                                    }
                                                    alt={
                                                      cleanLabel
                                                    }
                                                    sizes="250px"
                                                    className="object-cover transition duration-500 group-hover:scale-110"
                                                  />

                                                  <div className="absolute inset-0 bg-black/10" />

                                                </div>

                                                <div className="p-2">

                                                  <p className="font-(--font-outfit) text-[10px] leading-tight text-white">
                                                    {
                                                      cleanLabel
                                                    }
                                                  </p>

                                                </div>

                                              </Link>
                                            );
                                          }
                                        )}

                                      </div>
                                    )}

                                  </div>
                                )
                              )}

                            </div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="flex items-center justify-between border-b border-white/10 py-5 font-(--font-outfit) text-lg"
                  >

                    {item.label}

                    <span className="text-[#D4A017]">
                      ↗
                    </span>

                  </Link>
                );
              })}

              {/* MOBILE QUOTE */}

              <button
                type="button"
                onClick={() => {
                  setQuoteOpen(true);
                  setMobileOpen(false);
                }}
                className="mt-7 flex h-[52px] w-full items-center justify-between bg-[#D4A017] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-black"
              >

                Get a Quote

                <span>↗</span>

              </button>

              {/* MOBILE CONTACT */}

              <div className="mt-8 space-y-3 border-t border-white/10 pt-7">

                <a
                  href="tel:+911141417725"
                  className="block font-(--font-lexend) text-xs text-white/50"
                >
                  +91 11-41417725
                </a>

                <a
                  href="mailto:info@resolvinyls.com"
                  className="block font-(--font-lexend) text-xs text-white/50"
                >
                  info@resolvinyls.com
                </a>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          QUOTE POPUP
      ====================================================== */}

      <Popup
        isOpen={quoteOpen}
        onClose={() =>
          setQuoteOpen(false)
        }
      />
    </>
  );
}
