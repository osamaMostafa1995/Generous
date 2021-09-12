const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row our-features-box">
          <ul>
            <li>
              {" "}
              <div className="feature-box klb-footer-box">
                {" "}
                <i className="fa fa-truck"></i>{" "}
                <div className="content">FREE SHIPPING on order over $99</div>
              </div>
            </li>
            <li>
              {" "}
              <div className="feature-box klb-footer-box">
                {" "}
                <i className="fa fa-phone"></i>{" "}
                <div className="content">
                  HAVE A QUESTIONS? <a href="10800 7890000">+10800 789 0000</a>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="feature-box klb-footer-box">
                {" "}
                <i class="fas fa-dollar-sign"></i>{" "}
                <div className="content">100% MONEY BACK GUARANTEE</div>
              </div>
            </li>
            <li>
              {" "}
              <div className="feature-box klb-footer-box">
                {" "}
                <i className="fa fa-briefcase"></i>{" "}
                <div className="content">30 DAYS RETURN SERVICE</div>
              </div>
            </li>
            <li className="last">
              {" "}
              <div className="feature-box">
                {" "}
                <a href="#">
              
                  <i className="fab fa-apple"></i> Download
                </a>{" "}
                <a href="#">
                <i className="fab fa-android"></i> Download
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
