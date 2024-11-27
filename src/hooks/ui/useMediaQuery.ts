"use client";

import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => {
    return window?.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window?.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery?.addEventListener("change", handler);

    // Remove listener on cleanup
    return () => mediaQuery?.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

export { useMediaQuery };