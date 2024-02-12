import { Helmet, HelmetProvider } from 'react-helmet-async';
import FIVEPACKAGES from "./packages/5package";
import { DrawerHeader } from '../../Sidebar/Drawerheader';
import Footer from "../Footer";

const Topup = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet><title>DASHBOARD | TOPUP</title></Helmet>
                <DrawerHeader />
                <div  className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <div className="row">
                                    <FIVEPACKAGES />
                                </div>
                                <div className="row">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider >
        </>
    )
}
export default Topup;