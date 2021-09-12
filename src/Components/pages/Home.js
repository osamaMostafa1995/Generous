import Header from "../ChildrenComps/Header";
import Bar from "./../ChildrenComps/bar";
import bg from "./../../images/hero-home-1-img-1.webp";
import { Link } from "react-router-dom";
import Bannar from "../ChildrenComps/Bannar";
import Choose from "../ChildrenComps/ChooseUs";
import Partners from "./../ChildrenComps/Partners"
import Footer from "../ChildrenComps/Footer";
import Most from "../ChildrenComps/MostProducts";
const Home = () => {
  return (
    <div className="Home">
      <Bar />
      <Header
        h1="Organic Food & Grocery Market"
        h3="Grocery market agriculture organic food shop"
        button={<button> <Link to="/blog">Shop Now</Link></button>}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <Bannar/>
      <Most/>
      <Choose/>
      <Partners/>
      <Footer/>
    </div>
  );
};

export default Home;
