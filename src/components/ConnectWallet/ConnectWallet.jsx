import React from 'react';
import { useMetamask } from './Usemetamask';
import Fab from '@mui/material/Fab';
import { SiWalletconnect } from "react-icons/si";

const ConnectMetamaskButton = () => {

    const { isConnected, connectMetamask } = useMetamask();

    return (
        <div className='d-flex justify-content-center align-item-center' style={{ height: "100dvh", width: "100%" }}>
            <div style={{ margin: "auto" }}>
                <div className='text-center' style={{ margin: "0 auto" }} onClick={connectMetamask}>
                    {!isConnected ? <Fab variant="extended" color="primary"><SiWalletconnect className='fs-2 mr-2' /><h4 className='mt-2'>Connect Wallet</h4></Fab> : isConnected ? <Fab variant="extended" color="success"><SiWalletconnect className='fs-2 mr-2' /><h4 className='mt-2'>Connected !</h4></Fab> : <Fab variant="extended" color="error"><SiWalletconnect sx={{ mr: 1 }} /><h4>Fail Connect!</h4></Fab>}
                </div>
            </div>
        </div>
    );
};

export default ConnectMetamaskButton;


/*
******true open wallet*******


import React from 'react';
import { useMetamask } from './Usemetamask';
import Web3 from 'web3';
const ConnectMetamaskButton = () => {
    const web3Instance = new Web3(window.ethereum);

    const { isConnected, connectMetamask, setIsConnected, setWeb3 } = useMetamask();

    const DisconnectMetamaskButton = () => {
        if (web3Instance) {
            web3Instance.currentProvider.disconnect()
            setIsConnected(false)
            setWeb3(null)
        }
    }

    return (
        <div className='d-flex justify-content-center align-item-center' style={{ height: "100dvh" }}>
            <div style={{ margin: "auto" }}>
                <button className='btn btn-primary mb-2' style={{ margin: "0 auto" }} onClick={connectMetamask}><h4>Connect to MetaMask</h4></button>
                {isConnected ? <p className='text-success'>Connected!<button onClick={DisconnectMetamaskButton} className=' btn text-danger ml-4'>Disconnect</button></p> : <p className='text-danger'>Not connected to Wallet</p>}
            </div>
        </div>
    );
};

export default ConnectMetamaskButton;



******last modal model ******

import * as React from 'react';
import connectwallet from "../../assets/banners/connect.svg"
//import ModalComponent from './ModalComponent';             <ModalComponent open={open} handleClose={handleClose}/>
import "./index.css"



export default function Connectwallet() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='d-flex justify-content-center align-item-center' style={{ height: "100dvh" }}>
            <div style={{ margin: "auto" }}>
                <button style={{ borderRadius: "1rem" }} className='btn btn-primary text-center' onClick={handleOpen}><img className='mb-2' height={50} src={connectwallet} /><h4>ConnectWallet</h4></button>
            </div>
        </div>
    );
}
*/