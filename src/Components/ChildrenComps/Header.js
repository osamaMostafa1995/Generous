const Header = ({style , h1 , h3 ,button}) => {
  return (
    <div className="header" style = {style} >
      <div className="container">
       <div className="row">
       <div className="col-md-7 ">
       <div className="header-content">
       <h1 class="header-content_heading">{h1}</h1>
       <h6 class="header-content_heading">{h3}</h6>
       {button}
       </div>
       </div>
       </div>
      </div>
    </div>
  );
};

export default Header;
