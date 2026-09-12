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
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  MessageCircle,
  ShieldCheck,
  Factory,
  Package,
  FlaskConical,
  Layers3,
  Globe2,
  Sparkles,
  MoveRight,
  Boxes,
  Settings2,
  CircleDot,
} from "lucide-react";

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

  description:
    "Resol Industries Ltd. supplies high-quality PVC Resin suitable for a wide range of rigid PVC applications. Our suspension-grade PVC Resin delivers consistent processing performance, purity and dependable supply for industrial manufacturers.",

  specs: [
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
      text: "Consistent material quality for reliable production.",
      icon: ShieldCheck,
    },
    {
      title: "Excellent Processability",
      text: "Designed for smooth and stable processing.",
      icon: Settings2,
    },
    {
      title: "Consistent Supply",
      text: "Reliable sourcing for continuous industrial requirements.",
      icon: Globe2,
    },
  ],

  grades: [
    "Suspension Grade",
    "Emulsion Grade",
  ],

  applications: [
    {
      title: "PVC Profiles",
      text: "Window, door and construction profile manufacturing.",
      icon: Layers3,
    },
    {
      title: "Pipes & Fittings",
      text: "Rigid PVC piping and fitting applications.",
      icon: Factory,
    },
    {
      title: "Sheets & Films",
      text: "Rigid sheets and selected film applications.",
      icon: FileText,
    },
    {
      title: "Cable Insulation",
      text: "PVC compounds for cable and electrical applications.",
      icon: CircleDot,
    },
    {
      title: "Construction Products",
      text: "Various rigid PVC construction applications.",
      icon: Boxes,
    },
  ],

  whyChoose: [
    {
      title: "Reliable Sourcing",
      text: "We work with established supply channels to maintain dependable material availability.",
    },
    {
      title: "Consistent Quality",
      text: "Product specifications are maintained with a strong focus on consistency.",
    },
    {
      title: "Industrial Understanding",
      text: "Our product portfolio is built around practical requirements of manufacturers.",
    },
    {
      title: "Responsive Support",
      text: "Our team helps customers select suitable materials for their applications.",
    },
    {
      title: "Pan-India Supply",
      text: "We support customers across multiple industrial regions in India.",
    },
  ],
};

/* ============================================================
   HELPERS
============================================================ */

const whatsappNumber = "919810929486";

const whatsappMessage = encodeURIComponent(
  "Hello Resol Industries, I am interested in PVC Resin. Please share the latest price and details."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/* ============================================================
   MAIN PAGE
============================================================ */

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="overflow-hidden bg-white text-black">
      {/* ======================================================
          TOP PROGRESS
      ====================================================== */}

      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-[#D4A017]"
      />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-black md:min-h-[570px]">
        <Image
          src={product.titleBackground}
          alt="PVC Resin"
          fill
          priority
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute -right-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#D4A017]/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,160,23,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,.5) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[1050px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[1px] w-10 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.28em] text-[#D4A017]">
                Industrial Material
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="mb-1 font-[var(--font-outfit)] text-sm uppercase tracking-[0.25em] text-white/45">
                Resol Industries Ltd.
              </p>

              <h1 className="font-[var(--font-outfit)] text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white">
                PVC
                <span className="text-[#D4A017]"> Resin</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-[650px] font-[var(--font-lexend-deca)] text-xs leading-6 text-white/55 md:text-sm"
            >
              Suspension Grade PVC Resin engineered for dependable processing,
              consistent quality and demanding rigid PVC applications.
            </motion.p>

            <div className="mt-7 grid max-w-[700px] grid-cols-2 border-l border-[#D4A017]/50 md:grid-cols-4">
              <HeroMeta label="Grade" value="Suspension" />
              <HeroMeta label="Form" value="Powder" />
              <HeroMeta label="K Value" value="57" />
              <HeroMeta label="Pack" value="25 KG" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-7 right-5 hidden items-center gap-3 md:flex lg:right-16"
          >
            <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.3em] text-white/35">
              Explore Product
            </span>

            <div className="flex h-8 w-8 items-center justify-center border border-white/20">
              <ChevronRight size={14} className="text-[#D4A017]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          BREADCRUMB
      ====================================================== */}

      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 px-5 py-3 font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.2em] text-black/40 sm:px-8 md:px-12 lg:px-16">
          <Link href="/" className="transition-colors hover:text-[#B8860B]">
            Home
          </Link>

          <ChevronRight size={11} />

          <Link
            href="/products"
            className="transition-colors hover:text-[#B8860B]"
          >
            Products
          </Link>

          <ChevronRight size={11} />

          <span className="text-black/70">{product.name}</span>
        </div>
      </div>

      {/* ======================================================
          PRODUCT SHOWCASE
      ====================================================== */}

      <section className="relative bg-[#f7f6f2]">
        <div className="mx-auto grid min-h-[650px] max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:px-12 md:py-12 lg:grid-cols-2 lg:gap-12 lg:px-16 xl:gap-16">
          {/* LEFT GALLERY */}

          <ProductGallery images={product.images} />

          {/* RIGHT CONTENT */}

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel text="Product Overview" />

              <h2 className="mt-4 max-w-[650px] font-[var(--font-outfit)] text-[clamp(2.6rem,4.5vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
                PVC
                <span className="text-[#D4A017]"> Resin.</span>
              </h2>

              <p className="mt-5 max-w-[650px] font-[var(--font-lexend-deca)] text-xs leading-6 text-black/55 md:text-sm">
                {product.description}
              </p>

              {/* MINI FEATURES */}

              <div className="mt-6 grid grid-cols-3 border-y border-black/10">
                <MiniFeature
                  icon={ShieldCheck}
                  label="High Purity"
                />

                <MiniFeature
                  icon={Factory}
                  label="Industrial Grade"
                />

                <MiniFeature
                  icon={Package}
                  label="25 KG Pack"
                />
              </div>

              {/* SPECS */}

              <div className="mt-6 grid grid-cols-2 gap-x-5 border-b border-black/10 pb-5 md:grid-cols-3">
                {product.specs.slice(0, 6).map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-black/5 py-3"
                  >
                    <p className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[0.15em] text-black/35">
                      {label}
                    </p>

                    <p className="mt-1 font-[var(--font-outfit)] text-sm font-medium">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="group flex items-center gap-5 bg-black px-5 py-3.5 font-[var(--font-outfit)] text-xs font-medium uppercase tracking-[0.12em] text-white transition-all hover:bg-[#D4A017] hover:text-black"
                >
                  Get a Quote
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-black/15 px-5 py-3.5 font-[var(--font-outfit)] text-xs font-medium uppercase tracking-[0.12em] transition-all hover:border-[#D4A017] hover:bg-[#D4A017]"
                >
                  <MessageCircle size={15} />
                  WhatsApp Inquiry
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MARQUEE
      ====================================================== */}

      <section className="overflow-hidden border-y border-black/10 bg-black py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[
            "PVC Resin",
            "Calcium Carbonate",
            "EVA Resin",
            "PET Resin",
          ]
            .concat([
              "PVC Resin",
              "Calcium Carbonate",
              "EVA Resin",
              "PET Resin",
            ])
            .map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center whitespace-nowrap"
              >
                <span className="mx-6 font-[var(--font-outfit)] text-lg font-medium uppercase tracking-[0.08em] text-white/80 md:text-xl">
                  {item}
                </span>

                <Sparkles
                  size={12}
                  className="text-[#D4A017]"
                />
              </div>
            ))}
        </motion.div>
      </section>

      {/* ======================================================
          TABS
      ====================================================== */}

      <section className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[900px] items-center justify-center">
          <TabButton
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          >
            Product Overview
          </TabButton>

          <TabButton
            active={activeTab === "specifications"}
            onClick={() => setActiveTab("specifications")}
          >
            Technical Specifications
          </TabButton>
        </div>
      </section>

      {/* ======================================================
          TAB CONTENT
      ====================================================== */}

      <AnimatePresence mode="wait">
        {activeTab === "overview" ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* ==================================================
                OVERVIEW
            ================================================== */}

            <section className="bg-white">
              <div className="mx-auto grid min-h-[400px] max-w-[1600px] items-center gap-8 px-5 py-7 sm:px-8 md:px-12 md:py-10 lg:grid-cols-12 lg:gap-12 lg:px-16">
                <div className="lg:col-span-5">
                  <SectionLabel text="01 / Overview" />

                  <h2 className="mt-4 font-[var(--font-outfit)] text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                    Built for
                    <br />
                    <span className="text-[#D4A017]">
                      consistency.
                    </span>
                  </h2>
                </div>

                <div className="lg:col-span-7 lg:border-l lg:border-black/10 lg:pl-12">
                  <p className="max-w-[720px] font-[var(--font-lexend-deca)] text-sm leading-7 text-black/55">
                    PVC Resin is one of the core materials used in the
                    manufacturing of rigid PVC products. Its processing
                    characteristics directly influence the performance,
                    appearance and consistency of the final product.
                  </p>

                  <p className="mt-4 max-w-[720px] font-[var(--font-lexend-deca)] text-sm leading-7 text-black/55">
                    Resol Industries Ltd. focuses on dependable sourcing and
                    supply of industrial-grade materials that help
                    manufacturers maintain stable production requirements.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3">
                    <RILCard
                      icon={FlaskConical}
                      title="Quality"
                      value="01"
                    />

                    <RILCard
                      icon={Globe2}
                      title="Supply"
                      value="02"
                    />

                    <RILCard
                      icon={Factory}
                      title="Industry"
                      value="03"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================
                BENEFITS
            ================================================== */}

            <section className="bg-[#D4A017]">
              <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 md:px-12 md:py-12 lg:px-16">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {product.benefits.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                        className="border border-black/15 bg-black p-5 text-white md:p-6"
                      >
                        <Icon
                          size={21}
                          className="mb-5 text-[#D4A017]"
                        />

                        <h3 className="font-[var(--font-outfit)] text-lg font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 font-[var(--font-lexend-deca)] text-[11px] leading-5 text-white/50">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ==================================================
                GRADES
            ================================================== */}

            <section className="bg-[#f7f6f2]">
              <div className="mx-auto grid min-h-[320px] max-w-[1600px] items-center gap-6 px-5 py-12 sm:px-8 md:px-12 md:py-10 lg:grid-cols-2 lg:gap-14 lg:px-16">
                <div>
                  <SectionLabel text="02 / Grades" />

                  <h2 className="mt-4 max-w-[450px] font-[var(--font-outfit)] text-[clamp(2.6rem,4.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                    Choose the
                    <br />
                    <span className="text-[#D4A017]">
                      right grade.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-[550px] font-[var(--font-lexend-deca)] text-xs leading-6 text-black/50">
                    Different PVC applications require different processing
                    characteristics. Our range supports diverse industrial
                    requirements.
                  </p>
                </div>

                <div className="space-y-3">
                  {product.grades.map((grade, index) => (
                    <motion.div
                      key={grade}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="group flex items-center justify-between border-b border-black/10 py-5"
                    >
                      <div className="flex items-center gap-5">
                        <span className="font-[var(--font-outfit)] text-sm text-[#D4A017]">
                          0{index + 1}
                        </span>

                        <span className="font-[var(--font-outfit)] text-xl font-semibold md:text-2xl">
                          {grade}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-black/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4A017]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================
                APPLICATIONS
            ================================================== */}

            <section className="bg-black text-white">
              <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <SectionLabelDark text="03 / Applications" />

                    <h2 className="mt-4 max-w-[700px] font-[var(--font-outfit)] text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                      Made for
                      <span className="text-[#D4A017]">
                        {" "}
                        industry.
                      </span>
                    </h2>
                  </div>

                  <p className="max-w-[380px] font-[var(--font-lexend-deca)] text-xs leading-5 text-white/40">
                    PVC Resin can be used across multiple rigid and industrial
                    applications.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
                  {product.applications.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <ApplicationCard
                        key={item.title}
                        number={index + 1}
                        title={item.title}
                        text={item.text}
                        icon={Icon}
                      />
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ==================================================
                WHY RIL
            ================================================== */}

            <section className="bg-white">
              <div className="mx-auto grid min-h-[320px] max-w-[1600px] items-center gap-10 px-5 py-12 sm:px-8 md:px-12 md:py-14 lg:grid-cols-12 lg:gap-12 lg:px-16">
                <div className="lg:col-span-4">
                  <SectionLabel text="04 / Why Resol" />

                  <h2 className="mt-4 font-[var(--font-outfit)] text-[clamp(2.6rem,4.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                    A reliable
                    <br />
                    <span className="text-[#D4A017]">
                      material partner.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-[400px] font-[var(--font-lexend-deca)] text-xs leading-6 text-black/45">
                    Beyond supplying materials, we focus on reliability,
                    responsiveness and long-term industrial relationships.
                  </p>
                </div>

                <div className="lg:col-span-8 lg:border-l lg:border-black/10 lg:pl-12">
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
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="specifications"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* ==================================================
                SPECIFICATIONS
            ================================================== */}

            <section className="bg-[#f7f6f2]">
              <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
                <div className="mb-8 text-center">

                  <h2 className="mt-4 font-[var(--font-outfit)] text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                    Product
                    <span className="text-[#D4A017]">
                      {" "}
                      Specifications.
                    </span>
                  </h2>
                </div>

                <div className="overflow-hidden border border-black/10 bg-white">
                  {/* TABLE HEADER */}

                  <div className="grid grid-cols-2 bg-black px-5 py-4 text-white md:px-7">
                    <div className="font-[var(--font-outfit)] text-xs font-semibold uppercase tracking-[0.15em]">
                      Specifications
                    </div>

                    <div className="font-[var(--font-outfit)] text-xs font-semibold uppercase tracking-[0.15em]">
                      Details
                    </div>
                  </div>

                  {/* TABLE ROWS */}

                  {product.specs.map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.03,
                      }}
                      className="grid grid-cols-2 border-t border-black/10 px-5 py-4 md:px-7 md:py-5"
                    >
                      <div className="font-[var(--font-lexend-deca)] text-xs text-black/45">
                        {label}
                      </div>

                      <div className="font-[var(--font-outfit)] text-sm font-medium">
                        {value}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

/* ============================================================
   PRODUCT GALLERY
============================================================ */

function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [0, -12, 0]
  );

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none font-[var(--font-outfit)] text-[clamp(6rem,14vw,13rem)] font-semibold leading-none tracking-[-0.08em] text-black/[0.035]">
        PVC
      </div>

      <motion.div
        style={{ y: imageY }}
        className="relative w-full max-w-[450px]"
      >
        <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#D4A017] md:-right-5 md:-top-5 md:h-28 md:w-28" />

        <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b border-l border-[#D4A017] md:-bottom-5 md:-left-5 md:h-28 md:w-28" />

        <div className="relative aspect-square overflow-hidden border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-4 md:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[activeImage]}
                alt={`${product.name} ${activeImage + 1}`}
                fill
                priority={activeImage === 0}
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-4 top-4 bg-black px-3 py-2 md:left-6 md:top-6">
            <span className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[0.18em] text-white">
              Material
            </span>

            <div className="mt-0.5 font-[var(--font-outfit)] text-xs font-semibold text-[#D4A017]">
              PVC Resin
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 px-3 py-2 backdrop-blur md:bottom-6 md:right-6">
            <span className="font-[var(--font-outfit)] text-xs font-medium">
              0{activeImage + 1}
            </span>

            <span className="text-black/20">/</span>

            <span className="font-[var(--font-outfit)] text-xs text-black/40">
              0{images.length}
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2 md:mt-5">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`relative h-16 w-16 overflow-hidden border bg-white transition-all md:h-20 md:w-20 ${
                activeImage === index
                  ? "border-[#D4A017]"
                  : "border-black/10 opacity-55 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   HERO META
============================================================ */

function HeroMeta({ label, value }) {
  return (
    <div className="border-r border-white/10 px-4 py-1 first:pl-0">
      <p className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[0.2em] text-white/35">
        {label}
      </p>

      <p className="mt-1 font-[var(--font-outfit)] text-sm font-medium text-white">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   MINI FEATURE
============================================================ */

function MiniFeature({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 border-r border-black/10 py-3 last:border-r-0">
      <Icon
        size={15}
        className="shrink-0 text-[#B8860B]"
      />

      <span className="font-[var(--font-outfit)] text-[9px] font-medium uppercase tracking-[0.08em] text-black/60 md:text-[10px]">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   TAB BUTTON
============================================================ */

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-5 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors md:px-8 md:text-xs ${
        active
          ? "text-black"
          : "text-black/35 hover:text-black"
      }`}
    >
      {children}

      <span
        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#D4A017] transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
}

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[1px] w-8 bg-[#D4A017]" />

      <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.25em] text-black/40">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   DARK SECTION LABEL
============================================================ */

function SectionLabelDark({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[1px] w-8 bg-[#D4A017]" />

      <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.25em] text-white/35">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   RIL CARD
============================================================ */

function RILCard({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="border border-black/10 bg-[#f7f6f2] p-5"
    >
      <div className="flex items-start justify-between">
        <Icon
          size={18}
          className="text-[#B8860B]"
        />

        <span className="font-[var(--font-outfit)] text-3xl font-semibold text-black/10">
          {value}
        </span>
      </div>

      <h3 className="mt-5 font-[var(--font-outfit)] text-sm font-semibold">
        {title}
      </h3>

      <div className="mt-2 h-[2px] w-5 bg-[#D4A017]" />
    </motion.div>
  );
}

/* ============================================================
   APPLICATION CARD
============================================================ */

function ApplicationCard({
  number,
  title,
  text,
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-black p-5 transition-colors hover:bg-[#D4A017] md:p-6"
    >
      <div className="flex items-start justify-between">
        <span className="font-[var(--font-outfit)] text-xs text-[#D4A017] group-hover:text-black">
          0{number}
        </span>

        <Icon
          size={19}
          className="text-white/30 transition-colors group-hover:text-black"
        />
      </div>

      <h3 className="mt-10 font-[var(--font-outfit)] text-lg font-semibold leading-tight group-hover:text-black">
        {title}
      </h3>

      <p className="mt-3 font-[var(--font-lexend-deca)] text-[10px] leading-5 text-white/40 transition-colors group-hover:text-black/60">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="h-[2px] w-6 bg-[#D4A017] transition-all group-hover:w-10 group-hover:bg-black" />

        <MoveRight
          size={13}
          className="text-[#D4A017] transition-colors group-hover:text-black"
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   WHY CHOOSE ROW
============================================================ */

function WhyChooseRow({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group grid grid-cols-[45px_1fr] gap-4 border-b border-black/10 py-5 md:grid-cols-[55px_220px_1fr] md:gap-7"
    >
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className="font-[var(--font-outfit)] text-base font-semibold leading-5 transition-colors group-hover:text-[#B8860B] md:text-lg">
        {title}
      </h3>

      <p className="col-start-2 font-[var(--font-lexend-deca)] text-[11px] leading-5 text-black/45 md:col-start-auto md:max-w-lg">
        {text}
      </p>

      <span className="col-start-2 mt-1 h-[2px] w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-8 md:col-start-3" />
    </motion.div>
  );
}