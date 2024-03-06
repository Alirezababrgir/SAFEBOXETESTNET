import { Contract_abi, Contract_address } from "../../../../services/abis";
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import Footer from "../Footer";
import TITTLE3LINKS_OFFICE from "./tittle/tittle3links";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ResponsiveTable from "./boxes/Unilevel";
import TOTALVOLUMEDETAIL from "./boxes/Totalvolumedetail";
import Binary from "./boxes/Binary";
import Topmarketer from "./boxes/Topmarketer";
import Champion from "./boxes/Champion";
import Web3 from "web3";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


const Office = () => {
    //binary box
    const [balance, setbalance] = useState('');
    const [lotprice, setlotprice] = useState('');
    const [lotpamount, setlotamount] = useState('');
    const [daily, setdaily] = useState('');
    const [havy, sethavy] = useState();
    const [light, setlight] = useState()

    //champion box
    const [ChampionBalance, setChampionBalance] = useState('');
    const [ChampionAmount, setChampionAmount] = useState('');
    const [ChampionPrice, setChampionPrice] = useState('');
    const [championDily, setchampionDaily] = useState('');
    const [lightchampion, setlightchampion] = useState();
    const [allhand, setallhand] = useState();
    const [tenlevel, settenlevel] = useState();


    //TOPMARKETER box
    const [topmarketerBalance, settopmarketerBalance] = useState('');
    const [topmarketerAmount, settopmarketerAmount] = useState('');
    const [topmarketerPrice, settopmarketerPrice] = useState('');
    const [topmarketerDaily, settopmarketerDaily] = useState('');
    const [havytopmarketer, sethavytopmarketer] = useState();
    const [lighttopmrketer, setlighttopmarketer] = useState();
    const [gaptopmarketer, setgaptopmarketer] = useState();

    //MY CHILDREN SALES
    // const [uid, setuid] = useState();


    //GETNYBENEFIT
    const [remindRecipt, setremindRecipt] = useState()

    //GET USERS SALES
    const [tenLvL, settenLvL] = useState();
    const [allLvL, setallLvL] = useState();



    useEffect(() => {

        const show = async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);


                //MY BINAY STATE
                const getMyBinaryState = await safebox.methods.getMyBinaryState().call({ "from": accounts[0] });
                //SET DATA BINARY BOX
                setbalance(String(getMyBinaryState._poolBalance)/100000000)
                setlotprice(String(getMyBinaryState._lotPrice).slice(0, -8))
                setlotamount(String(getMyBinaryState._lotsAmount).slice(0, -8))
                setdaily(String(getMyBinaryState._lotsEarned).slice(0, -8))
                setlight(String(getMyBinaryState._smallHandBalance).slice(0, -8))
                sethavy(String(getMyBinaryState._bigHandBalance).slice(0, -8))


                //MY CHAMPION STATE
                const getMyBestState = await safebox.methods.getMyChampionState().call({ "from": accounts[0] });
                //SET DATA CHAMPION BOX
                setChampionBalance(String(getMyBestState._poolBalance)/100000000)
                setChampionAmount(String(getMyBestState._lotsAmount).slice(0, -8))
                setChampionPrice(String(getMyBestState._lotPrice).slice(0, -8))
                setchampionDaily(String(getMyBestState._lotsEarned).slice(0, -8))
                setlightchampion(String(getMyBestState._smallHandSales).slice(0, -8))
                setallhand(String(getMyBestState._allHandSales).slice(0, -8))
                settenlevel(String(getMyBestState._tenLevelSales).slice(0, -8))
                console.log(getMyBestState)



                //MY TOPMARKETER STATE
                const getMyTopMarketerState = await safebox.methods.getMyTopMarketerState().call({ "from": accounts[0] });
                //SET DATA TOPMARKETER BOX
                settopmarketerBalance(String(getMyTopMarketerState._poolBalance)/100000000)
                settopmarketerAmount(String(getMyTopMarketerState._lotsAmount).slice(0, -8))
                settopmarketerPrice(String(getMyTopMarketerState._lotPrice).slice(0, -8))
                settopmarketerDaily(String(getMyTopMarketerState._lotsEarned).slice(0, -8))
                sethavytopmarketer(String(getMyTopMarketerState._bigHandBalance).slice(0, -8))
                setlighttopmarketer(String(getMyTopMarketerState._smallHandBalance).slice(0, -8))
                setgaptopmarketer(String(getMyTopMarketerState._gapToNextLot).slice(0, -8))
                console.log(getMyTopMarketerState)


                //GET MY BENEFIT
                const mybenefit = await safebox.methods.getMyBenefit().call({ "from": accounts[0] });
                setremindRecipt(String(mybenefit._remainedReceipt).slice(0, -8))

                //GET MY DATA
                const mydata = await safebox.methods.getMyData().call({ "from": accounts[0] });

                //GET USESRS SALES
                const mysales = await safebox.methods.getMySales(mydata._userAddress).call({ "from": accounts[0] });
                settenLvL(String(mysales._tenLevelSales).slice(0, -8))
                setallLvL(String(mysales._allLevelSales).slice(0, -8))

            } catch (error) {
                console.error(error.message);
                toast.error(error.message)
            }

        };

        show();
    }, []);
    return (
        <>
            <HelmetProvider>
                <ToastContainer />
                <Helmet><title>DASHBOARD | OFFICE</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <div style={{ marginBottom: "50px" }} className="row">
                                    <TITTLE3LINKS_OFFICE remindRecipt={remindRecipt} tenLvL={tenLvL} allLvL={allLvL} />
                                </div>
                                <div className="row">
                                    <TOTALVOLUMEDETAIL />
                                </div>
                                <div className="row">
                                    <ResponsiveTable />
                                </div>
                                <div className="row">
                                    <Binary balance={balance} lotprice={lotprice} lotpamount={lotpamount} daily={daily} havy={havy} light={light} />
                                    <Topmarketer gaptopmarketer={gaptopmarketer} lighttopmrketer={lighttopmrketer} havytopmarketer={havytopmarketer} topmarketerAmount={topmarketerAmount} topmarketerBalance={topmarketerBalance} topmarketerPrice={topmarketerPrice} topmarketerDaily={topmarketerDaily} top />
                                    <Champion tenlevel={tenlevel} lightchampion={lightchampion} ChampionAmount={ChampionAmount} ChampionPrice={ChampionPrice} ChampionBalance={ChampionBalance} championDily={championDily} allhand={allhand} />
                                </div>
                                <div className="row">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
export default Office;