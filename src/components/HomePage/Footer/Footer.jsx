import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Explor from "./Explor";
import "./index.css"
const Footer = () => {
    return (
        <footer className="text-center" id="footer">
            <div class="footer-middle p-4">
                <Explor />
                <div class="container mt-4">
                        <div class="row text-center">
                            <ul class="list-unstyled d-flex justify-content-evenly">
                                <li><a href="#">Parks and Recreation</a></li>
                                <li><a href="#">Public Works</a></li>
                                <li><a href="#">Police Department</a></li>
                                <li><a href="#">Fire</a></li>
                                <li><a href="#">Mayor and City Council</a></li>
                            </ul>
                            <ul class="list-unstyled d-flex justify-content-evenly">
                                <li><a href="#">Parks and Recreation</a></li>
                                <li><a href="#">Public Works</a></li>
                                <li><a href="#">Police Department</a></li>
                                <li><a href="#">Fire</a></li>
                                <li><a href="#">Mayor and City Council</a></li>
                            </ul>
                        </div>
                    <div class="col p-4">
                        <h3 className=" mb-4">Follow Us</h3>
                        <i class="hover-fx hover-instagram"><LuInstagram /></i>
                        <i class="hover-fx hover-telegram"><FaTelegram /></i>
                        <i class="hover-fx hover-gmail"><BiLogoGmail /></i>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <h1 class="fs-6 text-center mt-3">Enter Fire &copy;</h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;