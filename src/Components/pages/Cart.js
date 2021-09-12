import Basket from "../ChildrenComps/Basket";
import Bar from "./../ChildrenComps/bar"
import Footer from "./../ChildrenComps/Footer"
const Cart = () => {
    return ( 
        <div className="Cart">
      <Bar/>
     <Basket/>
     <Footer/>
        </div>
     );
}
 
export default Cart;