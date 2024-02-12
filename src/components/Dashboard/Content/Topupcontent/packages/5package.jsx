import { GiGoldBar } from "react-icons/gi";
const FIVEPACKAGES = () => {
    return (
        <>
            <div class="col-12 col-md-6 col-lg-6 column">
                <div style={{ height: "200" }} class="card treecard gr-bronz text-center">
                    <div>
                        <h1>25$</h1>
                        <h3> Income limit: 150$<br />
                            Trade Profit :%10
                        </h3>
                    </div>
                    <div class="ico-card">
                        <i class="bi bi-speedometer"></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 column">
                <div class="card treecard  gr-silver text-center">
                    <div>
                        <h1>50$</h1>
                        <h3> Income limit: 300$<br />
                            Trade Profit :%25
                        </h3>
                    </div>
                    <div class="ico-card">
                        <i class="bi bi-pie-chart-fill"></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 column">
                <div class="card treecard  gr-gold text-center">
                    <div>
                    <h1>100$</h1>
                        <h3> Income limit: 600$<br />
                            Trade Profit :%60
                        </h3>
                    </div>
                    <div class="ico-card">
                        <i><GiGoldBar /></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 column">
                <div class="card treecard  gr-diamond text-center">
                    <div>
                    <h1>200$</h1>
                        <h3> Income limit: 1200$<br />
                            Trade Profit :%150
                        </h3>
                    </div>
                    <div class="ico-card">
                        <i class="bi bi-list-ol"><GiGoldBar /></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 column">
                <div class="card treecard  gr-D-black text-center">
                    <div>
                    <h1>500$</h1>
                        <h3> Income limit: 3000$<br />
                            Trade Profit :Unlimited
                        </h3>
                    </div>
                    <div class="ico-card">
                    <i class="bi bi-gem"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FIVEPACKAGES;