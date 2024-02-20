import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Forex from "../Forex/ForexContainer";
import Packages from "../Packages/Packages";
import Safebox from "../Safebox/Safebox";
import Contract from "../Contract/Contract";
import logo from "../../../assets/banners/navlogo.png"
import "./index.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sidebar from "../../Navbar/Sidebar";
import videosafebo from "../../../assets/banners/city.mp4"
import { Roadmap } from "../Explor/Roadmap";
import Explor from "../Explor/Explor";


const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | HOME</title></Helmet>
                <Sidebar />
                <Navbar />
                <section id="home" class="showcase-arean">
                    <video className="bg-video" autoPlay loop muted playsInline defaultmuted preload="auto">
                        <source type="video/mp4" src={videosafebo} />
                    </video>
                    <div className="showcase-container text-center">
                        <img className="d-none" height={300} width={400} id="safe" src={logo} alt="logo" />
                        <h1 className="mb-4 fs-2 text-white">
                            <h2 className="scale-in-center">Experience profitability and security with us</h2>
                        </h1>
                        <button onClick={() => { navigate("/connectwallet") }} class='glowing-btn mt-4 mb-2'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span ></button>
                    </div>
                </section>
                <section id="safebox">
                    <Safebox />
                </section>
                <section id="forex">
                    <Forex />
                </section>
                <section id="packages">
                    <Packages />
                </section>
                <section id="contract">
                    <Contract />
                </section>
                <section id="roadmap">
                    <Roadmap />
                    <Explor />
                </section>
                <section id="about">
                    <Footer />
                </section>
            </HelmetProvider>
        </div>
    )
}
export default Home;