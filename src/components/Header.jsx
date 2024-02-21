import React from "react";
import { ExpandContext } from "@/context/ExpandContext";

export default function Header() {
  const { isExpanded, toggleExpansion } = React.useContext(ExpandContext);
  return <div>Header</div>;
}
