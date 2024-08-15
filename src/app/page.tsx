"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Main = () => {
  const [selectedCryptos, setSelectedCryptos] = useState<string[]>([]);

  return (
    <div>
      <Navbar onSelectionChange={setSelectedCryptos} />
      <Hero selectedCryptos={selectedCryptos} />
    </div>
  );
};

export default Main;
