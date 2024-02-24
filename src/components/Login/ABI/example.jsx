import React, { useState } from 'react';
import Web3 from 'web3';
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";
import USDTContractABI from "./ABI/USDTContractABI.json"; // ABI Tether
import SAFEContratABI from "./ABI/SAFEBOXES.json" //ABI SAFEBOXES 


const Signup = () => {

  const [web3, setWeb3] = useState(null);
  const [packageNo, setSelectedPackage] = useState(0);
  const [referralUid, setReferralId] = useState('');

  const handlePackageSelection = (value) => {
    setSelectedPackage(value);
  };
  const handleReferralInput = (event) => {
    setReferralId(event.target.value);
  };

  const handleBuy = async () => {
    if (window.ethereum) {
      const provider = new Web3(window.ethereum);
      setWeb3(provider);
      try {
        //  USER ADDRESS
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        //  USDT ADDRESS CONTRACT
        const usdtAddress = '0x449AF8A982d45356eF967954dec64307826D68ad';
        const usdtContract = new web3.eth.Contract(USDTContractABI, usdtAddress);

        //  CALL APPROVE 
        await usdtContract.methods.approve(usdtAddress, packageNo).send({ from: accounts[0] });
        console.log('approve function called successfully');
        /*
        const web3contract = new Web3(new Web3.providers.HttpProvider('https://go.getblock.io/2cb70d69519b424880d3a7cf5fa1332b')); // Update with your Infura endpoint
        */
        //  CALL SAFEBOXES FOR BUY

        const contract = new web3.eth.Contract(SAFEContratABI, "0xFC761a499a7A1400a3999B6A7b9CaE9C73e43935");
        const tx = await contract.methods.registerUser(referralUid, packageNo).send({ from: accounts[0] });
        if (packageNo === 0 || !referralUid) {
          alert('Please select a package and enter a referral ID!');
          return;
        }
        alert('Purchase with referral registered! Transaction hash: ' + tx.transactionHash);
      } catch (error) {
        console.error("oops", error);
      }
    } else {
      console.error('MetaMask not found');
    }

  }

  return (

    <div className="containe-fluid parent">
      <div className="container">
        <HelmetProvider>
          <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
          <form className="row plans" >
            <Divider className="text-white fs-5 mb-4"><h3>Registe Form</h3></Divider>
            <div className="col-12">
              <Divider textAlign="left" className="text-white"><h5>Select Package</h5></Divider>
              <div className="pkges">
                <label className="plan basic-plan gr-bronz" htmlFor="basic">
                  <input defaultChecked type="radio" name="plan" id="basic" value={0} onChange={() => handlePackageSelection(5000000000)} />
                  <div className="plan-content">
                    <div className="plan-details">
                      <h4>25 $</h4>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan gr-silver" htmlFor="basicc">
                  <input defaultChecked type="radio" name="plan" id="basicc" value={1} onChange={() => handlePackageSelection(1)} />
                  <div className="plan-content">
                    <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "40%" }} />
                    <div className="plan-details">
                      <h4>50 $</h4>
                      <p>Silver Package</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                  <input defaultChecked type="radio" name="plan" id="GOLD" value={2} onChange={() => handlePackageSelection(2)} />
                  <div className="plan-content">
                    <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "60%" }} />
                    <div className="plan-details">
                      <h4>100 $</h4>
                      <p>Golden Package</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                  <input defaultChecked type="radio" name="plan" id="DIAMOND" value={3} onChange={() => handlePackageSelection(3)} />
                  <div className="plan-content">
                    <IoDiamondOutline className="ml-2" style={{ fontSize: "5rem", opacity: "30%" }} />
                    <div className="plan-details">
                      <h4>200 $</h4>
                      <p>Diamond Package</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan gr-D-black" htmlFor="DIAMONDblack">
                  <input defaultChecked type="radio" name="plan" id="DIAMONDblack" value={4} onChange={() => handlePackageSelection(4)} />
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
                  <Fab onClick={handleBuy} className="mt-4 mb-2" variant="extended" color="primary"><GrSend className='fs-2 mr-2' /><h5 className='mt-2'>REGISTER</h5></Fab>
                </label>
              </div>
            </div>
          </form>
        </HelmetProvider >
      </div>
    </div>
  )
};
export default Signup;
