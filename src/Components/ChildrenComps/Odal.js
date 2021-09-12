import { useState } from "react";
import { Modal } from "react-bootstrap";
const Odal = (props) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="odal">
      {values.map((v, idx) => (
        <span key={idx} className="disc1" onClick={() => handleShow(v)}>
          <i class="far fa-eye"></i>
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </span>
      ))}
      <Modal
        show={show}
        className="modal"
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h1>{props.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
          <div className="lista">
            <div className="container">
              <div className="row">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="img-contain">
                        <img
                          src={
                            require(`./../../images/json-images/${props.img}`)
                              .default
                          }
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <span className="disc">
                        {((props.LPrice - props.NPrice) * 100) /
                          props.LPrice}
                        %
                      </span>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="product-name">
                          <h1 className="product_title entry-title">
                            {" "}
                            {props.name}
                          </h1>
                        </div>

                        <div className="woocommerce-product-rating">
                          <div className="woocommerce-review-link" rel="nofollow">
                            (<span className="count">1</span> customer review)
                          </div>
                        </div>
                        <p className="stock in-stock">32 in stock</p>
                        <p className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                               {props.LPrice}.00
                              </bdi>
                            </span>
                          </del>{" "}
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                               {props.NPrice}.00
                              </bdi>
                            </span>
                          </ins>
                        </p>
                        <div className="woocommerce-product-details__short-description">
                          {" "}
                          <p>
                            {props.Discribe}
                            {props.Discribe}
                          </p>
                        </div>
                        <div className="social social-container">
                          {" "}
                          <ul className="link">
                            {" "}
                            <li className="fb">
                            <i className="fab fa-facebook-f"></i>
                            </li> 
                            <li class="tw">
                            <i className="fab fa-twitter"></i>
                            </li>{" "}
                            <li className="googleplus">
                            <i className="fab fa-google-plus-g"></i>
                            </li>{" "}
                            <li className="pintrest">
                            <i className="fab fa-pinterest-p"></i>
                            </li>{" "}
                            <li className="linkedin">
                            <i class="fab fa-linkedin-in"></i>
                            </li>{" "}
                          </ul>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Odal;
