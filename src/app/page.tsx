"use client";

import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import {
  HeroSkeleton,
  AboutSkeleton,
  ServicesSkeleton,
  ProjectsSectionSkeleton,
  ContactSkeleton,
} from "@/components/skeletons";

// Each main section ships as its own JS chunk. While the chunk is being
// downloaded (visible on slow networks) the matching skeleton is rendered
// in its place to keep the layout stable and avoid blank space.
const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <HeroSkeleton />,
  ssr: false,
});
const About = dynamic(() => import("@/components/about"), {
  loading: () => <AboutSkeleton />,
  ssr: false,
});
const Services = dynamic(() => import("@/components/services"), {
  loading: () => <ServicesSkeleton />,
  ssr: false,
});
const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <ProjectsSectionSkeleton />,
  ssr: false,
});
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <ContactSkeleton />,
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
