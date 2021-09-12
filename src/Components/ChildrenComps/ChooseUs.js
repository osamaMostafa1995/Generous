import chosse1 from "./../../images/choose1.jpg";
import chosse2 from "./../../images/choose2.jpg";
import chosse3 from "./../../images/choose3.jpg"
const Choose = () => {
    return ( 
        <div className="choose-us">
        <div className="container">
        <h1>Grocery service you can count on</h1>
        <div className="row">
<div className="col-md-4">
<div className="card" >
  <img src={chosse1} className="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 className="card-title">Support Local Farmer</h5>
    <p className="card-text">Some quick example make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-md-4">
<div className="card" >
  <img src={chosse2} className="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 className="card-title">Choose what you want</h5>
    <p className="card-text">Some quick example make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-md-4">
<div className="card" >
  <img src={chosse3} className="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 className="card-title">Reasonable Price</h5>
    <p className="card-text">Some quick example make up the bulk of the card's content.</p>
  </div>
</div>
</div>
        </div>
        </div>
        </div>
     );
}
 
export default Choose;