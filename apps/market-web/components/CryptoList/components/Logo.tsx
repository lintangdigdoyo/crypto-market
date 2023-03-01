import useGetLogo from "../../../utils/hooks/useGetLogo";

interface LogoProps {
  logoUrl: string;
  color: string;
}

const Logo = ({ logoUrl, color }: LogoProps) => {
  const logoSVG = useGetLogo(logoUrl);
  return (
    <div
      className={"scale-[1.4] w-8 h-8 flex items-center justify-center"}
      style={{ color }}
      dangerouslySetInnerHTML={{
        __html: logoSVG,
      }}
    />
  );
};

export default Logo;
