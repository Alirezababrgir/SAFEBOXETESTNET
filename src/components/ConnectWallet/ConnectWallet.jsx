import * as React from 'react';
import connectwallet from "../../assets/banners/connect.svg"
import ModalComponent from './ModalComponent';
import "./index.css"



export default function Connectwallet() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='d-flex justify-content-center align-item-center' style={{height:"100vh"}}>
                    <div style={{ margin: "auto" }}>
                        <button style={{borderRadius:"1rem"}} className='btn btn-primary text-center' onClick={handleOpen}><img className='mb-2' height={50} src={connectwallet} /><h4>ConnectWallet</h4></button>
                    </div>
            <ModalComponent open={open} handleClose={handleClose}/>
        </div>
    );
}