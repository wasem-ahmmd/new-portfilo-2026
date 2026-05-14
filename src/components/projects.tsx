"use client";

import dynamic from "next/dynamic";
import SectionHeader from "./projects/section-header";
import {
  ToolCardSkeleton,
  BlankCanvasSkeleton,
  ProcessStripSkeleton,
  TrustStripSkeleton,
  GithubCtaSkeleton,
} from "./projects/skeletons";

// Heavy / interactive parts are lazy-loaded so they ship as their own chunks.
// While each chunk is being downloaded (visible on slow networks) the
// matching skeleton is rendered as a placeholder.
const ToolCard = dynamic(() => import("./projects/tool-card"), {
  loading: () => <ToolCardSkeleton />,
  ssr: false,
});
const ColorPaletteTool = dynamic(
  () => import("./projects/tools/color-palette"),
  { loading: () => null, ssr: false }
);
const TextAnalyzerTool = dynamic(
  () => import("./projects/tools/text-analyzer"),
  { loading: () => null, ssr: false }
);
const PasswordTool = dynamic(
  () => import("./projects/tools/password-generator"),
  { loading: () => null, ssr: false }
);
const BlankCanvasCard = dynamic(() => import("./projects/blank-canvas-card"), {
  loading: () => <BlankCanvasSkeleton />,
  ssr: false,
});
const ProcessStrip = dynamic(() => import("./projects/process-strip"), {
  loading: () => <ProcessStripSkeleton />,
  ssr: false,
});
const TrustStrip = dynamic(() => import("./projects/trust-strip"), {
  loading: () => <TrustStripSkeleton />,
  ssr: false,
});
const GithubCta = dynamic(() => import("./projects/github-cta"), {
  loading: () => <GithubCtaSkeleton />,
  ssr: false,
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D1701F]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#000000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        {/* Header — Live Code Lab */}
        <SectionHeader
          badge="Live Code Lab"
          variant="primary"
          pulse
          asMain
          titleStart={`Don\u2019t take my word \u2014`}
          titleAccent="try the code"
          description={
            <>
              Small, working tools I built with React &amp; TypeScript. Each one
              runs live in your browser &mdash; click around and see for
              yourself.
            </>
          }
        />

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          <ToolCard
            number="01"
            title="Color Palette Generator"
            desc="Generates harmonious color palettes. Click any swatch to copy its hex."
            tags={["React", "HSL", "Clipboard API"]}
          >
            <ColorPaletteTool />
          </ToolCard>

          <ToolCard
            number="02"
            title="Text Analyzer"
            desc="Live word, character, sentence count and reading-time estimator."
            tags={["React", "useMemo", "Regex"]}
          >
            <TextAnalyzerTool />
          </ToolCard>

          <ToolCard
            number="03"
            title="Password Generator"
            desc="Crypto-secure passwords with adjustable length and strength meter."
            tags={["Web Crypto", "TypeScript", "UX"]}
          >
            <PasswordTool />
          </ToolCard>
        </div>

        {/* Sub-header for blank canvas */}
        <SectionHeader
          badge="Selected Work"
          variant="dark"
          asMain={false}
          titleStart="A blank canvas"
          titleAccent="waiting for you"
          description={
            <>
              I&apos;m at the start of my freelance journey &mdash; which
              means you get my full focus, my best rates, and a developer
              who&apos;s hungry to make your project shine.
            </>
          }
        />

        {/* Hero blank-canvas card — client CTA */}
        <BlankCanvasCard />

        {/* How we'll work together */}
        <ProcessStrip />

        {/* Trust microcopy */}
        <TrustStrip />

        {/* GitHub CTA — end of section */}
        <GithubCta />
      </div>
    </section>
  );
}
