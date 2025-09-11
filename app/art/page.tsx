"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CameraEffect() {
  const [active, setActive] = useState("signin");

  return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        my art
      </h1>
      <p className="mb-4">coming soon</p>
    </section>
  );
}
