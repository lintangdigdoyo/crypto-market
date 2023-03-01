import { useRef, useEffect } from "react";

function useGetPreviousValue<T>(state: T): T {
  const previousRef = useRef<T>();
  const previous = previousRef.current;

  useEffect(() => {
    previousRef.current = state;
  }, [state]);

  return previous;
}

export default useGetPreviousValue;
