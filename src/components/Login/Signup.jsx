import React, { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline, IoReloadOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";
import { useMetamask } from '../ConnectWallet/Usemetamask';
import { Contract_abi, Contract_address, USDT_abi, USDT_address } from "./abis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loading-icons'

const Signup = () => {
    const [icon, seticon] = useState(<GrSend className='fs-2 mr-2' />);
    const [buttonColor, setButtonColor] = useState('primary');
    const [web3, setWeb3] = useState(null);
    const [packageNo, setSelectedPackage] = useState(0);
    const [referralUid, setReferralId] = useState('');
    const { web3Instance } = useMetamask();

    const handlePackageSelection = (event) => {
        setSelectedPackage(parseInt(event.target.value));
    };
    const handleReferralInput = (event) => {
        setReferralId(event.target.value);
    };

    const handleBuy = async () => {
        if (window.ethereum) {
            setWeb3(web3Instance);
            try {
                // loading button
                seticon(<Circles style={{ height: "25px", width: "25px", marginRight: "5px" }} />);
                setButtonColor('success');
                // change network
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }], // chainId must be in hexadecimal numbers
                });
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const tether = new web3.eth.Contract(JSON.parse(USDT_abi), USDT_address);

                //  CALL APPROVE 
                await tether.methods.approve(Contract_address, 300 * (10 ** 8)).send({ from: accounts[0] }).then(console.log)
                toast.success('approve function called successfully');

                //  CALL SAFEBOXES FOR BUY
                await safebox.methods['registerUser(uint48,uint8)'](referralUid, packageNo).send({ from: accounts[0] })
                    .on('receipt', function (receipt) {
                        toast.success(`wellcome ! transactionhash :${receipt.transactionHash}`);
                        console.log('Receipt:', receipt);
                    })
                    .on('error', function (error, receipt) {
                        if (receipt.status === true) {
                            toast.error("oooffff transaction unsuccessful!");
                        }
                    })

            } catch (error) {
                toast.error('Your purchase was unsuccessful!');
                setButtonColor('error')
                seticon(<IoReloadOutline className='fs-2 mr-2' />)
            }
        } else {
            console.log('install Wallet');
        }

    }

    return (

        <div className="containe-fluid parent">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="container">
                <HelmetProvider>
                    <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
                    <div className="row plans" >
                        <Divider className="text-white fs-5 mb-4"><h3>Registe Form</h3></Divider>
                        <div className="col-12">
                            <Divider textAlign="left" className="text-white"><h5>Select Package</h5></Divider>
                            <div className="pkges">
                                <label className="plan basic-plan gr-bronz" htmlFor="basic">
                                    <input checked={packageNo === 0} type="radio" name="plan" id="basic" value={"0"} onClick={handlePackageSelection} />
                                    <div className="plan-content">
                                        <div className="plan-details">
                                            <h4>25 $</h4>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-silver" htmlFor="basicc">
                                    <input checked={packageNo === 1} type="radio" name="plan" id="basicc" value={"1"} onClick={handlePackageSelection} />
                                    <div className="plan-content">
                                        <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "40%" }} />
                                        <div className="plan-details">
                                            <h4>50 $</h4>
                                            <p>Silver Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                                    <input checked={packageNo === 2} type="radio" name="plan" id="GOLD" value={"2"} onClick={handlePackageSelection} />
                                    <div className="plan-content">
                                        <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "60%" }} />
                                        <div className="plan-details">
                                            <h4>100 $</h4>
                                            <p>Golden Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                                    <input checked={packageNo === 3} type="radio" name="plan" id="DIAMOND" value={"3"} onClick={handlePackageSelection} />
                                    <div className="plan-content">
                                        <IoDiamondOutline className="ml-2" style={{ fontSize: "5rem", opacity: "30%" }} />
                                        <div className="plan-details">
                                            <h4>200 $</h4>
                                            <p>Diamond Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-D-black" htmlFor="DIAMONDblack">
                                    <input checked={packageNo === 4} type="radio" name="plan" id="DIAMONDblack" value={"4"} onClick={handlePackageSelection} />
                                    <div className="plan-content">
                                        <IoDiamond className="ml-2" style={{ fontSize: "5rem" }} />
                                        <div className="plan-details">
                                            <h4>500 $</h4>
                                            <p>Black Diamond Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="input-box plan basic-plan plan">
                                    <Divider textAlign="left" className="text-white mb-4"><h5>Register</h5></Divider>
                                    <input type="text" required placeholder="Enter Refral Id" onChange={handleReferralInput} />
                                    <Fab onClick={handleBuy} className="mt-4 mb-2" variant="extended" color={buttonColor}>{icon}<h5 className='mt-2'>REGISTER</h5></Fab>
                                </label>
                            </div>
                        </div>
                    </div>
                </HelmetProvider >
            </div>
        </div>
    )
};
export default Signup;
