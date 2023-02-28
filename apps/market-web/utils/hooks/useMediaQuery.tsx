import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);

  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);

      const handleChange = (mediaQuery: MediaQueryListEvent) => {
        setMatch(mediaQuery.matches);
      };
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return match;
};

export default useMediaQuery;
