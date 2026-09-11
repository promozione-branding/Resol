"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const industries = [
  {
    id: 1,
    name: "Footwear",
    description:
      "PVC Resin and Calcium Carbonate solutions for footwear manufacturing, soles, and related applications.",
    image: "/footwear.webp",
  },
  {
    id: 2,
    name: "PVC Panels",
    description:
      "High-quality raw materials supporting the production of durable PVC panels and interior applications.",
    image: "/pvc penal.webp",
  },
  {
    id: 3,
    name: "Adhesives",
    description:
      "Specialized materials used in adhesive formulations for reliable bonding and consistent performance.",
    image: "/Adhesives.webp",
  },
  {
    id: 4,
    name: "Textile",
    description:
      "Raw materials supporting textile manufacturing, fabric coating, and a wide range of industrial processes.",
    image: "/textile.webp",
  },
  {
    id: 5,
    name: "Pipes & Fittings",
    description:
      "PVC Resin solutions for manufacturing pipes, fittings, and other durable PVC products.",
    image: "/pipe.webp",
  },
  {
    id: 6,
    name: "Packaging",
    description:
      "Reliable materials for flexible and rigid packaging applications across different industries.",
    image: "/industry (3).webp",
  },
];

export default function IndustriesAccordion() {
  const [active, setActive] = useState(0);

  const activeIndustry = industries[active];

  return (
    <section className="relative mt-10 min-h-[calc(100vh-40px)] overflow-hidden bg-[#f3f3f1] py-6 md:py-8 lg:py-9">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CIRCLES */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D4A017]/10" />

        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#D4A017]/10" />

      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-7 md:mb-8"
        >

          {/* LABEL */}

          <div className="mb-4 flex items-center gap-4">

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-[#D4A017]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A017]">
              Industries We Serve
            </span>

          </div>

          {/* TITLE + DESCRIPTION */}

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            {/* TITLE */}

            <h2 className="max-w-5xl overflow-hidden text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#171717] md:text-5xl lg:text-[55px]">

              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Materials that Power
              </motion.span>

              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-[#D4A017]"
              >
                Every Industry.
              </motion.span>

            </h2>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="max-w-md text-[13px] leading-6 text-gray-600 md:text-sm"
            >
              From footwear and plastics to pipes, packaging and coatings,
              our imported raw materials support diverse manufacturing
              applications across India.
            </motion.p>

          </div>

        </motion.div>

        {/* =====================================================
            MAIN ACCORDION AREA
        ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="relative lg:sticky lg:top-20 lg:h-[calc(100vh-285px)]">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-[360px] overflow-hidden bg-black md:h-[450px] lg:h-full"
            >

              {/* =================================================
                  ACTIVE IMAGE
              ================================================= */}

              <AnimatePresence mode="sync">

                <motion.div
                  key={activeIndustry.image}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                </motion.div>

              </AnimatePresence>

              {/* =================================================
                  DARK OVERLAY
              ================================================= */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              {/* =================================================
                  GOLDEN VERTICAL LINE
              ================================================= */}

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "35%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="absolute left-0 top-0 w-[3px] bg-[#D4A017]"
              />

              {/* =================================================
                  IMAGE NUMBER
              ================================================= */}

              <div className="absolute left-5 top-5 md:left-7 md:top-7">

                <span className="text-[75px] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[100px]">
                  {String(activeIndustry.id).padStart(2, "0")}
                </span>

              </div>

              {/* =================================================
                  IMAGE BOTTOM CONTENT
              ================================================= */}

              <div className="absolute bottom-0 left-0 w-full p-5 md:p-7 lg:p-8">

                <div className="mb-3 flex items-center gap-3">

                  <span className="h-[2px] w-8 bg-[#D4A017]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/70">
                    Current Industry
                  </span>

                </div>

                <AnimatePresence mode="wait">

                  <motion.h3
                    key={activeIndustry.name}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      duration: 0.45,
                    }}
                    className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
                  >
                    {activeIndustry.name}
                  </motion.h3>

                </AnimatePresence>

              </div>

              {/* =================================================
                  CORNER LINES
              ================================================= */}

              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#D4A017]/70" />

            </motion.div>

          </div>

          {/* =================================================
              RIGHT ACCORDION
          ================================================= */}

          <div className="border-t border-[#222]/20">

            {industries.map((industry, index) => {

              const isActive = active === index;

              return (
                <motion.div
                  key={industry.id}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="border-b border-[#222]/20"
                >

                  {/* =================================================
                      ACCORDION HEADER
                  ================================================= */}

                  <button
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center gap-4 py-4 text-left md:py-3"
                  >

                    {/* NUMBER */}

                    <span
                      className={`min-w-[42px] text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-[#D4A017]"
                          : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE */}

                    <span
                      className={`flex-1 text-2xl font-bold tracking-[-0.04em] transition-all duration-500 md:text-4xl lg:text-[34px] ${
                        isActive
                          ? "translate-x-2 text-[#171717]"
                          : "text-[#555] group-hover:translate-x-2 group-hover:text-[#171717]"
                      }`}
                    >
                      {industry.name}
                    </span>

                    {/* ARROW */}

                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 md:h-12 md:w-12 ${
                        isActive
                          ? "rotate-0 border-[#D4A017] bg-[#D4A017] text-black"
                          : "border-gray-300 text-gray-400 group-hover:border-[#D4A017] group-hover:text-[#D4A017]"
                      }`}
                    >

                      <motion.span
                        animate={{
                          rotate: isActive ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="text-lg"
                      >
                        ↗
                      </motion.span>

                    </span>

                  </button>

                  {/* =================================================
                      ACCORDION CONTENT
                  ================================================= */}

                  <AnimatePresence initial={false}>

                    {isActive && (

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
                        transition={{
                          height: {
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                        className="overflow-hidden"
                      >

                        <div className="grid gap-4 pb-5 pl-[60px] md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:pb-6">

                          {/* DESCRIPTION */}

                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 20,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.15,
                              duration: 0.5,
                            }}
                            className="max-w-xl text-[13px] leading-6 text-gray-600 md:text-sm"
                          >
                            {industry.description}
                          </motion.p>

                          {/* SMALL GOLD LINE */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: 0.2,
                              duration: 0.5,
                            }}
                            className="flex items-center gap-3"
                          >

                            <span className="h-px w-10 bg-[#D4A017]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#171717]">
                              RIL
                            </span>

                          </motion.div>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="mt-7 h-px bg-[#222]/20"
        >

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "22%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="h-full bg-[#D4A017]"
          />

        </motion.div>

      </div>
    </section>
  );
}