import { HelmetProvider, Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router";
interface priceProps {
  coinId: string;
}
function Price() {
  const { coinId } = useOutletContext<priceProps>();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{coinId} Price</title>
        </Helmet>
      </HelmetProvider>
      <h1>Price</h1>
    </>
  );
}
export default Price;
