import { useEffect, useState } from "react";
import TimerTEN from "./Timers/Timer10";
import Web3 from "web3";
import { Contract_abi, Contract_address } from '../../../../../services/abis'

const BOX_40 = () => {
    
    //const [active, setactive] = ('')

    const [mlmpaymentsum, setmlmPaymentum] = useState();

    useEffect(() => {
        const MlmBlocking = async () => {
            try {

                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);


                //GET MLM BLOCKING STATE
                const mlm = await safebox.methods.getMyMlmBlockingState().call({ "from": accounts[0] });
                console.log(mlm)

                console.log(new Date())

                //GET PAYMENT SUM
                const getpaymentsum = await safebox.methods.getMlmPaymentSum().call({ "from": accounts[0] });
                console.log(String(getpaymentsum)/100000000)
                setmlmPaymentum(String(getpaymentsum).slice(0, -8))
            } catch (error) {

                console.log(error.message);

            }
        }
        MlmBlocking();
    }, [])



    return (
        <div className="col-md-6 col-lg-6 pb-3">
            {/* Copy the content below until next comment */}
            <div className="card  card-custom bg-white border-white border-0">
                <div className="card-img-uni" />
                <div className="card-custom-avatar">
                    <img className="img-fluid" src="https://img.icons8.com/plasticine/100/40-circle.png" alt="Avatar" />
                </div>
                <div className="card-body">
                    <TimerTEN/>
                    <h4 className="fs-6 text-muted">Deatils</h4>
                    <div>
                        <div className="scrollbar-container px-4">
                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Total Payment</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{mlmpaymentsum} $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Active</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4> $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Lot Price </h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4> $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copy until here */}
        </div>
    )
}
export default BOX_40;