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


*/