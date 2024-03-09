import React, { useState } from "react";
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import TITTLE from './tittle/tittle';
import TITTLE3LINKS from './tittle/tittle3links';
import FOOTERE3LINKS from './footer/footer3link';
import Barchart from './footer/barchart';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';
import Footer from '../Footer';
import { Contract_abi, Contract_address } from "../../../../services/abis";
import Web3 from 'web3';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Linechart from "./footer/linechart"
/********Lazy Import Boxes********/
const BOX_40 = lazy(() => import('./Boxes/40%box'))
const BOX_30 = lazy(() => import('./Boxes/30%box'))
const BOX_10 = lazy(() => import('./Boxes/10%box'))
const BOX_10_SHN = lazy(() => import('./Boxes/shn10%box'))



const Homecontent = () => {
    //binary box
    const [Wellcome, setwWellcome] = useState('');
    const [balance, setbalance] = useState('');
    const [lotprice, setlotprice] = useState('');
    const [lotpamount, setlotamount] = useState('');
    //champion box
    const [ChampionBalance, setChampionBalance] = useState('');
    const [ChampionAmount, setChampionAmount] = useState('');
    const [ChampionPrice, setChampionPrice] = useState('');

    //TOPMARKETER box
    const [topmarketerBalance, settopmarketerBalance] = useState('');
    const [topmarketerAmount, settopmarketerAmount] = useState('');
    const [topmarketerPrice, settopmarketerPrice] = useState('');

    //MY BENEFIT
    const [payment, setpayment] = useState('');

    //USERS COUNT
    const [allusers, setallusers] = useState('');

    //PAYMENT SUM
    const [paymentsum,setPaymentum]=useState()


    const navigate = useNavigate()

    useEffect(() => {

        const show = async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

                //CHECKING MY !IMPORTANT
                const amIMember = await safebox.methods.amIMember().call({ "from": accounts[0] });
                console.log(amIMember)
                if (amIMember) {
                    console.log('wellcome to Syber Office! :)')
                } else {
                    toast.error("You must register first !")
                    navigate("/signup")
                }

                //GET MY DATA
                const getmyData = await safebox.methods.getMyData().call({ "from": accounts[0] });
                setwWellcome(getmyData[0]);

                //GET MY BENEFIT
                const getmybenefit = await safebox.methods.getMyBenefit().call({ "from": accounts[0] });
                setpayment(String(getmybenefit._payment).slice(0, -8))

                //GET USECOUNT
                const getusecount = await safebox.methods.getUsersCount().call({ "from": accounts[0] });
                //console.log(getusecount)
                setallusers(String(getusecount))


                //MY BINAY STATE
                const getMyBinaryState = await safebox.methods.getMyBinaryState().call({ "from": accounts[0] });
                //SET DATA BINARY BOX
                setbalance(String(getMyBinaryState._poolBalance)/100000000)
                setlotprice(String(getMyBinaryState._lotPrice).slice(0, -8))
                setlotamount(String(getMyBinaryState._lotsAmount))
                //console.log(getMyBinaryState)


                //MY CHAMPION STATE
                const getMyBestState = await safebox.methods.getMyChampionState().call({ "from": accounts[0] });
                //SET DATA CHAMPION BOX
                setChampionBalance(String(getMyBestState._poolBalance)/100000000)
                setChampionAmount(String(getMyBestState._lotsAmount))
                setChampionPrice(String(getMyBestState._lotPrice).slice(0, -8))
                //console.log(getMyBestState)

                //MY TOPMARKETER STATE
                const getMyTopMarketerState = await safebox.methods.getMyTopMarketerState().call({ "from": accounts[0] });
                // console.log(getMyTopMarketerState)
                //SET DATA TOPMARKETER BOX
                settopmarketerBalance(String(getMyTopMarketerState._poolBalance)/100000000)
                settopmarketerAmount(String(getMyTopMarketerState._lotsAmount))
                settopmarketerPrice(String(getMyTopMarketerState._lotPrice).slice(0, -8))



                //GET PAYMENT SUM
                const getpaymentsum = await safebox.methods.getPaymentSum().call({ "from": accounts[0] });
                //console.log(getpaymentsum)
                setPaymentum(String(getpaymentsum).slice(0, -8))


            } catch (error) {
                console.error(error.message);
                toast.error(error.message)
            }

        };

        show();
    }, [navigate]);

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
                                <TITTLE Wellcome={Wellcome} />
                                <div className="row mb-4" id='dashboard'>
                                    <TITTLE3LINKS payment={payment} />
                                </div>
                                <div className="row mt-4 m-auto">
                                    <React.Suspense><BOX_40 /></React.Suspense>
                                    <React.Suspense><BOX_30 balance={balance} lotprice={lotprice} lotpamount={lotpamount} /></React.Suspense>
                                </div>
                                <div className="row m-auto">
                                    <React.Suspense><BOX_10 topmarketerAmount={topmarketerAmount} topmarketerBalance={topmarketerBalance} topmarketerPrice={topmarketerPrice} /></React.Suspense>
                                    <React.Suspense><BOX_10_SHN ChampionBalance={ChampionBalance} ChampionAmount={ChampionAmount} ChampionPrice={ChampionPrice} /></React.Suspense>
                                </div>
                                <div className="row">
                                    <Barchart />
                                    <Linechart />
                                </div>
                                <div className="row">
                                    <FOOTERE3LINKS allusers={allusers} paymentsum={paymentsum}/>
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


                 //MY SUPPORT STATE
                const getMySupportState = await safebox.methods.getMySupportState().call({ "from": accounts[0] });
                console.log(getMySupportState)

                //MY BEST STATE
                const getMyBestState = await safebox.methods.getMyBestState().call({ "from": accounts[0] });
                console.log(getMyBestState)

     //MY BINAY STATE
                const getMyBinaryState = await safebox.methods.getMyBinaryState().call({ "from": accounts[0] });
                console.log(getMyBinaryState)
                setsaletotal(String(getMyBinaryState._poolBalance))
  
    */