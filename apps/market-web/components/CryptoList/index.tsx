import useMediaQuery from "../../utils/hooks/useMediaQuery";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";

const CryptoList = () => {
  const isMobileDevice = useMediaQuery("(max-width: 640px)");

  return <>{isMobileDevice ? <MobileList /> : <DesktopList />}</>;
};

export default CryptoList;
