import NavBar from "../ChildrenComps/bar"
import ContactData from "../ChildrenComps/contactData"
import Header from "../ChildrenComps/Header"
import Footer from "./../ChildrenComps/Footer"
import bg from"./../../images/Shop.jpg"
const Contact = () => {
    return ( 
        <div className="contact">
   <NavBar/>
   <Header h1="Contact Us" h3="Share with us your opinion to reach excellence and quality"  style = {{backgroundImage : `url(${bg})` , textAlign:"center" , backgroundPosition:"center"}}/>
      <ContactData/>
      <Footer/>
   </div>
     );
}
 
export default Contact;