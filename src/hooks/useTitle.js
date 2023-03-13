import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title || "Loading..."} - Redux Cart`;
  }, [title]);
  return null;
};
