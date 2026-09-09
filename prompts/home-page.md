# Implementation Prompt: ChronoLearn (Vertex) Home Page

## 1. Goal
Implement the production **ChronoLearn / Vertex Home Page** at `app/page.tsx` based on the exact desktop specification image (`design/vertex-home.png`). The home page features the sticky header navigation with avatar & notification bell, intelligent learning badge, prominent serif hero heading, plain English search bar with `⌘ K` trigger, "All Courses" 3-column catalog grid with rich course cards (Next.js, Docker, TypeScript), weekly update annotation, and the ambient bottom warm gradient backdrop. The design system showcase will be preserved at `app/design-system/page.tsx`.

---

## 2. Skills & References Read
- `AGENTS.md` (Design guidelines, strict reproduction of reference image, responsiveness down to mobile, exact typography and layout)
- `design/vertex-home.png`
- `design/vertex-designsystem.png`

---

## 3. Code & Config Inspected
- `app/globals.css`: Contains `@theme` definitions with custom colors (`primary-500` to `100`, `neutral-900` to `50`), fonts (`Playfair Display`, `Inter`), custom shadows, and radii.
- `app/layout.tsx`: Configured with `Playfair_Display` (`--font-playfair`) and `Inter` (`--font-inter`).
- `components/ui/`: `Button`, `Badge`, `Input`, `SearchInput`, `HeaderNav`, `VertexLogo`.
- `components/cards/course-card.tsx`: Course card component to be enhanced with course logos/icons (Next.js `N`, Docker whale SVG, TypeScript `TS`) and custom hover states.

---

## 4. Decisions & Assumptions
- **Navigation Bar**:
  - Top header with Vertex logo + "Vertex" wordmark, navigation links ("Courses", "My Learning"), notifications bell icon, and circular user profile avatar with subtle border.
- **Hero Section**:
  - Tag pill: `INTELLIGENT LEARNING` in bold orange uppercase with subtle warm pill container (`#FFEEE5` / `#FED7AA` border).
  - Main Heading: `Search your learning in plain English.` using `Playfair Display` bold (~56px - 64px on desktop, ~36px - 40px on mobile).
  - Subtitle: `Vertex understands what you want to learn and finds the exact lessons across all your courses.`
  - CTA Button: `Explore Courses →` with orange fill (`#F97316` / `#EA580C` hover), white text, and right arrow icon.
  - Search Bar: Prominent input bar with left search icon, placeholder `"Ask anything about your learning..."`, and right `⌘ K` keyboard badge. Form submission or click routes to `/search` or focuses input.
- **Course Catalog Section ("All Courses")**:
  - Header: `All Courses` (Playfair Display, ~26px) on left, `View all courses →` (orange link) on right.
  - 3-Column Grid with cards:
    1. **Next.js for Production**: Dark square with white `N` icon, subtitle, `Intermediate`, `18h 24m`, `12 modules`.
    2. **Docker Essentials**: Custom blue Docker whale illustration icon, subtitle, `Beginner`, `10h 12m`, `8 modules`.
    3. **TypeScript Deep Dive**: Blue square with white `TS` icon, subtitle, `Intermediate`, `14h 36m`, `10 modules`.
- **Bottom Social Proof / Guarantee**:
  - Horizontal centered rule with orange star icon: `New courses and lessons added every week.`
- **Atmospheric Background & Backdrop**:
  - Subtle warm canvas `#FAF8F6` with diagonal striped watermark texture and bottom warm stepped bar gradient illumination.
- **Responsiveness**:
  - Desktop: Faithful 1:1 pixel match with `design/vertex-home.png`.
  - Mobile & Tablet: Clean vertical stacking of grid columns and search bar with fluid typography.
- **Route Architecture**:
  - `app/page.tsx`: Home Page (`design/vertex-home.png`).
  - `app/design-system/page.tsx`: Design System board (`design/vertex-designsystem.png`).

---

## 5. Files to Touch / Create
- `components/ui/header-nav.tsx`: Update to support bell notification icon and avatar image/fallback.
- `components/cards/course-card.tsx`: Enhance with custom icon slots, meta styling matching the design.
- `components/home/hero-search.tsx`: Search bar component with shortcut and interaction.
- `components/home/bottom-glow.tsx`: Stepped geometric ambient bottom gradient.
- `app/page.tsx`: ChronoLearn Home Page.
- `app/design-system/page.tsx`: Preserve the full design system showcase.

---

## 6. Security Considerations
- Client/Server boundaries maintained; no secret keys or API tokens exposed in client code.

---

## 7. Acceptance Criteria
- [x] Sticky / Top navigation matches layout: Logo + Courses + My Learning on left, Bell + Avatar on right.
- [x] Hero section displays "INTELLIGENT LEARNING" pill, "Search your learning in plain English." in Playfair Display, subtitle, and "Explore Courses →" button.
- [x] Search input displays search icon, placeholder "Ask anything about your learning...", and `⌘ K` badge.
- [x] "All Courses" section with "View all courses →" link and 3 course cards (Next.js, Docker, TypeScript) matching meta (level, duration, modules).
- [x] Star divider with "New courses and lessons added every week."
- [x] Stepped ambient orange bottom glow backdrop.
- [x] Responsive layout adapting smoothly to mobile screen sizes.
- [x] TypeScript and ESLint checks pass with 0 errors.

---

## 8. Checks to Run
- `npm run lint` in web workspace
- `npm run build` in web workspace

---

## 9. Manual Test Steps
1. Navigate to `http://localhost:3000` to view the ChronoLearn Home Page.
2. Verify visual fidelity against `design/vertex-home.png`.
3. Test search bar focus and keyboard shortcut interaction.
4. Verify navigation links and hover states on all cards and buttons.
5. Navigate to `http://localhost:3000/design-system` to verify the design system showcase remains accessible.
