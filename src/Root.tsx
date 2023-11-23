
import Header from "./components/Header";
import {Helmet} from "react-helmet";

function Root() {
    return(
        <>
            <Helmet>
                <title>rameee: React.Clone project</title>
            </Helmet>
            <Header/>
        </>
    )
}
export default Root;
