import React from 'react';
import { useMetamask } from './Usemetamask';

const ConnectMetamaskButton = () => {

    const { isConnected, connectMetamask,web3Instance,setIsConnected,setWeb3 } = useMetamask();

    const DisconnectMetamaskButton = () => {
        setIsConnected(false)
        setWeb3(null)
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









/*last modal model

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