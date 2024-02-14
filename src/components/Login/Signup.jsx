import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";

const Singup = () => {

  return (
    <div className="containe-fluid logcontainer parent">
      <div className="container">
        <HelmetProvider>
          <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>

          <div className="row plans" >
            <Divider className="text-white mb-4"><h3>Register</h3></Divider>
            <form className="text-center">
              <div className="pkges col-12 col-lg-12 align-self-center">
                <Divider className="text-white" textAlign="left"><h5>Inject UID</h5></Divider>
                <label className="input-box plan">
                  <input type="text" required placeholder="reflink" />
                </label>
                <Divider className="text-white"><h5>Select Package</h5></Divider>

                <label className="plan basic-plan" htmlFor="basic">
                  <input defaultChecked type="radio" name="plan" id="basic" />
                  <div className="plan-content">
                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                    <div className="plan-details">
                      <h4>25 $</h4>
                      <p>For smaller business</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" htmlFor="basicc">
                  <input defaultChecked type="radio" name="plan" id="basicc" />
                  <div className="plan-content">
                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                    <div className="plan-details">
                      <h4>50 $</h4>
                      <p>For smaller business,</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" htmlFor="GOLD">
                  <input defaultChecked type="radio" name="plan" id="GOLD" />
                  <div className="plan-content">
                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                    <div className="plan-details">
                      <h4>100 $</h4>
                      <p>For smaller business,</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" htmlFor="DIAMOND">
                  <input defaultChecked type="radio" name="plan" id="DIAMOND" />
                  <div className="plan-content">
                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                    <div className="plan-details">
                      <h4>200 $</h4>
                      <p>For smaller business, </p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" htmlFor="DIAMONDblack">
                  <input defaultChecked type="radio" name="plan" id="DIAMONDblack" />
                  <div className="plan-content">
                    <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
                    <div className="plan-details">
                      <h4>500 $</h4>
                      <p>For smaller business,</p>
                    </div>
                  </div>
                </label>
              </div>
              <label className="mt-4">
                <button className="btn btn-success text-white">send</button>
              </label>
            </form>
          </div>
        </HelmetProvider >
      </div>
    </div>
  )
}
export default Singup;

/*
<article class="bg-secondary">
<div class="card-body text-center">
    <h3 class="text-white mt-3">Bootstrap 4 UI KIT</h3>
    <p class="h5 text-white">Components and templates  <br /> for Ecommerce, marketplace, booking websites
        and product landing pages</p>   <br />
    <p><a class="btn btn-warning" target="_blank" href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com
        <i class="fa fa-window-restore "></i></a></p>
</div>
<br /><br />
</article>




 <span style={{ "--i": "0" }} />
          <span style={{ "--i": "1" }} />
          <span style={{ "--i": "2" }} />
          <span style={{ "--i": "3" }} />
          <span style={{ "--i": "4" }} />
          <span style={{ "--i": "5" }} />
          <span style={{ "--i": "6" }} />
          <span style={{ "--i": "7" }} />
          <span style={{ "--i": "8" }} />
          <span style={{ "--i": "9" }} />
          <span style={{ "--i": "10" }} />
          <span style={{ "--i": "11" }} />
          <span style={{ "--i": "12" }} />
          <span style={{ "--i": "13" }} />
          <span style={{ "--i": "14" }} />
          <span style={{ "--i": "15" }} />
          <span style={{ "--i": "16" }} />
          <span style={{ "--i": "17" }} />
          <span style={{ "--i": "18" }} />
          <span style={{ "--i": "19" }} />
          <span style={{ "--i": "20" }} />
          <span style={{ "--i": "21" }} />
          <span style={{ "--i": "22" }} />
          <span style={{ "--i": "23" }} />
          <span style={{ "--i": "24" }} />
          <span style={{ "--i": "25" }} />
          <span style={{ "--i": "26" }} />
          <span style={{ "--i": "27" }} />
          <span style={{ "--i": "28" }} />
          <span style={{ "--i": "29" }} />
          <span style={{ "--i": "30" }} />
          <span style={{ "--i": "31" }} />
          <span style={{ "--i": "32" }} />
          <span style={{ "--i": "33" }} />
          <span style={{ "--i": "34" }} />
          <span style={{ "--i": "35" }} />
          <span style={{ "--i": "36" }} />
          <span style={{ "--i": "37" }} />
          <span style={{ "--i": "38" }} />
          <span style={{ "--i": "39" }} />
          <span style={{ "--i": "40" }} />
          <span style={{ "--i": "41" }} />
          <span style={{ "--i": "42" }} />
          <span style={{ "--i": "43" }} />
          <span style={{ "--i": "44" }} />
          <span style={{ "--i": "45" }} />
          <span style={{ "--i": "46" }} />
          <span style={{ "--i": "47" }} />
          <span style={{ "--i": "48" }} />
          <span style={{ "--i": "49" }} />




          <div className="login-box">
                <h4 className="logh2">Regester</h4>
                <form action="#">
                  <div className="input-box">
                    <input className=" glowing-btn" type="text" required />
                    <label>User Name</label>
                  </div>
                  <div >
                    <label>Reflink</label>
                  </div>
                  <div class="radio-buttons-container mb-4">
                  </div>
                  <button type="submit" className="regester" disabled>Regester</button>
                  <div className="signup-link">
                    <button className="cancel" onClick={() => { navigate("/") }} href="#">cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>





*/
