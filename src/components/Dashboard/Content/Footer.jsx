import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="text-center">
            <div class="footer-middle p-4">
                <div class="container mt-4">
                    <div class="row text-center">
                        <ul class="list-unstyled d-flex justify-content-evenly">
                            <li><a className="text-white" href="#">Parks and Recreation</a></li>
                            <li><a className="text-white" href="#">Public Works</a></li>
                            <li><a className="text-white" href="#">Police Department</a></li>
                            <li><a className="text-white" href="#">Fire</a></li>
                            <li><a className="text-white" href="#">Mayor and City Council</a></li>
                        </ul>
                        <ul class="list-unstyled d-flex justify-content-evenly">
                            <li><a className="text-white" href="#">Parks and Recreation</a></li>
                            <li><a className="text-white" href="#">Public Works</a></li>
                            <li><a className="text-white" href="#">Police Department</a></li>
                            <li><a className="text-white" href="#">Fire</a></li>
                            <li><a className="text-white" href="#">Mayor and City Council</a></li>
                        </ul>
                    </div>
                    <div class="col p-4">
                        <h3 className=" mb-2">Follow Us</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy p-4">
                            <i class="hover-fx hover-instagram"><LuInstagram /></i>
                            <i class="hover-fx hover-telegram"><FaTelegram /></i>
                            <i class="hover-fx hover-gmail"><BiLogoGmail /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;