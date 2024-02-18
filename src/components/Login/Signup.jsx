import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Signup = () => {
  const [tetherBalance, setTetherBalance] = useState(null);
  const web3 = new Web3(Web3.givenProvider || "https://polygon-rpc.com");
  const accountAddress = "0x25007F00A12f32B9eF3158875FcC03a094DD29DD"

  useEffect(() => {
    const fetchTetherBalance = async () => {
      const accounts = await web3.eth.getAccounts();

      const tetherContractAddress ="0xc2132D05D31c914a87C6611C10748AEb04B58e8F"; // آدرس کانترکت تتر در شبکه پالیگان
      const tetherContractABI = [{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
      const tetherContract = new web3.eth.Contract(tetherContractABI, tetherContractAddress);

      // فراخوانی تابع کانترکت برای دریافت موجودی تتر حساب
      const result = await tetherContract.methods.balanceOf(accountAddress).call({ from: accounts[0] });

      setTetherBalance(result);
    };

    fetchTetherBalance();
  }, [accountAddress]);

  if (!tetherBalance) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Tether Balance for {accountAddress}</h2>
      <p>Balance: {web3.utils.fromWei(tetherBalance, 'ether')} USDT</p>
    </div>
  );
};

export default Signup;


/*
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";

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
