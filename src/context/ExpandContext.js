import { createContext } from "react";

export const ExpandContext = createContext({
  isExpanded: false,
  toggleExpansion: () => {},
});
