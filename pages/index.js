import { useState } from "react";
import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Achievments from "@/components/Achievments";
import Testimonials from "@/components/Testimonials.";
export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <Head>
        <title>Luise Ogara</title>
        <meta name="description" content="Luise Ogara Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/weblogo2.png" />

        <meta
          name="description"
          content="Luise Ogara is a full stack developer with a passion for creating beautiful and functional websites."
        />
        <meta
          name="keywords"
          content="Luise Ogara, Full Stack Developer, MongoDB , ReactJS ,  Web Developer, Software Developer, React Developer, JavaScript Developer, HTML Developer, CSS Developer, Tailwind Developer, Portfolio, Personal Portfolio, Portfolio Website, Portfolio Website Design, Portfolio Website Development, Portfolio Website Design and Development, Portfolio Design, Portfolio Development, Portfolio Design and Development, Portfolio Website Design and Development Services, Portfolio Website Design Services, Portfolio Website Development Services, Portfolio Design Services, Portfolio Development Services, Portfolio Design and Development Services in Kenya, Portfolio Website Design and Development Services in Kenya, Portfolio Website Design Services in Kenya, Portfolio Website Development Services in Kenya, Portfolio Design Services in Kenya, Portfolio Development Services in Kenya, Portfolio Design and Development Services in Kenya"
        />
        <meta name="audience" content="all" />
        <meta name="page-topic" content="Software Development" />
        <meta name="page-type" content="Software Development" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Luise Ogara" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
      </Head>

      <Main />
      {showAbout && <About />}
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
