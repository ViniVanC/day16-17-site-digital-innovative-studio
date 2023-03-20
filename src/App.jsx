import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { Intro } from "./components/Intro";
import { OurClient } from "./components/OurClient";
import { OurVision } from "./components/OurVision";
import { OurWork } from "./components/OurWork";
import { Webfolw } from "./components/Webfolw";
import { WhatWeDo } from "./components/WhatWeDo";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WhatWeDo />
      <OurWork />
      <Webfolw />
      <OurClient />
      <OurVision />
      <Footer />
    </>
  );
}

export default App;
