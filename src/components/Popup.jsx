"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./Popup";

/* ============================================================
   PRODUCT MEGA MENU DATA
   ONLY EXISTING CATEGORIES / SUB-CATEGORIES
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
  "Natural & Synthetic Rubber": "/Polystyrene banner.webp",
  "Fillers, Activators & Colourants": "/calcium.webp",
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

  "natural-synthetic-rubber": "/Polystyrene banner.webp",

  "precipitated-silica": "/calcium.webp",
  "carbon-black": "/Polymers.webp",
  "zinc-oxide": "/calcium.webp",
  "titanium-dioxide": "/pvc (4).webp",
  "stearic-acid": "/calcium.webp",

  melamine: "/pvc (4).webp",
};

/* ============================================================
   GET ITEM KEY
============================================================ */

const getItemKey = (item) => {
  const href = item?.href || "";

  if (href.includes("#")) {
    return href.split("#")[1];
  }

  return href.split("/").filter(Boolean).pop() || "";
};

/* ============================================================
   GET ITEM IMAGE
============================================================ */

const getItemImage = (item) => {
  const key = getItemKey(item);

  return (
    subCategoryImages[key] ||
    categoryImages[item?.label] ||
    "/pvc resin.webp"
  );
};

/* ============================================================
   NORMALIZE PRODUCT CATEGORIES
============================================================ */

function buildProductCategories() {
  const categories = [];

  /* POLYMERS */

  const polymers = productMegaMenu[0];

  categories.push({
    title: polymers.title,
    href: polymers.items[0]?.href || "/products",
    image: categoryImages[polymers.title] || "/Polymers.webp",
    items: polymers.items,
  });

  /* OTHER CATEGORIES */

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
   IMAGE COMPONENT WITH FALLBACK
============================================================ */

function MenuImage({
  src,
  alt,
  className = "",
  sizes = "300px",
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

  const [productsOpen, setProductsOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ==========================================================
     BODY LOCK MOBILE
  ========================================================== */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ==========================================================
     ESC
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

    window.location.href = `/search?q=${encodeURIComponent(
      value
    )}`;
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
            <div className="mx-auto flex h-[32px] max-w-[1500px] items-center justify-between px-6 text-[9px] uppercase tracking-[0.22em]">
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
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`fixed left-0 z-[1001] w-full transition-all duration-300 ${
          isScrolled
            ? "top-0"
            : "top-0 lg:top-[32px]"
        }`}
      >
        <div
          className={`border-b transition-all duration-300 ${
            productsOpen
              ? "border-black/10 bg-white"
              : "border-black/10 bg-white/95 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-10">

            {/* ==================================================
                LOGO
            ================================================== */}

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
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

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
                    className="group relative flex items-center gap-2 py-6 text-[12px] font-medium uppercase tracking-[0.12em] text-black transition-colors"
                  >
                    {item.label}

                    {item.mega && (
                      <span className="h-[5px] w-[5px] rotate-45 border-r border-t border-black" />
                    )}

                    <span className="absolute bottom-[15px] left-0 h-[1px] w-0 bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              ))}
            </nav>

            {/* ==================================================
                RIGHT ACTIONS
            ================================================== */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* SEARCH */}

              <button
                type="button"
                onClick={() => {
                  setSearchOpen((prev) => !prev);
                  setProductsOpen(false);
                }}
                aria-label="Search"
                className="flex h-[40px] w-[40px] items-center justify-center border border-black/10 text-black transition hover:border-[#D4A017]"
              >
                <svg
                  width="17"
                  height="17"
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
                className="flex h-[40px] items-center gap-3 bg-[#D4A017] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-[#B8860B]"
              >
                Get a Quote

                <svg
                  width="14"
                  height="14"
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

            {/* ==================================================
                MOBILE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(true);
                setProductsOpen(false);
              }}
              aria-label="Open menu"
              className="flex h-[40px] w-[40px] items-center justify-center border border-black/10 text-black lg:hidden"
            >
              <div className="flex w-[18px] flex-col gap-[5px]">
                <span className="h-[1px] w-full bg-current" />
                <span className="h-[1px] w-[70%] bg-current" />
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
                className="mx-auto flex max-w-[1050px] items-center gap-3 px-6 py-5"
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
                  className="h-[50px] bg-black px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-white"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ======================================================
          FLOATING LIGHT PRODUCTS MEGA MENU
      ====================================================== */}

      <AnimatePresence>
        {productsOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.22,
            }}
            onMouseEnter={() =>
              setProductsOpen(true)
            }
            onMouseLeave={() =>
              setProductsOpen(false)
            }
            className={`fixed left-1/2 z-[999] hidden -translate-x-1/2 overflow-hidden border border-black/10 bg-[#f5f2eb] shadow-[0_25px_70px_rgba(0,0,0,0.15)] lg:block ${
              isScrolled
                ? "top-[84px]"
                : "top-[116px]"
            } w-[1080px] max-w-[calc(100vw-40px)]`}
          >
            {/* ==================================================
                SMALL MENU TOP BAR
            ================================================== */}

            <div className="flex h-[48px] items-center justify-between border-b border-black/10 bg-white px-5">
              <div className="flex items-center gap-4">
                <span className="h-[6px] w-[6px] bg-[#D4A017]" />

                <span className="font-(--font-outfit) text-[10px] font-semibold uppercase tracking-[0.24em] text-black">
                  Products
                </span>

                <span className="hidden text-[9px] uppercase tracking-[0.16em] text-black/35 md:block">
                  Explore Our Product Range
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setProductsOpen(false)
                }
                className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-black/45 transition hover:text-black"
              >
                Close

                <span className="flex h-6 w-6 items-center justify-center border border-black/10">
                  <svg
                    width="11"
                    height="11"
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
                MAIN CONTENT
            ================================================== */}

            <div className="grid h-[500px] grid-cols-[245px_minmax(0,1fr)]">

              {/* ==================================================
                  CATEGORY SIDEBAR
              ================================================== */}

              <aside className="overflow-hidden border-r border-black/10 bg-white p-3">

                <div className="mb-3 px-2 pt-1">
                  <p className="font-(--font-lexend) text-[8px] uppercase tracking-[0.22em] text-black/35">
                    Categories
                  </p>
                </div>

                <div className="space-y-[3px]">
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
                          className={`group relative flex w-full items-center gap-3 border p-[6px] text-left transition-all duration-200 ${
                            active
                              ? "border-[#D4A017]/40 bg-[#f5f2eb]"
                              : "border-transparent hover:border-black/10 hover:bg-[#faf9f6]"
                          }`}
                        >
                          {/* SMALL SQUARE CATEGORY IMAGE */}

                          <div className="relative h-[43px] w-[43px] shrink-0 overflow-hidden bg-[#e7e4dc]">
                            <MenuImage
                              src={
                                category.image
                              }
                              alt={
                                category.title
                              }
                              sizes="50px"
                              className="object-cover transition duration-500 group-hover:scale-110"
                            />
                          </div>

                          {/* CATEGORY TEXT */}

                          <div className="min-w-0 flex-1">
                            <p
                              className={`font-(--font-outfit) text-[11px] font-medium leading-tight ${
                                active
                                  ? "text-black"
                                  : "text-black/65"
                              }`}
                            >
                              {
                                category.title
                              }
                            </p>

                            <p className="mt-[3px] font-(--font-lexend) text-[7px] uppercase tracking-[0.12em] text-black/30">
                              {
                                category.items
                                  .length
                              }{" "}
                              {category.items
                                .length === 1
                                ? "Product"
                                : "Products"}
                            </p>
                          </div>

                          {/* ACTIVE LINE */}

                          {active && (
                            <span className="h-5 w-[2px] bg-[#D4A017]" />
                          )}
                        </button>
                      );
                    }
                  )}
                </div>
              </aside>

              {/* ==================================================
                  RIGHT PRODUCT AREA
              ================================================== */}

              <main className="min-w-0 overflow-hidden bg-[#f5f2eb]">

                <AnimatePresence
                  mode="wait"
                >
                  <motion.div
                    key={
                      activeCategory.title
                    }
                    initial={{
                      opacity: 0,
                      x: 8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -8,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="h-full"
                  >

                    {/* ==================================================
                        CATEGORY HEADER
                    ================================================== */}

                    <div className="flex h-[102px] items-center justify-between border-b border-black/10 px-5">

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B8860B]">
                            Category
                          </span>

                          <span className="h-[1px] w-5 bg-[#D4A017]" />
                        </div>

                        <h2 className="mt-1 font-(--font-outfit) text-[27px] font-medium leading-none tracking-[-0.03em] text-black">
                          {
                            activeCategory.title
                          }
                        </h2>

                        <Link
                          href={
                            activeCategory.href
                          }
                          onClick={() =>
                            setProductsOpen(
                              false
                            )
                          }
                          className="mt-2 inline-flex items-center gap-2 border-b border-black/30 pb-[2px] text-[8px] font-semibold uppercase tracking-[0.14em] text-black transition hover:border-[#D4A017] hover:text-[#B8860B]"
                        >
                          View Category

                          <span>
                            ↗
                          </span>
                        </Link>
                      </div>

                      {/* SMALL SQUARE HERO IMAGE */}

                      <Link
                        href={
                          activeCategory.href
                        }
                        onClick={() =>
                          setProductsOpen(
                            false
                          )
                        }
                        className="group relative h-[70px] w-[70px] shrink-0 overflow-hidden border border-black/10 bg-white"
                      >
                        <MenuImage
                          src={
                            activeCategory.image
                          }
                          alt={
                            activeCategory.title
                          }
                          sizes="70px"
                          className="object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/5" />
                      </Link>
                    </div>

                    {/* ==================================================
                        PRODUCTS
                    ================================================== */}

                    <div className="px-5 py-4">

                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <p className="font-(--font-lexend) text-[8px] uppercase tracking-[0.18em] text-black/35">
                            Products
                          </p>

                          <h3 className="mt-[2px] font-(--font-outfit) text-[16px] font-medium text-black">
                            Available Products
                          </h3>
                        </div>

                        <span className="font-(--font-lexend) text-[9px] text-black/30">
                          {activeCategory.items.length
                            .toString()
                            .padStart(2, "0")}
                        </span>
                      </div>

                      {/* PRODUCT GRID */}

                      <div className="grid grid-cols-4 gap-2">

                        {activeCategory.items.map(
                          (item, index) => {
                            const image =
                              getItemImage(
                                item
                              );

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
                                href={
                                  item.href
                                }
                                key={`${item.href}-${index}`}
                                onClick={() =>
                                  setProductsOpen(
                                    false
                                  )
                                }
                                className={`group relative overflow-hidden border border-black/10 bg-white transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D4A017] ${
                                  isIndented
                                    ? "border-l-2 border-l-[#D4A017]"
                                    : ""
                                }`}
                              >

                                {/* SMALL SQUARE IMAGE */}

                                <div className="flex h-[78px] items-center justify-center bg-[#e8e5dd]">

                                  <div className="relative h-[62px] w-[62px] overflow-hidden">
                                    <MenuImage
                                      src={
                                        image
                                      }
                                      alt={
                                        cleanLabel
                                      }
                                      sizes="62px"
                                      className="object-cover transition duration-500 group-hover:scale-110"
                                    />
                                  </div>

                                  {isIndented && (
                                    <span className="absolute left-1.5 top-1.5 bg-[#D4A017] px-1.5 py-[2px] text-[6px] font-semibold uppercase tracking-[0.1em] text-black">
                                      Grade
                                    </span>
                                  )}
                                </div>

                                {/* PRODUCT NAME */}

                                <div className="min-h-[48px] p-2">

                                  <p className="line-clamp-2 font-(--font-outfit) text-[10px] font-medium leading-tight text-black">
                                    {
                                      cleanLabel
                                    }
                                  </p>

                                  <div className="mt-1.5 flex items-center justify-between">

                                    <span className="h-[1px] w-4 bg-[#D4A017] transition-all duration-200 group-hover:w-7" />

                                    <span className="text-[10px] text-black/35 transition group-hover:text-[#B8860B]">
                                      ↗
                                    </span>

                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </main>
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

            <div className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0c0c0c] px-5">

              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries"
                width={150}
                height={60}
                className="w-[125px] brightness-0 invert"
              />

              <button
                type="button"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex h-9 w-9 items-center justify-center border border-white/15"
              >
                <svg
                  width="16"
                  height="16"
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

            <div className="px-5 pb-10 pt-5">

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

                            <div className="space-y-4 pb-6">

                              {productCategories.map(
                                (category) => (
                                  <div
                                    key={
                                      category.title
                                    }
                                    className="border border-white/10 bg-white/[0.025]"
                                  >

                                    {/* CATEGORY */}

                                    <Link
                                      href={
                                        category.href
                                      }
                                      onClick={() =>
                                        setMobileOpen(
                                          false
                                        )
                                      }
                                      className="group flex items-center gap-3 p-3"
                                    >

                                      <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden bg-black">
                                        <MenuImage
                                          src={
                                            category.image
                                          }
                                          alt={
                                            category.title
                                          }
                                          sizes="60px"
                                          className="object-cover transition duration-500 group-hover:scale-110"
                                        />
                                      </div>

                                      <div className="flex-1">
                                        <p className="font-(--font-outfit) text-sm font-medium">
                                          {
                                            category.title
                                          }
                                        </p>

                                        <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/35">
                                          {
                                            category
                                              .items
                                              .length
                                          }{" "}
                                          Products
                                        </p>
                                      </div>

                                      <span className="text-[#D4A017]">
                                        ↗
                                      </span>
                                    </Link>

                                    {/* SUB PRODUCTS */}

                                    {category.items
                                      .length >
                                      0 && (
                                      <div className="grid grid-cols-2 gap-2 border-t border-white/10 p-2">

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

                                                <div className="flex h-[75px] items-center justify-center bg-[#222]">

                                                  <div className="relative h-[55px] w-[55px] overflow-hidden">
                                                    <MenuImage
                                                      src={
                                                        image
                                                      }
                                                      alt={
                                                        cleanLabel
                                                      }
                                                      sizes="55px"
                                                      className="object-cover transition duration-500 group-hover:scale-110"
                                                    />
                                                  </div>

                                                </div>

                                                <div className="p-2">
                                                  <p className="font-(--font-outfit) text-[9px] leading-tight text-white">
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
                className="mt-7 flex h-[50px] w-full items-center justify-between bg-[#D4A017] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-black"
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