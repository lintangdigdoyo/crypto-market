import { useEffect, useState } from "react";

const useMediaQuery = (query: string, initialState = false): boolean => {
  const [match, setMatch] = useState(initialState);

  useEffect(
    () => {
      const mediaQuery = window?.matchMedia(query);

      // set initial value
      setMatch(mediaQuery.matches);

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
