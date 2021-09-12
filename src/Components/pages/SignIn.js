import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [Emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3000/emails").then((response) => {
      setEmails(response.data);
    });
  }, [Emails]);
  const Submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.warning("Please fill in all inputs");
    } else if (
      Emails.some(
        (Email) => Email.email === email && Email.password === password
      )
    ) {
      return toast.success("Welcome In Our Green Farm "), history.push("/home");
    } else {
      return (
        toast.error("Your Account Not Exists"), setEmail(""), setPassword("")
      );
    }
  };
  console.log(Emails);
  return (
    <div className="SignIn">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <form className="form-box " onSubmit={Submit}>
              <div className="title">
                <h6>WELCOME TO </h6>
                <h1>  gene<span><i class="fab fa-envira"></i></span>rous</h1>
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Gmail ..."
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password ..."
                />
              </div>
              <div className="form-group last">
                <input className="btn-submit" type="submit" value="Log In" />
              </div>
              <div className="signUp-btn text-center">
                <span>
                  Create New Account ?<Link to="/signup">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
