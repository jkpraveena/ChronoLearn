"use client";

import React, { useState } from "react";
import { VertexLogo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchInput } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Pagination } from "@/components/ui/pagination";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { PrincipleCard } from "@/components/cards/principle-card";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

/** Renders the interactive showcase for the application's design system. */
export default function DesignSystemPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-neutral-900 p-6 md:p-12 lg:p-16">
      <div className="max-w-[1240px] mx-auto space-y-12">
        {/* =========================================================
            HEADER & 01 COLORS
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Title & Brand Intro */}
            <div className="lg:col-span-5 space-y-4">
              <VertexLogo size={34} />
              <h1 className="text-[44px] md:text-[50px] font-bold font-[family-name:var(--font-playfair)] tracking-tight leading-[1.1] text-neutral-900">
                Design System
              </h1>
              <p className="text-[14px] leading-relaxed text-neutral-500 max-w-[380px]">
                A unified design language for Vertex learning platform. Clean,
                modern and focused on clarity, consistency and intuitive
                learning experiences.
              </p>
              <div className="pt-4 text-[11px] font-mono tracking-wider font-semibold text-neutral-400 uppercase">
                VERSION 1.0 • MAY 2025
              </div>
            </div>

            {/* 01 COLORS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">01</span> COLORS
              </div>

              {/* Primary Palette */}
              <div>
                <h4 className="text-[13px] font-semibold text-neutral-900 mb-2.5">
                  Primary
                </h4>
                <div className="grid grid-cols-5 gap-2.5">
                  {[
                    { name: "Primary 500", hex: "#F97316", bg: "bg-primary-500" },
                    { name: "Primary 400", hex: "#FB923C", bg: "bg-primary-400" },
                    { name: "Primary 300", hex: "#FDBA74", bg: "bg-primary-300" },
                    { name: "Primary 200", hex: "#FED7AA", bg: "bg-primary-200" },
                    { name: "Primary 100", hex: "#FFEEE5", bg: "bg-primary-100" },
                  ].map((c) => (
                    <div key={c.name} className="space-y-1.5">
                      <div className={`h-14 rounded-[8px] ${c.bg} shadow-xs`} />
                      <div className="text-[11px] font-medium text-neutral-800 leading-tight">
                        {c.name}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {c.hex}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Palette */}
              <div>
                <h4 className="text-[13px] font-semibold text-neutral-900 mb-2.5">
                  Neutral
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                  {[
                    { name: "Neutral 900", hex: "#0F172A", bg: "bg-neutral-900" },
                    { name: "Neutral 700", hex: "#334155", bg: "bg-neutral-700" },
                    { name: "Neutral 500", hex: "#64748B", bg: "bg-neutral-500" },
                    { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-neutral-300" },
                    { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-neutral-200" },
                    { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-neutral-100" },
                    { name: "Neutral 50", hex: "#FAF8F6", bg: "bg-neutral-50 border border-neutral-200/60" },
                    { name: "White", hex: "#FFFFFF", bg: "bg-white border border-neutral-200/80" },
                  ].map((c) => (
                    <div key={c.name} className="space-y-1.5">
                      <div className={`h-12 rounded-[8px] ${c.bg} shadow-xs`} />
                      <div className="text-[11px] font-medium text-neutral-800 leading-tight">
                        {c.name}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {c.hex}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 TYPOGRAPHY & 03 TYPE SCALE
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 02 TYPOGRAPHY */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">02</span> TYPOGRAPHY
              </div>

              {/* Playfair Display Showcase */}
              <div className="flex items-start gap-4">
                <span className="text-[44px] font-bold font-[family-name:var(--font-playfair)] leading-none text-neutral-900">
                  Ag
                </span>
                <div>
                  <h3 className="text-[18px] font-bold font-[family-name:var(--font-playfair)] text-neutral-900">
                    Playfair Display
                  </h3>
                  <p className="text-[12px] text-neutral-500 mt-0.5">
                    Elegant • Readable • Timeless
                  </p>
                </div>
              </div>

              {/* Inter Showcase */}
              <div className="flex items-start gap-4 pt-2">
                <span className="text-[44px] font-bold font-[family-name:var(--font-inter)] leading-none text-neutral-900">
                  Ag
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold text-neutral-900">
                    Inter
                  </h3>
                  <p className="text-[12px] text-neutral-500 mt-0.5">
                    Clean • Modern • Highly legible
                  </p>
                </div>
              </div>
            </div>

            {/* 03 TYPE SCALE */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase mb-4">
                <span className="text-primary-500">03</span> TYPE SCALE
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-200 text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Style</th>
                      <th className="pb-3 font-semibold">Font</th>
                      <th className="pb-3 font-semibold">Size / Line Height</th>
                      <th className="pb-3 font-semibold">Weight</th>
                      <th className="pb-3 font-semibold">Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-700">
                    <tr>
                      <td className="py-2.5 font-bold font-[family-name:var(--font-playfair)] text-neutral-900">
                        Display 1
                      </td>
                      <td className="py-2.5">Playfair Display</td>
                      <td className="py-2.5 font-mono text-neutral-500">48 / 56</td>
                      <td className="py-2.5">Bold</td>
                      <td className="py-2.5 text-neutral-500">Page titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold font-[family-name:var(--font-playfair)] text-neutral-900">
                        Display 2
                      </td>
                      <td className="py-2.5">Playfair Display</td>
                      <td className="py-2.5 font-mono text-neutral-500">36 / 44</td>
                      <td className="py-2.5">Bold</td>
                      <td className="py-2.5 text-neutral-500">Section titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-neutral-900">
                        Heading 1
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">28 / 36</td>
                      <td className="py-2.5">Semi Bold</td>
                      <td className="py-2.5 text-neutral-500">Card titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-neutral-900">
                        Heading 2
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">22 / 30</td>
                      <td className="py-2.5">Semi Bold</td>
                      <td className="py-2.5 text-neutral-500">Sub section</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-neutral-900">
                        Heading 3
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">18 / 26</td>
                      <td className="py-2.5">Medium</td>
                      <td className="py-2.5 text-neutral-500">Small titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-normal text-neutral-900">
                        Body Large
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">16 / 24</td>
                      <td className="py-2.5">Regular</td>
                      <td className="py-2.5 text-neutral-500">Body copy</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-normal text-neutral-900">
                        Body
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">14 / 20</td>
                      <td className="py-2.5">Regular</td>
                      <td className="py-2.5 text-neutral-500">Supporting text</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-normal text-neutral-900">
                        Small
                      </td>
                      <td className="py-2.5">Inter</td>
                      <td className="py-2.5 font-mono text-neutral-500">12 / 16</td>
                      <td className="py-2.5">Regular</td>
                      <td className="py-2.5 text-neutral-500">Captions, meta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 SPACING & 05 RADIUS & SHADOWS
           ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 04 SPACING SYSTEM */}
          <div className="lg:col-span-6 bg-white rounded-[24px] border border-neutral-200/80 p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">04</span> SPACING SYSTEM
              </div>
              <span className="text-[12px] font-mono text-neutral-500">
                Base unit: 4px
              </span>
            </div>

            <div className="flex items-end gap-2 overflow-x-auto pb-2">
              {[
                { val: 4, rem: "0.25rem", h: "h-2 w-2" },
                { val: 8, rem: "0.5rem", h: "h-3.5 w-3.5" },
                { val: 12, rem: "0.75rem", h: "h-5 w-5" },
                { val: 16, rem: "1rem", h: "h-6 w-6" },
                { val: 24, rem: "1.5rem", h: "h-8 w-8" },
                { val: 32, rem: "2rem", h: "h-10 w-10" },
                { val: 40, rem: "2.5rem", h: "h-12 w-12" },
                { val: 48, rem: "3rem", h: "h-14 w-14" },
                { val: 64, rem: "4rem", h: "h-16 w-16" },
              ].map((s) => (
                <div key={s.val} className="flex flex-col items-center gap-2 shrink-0">
                  <div className={`bg-[#FED7AA]/60 rounded-[4px] ${s.h}`} />
                  <div className="text-center">
                    <div className="text-[12px] font-semibold text-neutral-900">
                      {s.val}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      ({s.rem})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05 RADIUS & SHADOWS */}
          <div className="lg:col-span-6 bg-white rounded-[24px] border border-neutral-200/80 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
              <span className="text-primary-500">05</span> RADIUS & SHADOWS
            </div>

            {/* Radii */}
            <div>
              <div className="text-[13px] font-semibold text-neutral-900 mb-3">
                Radius
              </div>
              <div className="grid grid-cols-6 gap-3">
                {[
                  { label: "4px", name: "(xs)", radius: "rounded-[4px]" },
                  { label: "8px", name: "(sm)", radius: "rounded-[8px]" },
                  { label: "12px", name: "(md)", radius: "rounded-[12px]" },
                  { label: "16px", name: "(lg)", radius: "rounded-[16px]" },
                  { label: "24px", name: "(xl)", radius: "rounded-[24px]" },
                  { label: "Full", name: "(circle)", radius: "rounded-full" },
                ].map((r) => (
                  <div key={r.label} className="text-center space-y-1.5">
                    <div
                      className={`w-12 h-12 mx-auto border-2 border-neutral-200 bg-neutral-50/50 ${r.radius}`}
                    />
                    <div className="text-[11px] font-medium text-neutral-800">
                      {r.label}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {r.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="pt-2 border-t border-neutral-100">
              <div className="text-[13px] font-semibold text-neutral-900 mb-3">
                Shadows
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Sm", css: "0 1px 2px 0 rgba(15, 23, 42, 0.05)", shadow: "shadow-sm" },
                  { name: "Md", css: "0 4px 12px -2px rgba(15, 23, 42, 0.08)", shadow: "shadow-md" },
                  { name: "Lg", css: "0 12px 24px -4px rgba(15, 23, 42, 0.10)", shadow: "shadow-lg" },
                  { name: "Xl", css: "0 20px 40px -8px rgba(15, 23, 42, 0.12)", shadow: "shadow-xl" },
                ].map((s) => (
                  <div
                    key={s.name}
                    className={`bg-white border border-neutral-200/60 rounded-[12px] p-3 text-left ${s.shadow}`}
                  >
                    <div className="text-[13px] font-semibold text-neutral-900">
                      {s.name}
                    </div>
                    <div className="text-[9px] font-mono text-neutral-400 mt-1 leading-tight">
                      {s.css}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            06 ICONS, 07 BUTTONS & 08 INPUTS
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 06 ICONS */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">06</span> ICONS
              </div>

              {/* Outline Style */}
              <div className="space-y-2">
                <div className="text-[12px] font-medium text-neutral-500">
                  Outline Style
                </div>
                <div className="flex items-center flex-wrap gap-3 text-neutral-800">
                  <Bell className="w-5 h-5" />
                  <Search className="w-5 h-5" />
                  <Play className="w-5 h-5" />
                  <FileText className="w-5 h-5" />
                  <Bookmark className="w-5 h-5" />
                  <BarChart2 className="w-5 h-5" />
                  <Clock className="w-5 h-5" />
                  <User className="w-5 h-5" />
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* Filled Style */}
              <div className="space-y-2">
                <div className="text-[12px] font-medium text-neutral-500">
                  Filled Style
                </div>
                <div className="flex items-center flex-wrap gap-3 text-neutral-900">
                  <Bell className="w-5 h-5 fill-neutral-900" />
                  <Search className="w-5 h-5 stroke-[2.5]" />
                  <Play className="w-5 h-5 fill-neutral-900" />
                  <FileText className="w-5 h-5 fill-neutral-900" />
                  <Bookmark className="w-5 h-5 fill-neutral-900" />
                  <BarChart2 className="w-5 h-5 stroke-[2.5]" />
                  <Clock className="w-5 h-5 fill-neutral-900 text-white" />
                  <User className="w-5 h-5 fill-neutral-900" />
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Icon Specs */}
              <div className="text-[11px] text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
                <div className="font-semibold text-neutral-700">Icon Specs</div>
                <div>• 24x24px grid</div>
                <div>• 2px stroke width (outline)</div>
                <div>• Rounded line caps</div>
                <div>• Consistent optical balance</div>
              </div>
            </div>

            {/* 07 BUTTONS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">07</span> BUTTONS
              </div>

              {/* Buttons Matrix */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead>
                    <tr className="text-neutral-400 font-mono text-[11px] uppercase">
                      <th className="pb-3"></th>
                      <th className="pb-3 font-semibold">Primary</th>
                      <th className="pb-3 font-semibold">Secondary</th>
                      <th className="pb-3 font-semibold">Tertiary</th>
                      <th className="pb-3 font-semibold">Text</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-3">
                    {/* Default */}
                    <tr>
                      <td className="py-2 font-mono text-[11px] text-neutral-400 pr-2">
                        Default
                      </td>
                      <td className="py-2 pr-2">
                        <Button variant="primary" size="default">
                          Get Started
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button variant="secondary" size="default">
                          Explore Courses
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button
                          variant="tertiary"
                          size="default"
                          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-2">
                        <Button
                          variant="text"
                          rightIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                        >
                          Watch Video
                        </Button>
                      </td>
                    </tr>

                    {/* Hover */}
                    <tr>
                      <td className="py-2 font-mono text-[11px] text-neutral-400 pr-2">
                        Hover
                      </td>
                      <td className="py-2 pr-2">
                        <Button
                          variant="primary"
                          className="bg-[#EA580C] shadow"
                        >
                          Get Started
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button
                          variant="secondary"
                          className="bg-primary-100/60 border-primary-500"
                        >
                          Explore Courses
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button
                          variant="tertiary"
                          className="bg-neutral-100"
                          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-2">
                        <Button
                          variant="text"
                          className="text-[#EA580C]"
                          rightIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                        >
                          Watch Video
                        </Button>
                      </td>
                    </tr>

                    {/* Disabled */}
                    <tr>
                      <td className="py-2 font-mono text-[11px] text-neutral-400 pr-2">
                        Disabled
                      </td>
                      <td className="py-2 pr-2">
                        <Button variant="primary" disabled>
                          Get Started
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button variant="secondary" disabled>
                          Explore Courses
                        </Button>
                      </td>
                      <td className="py-2 pr-2">
                        <Button
                          variant="tertiary"
                          disabled
                          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-2">
                        <Button
                          variant="text"
                          disabled
                          rightIcon={<Play className="w-3.5 h-3.5" />}
                        >
                          Watch Video
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Button Specs */}
              <div className="text-[11px] text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
                <div className="font-semibold text-neutral-700">Button Specs</div>
                <div>• Height: 44px (default)</div>
                <div>• Padding: 0 16px (lg), 0 12px (md)</div>
                <div>• Radius: 12px</div>
                <div>• Font: Inter Medium (14-16px)</div>
              </div>
            </div>

            {/* 08 INPUTS */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">08</span> INPUTS
              </div>

              {/* Search / Text Input */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-neutral-700">
                  Search / Text Input
                </label>
                <SearchInput placeholder="Search anything ..." shortcut="⌘ K" />
              </div>

              {/* Select */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-neutral-700">
                  Select
                </label>
                <Select
                  options={[
                    { label: "Most Relevant", value: "relevant" },
                    { label: "Newest", value: "newest" },
                    { label: "Popular", value: "popular" },
                  ]}
                />
              </div>

              {/* Field Specs */}
              <div className="text-[11px] text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
                <div className="font-semibold text-neutral-700">Field Specs</div>
                <div>• Height: 44px</div>
                <div>• Radius: 12px</div>
                <div>• Border: 1px solid #E2E8F0</div>
                <div>• Padding: 0 16px</div>
                <div>• Focus: Border color #FB923C</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            09 BADGES / TAGS, 10 STATUS & 11 PROGRESS BAR
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* 09 BADGES / TAGS */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">09</span> BADGES / TAGS
              </div>
              <div className="flex items-center gap-6">
                <div className="space-y-1">
                  <div className="text-[11px] text-neutral-500">Video</div>
                  <Badge variant="video">VIDEO</Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-neutral-500">Lesson</div>
                  <Badge variant="lesson">LESSON</Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-neutral-500">Popular</div>
                  <Badge variant="popular">POPULAR</Badge>
                </div>
              </div>
            </div>

            {/* 10 STATUS / INDICATORS */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">10</span> STATUS / INDICATORS
              </div>
              <div className="flex items-center flex-wrap gap-4">
                <StatusIndicator status="in-progress" />
                <StatusIndicator status="completed" />
                <StatusIndicator status="now-playing" />
                <StatusIndicator status="locked" />
              </div>
            </div>

            {/* 11 PROGRESS BAR */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                <span className="text-primary-500">11</span> PROGRESS BAR
              </div>
              <ProgressBar value={35} />
            </div>
          </div>
        </section>

        {/* =========================================================
            12 CARDS
           ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
            <span className="text-primary-500">12</span> CARDS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Card */}
            <div>
              <div className="text-[12px] font-medium text-neutral-500 mb-2">
                Course Card
              </div>
              <CourseCard
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modulesCount={12}
              />
            </div>

            {/* Lesson Card (Video) */}
            <div>
              <div className="text-[12px] font-medium text-neutral-500 mb-2">
                Lesson Card (Video)
              </div>
              <LessonVideoCard
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lessonLabel="Lesson 5.1"
                duration="12:45"
                timestamp="12:45"
              />
            </div>

            {/* Lesson Card (Lesson) */}
            <div>
              <div className="text-[12px] font-medium text-neutral-500 mb-2">
                Lesson Card (Lesson)
              </div>
              <LessonCard
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                moduleLabel="Module 5"
              />
            </div>

            {/* Resource Card */}
            <div>
              <div className="text-[12px] font-medium text-neutral-500 mb-2">
                Resource Card
              </div>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileMeta="PDF • 1.2 MB"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            13 NAVIGATION & PAGINATION
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
            <span className="text-primary-500">13</span> NAVIGATION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Brand Nav */}
            <div className="lg:col-span-4 flex items-center gap-8">
              <VertexLogo size={28} />
              <nav className="flex items-center gap-6 text-[14px] font-medium">
                <span className="text-primary-500 cursor-pointer">Courses</span>
                <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">
                  My Learning
                </span>
              </nav>
            </div>

            {/* Center Breadcrumbs */}
            <div className="lg:col-span-5">
              <div className="text-[11px] font-mono text-neutral-400 mb-1">
                Breadcrumbs
              </div>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>

            {/* Right Pagination */}
            <div className="lg:col-span-3 flex flex-col lg:items-end">
              <div className="text-[11px] font-mono text-neutral-400 mb-1">
                Pagination
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={8}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            14 PRINCIPLES
           ========================================================= */}
        <section className="bg-white rounded-[24px] border border-neutral-200/80 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-[12px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
            <span className="text-primary-500">14</span> PRINCIPLES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard principle="clarity" />
            <PrincipleCard principle="consistency" />
            <PrincipleCard principle="focus" />
            <PrincipleCard principle="accessible" />
          </div>
        </section>
      </div>
    </div>
  );
}
