import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg"
const Partner = () => {
    return ( 
        <div className="partner text-center">
        <div className="container">
        <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
			<img src={img1} alt="" />
			</div>	
            <div className="col-6 col-sm-4 col-lg-2">
			<img src={img2} alt="" />
			</div>	
            <div className="col-6 col-sm-4 col-lg-2">
			<img src={img3} alt="" />
			</div>	
            <div className="col-6 col-sm-4 col-lg-2">
			<img src={img4} alt="" />
			</div>	
            <div className="col-6 col-sm-4 col-lg-2">
			<img src={img5} alt="" />
			</div>	
            <div className="col-6 col-sm-4 col-lg-2">
			<img src={img6} alt="" />
			</div>					
        </div>
        </div>
        </div>
     );
}
 
export default Partner;