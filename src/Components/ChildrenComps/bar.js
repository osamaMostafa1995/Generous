import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const basket =  useSelector(state=>state.basket);
  let sum = basket.reduce(function(prev, current) {
    return prev + +(current.NPrice*current.quantity)
  }, 0);
  window.onscroll = ()=>{
    if(window.scrollY>150){
     document.querySelector(".menu-bottom").classList.add("active");
     document.querySelector(".icons").classList.remove("show")
    }else{
      document.querySelector(".menu-bottom").classList.remove("active");
      document.querySelector(".icons").classList.add("show")
    }
  }
 
  
 
  return (
    <div className="bar">
      <div className="main-menu ">
      
      <div className="menu-top">
      <div class="header-contact d-flex">
								<div className="phone-icon">
								<i className="fas fa-headphones-alt"></i>
								</div>
								<div className="phone-number">
									Phone: <span class="number">1-888-123-456-89</span>
								</div>
							</div>
    <div className="logo-contact">
    <Link to ="/home" target='_blank' className="logo">
    gene<span><i class="fab fa-envira"></i></span>rous
    </Link>
    </div>
    <div class="shopping-cart" id="shopping-cart">
								<Link target="_blank" to ="/cart" >
									<div className="cart-icon d-inline-block">
									<i className="fas fa-shopping-basket"></i>
									</div>
									<div className="cart-info d-inline-block">
										<p>Shopping Cart
											<span>
											{basket.length}items 
											</span>
										</p>
									</div>
								</Link>
							</div>
      </div>
      <div className="menu-bottom">
     

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel"> <Link to ="/home"  target="_blank"className="logo">
          gene<span><i class="fab fa-envira"></i></span>rous
          </Link></h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <nav className="avbar">
       
      <Link  target="_blank" to = "/home">Home</Link>
      <Link target="_blank"  to = "/AboutUs">Our Farm</Link>
      <Link  target="_blank" to = "/Shop">Shop</Link>
      <Link  target="_blank" to = "/Blog">Blog</Link>
      <Link target="_blank"  to = "/Contact">Contact</Link>
        </nav>
        </div>
      </div>
      <i id="menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="fas fa-bars"></i>
      <nav className="navbar">
      <Link  target="_blank" to = "/home">Home</Link>
     <Link target="_blank"  to = "/AboutUs">Our Farm</Link>
     <Link  target="_blank" to = "/Shop">Shop</Link>
     <Link  target="_blank" to = "/Blog">Blog</Link>
     <Link target="_blank"  to = "/Contact">Contact</Link>
      </nav>
      <div className="icons show">
      <Link title = "GO TO CART SECTION"  target="_blank" to = "/cart"><i class="fas fa-shopping-basket"> </i>
      <span>({basket.length})</span>
      </Link>
      </div>
      </div>
     
     </div>
      </div>



  );
};

export default NavBar;
