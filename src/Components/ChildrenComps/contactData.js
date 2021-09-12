import { useState , useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import icon1 from "./../../images/contact-icon1.webp"
import icon2 from "./../../images/contact-icon2.webp"
import icon3 from "./../../images/contact-icon3.webp"
const ContactData = () => {
    const[Emails , setEmails] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [massage, setMassage] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/emails")
        .then((response) => {
              setEmails(response.data);
            });
            },[Emails])
            const Submit = (e) => {
       
        let mailExp = /^[a-z]*\@gmail\.com$/i;
        e.preventDefault();
        if (!name || !email || !subject || !massage) {
          return toast.warning("Please fill in all inputs");
        }
   else if(!email.match(mailExp)){
        return toast.warning("write correct format");
    }else{
    //   
    axios
    .post("http://localhost:3000/emails",  {
        id:Emails.length+1,
                name,
                email,
                subject,
                massage
              })
    .then((response) => {
      setEmails(response.data);
    });
          toast.success("Email add successfully")
         setMassage("");
          setName("");
          setSubject("");
          setEmail("")
         
    }
      
       
       
      
      };
  return (
    <div className="contact-data">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 mb-xs-35">
            <div className="contact-page-side-content">
              <h3 className="contact-page-title">Contact Us</h3>

              <div className="single-contact-block">
                <h4>
                  <img src={icon1} alt="" />{" "}
                  Address
                </h4>
                <p>123 Main Street, Alexandria , Egypt</p>
                <p>456 Main Street, Cairo , Egypt</p>
              </div>

              <div className="single-contact-block">
                <h4>
                  <img src={icon2}alt="" />{" "}
                  Phone
                </h4>
                <p>Mobile: (08) 123 456 789</p>
                <p>Hotline: 1009 678 456</p>
              </div>

              <div className="single-contact-block">
                <h4>
                  <img src={icon3} alt="" />{" "}
                  Email
                </h4>
                <p>yourmail@domain.com</p>
                <p>support@hastech.company</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 pl-100 pl-xs-15">
            <div className="contact-form-content">
              <h3 className="contact-page-title">Tell Us Your Message</h3>

              <div className="contact-form">
                <form
                  id="contact-form"
                  onSubmit={Submit}
                >
                  <div className="form-group">
                    <label>
                      Your Name <span class="required">*</span>
                    </label>
                    <input
                    className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name ..."
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Your Email <span class="required">*</span>
                    </label>
                    <input
                    className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Gmail ..."
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                    className="input"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter Your subject ..."
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                    value={massage}
                    onChange={(e) => setMassage(e.target.value)}
                    placeholder ="Enter Your massage ..."
                    className="testarea"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="submit"
                      id="submit"
                      className="contact-form-btn"
                      name="submit"
                    >
                      send
                    </button>
                  </div>
                </form>
              </div>
              <p class="form-messege pt-10 pb-10 mt-10 mb-10"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
