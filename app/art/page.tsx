"use client";

import { useState } from "react";
import ShinyText from "./shineText";

export default function CameraEffect() {
  const [active, setActive] = useState("signin");

  return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        my art
      </h1>
      <ShinyText
      text="coming soon"
      disabled={false}
      speed={5}
      className="custom-class"
      />
    </section>
  );
}
