"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

/* ============================================================
   COLORS
============================================================ */

const WHITE = "#FFFFFF";
const GOLD = "#D4A017";
const BLACK = "#111111";

/* ============================================================
   BANNERS
============================================================ */

const banners = [
  {
    image: "/pvc (4).webp",
    title: "PVC",
    highlight: "RESIN",
    category: "INDUSTRIAL MATERIAL",
    description:
      "High-quality PVC Resin for reliable processing, consistent performance and diverse industrial applications.",
    video: null,
  },
  {
    image: "/calcium.webp",
    title: "CALCIUM",
    highlight: "CARBONATE",
    category: "INDUSTRIAL MATERIAL",
    description:
      "Reliable Calcium Carbonate material designed for consistent quality across a wide range of industrial applications.",
    video: "/13753874_1280_720_25fps.mp4",
  },
  {
    image: "/banner2 (8).webp",
    title: "POLYSTYRENE",
    highlight: "MATERIAL",
    category: "INDUSTRIAL MATERIAL",
    description:
      "Consistent polymer material offering dependable processing and performance for modern industrial requirements.",
    video: null,
  },
];

/* ============================================================
   ANIMATED WORD
============================================================ */

function AnimatedWord({
  text,
  className = "",
  delay = 0,
  color = WHITE,
}) {
  const letters = text.split("");

  return (
    <span
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{
        color,
        perspective: "1000px",
      }}
    >
      <span className="inline-flex">
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{
              y: "120%",
              rotateX: -75,
              opacity: 0,
            }}
            animate={{
              y: "0%",
              rotateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.85,
              delay: delay + index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

/* ============================================================
   ANIMATED LINE
============================================================ */

function AnimatedLine() {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: 55 }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="block h-[2px] bg-white"
    />
  );
}

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mt-20 w-full overflow-hidden bg-white">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1300}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".pvc-next",
          prevEl: ".pvc-prev",
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[650px] w-full overflow-hidden bg-white sm:min-h-[660px] lg:min-h-[680px] xl:min-h-[690px]">

              {/* ==================================================
                  WHITE / GREY BACKGROUND
              ================================================== */}

              <motion.div
                key={`background-${activeIndex}`}
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 bg-gradient-to-br from-white via-[#F7F7F7] to-[#DCDCDC]"
              />

              {/* ==================================================
                  SOFT BACKGROUND LIGHT
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-black/[0.06]" />

              {/* ==================================================
                  VIDEO
              ================================================== */}

              {banner.video && (
                <>
                  <motion.video
                    key={banner.video}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 0.18,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={banner.video} type="video/mp4" />
                  </motion.video>

                  <div className="pointer-events-none absolute inset-0 bg-white/65" />
                </>
              )}

              {/* ==================================================
                  RIGHT SIDE GOLDEN LIGHT
              ================================================== */}

              <div className="pointer-events-none absolute right-0 top-0 h-full w-[65%] bg-gradient-to-l from-[#D4A017]/[0.08] via-transparent to-transparent" />

              {/* ==================================================
                  GIANT GOLDEN WATERMARK
              ================================================== */}

              <motion.div
                key={`big-text-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 120,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pointer-events-none absolute right-[-2%] top-[3%] z-[1] select-none text-[140px] font-black uppercase leading-none tracking-[-12px] text-[#D4A017]/[0.10] sm:text-[210px] md:text-[250px] lg:text-[300px] xl:text-[360px]"
              >
                {banner.title}
              </motion.div>

              {/* ==================================================
                  GOLDEN WATERMARK SECOND LAYER
              ================================================== */}

              <motion.div
                key={`watermark-line-${activeIndex}`}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pointer-events-none absolute right-[4%] top-[14%] z-[1] hidden select-none text-[12px] font-bold uppercase tracking-[8px] text-[#D4A017]/[0.35] lg:block"
              >
                RESOL INDUSTRIES
              </motion.div>

              {/* ==================================================
                  OUTER CIRCLE
              ================================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 55,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute right-[-160px] top-1/2 z-[2] hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-[#D4A017]/[0.13] lg:block"
              />

              {/* ==================================================
                  INNER CIRCLE
              ================================================== */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 75,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute right-[-70px] top-1/2 z-[2] hidden h-[550px] w-[550px] -translate-y-1/2 rounded-full border border-[#D4A017]/[0.16] lg:block"
              />

              {/* ==================================================
                  SMALL CIRCLE
              ================================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute right-[11%] top-1/2 z-[2] hidden h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-[#D4A017]/[0.10] lg:block"
              />

              {/* ==================================================
                  BACKGROUND GOLDEN GLOW
              ================================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.15, 0.28, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[-10%] right-[8%] z-[2] h-[430px] w-[430px] rounded-full bg-[#D4A017]/[0.12] blur-[120px]"
              />

              {/* ==================================================
                  PRODUCT SHADOW
              ================================================== */}

              <div className="pointer-events-none absolute bottom-[15%] right-[15%] z-[5] h-[50px] w-[420px] rounded-[50%] bg-black/[0.14] blur-[35px] lg:block" />

              {/* ==================================================
                  LEFT BLACK PANEL
              ================================================== */}

              <motion.div
                key={`panel-${activeIndex}`}
                initial={{
                  x: -180,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-[2%] top-[4%] z-10 h-[92%] w-[58%] overflow-hidden rounded-[3px] bg-[#111111] shadow-[30px_35px_90px_rgba(0,0,0,0.28)] sm:left-[3%] sm:w-[56%] lg:left-[5%] lg:w-[52%] xl:w-[50%]"
              >

                {/* PANEL TOP CIRCLE */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full border-[45px] border-white/[0.045]"
                />

                {/* PANEL BOTTOM CIRCLE */}

                <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[260px] w-[260px] rounded-full border-[40px] border-[#D4A017]/[0.08]" />

                {/* PANEL GOLDEN LINE */}

                <motion.div
                  animate={{
                    width: ["15%", "32%", "15%"],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute right-[8%] top-[18%] h-px bg-[#D4A017]"
                />

                {/* PANEL SMALL BOX */}

                <motion.div
                  animate={{
                    rotate: [0, 8, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute bottom-[12%] right-[8%] h-10 w-10 border border-[#D4A017]/40"
                />

                {/* VERTICAL LINE */}

                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: "72%",
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 top-[14%] w-[3px] bg-[#D4A017]"
                />

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="relative flex h-full flex-col justify-center px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">

                  {/* CATEGORY */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="mb-5 flex items-center gap-4"
                  >
                    <AnimatedLine />

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-white/60 sm:text-[10px]">
                      {banner.category}
                    </span>
                  </motion.div>

                  {/* SLIDE NUMBER */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    className="mb-4 flex items-center gap-3"
                  >
                    <span className="text-[11px] font-bold tracking-[2px] text-[#D4A017]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-8 bg-white/40" />

                    <span className="text-[10px] font-medium tracking-[2px] text-white/40">
                      0{banners.length}
                    </span>
                  </motion.div>

                  {/* ==================================================
                      HEADING
                  ================================================== */}

                  <div
                    className="overflow-hidden"
                    style={{
                      perspective: "1000px",
                    }}
                  >
                    <AnimatedWord
                      text={banner.title}
                      delay={0.25}
                      color="#FFFFFF"
                      className="text-[48px] font-black uppercase leading-[0.82] tracking-[-3px] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[92px]"
                    />

                    <AnimatedWord
                      text={banner.highlight}
                      delay={0.48}
                      color="#D4A017"
                      className="mt-2 text-[48px] font-black uppercase leading-[0.82] tracking-[-3px] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[92px]"
                    />
                  </div>

                  {/* UNDERLINE */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 105,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-7 h-[3px] bg-[#D4A017]"
                  />

                  {/* DESCRIPTION */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.95,
                    }}
                    className="mt-6 max-w-[450px] text-[11px] font-medium leading-5 text-white/65 sm:text-xs sm:leading-6 md:text-sm"
                  >
                    {banner.description}
                  </motion.p>

                  {/* CTA */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 1.15,
                    }}
                    className="mt-7"
                  >
                    <button className="group relative overflow-hidden bg-[#D4A017] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[2px] text-[#111111] transition-all duration-500 hover:bg-[#E4B52A] hover:shadow-[0_18px_40px_rgba(212,160,23,0.22)]">

                      <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />

                      <span className="relative z-10 flex items-center gap-5">
                        Explore More

                        <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* ==================================================
                  PRODUCT IMAGE
              ================================================== */}

              <motion.div
                key={`product-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 220,
                  scale: 0.55,
                  rotate: 7,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-[55%] top-[62%] z-30 w-[290px] -translate-y-1/2 sm:left-[48%] sm:w-[390px] md:left-[47%] md:w-[470px] lg:left-[48%] lg:w-[540px] xl:left-[47%] xl:w-[620px]"
              >

                {/* PRODUCT GOLDEN GLOW */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.18, 0.35, 0.18],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/30 blur-[90px]"
                />

                {/* PRODUCT FLOAT */}

                <motion.div
                  animate={{
                    y: [0, -14, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Image
                    src={banner.image}
                    alt={`${banner.title} ${banner.highlight}`}
                    width={800}
                    height={800}
                    priority={index === 0}
                    className="relative z-10 h-auto w-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.32)]"
                  />
                </motion.div>
              </motion.div>

              {/* ==================================================
                  RIGHT VERTICAL LABEL
              ================================================== */}

              <motion.div
                key={`side-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                }}
                className="absolute right-5 top-1/2 z-40 hidden -translate-y-1/2 rotate-90 items-center gap-3 lg:flex"
              >
                <span className="h-px w-12 bg-[#D4A017]/50" />

                <span className="text-[9px] font-bold uppercase tracking-[3px] text-black/50">
                  Resol Industries
                </span>
              </motion.div>

              {/* ==================================================
                  TOP LEFT LABEL
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                }}
                className="absolute left-[5%] top-7 z-40 hidden items-center gap-3 lg:flex"
              >
                <span className="h-px w-8 bg-[#D4A017]/50" />

                <span className="text-[8px] font-semibold uppercase tracking-[3px] text-black/40">
                  Industrial Materials
                </span>
              </motion.div>

              {/* ==================================================
                  TOP RIGHT DOTS
              ================================================== */}

              <div className="absolute right-6 top-7 z-50 flex items-center gap-2 sm:right-10 sm:top-9">
                {banners.map((_, dotIndex) => (
                  <motion.span
                    key={dotIndex}
                    animate={{
                      width: activeIndex === dotIndex ? 28 : 7,
                      opacity: activeIndex === dotIndex ? 1 : 0.35,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="block h-[5px] rounded-full bg-[#D4A017]"
                  />
                ))}
              </div>

              {/* ==================================================
                  BOTTOM PROGRESS
              ================================================== */}

              <div className="absolute bottom-7 left-6 z-50 hidden items-center gap-4 sm:flex sm:left-10">
                <span className="text-[11px] font-bold tracking-[2px] text-[#111111]">
                  0{index + 1}
                </span>

                <div className="h-[1px] w-16 overflow-hidden bg-black/20">
                  <motion.div
                    key={`progress-${activeIndex}`}
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 5.2,
                      ease: "linear",
                    }}
                    className="h-full bg-[#D4A017]"
                  />
                </div>

                <span className="text-[10px] font-medium tracking-[2px] text-black/40">
                  0{banners.length}
                </span>
              </div>

              {/* ==================================================
                  NAVIGATION
              ================================================== */}

              <div className="absolute bottom-6 right-5 z-50 flex items-center gap-3 sm:bottom-8 sm:right-10">

                {/* PREVIOUS */}

                <button
                  type="button"
                  aria-label="Previous slide"
                  className="pvc-prev flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-white/70 text-sm text-black backdrop-blur-md transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black sm:h-11 sm:w-11"
                >
                  ←
                </button>

                {/* NEXT */}

                <button
                  type="button"
                  aria-label="Next slide"
                  className="pvc-next flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-white/70 text-sm text-black backdrop-blur-md transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black sm:h-11 sm:w-11"
                >
                  →
                </button>
              </div>

              {/* ==================================================
                  BOTTOM RIGHT MICRO TEXT
              ================================================== */}

              <div className="pointer-events-none absolute bottom-8 right-[14%] z-40 hidden lg:block">
                <span className="text-[8px] font-medium uppercase tracking-[3px] text-black/30">
                  Quality • Reliability • Distribution
                </span>
              </div>

              {/* ==================================================
                  RIGHT GOLDEN TECHNICAL MARKERS
              ================================================== */}

              <div className="pointer-events-none absolute right-[7%] top-[30%] z-10 hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#D4A017]" />
                  <span className="text-[8px] font-bold tracking-[3px] text-[#D4A017]/60">
                    01
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-[27%] right-[8%] z-10 hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-bold tracking-[3px] text-[#D4A017]/60">
                    RIL
                  </span>
                  <span className="h-px w-10 bg-[#D4A017]/40" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ============================================================
          SWIPER CSS
      ============================================================ */}

      <style jsx global>{`
        .swiper-slide {
          overflow: hidden;
        }

        .swiper-wrapper {
          align-items: stretch;
        }

        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }

        @media (max-width: 767px) {
          .pvc-prev,
          .pvc-next {
            width: 34px;
            height: 34px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}