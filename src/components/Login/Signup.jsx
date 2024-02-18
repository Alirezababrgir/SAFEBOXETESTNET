import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";

const Signup = () => {
  const [balance, setBalance] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    const loadAccountBalance = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        const balanceInWei = await web3.eth.getBalance(address);
        const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
        const balanceInUsd = balanceInEth * 4000; // فرضاً قیمت تتر به دلار
        const balanceInTether = balanceInUsd / 1.0; // تبدیل به تتر

        setBalance(balanceInTether);

        if (balanceInTether < 25) {
          setIsButtonDisabled(true);
        } else {
          setIsButtonDisabled(false);
        }
      }
    };

    loadAccountBalance();
  }, []);

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
                  <Fab disabled={isButtonDisabled} className="mt-4 mb-2" variant="extended" color="primary"><GrSend className='fs-2 mr-2' /><h5 className='mt-2'>APPROVE</h5></Fab>
                  <div>
                    <p>{balance > 25 ? "success" : `Account Balance ${balance} Tether`}</p>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </HelmetProvider >
      </div>
    </div>
  );
};

export default Signup;

/*

<div>
      <h1>موجودی حساب پالیگان:</h1>
      
    </div>
*/
