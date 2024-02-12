import "./index.css"
import bitkeep from "../../../assets/banners/bitkip.png"
import trust from "../../../assets/banners/trust.png"
import meta from "../../../assets/banners/meta.png"

import ScrollAnimation from 'react-animate-on-scroll';

const Contract = () => {
    return (
        <div class=" testimonial-container container">
            <ScrollAnimation animateIn="fadeIn" >
                <div id="addrwallets" class="row">
                    <div className="row text-center">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2 className="text-muted">Smart Contract</h2>
                        </ScrollAnimation>
                        <div className="col-md-6 mt-4 p-4">
                            <p class="addr-text text-muted">
                                A smart contract is a self-executing program that automates actions required in a contract. Upon completion, transactions become traceable and irreversible.
                                Smart contracts allow for trustworthy transactions and agreements between disparate and anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.
                            </p>
                        </div>
                        <div className="col-md-6 mt-4">
                            <img className="img_contract" src="https://mindinfoservices.com/assets/img/SMart%20Contract%20Development.png" alt="addr" />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div id="addrwallets" class="row boxes">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row text-center">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2 className="mb-4 mt-3 text-muted">Contract Address</h2>
                        </ScrollAnimation>
                        <div className="col-md-6 mt-4">
                            <img  className="img_addr" src="https://ethereum.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffind-wallet-hero.c9025bb3.png&w=640&q=75" alt="addr" />
                        </div>
                        <div className="col-md-6 mt-4 p-4">
                            <p class="addr-text text-muted">
                                A smart contract is a self-executing program that automates actions required in a contract. Upon completion, transactions become traceable and irreversible.
                                Smart contracts allow for trustworthy transactions and agreements between disparate and anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div class="row text-center boxes">
                <div style={{ width: "100%" }} className="row text-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 className="mb-4 mt-3 text-muted">Connect to Safeboxes</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" delay={100}>
                        <div style={{ width: "100%", margin: "auto" }} className="row justify-content-center mt-2">
                            <img className="walletphoto" src={bitkeep} alt="trust" />
                            <img className="walletphoto" src={trust} alt="trust" />
                            <img className="walletphoto" src={meta} alt="meta mask" />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

        </div >

    )
}
export default Contract;