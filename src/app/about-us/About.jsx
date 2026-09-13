"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaGlobe,
  FaHandshake,
  FaIndustry,
  FaBoxOpen,
  FaUsers,
  FaAward,
  FaLocationDot,
} from "react-icons/fa6";

import Scroll from "@/components/Scroll";
import OurTeam from "@/components/OurTeam";

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ============================================================
   JOURNEY
============================================================ */

const journey = [
  {
    year: "2005",
    title: "The Beginning",
    text: "Resol Industries began its journey in 2005 with a focus on importing and distributing PVC Resin and other industrial materials. With a clear focus on customer requirements and dependable sourcing, the company steadily developed its presence in the Indian market.",
  },
  {
    year: "01",
    title: "Expanding Our Product Portfolio",
    text: "Over the years, we expanded beyond PVC Resin to include products such as Calcium Carbonate, EVA Resin, Polyethylene, Polypropylene, PET Resin, Plasticizers, Rubber, Fillers, Activators and Colourants.",
  },
  {
    year: "02",
    title: "Growing Market Presence",
    text: "With an experienced team and established business relationships, we have continued to strengthen our presence across India and serve customers from diverse industrial sectors.",
  },
  {
    year: "03",
    title: "Strong International Relationships",
    text: "Our long-term relationships with international sources form an important part of our business. These connections help us maintain a diverse sourcing network and respond to changing market and customer requirements.",
  },
  {
    year: "Today",
    title: "Where We Stand Today",
    text: "Today, Resol Industries continues to operate as an established importer of PVC Resin and other industrial materials, serving customers across India. Our growth has been driven by product-focused sourcing, reliable service, and relationships built over the years.",
  },
];

/* ============================================================
   DIFFERENTIATORS
============================================================ */

const differentiators = [
  {
    icon: <FaAward />,
    title: "Established Industry Experience",
    text: "Founded in 2005, we bring extensive experience in importing and distributing industrial materials for customers across India.",
  },
  {
    icon: <FaUsers />,
    title: "Customer-Focused Approach",
    text: "We focus on understanding customer requirements and building long-term relationships through responsive service, reliability, and transparent business practices.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Diverse Product Portfolio",
    text: "From PVC Resin and Calcium Carbonate to EVA Resin, PET Resin, Plasticizers, Rubber, Fillers, Activators, and Colourants, our portfolio caters to varied industrial requirements.",
  },
  {
    icon: <FaGlobe />,
    title: "Pan-India Market Reach",
    text: "Our operations and distribution network enable us to serve customers across different regions and industries throughout India.",
  },
];

/* ============================================================
   COMMITMENTS
============================================================ */

const commitments = [
  {
    number: "01",
    title: "Quality-Focused Sourcing",
    text: "We work with established international sources to bring reliable industrial materials to the Indian market.",
  },
  {
    number: "02",
    title: "Consistent Product Standards",
    text: "We focus on maintaining consistent standards across our product range to meet diverse industrial requirements.",
  },
  {
    number: "03",
    title: "Diverse Product Portfolio",
    text: "Our range includes PVC Resin, Calcium Carbonate, EVA Resin, PET Resin, Plasticizers, Rubber, Fillers, Activators, Colourants, and other industrial materials.",
  },
  {
    number: "04",
    title: "Customer-Centric Approach",
    text: "We understand the requirements of different industries and work to provide suitable products and dependable service.",
  },
  {
    number: "05",
    title: "Long-Term Relationships",
    text: "We believe in building lasting relationships with customers and international business partners through integrity, transparency, and reliability.",
  },
  {
    number: "06",
    title: "Pan-India Reach",
    text: "Our established operations enable us to serve customers across different regions and industries throughout India.",
  },
];

/* ============================================================
   MAIN
============================================================ */

export default function AboutUs() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F3E6D5] text-[#17130B]">

      {/* ========================================================
          GLOBAL DECOR
      ======================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#D4A017]/[0.06] blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[1100px] h-[500px] w-[500px] rounded-full bg-[#D4A017]/[0.05] blur-[130px]"
        />

      </div>

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative z-10 min-h-[90vh] overflow-hidden bg-[#F3E6D5] px-5 pb-12 pt-28 sm:pt-32 md:px-8 lg:min-h-screen lg:pt-32">

        {/* GIANT BACKGROUND WORD */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="pointer-events-none absolute -left-4 top-[18%] select-none text-[25vw] font-black leading-none tracking-[-0.08em] text-[#17130B]/[0.035] sm:text-[22vw]"
        >
          RESOL
        </motion.div>

        <div className="mx-auto max-w-[1500px]">

          <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="relative z-10"
            >

              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-[#D4A017]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#A97900]">
                  About Resol Industries
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-[60px] font-black leading-[55px] tracking-[-0.055em]"
              >
                Built on

                <span className="block text-[#B8860B]">
                  Experience.
                </span>

                <span className="mt-2 block text-[#17130B]">
                  Driven by
                </span>

                <span className="block text-[#B8860B]">
                  Reliability.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-sm leading-7 text-[#6F695F] md:text-base"
              >
                Resol Industries Ltd. is an established importer and
                distributor of industrial materials, serving businesses
                across India through dependable sourcing and long-term
                relationships.
              </motion.p>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                x: 70,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease,
              }}
              className="relative"
            >

              <div className="absolute -right-3 -top-3 h-full w-full border border-[#D4A017]/40 sm:-right-5 sm:-top-5" />

              <div className="relative overflow-hidden bg-[#17130B] p-2">

                <motion.div
                  initial={{
                    scale: 1.15,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                  className="relative h-[430px] overflow-hidden sm:h-[460px] lg:h-[510px]"
                >

                  <Image
                    src="/About/pvc resin cate.webp"
                    alt="Resol Industries"
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                    <div>
                      <p className="text-5xl font-black leading-none text-white sm:text-6xl">
                        2005
                      </p>

                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/65">
                        Established
                      </p>
                    </div>


                  </div>

                </motion.div>

              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 bg-[#D4A017] px-5 py-4 shadow-xl sm:-left-7"
              >

                <p className="text-2xl font-black text-[#17130B]">
                  20+
                </p>

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#17130B]/65">
                  Years Experience
                </p>

              </motion.div>

            </motion.div>

          </div>

        </div>


      </section>

      {/* ========================================================
          ABOUT STORY
      ======================================================== */}

      <section className="relative z-10 overflow-hidden bg-white px-5 py-16 md:px-8 md:py-20">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

            {/* IMAGE */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative"
            >

              <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[#D4A017] sm:-left-8 sm:-top-8 sm:h-40 sm:w-40" />

              <div className="relative ml-3 overflow-hidden bg-[#17130B] p-2 sm:ml-8">

                <motion.div
                  initial={{
                    scale: 1.08,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    ease,
                  }}
                  className="relative h-[420px] sm:h-[550px]"
                >

                  <Image
                    src="/About/about-us-4.webp"
                    alt="About Resol Industries"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <p className="text-4xl font-black text-white">
                      RIL
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/60">
                      Industrial Materials
                    </p>

                  </div>

                </motion.div>

              </div>


            </motion.div>

            {/* CONTENT */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              {/* SECTION LABEL */}

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#D4A017]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A97900]">
                  Who We Are
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">

                About

                <span className="block text-[#B8860B]">
                  Resol Industries.
                </span>

              </h2>

              <div className="mt-7 space-y-4 text-sm leading-7 text-[#6D675D]">

                <p>
                  Resol Industries Ltd. (RIL) is an established{" "}
                  <span className="font-bold text-[#29241B]">
                    PVC Resin importer
                  </span>{" "}
                  founded in 2005, with its head office in New Delhi,
                  India. We specialize in importing and distributing a
                  diverse range of industrial materials.
                </p>

                <p>
                  Our product portfolio includes{" "}
                  <span className="font-semibold text-[#29241B]">
                    PVC Resin, Calcium Carbonate, EVA Resin, LLDPE,
                    LDPE, PET Resin, Plasticizers, Natural & Synthetic
                    Rubber, Fillers, Activators and Colorants.
                  </span>
                </p>

                <p>
                  Over the years, we have built a strong presence in
                  the Indian market by developing reliable international
                  sourcing networks and long-term business relationships.
                </p>

                <p>
                  Our imported products serve a wide range of industries,
                  including PVC pipes and fittings, footwear, PVC
                  flooring, packaging, plastics, adhesives, textiles,
                  paints & coatings, and vinyl.
                </p>

              </div>

              {/* STATS */}

              <div className="mt-8 grid grid-cols-3 border-y border-[#DED7C8]">

                <div className="px-3 py-5 text-center first:pl-0 sm:px-5">

                  <p className="text-2xl font-black leading-none text-[#17130B] sm:text-3xl">
                    2005
                  </p>

                  <p className="mt-2 text-[8px] font-bold uppercase tracking-[1px] text-[#8A8378] sm:text-[9px]">
                    Founded
                  </p>

                </div>

                <div className="px-3 py-5 text-center sm:px-5">

                  <p className="text-2xl font-black leading-none text-[#17130B] sm:text-3xl">
                    20+
                  </p>

                  <p className="mt-2 text-[8px] font-bold uppercase tracking-[1px] text-[#8A8378] sm:text-[9px]">
                    Years
                  </p>

                </div>

                <div className="px-3 py-5 text-center last:pr-0 sm:px-5">

                  <p className="text-2xl font-black leading-none text-[#17130B] sm:text-3xl">
                    PAN
                  </p>

                  <p className="mt-2 text-[8px] font-bold uppercase tracking-[1px] text-[#8A8378] sm:text-[9px]">
                    India Reach
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ========================================================
          BUSINESS SECTION
      ======================================================== */}

      <section className="relative z-10 overflow-hidden bg-[#17130B] px-5 py-16 text-white md:px-8 md:py-20">

        <div className="absolute inset-0 opacity-20">

          <Image
            src="/Calcium carbonate.webp"
            alt=""
            fill
            className="object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-[#17130B]/80" />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#D4A017]/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#D4A017]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#D4A017]">
                  Our Business
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight md:text-[55px]">

                Connecting

                <span className="block text-[#D4A017]">
                  Global Sources
                </span>

                With India.

              </h2>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="space-y-5 text-sm leading-7 text-white/60"
            >

              <p>
                Our business is built around international sourcing and
                the import of industrial materials for the Indian market.
                We work with established global sources to maintain a
                diverse product portfolio and dependable availability.
              </p>

              <p>
                Our products are marketed under the{" "}
                <span className="font-semibold text-white">
                  Resol Industries brand
                </span>
                , allowing us to build a consistent presence in the
                Indian market while maintaining our focus on product
                quality and customer requirements.
              </p>

              <p>
                With operations serving customers across India, we
                continue to expand our product portfolio and strengthen
                our market presence through responsible business
                practices and long-term partnerships.
              </p>

            </motion.div>

          </div>

          {/* BUSINESS GRID */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >

            {/* CARD 01 */}

            <motion.div
              variants={fadeUp}
              className="group relative border-r border-b border-white/15 p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >

              <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/[0.035]">
                01
              </span>

              <div className="flex h-11 w-11 items-center justify-center bg-[#D4A017]/10 text-[#D4A017] transition-all duration-500 group-hover:bg-[#D4A017] group-hover:text-[#17130B]">
                <FaGlobe />
              </div>

              <h3 className="mt-6 text-lg font-black text-white">
                Global Sourcing
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-6 text-white/45">
                Established international sourcing networks.
              </p>


            </motion.div>

            {/* CARD 02 */}

            <motion.div
              variants={fadeUp}
              className="group relative border-r border-b border-white/15 p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >

              <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/[0.035]">
                02
              </span>

              <div className="flex h-11 w-11 items-center justify-center bg-[#D4A017]/10 text-[#D4A017] transition-all duration-500 group-hover:bg-[#D4A017] group-hover:text-[#17130B]">
                <FaIndustry />
              </div>

              <h3 className="mt-6 text-lg font-black text-white">
                Industrial Materials
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-6 text-white/45">
                Diverse materials for multiple industries.
              </p>


            </motion.div>

            {/* CARD 03 */}

            <motion.div
              variants={fadeUp}
              className="group relative border-r border-b border-white/15 p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >

              <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/[0.035]">
                03
              </span>

              <div className="flex h-11 w-11 items-center justify-center bg-[#D4A017]/10 text-[#D4A017] transition-all duration-500 group-hover:bg-[#D4A017] group-hover:text-[#17130B]">
                <FaHandshake />
              </div>

              <h3 className="mt-6 text-lg font-black text-white">
                Long-Term Partners
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-6 text-white/45">
                Relationships built on reliability and trust.
              </p>


            </motion.div>

            {/* CARD 04 */}

            <motion.div
              variants={fadeUp}
              className="group relative border-r border-b border-white/15 p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >

              <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/[0.035]">
                04
              </span>

              <div className="flex h-11 w-11 items-center justify-center bg-[#D4A017]/10 text-[#D4A017] transition-all duration-500 group-hover:bg-[#D4A017] group-hover:text-[#17130B]">
                <FaLocationDot />
              </div>

              <h3 className="mt-6 text-lg font-black text-white">
                Pan-India Reach
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-6 text-white/45">
                Serving customers across India.
              </p>


            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ========================================================
          TEAM
      ======================================================== */}

      <section className="relative z-10 bg-[#F5F3ED]">
        <OurTeam />
      </section>

      {/* Our Jurnry */}
<section className="relative z-10 overflow-hidden bg-gray-100 px-5 py-16 md:px-8 md:py-20">

  {/* ============================================================
      BACKGROUND SVG DECORATIONS — DESIGN ONLY
  ============================================================ */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* TOP LEFT DOT GRID */}
    <svg
      className="absolute left-5 top-8 h-20 w-20 text-[#D4A017]/20 md:left-10"
      viewBox="0 0 80 80"
      fill="none"
    >
      <g fill="currentColor">
        <circle cx="8" cy="8" r="2" />
        <circle cx="24" cy="8" r="2" />
        <circle cx="40" cy="8" r="2" />
        <circle cx="56" cy="8" r="2" />

        <circle cx="8" cy="24" r="2" />
        <circle cx="24" cy="24" r="2" />
        <circle cx="40" cy="24" r="2" />
        <circle cx="56" cy="24" r="2" />

        <circle cx="8" cy="40" r="2" />
        <circle cx="24" cy="40" r="2" />
        <circle cx="40" cy="40" r="2" />
        <circle cx="56" cy="40" r="2" />

        <circle cx="8" cy="56" r="2" />
        <circle cx="24" cy="56" r="2" />
        <circle cx="40" cy="56" r="2" />
        <circle cx="56" cy="56" r="2" />
      </g>
    </svg>


    {/* TOP RIGHT ROCKET / GROWTH ICON */}
    <motion.svg
      animate={{
        y: [0, -8, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-8 top-8 hidden h-24 w-24 text-[#D4A017]/15 md:block lg:right-14 lg:top-10"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M67 15C78 12 88 13 91 16C94 19 95 29 92 40C88 55 77 68 62 76L48 62C56 47 64 32 67 15Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M48 62L39 70L40 58L48 50"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M62 76L54 85L55 72"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="75"
        cy="31"
        r="6"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M45 72C38 74 31 79 29 86C37 85 44 82 49 77"
        stroke="currentColor"
        strokeWidth="3"
      />
    </motion.svg>


    {/* LEFT TARGET / GOAL ICON */}
    <motion.svg
      animate={{
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-3 top-[32%] hidden h-24 w-24 text-[#D4A017]/15 lg:block"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle
        cx="48"
        cy="52"
        r="30"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle
        cx="48"
        cy="52"
        r="20"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="48"
        cy="52"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M48 52L80 20"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M68 20H80V32"
        stroke="currentColor"
        strokeWidth="4"
      />
    </motion.svg>


    {/* RIGHT GROWTH CHART */}
    <motion.svg
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-4 top-[45%] hidden h-28 w-28 text-[#D4A017]/15 lg:block"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M15 82H88"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="23"
        y="58"
        width="12"
        height="24"
        fill="currentColor"
      />
      <rect
        x="43"
        y="44"
        width="12"
        height="38"
        fill="currentColor"
      />
      <rect
        x="63"
        y="27"
        width="12"
        height="55"
        fill="currentColor"
      />
      <path
        d="M18 47L39 36L55 40L82 17"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M69 17H82V30"
        stroke="currentColor"
        strokeWidth="4"
      />
    </motion.svg>


    {/* BOTTOM LEFT COMPASS */}
    <motion.svg
      animate={{
        rotate: [0, 3, 0, -3, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -bottom-5 -left-5 hidden h-40 w-40 text-[#D4A017]/10 lg:block"
      viewBox="0 0 160 160"
      fill="none"
    >
      <circle
        cx="80"
        cy="80"
        r="58"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle
        cx="80"
        cy="80"
        r="47"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M80 28V132"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M28 80H132"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M94 58L77 91L63 102L80 69L94 58Z"
        fill="currentColor"
      />
      <circle
        cx="80"
        cy="80"
        r="6"
        fill="currentColor"
      />
    </motion.svg>


    {/* BOTTOM RIGHT GEAR */}
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -bottom-4 right-8 hidden h-24 w-24 text-[#D4A017]/10 lg:block"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M43 8H57L60 18C64 19 68 21 71 24L81 21L89 33L82 40C83 44 84 48 83 52L92 59L85 72L75 69C72 72 68 75 64 77L63 88H48L45 78C41 77 37 75 34 72L24 76L17 63L25 56C24 52 24 48 25 44L17 37L24 24L35 28C38 25 41 22 45 20L43 8Z"
        fill="currentColor"
      />
      <circle
        cx="55"
        cy="48"
        r="15"
        fill="#F3F4F6"
      />
      <circle
        cx="55"
        cy="48"
        r="7"
        fill="currentColor"
      />
    </motion.svg>


    {/* SMALL SPARKLES */}
    <svg
      className="absolute right-[28%] top-[18%] h-8 w-8 text-[#D4A017]/20"
      viewBox="0 0 40 40"
      fill="currentColor"
    >
      <path d="M20 0L23 16L40 20L23 23L20 40L17 23L0 20L17 16L20 0Z" />
    </svg>

    <svg
      className="absolute bottom-[18%] left-[22%] h-6 w-6 text-[#D4A017]/15"
      viewBox="0 0 40 40"
      fill="currentColor"
    >
      <path d="M20 0L23 16L40 20L23 23L20 40L17 23L0 20L17 16L20 0Z" />
    </svg>


    {/* LARGE DECORATIVE CURVE TOP */}
    <svg
      className="absolute left-0 top-0 h-[280px] w-full opacity-20"
      viewBox="0 0 1440 280"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M-50 150C180 20 260 260 500 180C750 95 870 230 1100 130C1240 70 1330 45 1490 -20"
        stroke="#D4A017"
        strokeWidth="1.5"
      />
    </svg>


    {/* BOTTOM CURVE */}
    <svg
      className="absolute bottom-0 left-0 h-[220px] w-full opacity-15"
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M-50 180C180 70 350 240 590 145C820 55 980 210 1190 125C1300 80 1390 60 1490 20"
        stroke="#D4A017"
        strokeWidth="1.5"
      />
    </svg>

  </div>


  {/* ============================================================
      ORIGINAL CONTENT — UNCHANGED
  ============================================================ */}

  <div className="relative z-10 mx-auto max-w-[1400px]">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]"
    >

      <div>

        <div className="flex items-center gap-3">

          <span className="h-px w-10 bg-[#D4A017]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A97900]">
            Our Journey
          </span>

        </div>

      </div>

      <div>

        <h2 className="text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">

          More Than Two Decades

          <span className="block text-[#B8860B]">
            Of Progress.
          </span>

        </h2>

      </div>

    </motion.div>


    {/* TIMELINE */}

    <div className="relative mt-14">

      <div className="absolute bottom-0 left-[17px] top-0 w-px bg-[#DCD5C8] md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-10">

        {journey.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.06,
              ease,
            }}
            className="relative grid gap-5 pl-12 md:grid-cols-2 md:gap-16 md:pl-0"
          >

            {/* DOT */}

            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute left-[8px] top-2 h-[19px] w-[19px] border-4 border-white bg-[#D4A017] md:left-1/2 md:-translate-x-1/2"
            />


            {/* YEAR */}

            <div
              className={
                index % 2 === 0
                  ? "md:text-right"
                  : "md:order-2"
              }
            >

              <span className="text-5xl font-black leading-none text-[#D4A017]/30 md:text-7xl">
                {item.year}
              </span>

            </div>


            {/* CONTENT */}

            <div
              className={
                index % 2 === 0
                  ? "md:order-2"
                  : "md:order-1"
              }
            >

              <motion.div
                whileHover={{
                  x: index % 2 === 0 ? 5 : -5,
                }}
                className="border-l-2 border-[#D4A017] bg-[#F5F3ED] p-5 md:p-6"
              >

                <h3 className="text-xl font-black text-[#211D15]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#716B61]">
                  {item.text}
                </p>

              </motion.div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>
```




    </main>
  );
}
