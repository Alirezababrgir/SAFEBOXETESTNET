import { DrawerHeader } from "../../Sidebar/Drawerheader";
import Footer from "../Footer";
import TITTLE3LINKS_OFFICE from "./tittle/tittle3links";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ResponsiveTable from "./boxes/Unilevel";
import TOTALVOLUMEDETAIL from "./boxes/Totalvolumedetail";
import Binary from "./boxes/Binary";
import Topmarketer from "./boxes/Topmarketer";
import Champion from "./boxes/Champion";

const Office = () => {
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
                                    <TITTLE3LINKS_OFFICE />
                                </div>
                                <div className="row">
                                    <TOTALVOLUMEDETAIL />
                                </div>
                                <div className="row">
                                    <ResponsiveTable />
                                </div>
                                <div className="row">
                                    <Binary />
                                    <Topmarketer />
                                    <Champion/>
                                </div>
                                <div className="row">
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
export default Office;