import { useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { Intro } from "./components/Intro";
import { OurBlog } from "./components/OurBlog";
import { OurClient } from "./components/OurClient";
import { OurVision } from "./components/OurVision";
import { OurWork } from "./components/OurWork";
import { Reviews } from "./components/Reviews";
import { Webfolw } from "./components/Webfolw";
import { WhatWeDo } from "./components/WhatWeDo";

function App() {
  const WhatWeDoRef = useRef();
  const scrollToNextSection = () => {
    WhatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(1);
  };

  return (
    <>
      <Header />
      <Intro scrollToNextSection={scrollToNextSection} />
      <WhatWeDo WhatWeDoRef={WhatWeDoRef} />
      <OurWork />
      <Webfolw />
      <OurClient />
      <Reviews />
      <OurVision />
      <OurBlog />
      <Footer />
    </>
  );
}

export default App;
