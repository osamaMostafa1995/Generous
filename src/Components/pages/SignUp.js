import { useState , useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const SignUp= () => {
    const[Emails , setEmails] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:3000/emails")
        .then((response) => {
              setEmails(response.data);
            });
            },[Emails])
    const Submit = (e) => {
        let letters = /^[A-Za-z]+$/;
        let mailExp = /^[a-z]*\@gmail\.com$/i;
        e.preventDefault();
        if (!name || !email || !password) {
          return toast.warning("Please fill in all inputs");
        }
    else if(!name.match(letters)){
        return toast.warning("write letter only");
    } else if(!email.match(mailExp)){
        return toast.warning("write correct format");
    } else if(password.length<8){
        return toast.warning("write strong password");
    }else{
    //   
    axios
    .post("http://localhost:3000/emails",  {
        id:Emails.length+1,
                name,
                email,
                password,
              })
    .then((response) => {
      setEmails(response.data);
    });
          toast.success("Email add successfully")
          history.push("/home");
    }
      
       
       
      
      };
    return ( 
        <div className="SignUp">
        <div className="overlay"></div>
      <div className="container">
      <div className="row">
      <div className="col-md-6">
      <form className="form-box " onSubmit={Submit}>
      <div className="title">
    <h6>WELCOME TO </h6>
     <h1> gene<span><i class="fab fa-envira"></i></span>rous</h1>
    </div>
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password ..."
                />
              </div>
              <div className="form-group last">
                <input  className="btn-submit"  type="submit" value="Add Contact" />
              
              </div>
            </form>
      </div>
      </div>
      </div>
        </div>
     );
}
 
export default SignUp;