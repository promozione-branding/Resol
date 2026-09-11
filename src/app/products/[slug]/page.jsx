"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Factory,
  Boxes,
  Globe2,
  CircleCheck,
} from "lucide-react";

/* ============================================================
   COLORS
============================================================ */

const GOLD = "#D4A017";
const GOLD_DARK = "#B8860B";

/* ============================================================
   PRODUCT DATA
============================================================ */

const product = {
  name: "PVC Resin",
  category: "PVC Resin",

  images: [
    "/pvc resin.webp",
    "/pvc resin cate.webp",
    "/pvc resin.webp",
  ],

  titleBackground: "/Polymers.webp",

  shortDescription:
    "RIL is a reliable PVC Resin Importer, offering Suspension Grade PVC Resin suitable for rigid PVC profile manufacturing. The imported resin is selected for consistent specifications, reliable processing, and suitability for industrial PVC applications.",

  specifications: [
    ["K Value", "57"],
    ["Grade", "Suspension"],
    ["Application", "Profiles"],
    ["Form", "Powder"],
    ["Polymer Type", "PVC Resin"],
    ["Plasticizer Use", "Rigid"],
    ["Color", "White"],
    ["Packaging Size", "25 kg"],
  ],

  benefits: [
    {
      title: "High Purity",
      text: "Consistent quality",
    },
    {
      title: "Excellent Processability",
      text: "Reliable processing",
    },
    {
      title: "Consistent Supply",
      text: "Dependable sourcing",
    },
  ],

  grades: [
    {
      number: "01",
      title: "Suspension Grade",
      description:
        "The most widely used PVC Resin grade, valued for its versatility, ease of processing, and excellent mechanical properties. Suitable for profiles, pipes, sheets, films, cable insulation, and other rigid PVC applications.",
    },
    {
      number: "02",
      title: "Emulsion Grade",
      description:
        "Ideal for applications requiring fine particle size and high surface area, including synthetic leather, flooring, coatings, and adhesives. It offers good dispersion and plasticizer absorption for suitable processing requirements.",
    },
  ],

  applications: [
    {
      title: "PVC Profiles",
      text: "Window frames, door profiles, and construction profiles",
    },
    {
      title: "Pipes & Fittings",
      text: "Rigid PVC pipes and related components",
    },
    {
      title: "Sheets & Films",
      text: "Industrial and commercial sheet and film applications",
    },
    {
      title: "Cable Insulation",
      text: "Insulation and protective applications for wires and cables",
    },
    {
      title: "Construction Products",
      text: "Various rigid PVC products used in construction",
    },
  ],

  whyChoose: [
    {
      title: "Trusted PVC Resin Importer",
      text: "Reliable sourcing of PVC Resin for industrial requirements",
    },
    {
      title: "Consistent Quality",
      text: "Products selected to meet defined grade and specification requirements",
    },
    {
      title: "Reliable Supply",
      text: "Dependable sourcing and availability for regular requirements",
    },
    {
      title: "Application-Focused Solutions",
      text: "Suitable PVC Resin options for different manufacturing needs",
    },
    {
      title: "Professional Service",
      text: "Responsive support from enquiry and sourcing through delivery",
    },
  ],
};

/* ============================================================
   MAIN PAGE
============================================================ */

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleLine = useTransform(progress, [0, 1], [0, 1]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F4EF] text-[#111111]">
      {/* ============================================================
          TOP PROGRESS LINE
      ============================================================ */}

      <motion.div
        style={{ scaleX: scaleLine }}
        className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-[#D4A017]"
      />

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative mt-20 min-h-[680px] overflow-hidden bg-[#0B0B0B]">
        {/* IMAGE */}

        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={product.titleBackground}
            alt={product.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/75" />

        {/* GOLD GLOW */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.16, 0.25, 0.16],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-[#D4A017]/20 blur-[140px]"
        />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* GIANT TEXT */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="pointer-events-none absolute -bottom-8 right-[-30px] select-none lg:right-10"
        >
          <span className="font-[var(--font-outfit)] text-[25vw] font-bold leading-none tracking-[-0.09em] text-white/[0.035]">
            PVC
          </span>
        </motion.div>

        {/* CONTENT */}

        <div className="relative mx-auto flex min-h-[680px] max-w-[1600px] items-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_400px] lg:items-end">
            <div>
              {/* LABEL */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-16 bg-[#D4A017]" />

                <span className="font-[var(--font-lexend-deca)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                  Industrial Raw Material
                </span>
              </motion.div>

              {/* TITLE */}

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="max-w-5xl font-[var(--font-outfit)] text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-white"
                >
                  PVC
                  <span className="text-[#D4A017]">.</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="mt-8 max-w-xl"
              >
                <p className="font-[var(--font-lexend-deca)] text-sm leading-7 text-white/55 md:text-base">
                  Reliable PVC Resin sourcing for industrial manufacturing,
                  rigid profiles and diverse PVC applications.
                </p>
              </motion.div>
            </div>

            {/* HERO INFO */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative"
            >
              <div className="border-l border-[#D4A017]/40 pl-6">
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Product No.
                  </span>

                  <span className="font-[var(--font-outfit)] text-sm text-[#D4A017]">
                    01
                  </span>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <HeroMeta label="Grade" value="Suspension" />
                  <HeroMeta label="Form" value="Powder" />
                  <HeroMeta label="K Value" value="57" />
                  <HeroMeta label="Packaging" value="25 kg" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* SCROLL */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-8 left-5 flex items-center gap-4 sm:left-8 lg:left-12 xl:left-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <ArrowDownRight
                size={18}
                className="text-[#D4A017]"
                strokeWidth={1.2}
              />
            </motion.div>

            <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.25em] text-white/30">
              Explore Product
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMB
      ============================================================ */}

      <div className="border-b border-black/10 bg-[#EDECE6]">
        <div className="mx-auto flex max-w-[1600px] items-center px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex items-center gap-2 font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.16em]">
            <Link
              href="/"
              className="text-black/35 transition-colors hover:text-[#B8860B]"
            >
              Home
            </Link>

            <ChevronRight size={11} className="text-black/20" />

            <Link
              href="/products"
              className="text-black/35 transition-colors hover:text-[#B8860B]"
            >
              Products
            </Link>

            <ChevronRight size={11} className="text-black/20" />

            <span className="text-[#B8860B]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ============================================================
          PRODUCT SHOWCASE
      ============================================================ */}

      <section className="relative bg-[#F5F4EF] px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        {/* DECORATIVE NUMBER */}

        <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">
          <span className="font-[var(--font-outfit)] text-[220px] font-bold leading-none text-black/[0.025]">
            01
          </span>
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20 xl:gap-28">
            {/* ======================================================
                GALLERY
            ====================================================== */}

            <ProductGallery
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />

            {/* ======================================================
                PRODUCT CONTENT
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="self-center"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

                <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B8860B]">
                  {product.category}
                </span>
              </div>

              <h2 className="font-[var(--font-outfit)] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                PVC
                <span className="block text-[#D4A017]">Resin.</span>
              </h2>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-[2px] w-20 bg-[#D4A017]" />

                <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.2em] text-black/35">
                  Suspension Grade
                </span>
              </div>

              <p className="mt-8 max-w-xl font-[var(--font-lexend-deca)] text-sm leading-7 text-black/55">
                {product.shortDescription}
              </p>

              {/* FEATURE STRIP */}

              <div className="mt-9 grid grid-cols-3 border-y border-black/10">
                <MiniFeature icon={<ShieldCheck size={17} />} text="Quality" />
                <MiniFeature icon={<Factory size={17} />} text="Industrial" />
                <MiniFeature icon={<Globe2 size={17} />} text="Reliable" />
              </div>

              {/* SPECS */}

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10">
                {[
                  ["Grade", "Suspension"],
                  ["K Value", "57"],
                  ["Form", "Powder"],
                  ["Application", "Profiles"],
                  ["Packaging", "25 kg"],
                  ["Color", "White"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.45,
                    }}
                    className="group bg-[#F5F4EF] p-4 transition-colors duration-300 hover:bg-white"
                  >
                    <span className="block font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[0.18em] text-black/35">
                      {label}
                    </span>

                    <span className="mt-2 block font-[var(--font-outfit)] text-sm font-semibold">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-[#111111] px-7 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:text-black"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#D4A017] transition-transform duration-500 group-hover:translate-y-0" />

                  <FileText
                    size={15}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />

                  <span className="relative z-10">Get a Quote</span>

                  <ArrowUpRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href="https://wa.me/919810929486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-4 border border-black/15 bg-transparent px-7 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017]"
                >
                  <MessageCircle size={15} strokeWidth={1.5} />

                  WhatsApp

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOVING MARQUEE
      ============================================================ */}

      <section className="overflow-hidden border-y border-black/10 bg-[#111111] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center"
            >
              {[
                "PVC RESIN",
                "SUSPENSION GRADE",
                "INDUSTRIAL MATERIAL",
                "RIL",
                "CONSISTENT SUPPLY",
                "PVC APPLICATIONS",
              ].map((item, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex items-center"
                >
                  <span className="mx-8 font-[var(--font-outfit)] text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
                    {item}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          TABS
      ============================================================ */}

      <section className="sticky top-[80px] z-30 border-b border-black/10 bg-[#F5F4EF]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] justify-center px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex">
            <TabButton
              active={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Product Overview
            </TabButton>

            <TabButton
              active={activeTab === "specification"}
              onClick={() => setActiveTab("specification")}
            >
              Technical Specifications
            </TabButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          TAB CONTENT
      ============================================================ */}

      <AnimatePresence mode="wait">
        {activeTab === "description" && (
          <motion.div
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* ========================================================
                INTRO
            ======================================================== */}

            <section className="relative overflow-hidden bg-[#F5F4EF] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
                  <SectionLabel number="01" label="Overview" />

                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="max-w-5xl font-[var(--font-outfit)] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
                    >
                      Reliable material.
                      <span className="block text-[#D4A017]">
                        Reliable manufacturing.
                      </span>
                    </motion.h2>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                      <p className="font-[var(--font-lexend-deca)] text-sm leading-8 text-black/50">
                        PVC Resin is a versatile thermoplastic raw material
                        widely used in industrial manufacturing. It is valued
                        for its consistent processing characteristics,
                        durability, and suitability for producing rigid PVC
                        products.
                      </p>

                      <p className="font-[var(--font-lexend-deca)] text-sm leading-8 text-black/50">
                        As a PVC Resin Importer, Resol Industries Ltd. sources
                        and supplies PVC Resin for manufacturers and industrial
                        users looking for dependable raw materials with
                        consistent specifications and application performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================
                RIL DARK STORY
            ======================================================== */}

            <section className="relative overflow-hidden bg-[#101010] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:70px_70px]" />

              <motion.div
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A017]/10 blur-[130px]"
              />

              <div className="relative mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="h-px w-12 bg-[#D4A017]" />

                      <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.3em] text-[#D4A017]">
                        RIL At A Glance
                      </span>
                    </div>

                    <h2 className="mt-7 font-[var(--font-outfit)] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-white">
                      Built on
                      <span className="block text-[#D4A017]">
                        reliability.
                      </span>
                    </h2>

                    <p className="mt-8 max-w-lg font-[var(--font-lexend-deca)] text-sm leading-7 text-white/40">
                      Resol Industries Ltd. combines dependable international
                      sourcing with consistent product quality and responsive
                      industrial supply support across India.
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                      <span className="h-[2px] w-20 bg-[#D4A017]" />

                      <span className="font-[var(--font-outfit)] text-[9px] uppercase tracking-[0.25em] text-white/30">
                        Since 2005
                      </span>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <RILCard
                      number="01"
                      value="20+"
                      title="Years of Experience"
                      text="Established in 2005 with long-term industrial sourcing experience."
                    />

                    <RILCard
                      number="02"
                      value="PAN"
                      title="India Distribution"
                      text="Industrial material supply and distribution across India."
                    />

                    <RILCard
                      number="03"
                      value="PVC"
                      title="Resin Focus"
                      text="Reliable PVC Resin sourcing for diverse manufacturing requirements."
                    />

                    <RILCard
                      number="04"
                      value="RIL"
                      title="Trusted Supply"
                      text="Quality-focused sourcing backed by professional customer support."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================
                BENEFITS
            ======================================================== */}

            <section className="bg-[#D4A017] px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid md:grid-cols-3">
                  {product.benefits.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                      }}
                      whileHover={{ y: -8 }}
                      className="border-b border-black/20 px-0 py-7 md:border-b-0 md:border-r md:px-10 md:first:pl-0 md:last:border-r-0"
                    >
                      <span className="font-[var(--font-outfit)] text-5xl font-light tracking-[-0.05em] text-black/25">
                        0{index + 1}
                      </span>

                      <h3 className="mt-7 font-[var(--font-outfit)] text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h3>

                      <p className="mt-3 font-[var(--font-lexend-deca)] text-xs leading-6 text-black/55">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========================================================
                GRADES
            ======================================================== */}

            <section className="bg-[#F5F4EF] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
                  <SectionLabel number="02" label="Product Range" />

                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="font-[var(--font-outfit)] text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.8] tracking-[-0.07em]"
                    >
                      Available
                      <span className="block text-[#D4A017]">
                        Grades.
                      </span>
                    </motion.h2>

                    <div className="mt-14 space-y-4">
                      {product.grades.map((grade, index) => (
                        <motion.div
                          key={grade.number}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                          }}
                          className="group relative overflow-hidden border border-black/10 bg-[#ECEBE5] p-7 md:p-10"
                        >
                          <div className="absolute inset-y-0 left-0 w-1 bg-[#D4A017] transition-all duration-500 group-hover:w-2" />

                          <div className="grid gap-8 md:grid-cols-[100px_260px_1fr] md:items-start">
                            <span className="font-[var(--font-outfit)] text-6xl font-light tracking-[-0.07em] text-[#D4A017]">
                              {grade.number}
                            </span>

                            <h3 className="font-[var(--font-outfit)] text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                              {grade.title}
                            </h3>

                            <p className="font-[var(--font-lexend-deca)] text-sm leading-7 text-black/50">
                              {grade.description}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={20}
                            className="absolute right-7 top-7 text-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4A017]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================
                APPLICATIONS
            ======================================================== */}

            <section className="bg-[#111111] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
                  <div>
                    <SectionLabelDark number="03" label="Applications" />
                  </div>

                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="max-w-5xl font-[var(--font-outfit)] text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-white"
                    >
                      Where PVC Resin
                      <span className="block text-[#D4A017]">
                        is used.
                      </span>
                    </motion.h2>

                    <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                      {product.applications.map((item, index) => (
                        <ApplicationCard
                          key={item.title}
                          title={item.title}
                          text={item.text}
                          number={index + 1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================
                WHY RIL
            ======================================================== */}

            <section className="bg-[#F5F4EF] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                  <div>
                    <SectionLabel number="04" label="RIL Advantage" />

                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mt-8 font-[var(--font-outfit)] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.8] tracking-[-0.07em]"
                    >
                      Why
                      <span className="block text-[#D4A017]">
                        Choose RIL?
                      </span>
                    </motion.h2>

                    <p className="mt-8 max-w-sm font-[var(--font-lexend-deca)] text-xs leading-7 text-black/45">
                      Dependable sourcing, consistent specifications and
                      professional service for industrial raw material
                      requirements.
                    </p>
                  </div>

                  <div className="border-t border-black/10">
                    {product.whyChoose.map((item, index) => (
                      <WhyChooseRow
                        key={item.title}
                        number={index + 1}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ============================================================
            SPECIFICATION TAB
        ============================================================ */}

        {activeTab === "specification" && (
          <motion.div
            key="specification"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <section className="bg-[#F5F4EF] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1600px]">
                <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
                  <SectionLabel number="01" label="Technical Data" />

                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="font-[var(--font-outfit)] text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.8] tracking-[-0.07em]"
                    >
                      Technical
                      <span className="block text-[#D4A017]">
                        Specification.
                      </span>
                    </motion.h2>

                    <p className="mt-8 max-w-2xl font-[var(--font-lexend-deca)] text-sm leading-7 text-black/45">
                      Technical specifications for the selected PVC Resin
                      product and its intended industrial application.
                    </p>

                    <div className="mt-14 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
                      {product.specifications.map(
                        ([label, value], index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.05,
                              duration: 0.45,
                            }}
                            className="group bg-[#ECEBE5] p-6 transition-colors duration-300 hover:bg-white md:p-8"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.2em] text-black/35">
                                {label}
                              </span>

                              <span className="text-[#D4A017]">
                                <CircleCheck size={16} />
                              </span>
                            </div>

                            <div className="mt-4 font-[var(--font-outfit)] text-2xl font-semibold tracking-[-0.04em]">
                              {value}
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>

                    <div className="mt-8 flex gap-4 border-l-2 border-[#D4A017] bg-[#ECEBE5] px-6 py-5">
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-[#B8860B]"
                      />

                      <p className="font-[var(--font-lexend-deca)] text-xs leading-6 text-black/50">
                        Product specifications may vary according to grade,
                        source and application requirements. Contact the RIL
                        team for current availability and technical details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#090909] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-7 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.3em] text-[#D4A017]">
                Ready to source?
              </span>

              <span className="h-px w-12 bg-[#D4A017]" />
            </div>

            <h2 className="font-[var(--font-outfit)] text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-white">
              Let&apos;s build
              <span className="block text-[#D4A017]">
                something reliable.
              </span>
            </h2>

            <p className="mx-auto mt-9 max-w-2xl font-[var(--font-lexend-deca)] text-sm leading-7 text-white/40">
              Looking for PVC Resin for your manufacturing requirement?
              Connect with Resol Industries Ltd. for product details,
              availability and sourcing support.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 bg-[#D4A017] px-8 py-5 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white"
              >
                Enquire Now

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="https://wa.me/919810929486"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 border border-white/15 px-8 py-5 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black"
              >
                WhatsApp RIL

                <MessageCircle
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   PRODUCT GALLERY
================================================================ */

function ProductGallery({ activeImage, setActiveImage }) {
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    [0, -35]
  );

  return (
    <motion.div
      style={{ y: imageY }}
      className="relative"
    >
      {/* OUTER FRAME */}

      <div className="relative overflow-hidden border border-black/10 bg-[#E8E7E0] p-3 sm:p-5 md:p-7">
        {/* GOLD CORNERS */}

        <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-[#D4A017]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-[#D4A017]" />

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] [background-size:45px_45px]" />

        {/* BACKGROUND TEXT */}

        <div className="pointer-events-none absolute bottom-0 right-3 select-none">
          <span className="font-[var(--font-outfit)] text-[160px] font-bold leading-none tracking-[-0.1em] text-black/[0.035] md:text-[220px]">
            PVC
          </span>
        </div>

        {/* TOP INFO */}

        <div className="relative z-10 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-[#D4A017]" />

            <span className="font-[var(--font-lexend-deca)] text-[8px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Product Visual
            </span>
          </div>

          <span className="font-[var(--font-outfit)] text-xs font-medium text-black/30">
            01 / 03
          </span>
        </div>

        {/* IMAGE */}

        <div className="relative z-10 aspect-square overflow-hidden bg-[#F4F3ED]">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.images[activeImage]}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: -1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 95vw, 60vw"
                className="object-contain p-6 transition-transform duration-700 hover:scale-[1.04] md:p-10"
              />
            </motion.div>
          </AnimatePresence>

          {/* FLOATING TAG */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-5 left-5 border border-black/10 bg-white/90 px-4 py-3 backdrop-blur-md"
          >
            <span className="block font-[var(--font-lexend-deca)] text-[7px] uppercase tracking-[0.2em] text-black/35">
              Material
            </span>

            <span className="mt-1 block font-[var(--font-outfit)] text-sm font-semibold">
              PVC Resin
            </span>
          </motion.div>
        </div>

        {/* THUMBNAILS */}

        <div className="relative z-10 mt-5 flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`group relative h-20 w-20 overflow-hidden border transition-all duration-300 md:h-24 md:w-24 ${
                activeImage === index
                  ? "border-[#D4A017] bg-white"
                  : "border-black/10 bg-[#F4F3ED] hover:border-black/30"
              }`}
            >
              <Image
                src={image}
                alt={`${product.name} ${index + 1}`}
                fill
                sizes="100px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
              />

              {activeImage === index && (
                <motion.span
                  layoutId="gallery-active"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4A017]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY FOOTER */}

      <div className="mt-4 flex items-center justify-between">
        <span className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[0.2em] text-black/30">
          RIL Product Collection
        </span>

        <span className="flex items-center gap-2 font-[var(--font-outfit)] text-[10px] text-black/35">
          Drag / Explore
          <MoveUpRight size={12} />
        </span>
      </div>
    </motion.div>
  );
}

/* ================================================================
   HERO META
================================================================ */

function HeroMeta({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </span>

      <span className="font-[var(--font-outfit)] text-sm font-medium text-white">
        {value}
      </span>
    </div>
  );
}

/* ================================================================
   MINI FEATURE
================================================================ */

function MiniFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 border-r border-black/10 py-4 pl-0 last:border-r-0 sm:pl-3">
      <span className="text-[#B8860B]">{icon}</span>

      <span className="font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.1em] text-black/55">
        {text}
      </span>
    </div>
  );
}

/* ================================================================
   TAB BUTTON
================================================================ */

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative whitespace-nowrap px-5 py-5 font-[var(--font-outfit)] text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 sm:px-9 ${
        active
          ? "text-black"
          : "text-black/35 hover:text-black"
      }`}
    >
      {children}

      {active && (
        <motion.span
          layoutId="product-tab"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4A017]"
        />
      )}
    </button>
  );
}

/* ================================================================
   SECTION LABEL
================================================================ */

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {number}
      </span>

      <div>
        <span className="block h-px w-10 bg-[#D4A017]" />

        <span className="mt-3 block font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.24em] text-black/35">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   DARK SECTION LABEL
================================================================ */

function SectionLabelDark({ number, label }) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {number}
      </span>

      <div>
        <span className="block h-px w-10 bg-[#D4A017]" />

        <span className="mt-3 block font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.24em] text-white/30">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   RIL CARD
================================================================ */

function RILCard({
  number,
  value,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        backgroundColor: "rgba(212,160,23,0.05)",
      }}
      className="group border-b border-r border-white/10 p-7 md:p-9"
    >
      <div className="flex items-center justify-between">
        <span className="font-[var(--font-outfit)] text-[10px] font-semibold tracking-[0.2em] text-[#D4A017]">
          {number}
        </span>

        <Sparkles
          size={15}
          strokeWidth={1.2}
          className="text-white/10 transition-colors group-hover:text-[#D4A017]"
        />
      </div>

      <div className="mt-6 font-[var(--font-outfit)] text-5xl font-semibold tracking-[-0.07em] text-white md:text-6xl">
        {value}
      </div>

      <h3 className="mt-3 font-[var(--font-outfit)] text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-[250px] font-[var(--font-lexend-deca)] text-[10px] leading-5 text-white/35">
        {text}
      </p>

      <div className="mt-7 h-px w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-14" />
    </motion.div>
  );
}

/* ================================================================
   APPLICATION CARD
================================================================ */

function ApplicationCard({
  title,
  text,
  number,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: number * 0.06,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-[#D4A017]"
    >
      <div className="flex items-center justify-between">
        <span className="font-[var(--font-outfit)] text-4xl font-light text-[#D4A017] transition-colors group-hover:text-black/30">
          {String(number).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.2}
          className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
        />
      </div>

      <h3 className="mt-8 font-[var(--font-outfit)] text-xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-black">
        {title}
      </h3>

      <p className="mt-3 font-[var(--font-lexend-deca)] text-[10px] leading-6 text-white/35 transition-colors group-hover:text-black/55">
        {text}
      </p>
    </motion.div>
  );
}

/* ================================================================
   WHY CHOOSE ROW
================================================================ */

function WhyChooseRow({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="group grid grid-cols-[45px_1fr] gap-4 border-b border-black/10 py-7 md:grid-cols-[65px_230px_1fr] md:gap-8"
    >
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className="font-[var(--font-outfit)] text-lg font-semibold leading-6 transition-colors group-hover:text-[#B8860B] md:text-xl">
        {title}
      </h3>

      <p className="col-start-2 font-[var(--font-lexend-deca)] text-xs leading-6 text-black/45 md:col-start-auto md:max-w-lg">
        {text}
      </p>

      <span className="col-start-2 mt-1 h-[2px] w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-10 md:col-start-3" />
    </motion.div>
  );
}