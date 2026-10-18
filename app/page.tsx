import { Bilingual } from "@/components/sections/bilingual";
import { CaseGrid } from "@/components/sections/case-grid";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Toolkit } from "@/components/sections/toolkit";
import { getAllCaseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function Home() {
  const studies = getAllCaseStudies();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.nameZh,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    address: { "@type": "PostalAddress", addressLocality: "Pittsburgh", addressRegion: "PA" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Carnegie Mellon University – Tepper School of Business" },
      { "@type": "CollegeOrUniversity", name: "The Ohio State University" },
    ],
    sameAs: [site.linkedin, site.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Pillars />
      <CaseGrid studies={studies} />
      <Experience />
      <Toolkit />
      <Bilingual />
      <Contact />
    </>
  );
}
