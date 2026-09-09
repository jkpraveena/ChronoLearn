import React from "react";
import Link from "next/link";
import { HeaderNav } from "@/components/ui/header-nav";
import { HeroSearch } from "@/components/home/hero-search";
import { CourseCard } from "@/components/cards/course-card";
import { BottomGlow } from "@/components/home/bottom-glow";
import { ArrowRight, Star } from "lucide-react";

/** Renders the ChronoLearn landing page and featured course catalog. */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-neutral-900 flex flex-col justify-between relative overflow-x-hidden selection:bg-primary-100 selection:text-primary-500">
      {/* Subtle diagonal background texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 16px)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <HeaderNav activePath="" />

        {/* Main Content */}
        <main className="flex-1 max-w-[1240px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-8 md:pt-14 pb-16 space-y-16 md:space-y-24">
          {/* =========================================================
              HERO SECTION
             ========================================================= */}
          <section className="text-center space-y-8 max-w-[840px] mx-auto pt-4 md:pt-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center justify-center">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] md:text-[12px] font-semibold tracking-wider uppercase font-[family-name:var(--font-inter)] text-primary-500 bg-[#FFEEE5] border border-[#FED7AA]/80 shadow-2xs">
                INTELLIGENT LEARNING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[44px] sm:text-[56px] md:text-[68px] font-bold font-[family-name:var(--font-playfair)] tracking-tight leading-[1.08] text-neutral-900">
              Search your learning <br />
              <span className="italic font-normal">in</span> plain English.
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-neutral-500 max-w-[540px] mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
              Vertex understands what you want to learn and finds the exact
              lessons across all your courses.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5 h-[46px] md:h-[48px] px-7 rounded-[12px] bg-primary-500 hover:bg-[#EA580C] text-white font-medium text-[15px] shadow-[0_4px_16px_rgba(249,115,22,0.28)] hover:shadow-[0_6px_22px_rgba(249,115,22,0.36)] transition-all font-[family-name:var(--font-inter)]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Plain English Search Bar */}
            <div className="pt-4">
              <HeroSearch placeholder="Ask anything about your learning..." />
            </div>
          </section>

          {/* =========================================================
              ALL COURSES SECTION
             ========================================================= */}
          <section className="space-y-6 pt-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[26px] md:text-[30px] font-bold font-[family-name:var(--font-playfair)] text-neutral-900 tracking-tight">
                All Courses
              </h2>

              <Link
                href="/courses"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-500 hover:text-[#EA580C] transition-colors font-[family-name:var(--font-inter)]"
              >
                <span>View all courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* 3-Column Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Course 1: Next.js */}
              <CourseCard
                id="nextjs-for-production"
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modulesCount={12}
                iconType="nextjs"
                href="/courses/nextjs-for-production"
              />

              {/* Course 2: Docker */}
              <CourseCard
                id="docker-essentials"
                title="Docker Essentials"
                description="Containerize applications and streamline your development workflow."
                level="Beginner"
                duration="10h 12m"
                modulesCount={8}
                iconType="docker"
                href="/courses/docker-essentials"
              />

              {/* Course 3: TypeScript */}
              <CourseCard
                id="typescript-deep-dive"
                title="TypeScript Deep Dive"
                description="Go beyond the basics and write safer, more expressive code."
                level="Intermediate"
                duration="14h 36m"
                modulesCount={10}
                iconType="typescript"
                href="/courses/typescript-deep-dive"
              />
            </div>
          </section>

          {/* =========================================================
              BOTTOM SOCIAL PROOF / ANNOTATION
             ========================================================= */}
          <section className="pt-4 pb-2">
            <div className="flex items-center justify-center gap-4 text-[13px] md:text-[14px] text-neutral-600 font-[family-name:var(--font-inter)]">
              <div className="h-[1px] bg-neutral-200/90 flex-1 max-w-[120px] sm:max-w-[180px]" />
              <div className="inline-flex items-center gap-2 text-neutral-600">
                <Star className="w-4 h-4 text-primary-500 fill-transparent stroke-[1.8]" />
                <span>New courses and lessons added every week.</span>
              </div>
              <div className="h-[1px] bg-neutral-200/90 flex-1 max-w-[120px] sm:max-w-[180px]" />
            </div>
          </section>
        </main>

        {/* Ambient bottom warm gradient */}
        <BottomGlow className="mt-auto" />
      </div>
    </div>
  );
}
