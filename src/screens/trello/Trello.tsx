import Guide from "../../components/Guide";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Trello() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>코인</title>
        </Helmet>
      </HelmetProvider>
      <Guide />
    </>
  );
}
export default Trello;
