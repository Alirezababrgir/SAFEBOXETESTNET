import Timer from "./Timer";
const BOX_10 = () => {
    return (
        <div className="col-md-6 col-lg-6 pb-3">
            {/* Copy the content below until next comment */}
            <div className="card  card-custom bg-white border-white border-0">
                <div className="card-img-binary" />
                <div className="card-custom-avatar">
                    <img className="img-fluid" src="https://img.icons8.com/?size=80&id=77BTTeDzZoWZ&format=png" alt="Avatar" />
                </div>
                <div className="card-body">
                    <Timer />
                    <h4 className="fs-6 text-muted">Deatils</h4>
                    <div>
                        <div className="scrollbar-container px-4">
                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Sale Total</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>54 $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Total Lot </h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>429 $</h4>
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
                                                    <h4>129 $</h4>
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
export default BOX_10;