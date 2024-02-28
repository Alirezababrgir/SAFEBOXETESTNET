import React from "react";
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import TITTLE from './tittle/tittle';
import TITTLE3LINKS from './tittle/tittle3links';
import FOOTERE3LINKS from './footer/footer3link';
import Charts from './footer/charts';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';
import Footer from '../Footer';
import { Contract_abi, Contract_address } from "../../../../services/abis";
import Web3 from 'web3';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
/********Lazy Import Boxes********/
const BOX_40 = lazy(() => import('./Boxes/40%box'))
const BOX_30 = lazy(() => import('./Boxes/30%box'))
const BOX_10 = lazy(() => import('./Boxes/10%box'))
const BOX_10_SHN = lazy(() => import('./Boxes/shn10%box'))



const Homecontent = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const show = async () => {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }], // chainId must be in hexadecimal numbers
                });
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

                //CHECKING USER !IMPORTANT
                const amIMember = await safebox.methods.amIMember().call({ "from": accounts[0] });
                console.log(amIMember)
                if (amIMember) {
                    console.log('wellcome to Syber Office! :)')
                } else {
                    toast.error("You must register first !")
                    navigate("/")
                }

                //MY BENEFIT
                const getMyBenefit = await safebox.methods.getMyBenefit().call({ "from": accounts[0] });
                console.log(getMyBenefit)

                //GET MY CHILDREN
                const getMyChilrden = await safebox.methods.getMyChilrden().call({ "from": accounts[0] });
                console.log(getMyChilrden)


                //GET USER SALES
               // const getUserSales = await safebox.methods.getUserSales(accounts[0]).call({ "from": accounts[0] });
                //console.log(getUserSales)

                //MY CHILDREN BENEFIT
                const getMyChildrenBenefit = await safebox.methods.getMyChildrenBenefit().call({ "from": accounts[0] });
                console.log(getMyChildrenBenefit)

                //MY CHILDREN SALES
                const getMyChildrenSales = await safebox.methods.getMyChildrenSales().call({ "from": accounts[0] });
                console.log(getMyChildrenSales)

                //My SALES PRE LEVEL
                const getMySalesPerLevel = await safebox.methods.getMySalesPerLevel().call({ "from": accounts[0] });
                console.log(getMySalesPerLevel)

                //MY BALANCE HAND
                const getMyHandsBalance = await safebox.methods.getMyHandsBalance().call({ "from": accounts[0] });
                console.log(getMyHandsBalance)


                //MY My MLM BLOCKINGSTATE 
                const getMyMlmBlockingState = await safebox.methods.getMyMlmBlockingState().call({ "from": accounts[0] });
                console.log(getMyMlmBlockingState)


                //MY BINAY STATE
                const getMyBinaryState = await safebox.methods.getMyBinaryState().call({ "from": accounts[0] });
                console.log(getMyBinaryState)

                //MY SUPPORT STATE
                const getMySupportState = await safebox.methods.getMySupportState().call({ "from": accounts[0] });
                console.log(getMySupportState)

                //MY BEST STATE
                const getMyBestState = await safebox.methods.getMyBestState().call({ "from": accounts[0] });
                console.log(getMyBestState)



            } catch (error) {
                console.error(error);
                console.log("error getMyChilrden");
            }

        };

        show();
    }, []);

    return (
        <>
            <HelmetProvider>
                <ToastContainer />
                <Helmet><title>HOME | DASHBOARD</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <TITTLE />
                                <div className="row mb-4" id='dashboard'>
                                    <TITTLE3LINKS />
                                </div>
                                <div className="row mt-4 m-auto">
                                    <React.Suspense><BOX_40 /></React.Suspense>
                                    <React.Suspense><BOX_30 /></React.Suspense>
                                </div>
                                <div className="row m-auto">
                                    <React.Suspense><BOX_10 /></React.Suspense>
                                    <React.Suspense><BOX_10_SHN /></React.Suspense>
                                </div>
                                <div className="row">
                                    <Charts />
                                    <Charts />
                                </div>
                                <div className="row">
                                    <FOOTERE3LINKS />
                                </div>
                            </div>
                            <div className="app-wrapper-footer">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
export default Homecontent;


/*

    useEffect(() => {
        const show = async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const result = await safebox.methods.getMyChilrden().call({ "from": accounts[0] });
                console.log(result);
            } catch (error) {
                console.error(error);
                console.log("error getMyChilrden");
            }
        };

        show();
    }, []);
    */