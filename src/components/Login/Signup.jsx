import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";
import React, { useState } from 'react';
import Web3 from 'web3';
const abi="ll"
const Singup = () => {

  const [selectedPackage, setSelectedPackage] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();

    const contractAddress = '0x123456789...'; // آدرس کانترکت در شبکه پالیگان
    const contract = new web3.eth.Contract(abi, contractAddress);

    // ارسال اطلاعات به کانترکت
    contract.methods.register(selectedPackage, referralCode)
      .send({ from: accounts[0] })
      .on('receipt', function (receipt) {
        console.log(receipt);
      });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <input
          type="radio"
          value="package1"
          checked={selectedPackage === "package1"}
          onChange={() => setSelectedPackage("package1")}
        />
        Package 1
      </label>
      <label>
        <input
          type="radio"
          value="package2"
          checked={selectedPackage === "package2"}
          onChange={() => setSelectedPackage("package2")}
        />
        Package 2
      </label>
      <label>
        <input
          type="radio"
          value="package3"
          checked={selectedPackage === "package3"}
          onChange={() => setSelectedPackage("package3")}
        />
        Package 3
      </label>
      <label>
        <input
          type="radio"
          value="package4"
          checked={selectedPackage === "package4"}
          onChange={() => setSelectedPackage("package4")}
        />
        Package 4
      </label>
      <label>
        <input
          type="radio"
          value="package5"
          checked={selectedPackage === "package5"}
          onChange={() => setSelectedPackage("package5")}
        />
        Package 5
      </label>
      <input type="text" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} placeholder="Referral Code" />
      <button type="submit">Submit</button>
    </form>
  )
}
export default Singup;

/*

<div className="containe-fluid parent">
      <div className="container">
        <HelmetProvider>
          <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
          <form className="row plans" >
          <Divider  className="text-white fs-5 mb-4"><h3>Registe Form</h3></Divider>
                <div className="col-12">
                <Divider textAlign="left" className="text-white"><h5>Select Package</h5></Divider>
                <div className="pkges">
                  <label className="plan basic-plan gr-bronz" htmlFor="basic">
                    <input defaultChecked type="radio" name="plan" id="basic" />
                    <div className="plan-content">
                      <div className="plan-details">
                        <h4>25 $</h4>
                      </div>
                    </div>
                  </label>
                  <label className="plan basic-plan gr-silver" htmlFor="basicc">
                    <input defaultChecked type="radio" name="plan" id="basicc" />
                    <div className="plan-content">
                      <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "40%" }} />
                      <div className="plan-details">
                        <h4>50 $</h4>
                        <p>Silver Package</p>
                      </div>
                    </div>
                  </label>
                  <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                    <input defaultChecked type="radio" name="plan" id="GOLD" />
                    <div className="plan-content">
                      <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "60%" }} />
                      <div className="plan-details">
                        <h4>100 $</h4>
                        <p>Golden Package</p>
                      </div>
                    </div>
                  </label>
                  <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                    <input defaultChecked type="radio" name="plan" id="DIAMOND" />
                    <div className="plan-content">
                      <IoDiamondOutline className="ml-2" style={{ fontSize: "5rem", opacity: "30%" }} />
                      <div className="plan-details">
                        <h4>200 $</h4>
                        <p>Diamond Package</p>
                      </div>
                    </div>
                  </label>
                  <label className="plan basic-plan gr-D-black" htmlFor="DIAMONDblack">
                    <input defaultChecked type="radio" name="plan" id="DIAMONDblack" />
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
                  <input type="text" required placeholder="reflink" />
                  <Fab className="mt-4" variant="extended" color="primary"><GrSend className='fs-2 mr-2' /><h5 className='mt-2'>APPROVE</h5></Fab> 
                </label>
                </div>
              </div>
            </form>
        </HelmetProvider >
      </div>
    </div>

*/
