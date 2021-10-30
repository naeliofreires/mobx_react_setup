import { useContext } from "react";
import { RootContext } from ".";

export const useStore = (name) => {
  const context = useContext(RootContext);

  if (!context) {
    throw new Error("udefined context");
  }

  return context[name];
};
