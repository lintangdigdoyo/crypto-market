import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const useGetLogo = (logoUrl: string) => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    try {
      fetch(logoUrl)
        .then((res) => res.text())
        .then(setSvg);
    } catch (err) {
      console.error(err);
    }
  }, [logoUrl]);

  return DOMPurify.sanitize(svg, { USE_PROFILES: { svg: true } });
};

export default useGetLogo;
