import { GrMoney } from "react-icons/gr";
import { MdPersonAddAlt1 } from "react-icons/md";
import logo from "../../../../../assets/banners/navlogo.png"
const FOOTERE3LINKS = () => {
    return (
        <>
            <div style={{display:"flex",justifyContent:"center"}}  className="col-12 text-center h-1">
                <img src={logo} height={200}/>
            </div>
            <div className="col-12 text-center p-4">
                <h3 className="text-white">Total Volume <GrMoney className="text-success" /></h3>
                <h1 style={{fontSize:"3.5rem"}} className="text-warning mt-4">10,000,000 $</h1>
            </div>
            <div className="col-12 text-center p-4">
                <h3 className="text-white">Number Of Users <MdPersonAddAlt1 className="text-success" /></h3>
                <h3 className="text-danger mt-4">1000,000</h3>
            </div>
            <div className="copy"></div>
        </>
    )
}
export default FOOTERE3LINKS;