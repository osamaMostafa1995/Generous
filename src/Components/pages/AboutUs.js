import About from "../ChildrenComps/AboutForm"
import Footer from "../ChildrenComps/Footer";
import Header from "../ChildrenComps/Header";
import Partner from "../ChildrenComps/Partners"
import bg from"./../../images/About-background-3.jpg"
import Bar from "../ChildrenComps/bar";
import Choose from "../ChildrenComps/ChooseUs";

const AboutUs= () => {
    return ( 
        <div className="AboutUs">
        <Bar/>
        <Header h1="About Us" h3="Good prices. Good vibes. Good things."  style = {{backgroundImage : `url(${bg})` , textAlign:"center"}}/>
<About />
       <Choose/>
        <Partner/>
        <Footer/>
        </div>
     );
}
 
export default AboutUs;