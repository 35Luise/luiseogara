import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <NavBar setShowAbout={setShowAbout} />

      <Component
        {...pageProps}
        showAbout={showAbout}
      />
    </>
  );
}
