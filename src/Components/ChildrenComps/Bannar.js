import { Link } from "react-router-dom";
import bg from "./../../images/banner-1.webp";
import bg1 from "./../../images/banner-2.webp"
const Bannar = () => {
    return ( 
        <div className="bannar">
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <div className="img-container ">
                            <Link to ="/blog" >
                                <img src={bg} alt="banner-image"/>
                            </Link>
                        </div>
        </div>
        <div className="col-md-6">
        <div className="img-container ">
                            <Link to ="/blog">
                                <img src={bg1} alt="banner-image"/>
                            </Link>
                        </div>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Bannar;