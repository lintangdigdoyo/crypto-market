import Typography from "../components/Common/Typography";
import CryptoList from "../components/CryptoList";

export function Index() {
  return (
    <>
      <Typography type="h1" variant="heading2" className="pl-4">
        Harga Crypto dalam Rupiah Hari Ini
      </Typography>
      <div className="my-10">
        <CryptoList />
      </div>
    </>
  );
}

export default Index;
