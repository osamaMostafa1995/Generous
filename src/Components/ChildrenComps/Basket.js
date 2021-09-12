import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, emptyCart, removeProductFromBasket, subtractQuantity } from "./../../store/Action";
import { toast } from "react-toastify";
const Basket = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const basket = useSelector(state=>state.basket);
    const Edit =useDispatch();
    let sum = basket.reduce(function(prev, current) {
  return prev + +(current.NPrice*current.quantity)
}, 0);
console.log(sum)
useEffect(()=>{
  localStorage.setItem("cart" , JSON.stringify(basket))
},[basket])
    console.log(basket);
    const save =()=>{
      Edit(emptyCart())
      console.log("osama");
    }
    
    const Submit = (e) => {
       
        let mailExp = /^[a-z]*\@gmail\.com$/i;
        e.preventDefault();
        if (!name || !email || !Address ||!phone) {
          return toast.warning("Please fill in all inputs");
        }
    else if(!email.match(mailExp)){
        return toast.warning("write correct format");
    } else if(phone.length<11 ){
        return toast.warning("write correct phone ");
    }else{
    //   
  setPhone('');
  setName('');
  setEmail('');
  setAddress("")
          toast.success(`ok , Mr ${name} , Your Order Will Be In 2 Hours`);
         save();
    }
    }


    return ( 
        <div className="basket">
        <div className="container">
        <div className="row">
        {basket && basket.map(prod=>(
          <div className="col-md-4">
          <div class="card mb-3" key={prod.id}>

   
    <img
    src={
      require(`./../../images/json-images/${prod.img}`)
        .default
    }
    className="card-img-top"
  />

   
    
      <div class="card-body">
        <h5 class="card-title">{prod.name}</h5>
        <p className="card-text totle">
      TOTAL PRICE :  {prod.NPrice * prod.quantity}$
        </p>
        <p class="card-text sub"><button  className="btn btn-primary" onClick={()=>Edit(subtractQuantity(prod))}>-</button><span>{prod.quantity}</span> <button  className="btn btn-primary" onClick={()=>Edit(addQuantity(prod))}>+</button></p>
        <p class="card-text disc"> {prod.NPrice}$</p>
        
        <p className="card-text">
        <button className="btn remove" onClick ={()=>Edit(removeProductFromBasket(prod))}><i className="far fa-trash-alt"></i></button>
        </p>
    
    </div>
  </div>

          </div>
          ))}
        <div className="col-md-12">
       
        <table className="table">
  <tbody>
    <tr>
      <th scope="row"></th>
      <td colspan="2"><h5>Total Price: {sum}</h5></td>
      <td><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled={!basket || basket.length===0} className="btn " >Check Out</button></td>
    </tr>
  </tbody>
</table>




<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="form-box " onSubmit={Submit}>
    
              <div className="form-group">
                <input className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name ..."
                />
              </div>
              <div className="form-group">
                <input className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Gmail ..."
                />
              </div>
              <div className="form-group">
                <input className="input"
                  type="text"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Your Address ..."
                />
              </div>
              <div className="form-group">
                <input className="input"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your phone ..."
                />
              </div>
              <div className="form-group last">
                <input  className="btn-submit"  type="submit" value="CHECK OUT" />
              
              </div>
            </form>
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Basket;