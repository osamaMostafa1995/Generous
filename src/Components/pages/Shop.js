import Header from "../ChildrenComps/Header"
import Bar from "./../ChildrenComps/bar"
import bg from"./../../images/contact.jpg"
import ShopBox from "../ChildrenComps/Shop-Box";
import Footer from "./../ChildrenComps/Footer"

const Shop = () => {
    return ( 
        <div className="Shop">
       <Bar/>
       <Header h1="Shop Now" h3="Get Your Products delivered at your doorsteps all day everyday"  style = {{backgroundImage : `url(${bg})` , textAlign:"center"}}/>
     <ShopBox/>
   
     <Footer/>
       </div>
     );
}
 
export default Shop;