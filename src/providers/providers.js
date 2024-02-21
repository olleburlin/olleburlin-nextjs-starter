"use client";
import React from "react";
import { ExpandContext } from "@/context/ExpandContext";

export default function Providers({ children }) {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const value = { isExpanded, toggleExpansion };

  return (
    <ExpandContext.Provider value={value}>{children}</ExpandContext.Provider>
  );
}
