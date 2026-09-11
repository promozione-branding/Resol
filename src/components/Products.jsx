"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "@/components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#D4A017";

const products = [
  {
    number: "01",
    name: "PVC Resin",
    category: "POLYVINYL CHLORIDE",
    image: "/pvc resin.webp",
    href: "/products/pvc-resin",
  },
  {
    number: "02",
    name: "EVA Resin",
    category: "SPECIALTY POLYMERS",
    image: "/resol products.webp",
    href: "/products/eva-resin",
  },
  {
    number: "03",
    name: "Polyethylene",
    category: "PE POLYMER",
    image: "/resol products.webp",
    href: "/products/polyethylene",
  },
  {
    number: "04",
    name: "Polypropylene",
    category: "PP POLYMER",
    image: "/resol products.webp",
    href: "/products/polypropylene",
  },
  {
    number: "05",
    name: "Polystyrene",
    category: "PS POLYMER",
    image: "/resol products.webp",
    href: "/products/polystyrene",
  },
  {
    number: "06",
    name: "POE",
    category: "PERFORMANCE POLYMER",
    image: "/resol products.webp",
    href: "/products/poe",
  },
];

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const lineRef = useRef(null);
  const numberRef = useRef(null);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.set(card, {
        y: 60,
        opacity: 0,
      });

      gsap.set(imageRef.current, {
        scale: 1.08,
      });

      gsap.set(contentRef.current, {
        y: 20,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(numberRef.current, {
        x: -12,
        opacity: 0,
      });

      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(imageRef.current, {
        scale: 1,
        duration: 1,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.08 + 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.65,
        delay: index * 0.08 + 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(numberRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.08 + 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, card);

    return () => ctx.revert();
  }, [index]);

  const handleEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(numberRef.current, {
      color: GOLD,
      x: 6,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrowRef.current, {
      x: 5,
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(numberRef.current, {
      color: "#9ca3af",
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      href={product.href}
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        group
        relative
        block
        overflow-hidden
        border
        border-gray-200
        bg-white
        transition-all
        duration-500
        hover:border-black
      `}
    >
      {/* IMAGE */}

      <div className="relative h-[245px] overflow-hidden bg-white">
        <div
          className="
            absolute
            <span
              className={`
                font-[var(--font-lexend-deca)]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-gray-400
              `}
            >
          "
        />

        <Image
          ref={imageRef}
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`
            object-contain
            p-8
            transition-transform
            duration-700
          `}
        />

        {/* NUMBER */}

        <div
          ref={numberRef}
          className={`
            absolute
            left-5
            top-5
            z-20
            font-mono
            text-xs
            font-medium
            tracking-[0.2em]
            text-gray-400
          `}
        >
          {product.number}
        </div>

        {/* ARROW */}

        <div
          ref={arrowRef}
          className={`
            absolute
            right-5
            top-5
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-gray-300
            bg-white/90
            text-black
            transition-all
            duration-300
            group-hover:border-[#D4A017]
            group-hover:bg-[#D4A017]
          `}
        >
          <FiArrowUpRight size={17} />
        </div>
      </div>

      {/* CONTENT */}

      <div
        ref={contentRef}
        className="px-6 pb-6 pt-5"
      >
        <div className="mb-3">
          <span
            className={`
              font-[var(--font-lexend-deca)]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gray-400
            `}
          >
            {product.category}
          </span>
        </div>

        <div
          ref={lineRef}
          className={`
            mb-4
            h-px
            w-full
            bg-[#D4A017]
          `}
        />

        <div className="flex items-center justify-between gap-4">
          <h3
            className={`
                font-[var(--font-outfit)]
              text-[24px]
              font-semibold
              leading-tight
              tracking-tight
              text-black
              transition-transform
              duration-500
              group-hover:translate-x-1
            `}
          >
            {product.name}
          </h3>

          <span
            className={`
                shrink-0
                font-[var(--font-lexend-deca)]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-gray-400
              transition-colors
              duration-300
              group-hover:text-black
            `}
          >
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   MAIN PRODUCTS SECTION
========================================================= */

export default function ProductsSection() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const featureRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(labelRef.current, {
        x: -60,
        opacity: 0,
      });

      gsap.set(headingRef.current, {
        x: -80,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        x: -60,
        opacity: 0,
      });

      gsap.set(ctaRef.current, {
        x: -40,
        opacity: 0,
      });

      gsap.set(featureRef.current, {
        scale: 1.05,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(labelRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          headingRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          descriptionRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          ctaRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          featureRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.55"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f7f5] py-20 md:py-12 lg:py-15"
    >
      <div
        className={`
          mx-auto
          max-w-[1480px]
          px-5
          sm:px-8
          lg:px-12
        `}
      >

        {/* =================================================
            3 COLUMN LAYOUT
        ================================================= */}

        <div
          className={`
            grid
            items-start
            gap-8
            lg:grid-cols-[0.7fr_1.4fr_0.9fr]
          `}
        >

          {/* =================================================
              LEFT — STICKY
          ================================================= */}

          <div
            className={`
              lg:sticky
              lg:top-24
              lg:self-start
            `}
          >
            <div
              className={`
                relative
                overflow-hidden
                border
                border-gray-200
                bg-black
                p-7
                sm:p-8
                lg:p-9
              `}
            >
              <div
                className={`
                  absolute
                  right-0
                  top-0
                  h-1
                  w-20
                  bg-[#D4A017]
                `}
              />

              <div
                className={`
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#D4A017]/10
                  blur-3xl
                `}
              />

              <div className="relative z-10">

                <p
                  className={`
                    mb-5
                    font-[var(--font-lexend-deca)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#D4A017]
                  `}
                >
                  Polymer Portfolio
                </p>

                <h3
                  className={`
                    font-[var(--font-outfit)]
                    text-3xl
                    font-semibold
                    leading-[1.08]
                    tracking-tight
                    text-white
                    md:text-4xl
                  `}
                >
                  Reliable materials.
                  <br />

                  <span className="text-[#D4A017]">
                    Consistent supply.
                  </span>
                </h3>

                <p
                  className={`
                    mt-6
                    max-w-md
                    font-[var(--font-lexend-deca)]
                    text-sm
                    leading-7
                    text-gray-400
                  `}
                >
                  Quality-focused sourcing and distribution of polymer
                  materials for manufacturers and industrial applications
                  across India.
                </p>

                <div
                  ref={ctaRef}
                  className="mt-8"
                >
                  <Link
                    href="/products"
                    className={`
                      group
                      inline-flex
                      items-center
                      gap-4
                      border
                      border-[#D4A017]
                      bg-[#D4A017]
                      px-5
                      py-3
                      font-[var(--font-lexend-deca)]
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-black
                      transition-all
                      duration-300
                      hover:border-white
                      hover:bg-white
                    `}
                  >
                    Explore All Products

                    <FiArrowRight
                      className={`
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      `}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* INFORMATION */}

            <div
              className={`
                mt-5
                border-l-2
                border-[#D4A017]
                pl-5
              `}
            >
              <p
                className={`
                  font-[var(--font-lexend-deca)]
                  text-xs
                  leading-6
                  text-gray-500
                `}
              >
                Serving diverse applications across PVC pipes,
                footwear, flooring, packaging, plastics and
                other industrial sectors.
              </p>
            </div>
          </div>

          {/* =================================================
              CENTER — SCROLLABLE PRODUCTS
          ================================================= */}

          <div className="min-w-0">

            <div className="mb-5 flex items-center justify-between">
              <div>

             {/* REUSABLE TITLE */}
             
                         <AnimatedTitle
                                       text="Our"
                                       highlight="Products"
                                       delay={0.15}
                                       duration={0.8}
                                       letterDelay={0.04}
                                       color="#111111"
                                       highlightColor="#D4A017"
                                       className={`
                                         text-[40px]
                                         font-black
                                         leading-[0.86]
                                         tracking-[-3px]
                                         sm:text-[45px]
                                         md:text-[50px]
                                         lg:text-[55px]
                                       `}
                                     />
              </div>

              <span
                className={`
                  hidden
                  font-mono
                  text-[11px]
                  text-gray-400
                  sm:block
                `}
              >
                06 PRODUCTS
              </span>
            </div>

            {/* SCROLL AREA */}

            <div
              className={`
                products-scroll
                max-h-[calc(100vh-190px)]
                overflow-y-auto
                pr-2
                lg:max-h-[680px]
              `}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.number}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — STICKY
          ================================================= */}

          <div
            className={`
              hidden
              lg:sticky
              lg:top-24
              lg:block
              lg:self-start
            `}
          >
            <div
              ref={featureRef}
              className={`
                group
                relative
                min-h-[680px]
                overflow-hidden
                bg-black
              `}
            >
              <Image
                src="/pro.webp"
                alt="Resol Industries Products"
                fill
                sizes="33vw"
                className={`
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-105
                `}
              />

              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/35
                  to-black/5
                `}
              />

              <div
                className={`
                  absolute
                  right-7
                  top-7
                  h-24
                  w-px
                  bg-[#D4A017]
                `}
              />

              <div
                className={`
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                `}
              >
        
                <h3
                  className={`
                    max-w-sm
                    font-[var(--font-outfit)]
                    text-4xl
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    text-white
                  `}
                >
                  Materials that
                  <br />

                </h3>

                <p
                  className={`
                    mt-5
                    max-w-sm
                    font-[var(--font-lexend-deca)]
                    text-xs
                    leading-6
                    text-white/55
                  `}
                >
                  Quality-focused sourcing and distribution of
                  polymer materials for industrial manufacturing
                  requirements.
                </p>

                <Link
                  href="/products"
                  className={`
                    group/link
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    border-b
                    border-[#D4A017]
                    pb-2
                    font-[var(--font-lexend-deca)]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  `}
                >
                  View Product Range

                  <FiArrowUpRight
                    className={`
                      text-[#D4A017]
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    `}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CTA */}

        <div className="mt-8 lg:hidden">
          <Link
            href="/products"
            className={`
              group
              flex
              w-full
              items-center
              justify-between
              border
              border-black
              bg-black
              px-6
              py-5
              font-[var(--font-lexend-deca)]
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white
              transition-colors
              duration-300
              hover:bg-[#D4A017]
              hover:text-black
            `}
          >
            Explore Complete Product Range

            <FiArrowRight
              className={`
                transition-transform
                duration-300
                group-hover:translate-x-1
              `}
            />
          </Link>
        </div>
      </div>

    </section>
  );
}

