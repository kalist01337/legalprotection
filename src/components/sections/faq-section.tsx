"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-shell pb-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-goldSoft/80">FAQ</p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Частые вопросы</h2>
      </div>

      <div className="space-y-3">
        {siteConfig.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={item.question} className="card-premium overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                className="flex w-full items-center justify-between gap-5 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-ivory md:text-base">{item.question}</span>
                <span className="text-xl leading-none text-goldSoft">{isOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ivory/75">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
