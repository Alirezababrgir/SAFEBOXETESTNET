import Footer from "../Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Forbox from "./4box/4box";
import { DrawerHeader } from "../../Sidebar/Drawerheader";


const Broker = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet><title>DASHBOARD | OFFICE</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <div style={{ marginBottom: "50px" }} className="row">
                                </div>
                                <div className="row">
                                    <Forbox/>
                                </div>
                                <div className="row mt-4">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
export default Broker;