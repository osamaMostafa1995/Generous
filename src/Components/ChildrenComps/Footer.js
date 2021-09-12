import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribes, setSubscribes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/subscribes").then((response) => {
      setSubscribes(response.data);
      console.log(subscribes);
    });
  }, [subscribes]);

  const Submit = (e) => {
    let mailExp = /^[a-z]*\@gmail\.com$/i;
    e.preventDefault();
    if (!email) {
      return toast.warning("Please fill in all inputs");
    } else if (!email.match(mailExp)) {
      return toast.warning("write correct format");
    } else {
      //
      axios
        .post("http://localhost:3000/subscribes", {
          id: subscribes.length + 1,
          email,
        })
        .then((response) => {
          setSubscribes(response.data);
          setEmail("");
        });

      toast.success("Email add successfully");
    }
  };
  return (
    <div className="footer">
      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>
                {" "}
                <span>
                  <i className="fas fa-envelope-open-text"></i>
                </span>{" "}
                SUBSCRIBE FOR THE NEWSLETTER
              </h5>
            </div>
            <div className="col-md-6">
              <form className="search-box" onSubmit={Submit}>
                <input
                  type="text"
                  className="search-bar"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Share With Us ...."
                  value={email}
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <Link to="/home" target="_blank" className="logo">
                gene
                <span>
                  <i class="fab fa-envira"></i>
                </span>
                rous
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, consequuntur? Rem exercitationem modi corrupti, ab
                voluptate veniam quaerat id culpa, sequi blanditiis incidunt
                rerum nulla corporis, quidem dolores nostrum dolor.
              </p>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <div className="klbfooterwidget widget_nav_menu">
                  <h4>STYLE ADVISOR</h4>
                  <div className="menu-information-container">
                    <ul id="menu-information" className="menu">
                      <li>
                        <Link to="/home">Your Account</Link>
                      </li>{" "}
                      <li>
                        <Link to="/AboutUs">Information</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Addresses</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Discount</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Order Tracking</Link>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-column">
                <div className="klbfooterwidget widget_nav_menu">
                  <h4>INFORMATION</h4>
                  <div className="menu-information-container">
                    <ul id="menu-information" className="menu">
                      <li>
                        <Link to="/home">Home</Link>
                      </li>{" "}
                      <li>
                        <Link to="/AboutUs">Our Farm</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Shop</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>{" "}
                      <li>
                        <Link to="/Blog">Contact</Link>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <div className="klbfooterwidget widget_contact_box">
                  <h4>Contact Us</h4>
                  <div className="contacts-info">
                    <div className="phone-footer">
                      <i className="fa fa-map-marker"></i>
                      <span>
                       CAIRO, 789 Main rd,
                        <br /> ALEXANDRIA, CA 12345 USA
                      </span>
                    </div>
                    <div className="phone-footer">
                      <i className="fa fa-phone"></i>
                      <span>+ 888 456-7890</span>
                    </div>
                    <div className="phone-footer">
                      <i className="fa fa-envelope"></i>
                      <span>GENEROUS@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <div className="copy text-center">
	  <div className="container">
<p>© 2021 <span>GENEROUS</span> . All Rights Reserved.</p>
	  </div>
	  </div>
    </div>
  );
};

export default Footer;
