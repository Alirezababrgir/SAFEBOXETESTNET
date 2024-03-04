import { TbChartCandleFilled } from "react-icons/tb";
import { TextField } from "@mui/material";
import { Fab } from "@mui/material";
import { FiLink } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Forbox = () => {
    return (
        <>
            <div style={{ cursor: "pointer" }} class="col-6 col-md-4 col-lg-3 my-2">
                <div style={{ height: "250px" }} class="card  packagecards gr-1">
                    <div>
                        <h3>Join To The Broker  <br />
                        </h3>
                    </div>
                    <a href="https://capitalxtend.com/register?referral=rWBnl6" target="_blank">
                        <Fab size="large" className="mt-4" variant="extended" color="primary"><h5 className='mt-2'>Join</h5>
                        </Fab>
                    </a>

                    <div class="ico-cards">
                        <i><TbChartCandleFilled /></i>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3 my-2 ">
                <div style={{ height: "250px" }} class="card  packagecards  gr-1">
                    <div>
                        <h3>Inject Refral Link</h3>
                    </div>
                    <div>
                        <TextField
                            sx={{ input: { color: 'white' } }}
                            id="standard-helperText"
                            defaultValue="532487"
                            variant="standard"
                        />
                    </div>
                    <Fab className="mt-4" variant="extended" color="primary"><h5 className='mt-2'>Send</h5></Fab>
                    <div class="ico-cards">
                        <i><FiLink /></i>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3 my-2">
                <div style={{ height: "250px" }} class="card packagecards gr-1">
                    <div>
                        <h3>Inject Copy Trade Number</h3>
                    </div>
                    <div>
                        <TextField
                            sx={{ input: { color: 'white' } }}
                            id="standard-helperText"
                            defaultValue="532487"
                            variant="standard"
                        />
                    </div>
                    <Fab className="mt-4" variant="extended" color="primary"><h5 className='mt-2'>Send</h5></Fab>
                    <div class="ico-cards">
                        <i><FiLink /></i>
                    </div>
                </div>
            </div>
            <div style={{ cursor: "pointer" }} class="col-6 col-md-4 col-lg-3 my-2">
                <div style={{ height: "250px" }} class="card  packagecards gr-1">
                    <span className="text-warning">D`ctive<RiErrorWarningLine /></span> <h3>CopyTrade Code</h3>
                    <div>
                        <TextField
                            sx={{ input: { color: 'white' } }}
                            id="standard-helperText"
                            defaultValue="532487"
                            variant="outlined"
                            label="Your leader Code"
                        />
                    </div>
                    <Fab className="mt-2" variant="extended" color="primary"><h6 className="mt-2 fs-5">ok</h6></Fab>
                    <div class="ico-cards">
                        <i><LuCopyCheck /></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Forbox;