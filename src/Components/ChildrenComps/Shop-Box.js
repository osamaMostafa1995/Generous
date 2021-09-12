import { useEffect,  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToBasket } from "../../store/Action";
import Odal from "./../ChildrenComps/Odal";
import Features from ".//Features";

const ShopBox = () => {
  

  const products = useSelector((state) => state.products);
  const basket = useSelector((state) => state.basket);
  const add = useDispatch();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(basket));
  }, [basket]);
  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice(page_size, page_number);
  }
  let home = paginate(products, 0, 15);
  let home1 = paginate(products, 16, 25);
  let home2 = paginate(products, 25, 34);
  let home3 = paginate(products, 31, 40);

  return (
    <div className="most shop-box">
      <div className="container">
        <div className="row">
          <div className="col-md-3 aside ">
          <div className="sticky-top">
          <h1>categories</h1>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
              
             
               fruits && vegetables
                
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
               
               
                meat && fish
              
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
               
               
                food cooking
               
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="d-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#d"
                  type="button"
                  role="tab"
                  aria-controls="d"
                  aria-selected="false"
                >
               fast Food
                
                </a>
              </li>
            </ul>
            <Features/>
          </div>
          </div>
          <div className="col-md-9">
            <div className=" tab-content" id="myTabContent">
              <div
                className=" tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {home &&
                    home.map((product) => (
                      <div className="col-md-4">
                     
                      <div className="product card" key={product.id}>
                      <div className="img-box">
                        <img
                          src={
                            require(`./../../images/json-images/${product.img}`)
                              .default
                          }
                          className="card-img-top"
                        />
                        <div class="overlay">
                          <div class="text">
                            <span>
                            <Odal
                            name={product.name}
                            LPrice={product.LPrice}
                            NPrice={product.NPrice}
                            Discribe={product.descr}
                            img={product.img}
                          />
                            </span>
                            <span>
                              <i onClick={() => add(addProductToBasket(product))} className="fas fa-shopping-cart"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <span>{product.NPrice} $</span>{" "}
                        <span className="line">{product.LPrice} $</span>{" "}
                      </p>
                     
                     
                      <span className="disc">
                        {((product.LPrice - product.NPrice) * 100) /
                          product.LPrice}
                        %
                      </span>
                    </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  {home1 &&
                    home1.map((product) => (
                      <div className="col-md-4">
                      <div className="product card" key={product.id}>
                      <div className="img-box">
                        <img
                          src={
                            require(`./../../images/json-images/${product.img}`)
                              .default
                          }
                          className="card-img-top"
                        />
                        <div class="overlay">
                          <div class="text">
                            <span>
                            <Odal
                            name={product.name}
                            LPrice={product.LPrice}
                            NPrice={product.NPrice}
                            Discribe={product.descr}
                            img={product.img}
                          />
                            </span>
                            <span>
                              <i onClick={() => add(addProductToBasket(product))} className="fas fa-shopping-cart"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <span>{product.NPrice} $</span>{" "}
                        <span className="line">{product.LPrice} $</span>{" "}
                      </p>
                     
                     
                      <span className="disc">
                        {((product.LPrice - product.NPrice) * 100) /
                          product.LPrice}
                        %
                      </span>
                    </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {" "}
                <div className="row">
                  {home2 &&
                    home2.map((product) => (
                      <div className="col-md-4">
                      <div className="product card" key={product.id}>
                      <div className="img-box">
                        <img
                          src={
                            require(`./../../images/json-images/${product.img}`)
                              .default
                          }
                          className="card-img-top"
                        />
                        <div class="overlay">
                          <div class="text">
                            <span>
                            <Odal
                            name={product.name}
                            LPrice={product.LPrice}
                            NPrice={product.NPrice}
                            Discribe={product.descr}
                            img={product.img}
                          />
                            </span>
                            <span>
                              <i onClick={() => add(addProductToBasket(product))} className="fas fa-shopping-cart"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <span>{product.NPrice} $</span>{" "}
                        <span className="line">{product.LPrice} $</span>{" "}
                      </p>
                     
                     
                      <span className="disc">
                        {((product.LPrice - product.NPrice) * 100) /
                          product.LPrice}
                        %
                      </span>
                    </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="d"
                role="tabpanel"
                aria-labelledby="d-tab"
              >
                {" "}
                <div className="row">
                  {home3 &&
                    home3.map((product) => (
                      <div className="col-md-4">
                      <div className="product card" key={product.id}>
                      <div className="img-box">
                        <img
                          src={
                            require(`./../../images/json-images/${product.img}`)
                              .default
                          }
                          className="card-img-top"
                        />
                        <div class="overlay">
                          <div class="text">
                            <span>
                            <Odal
                            name={product.name}
                            LPrice={product.LPrice}
                            NPrice={product.NPrice}
                            Discribe={product.descr}
                            img={product.img}
                          />
                            </span>
                            <span>
                              <i onClick={() => add(addProductToBasket(product))} className="fas fa-shopping-cart"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <span>{product.NPrice} $</span>{" "}
                        <span className="line">{product.LPrice} $</span>{" "}
                      </p>
                     
                     
                      <span className="disc">
                        {((product.LPrice - product.NPrice) * 100) /
                          product.LPrice}
                        %
                      </span>
                    </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBox;
