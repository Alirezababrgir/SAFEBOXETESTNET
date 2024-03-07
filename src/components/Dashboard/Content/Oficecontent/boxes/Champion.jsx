import { Divider } from "@mui/material";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Champion = ({receiptchampion ,lotsumchampion,ChampionAmount, ChampionPrice, ChampionBalance, championDily, lightchampion, allhand, tenlevel }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div style={{ borderRadius: "1rem" }} className="mb-3 card ">
                <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        <h1 className="fs-2">Champion</h1>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><h3 className="text-danger">{ChampionBalance}$</h3></li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs-eg-77">
                            <div>
                                <div className="scrollbar-container px-4">
                                    <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="widget-content">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="widget-heading">Total Sales</h4>
                                                </div>
                                                <div className="widget-content-right">
                                                    <h4 className="widget-heading">Lightness</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted"><FaRegArrowAltCircleDown style={{ marginLeft: "3rem" }} className="fs-2" /></h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted"><FaRegArrowAltCircleDown style={{ marginRight: "3rem" }} className="fs-2" /></h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content">
                                                        <h4 className="widget-heading text-success">{allhand}$</h4>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg">
                                                            <h4 className="widget-heading text-danger">{lightchampion} $</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <Divider textAlign="center">Replace</Divider>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content">
                                                        <h4 className="widget-heading text-success">7000$</h4>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg">
                                                            <h4 className="widget-heading text-danger"> $</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <Divider textAlign="center" variant="fullWidth" sx={{ bgcolor: "black" }}></Divider>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted fs-4">Sales 10 LvL:</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h5 className="text-muted">{tenlevel} $</h5>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Lot Price</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{ChampionPrice} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Lot Amount</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{ChampionAmount} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Lot Sum</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{lotsumchampion} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Mountly Income</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{championDily} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                            <div className="widget-content-wrapper text-center mt-4">
                                                <h5 className="widget-heading">All</h5>
                                                <h5 className="widget-subheading">Receipt totals</h5>
                                                <div className="widget-content-right">
                                                    <h5 className="widget-numbers text-focus">${receiptchampion}</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Champion;