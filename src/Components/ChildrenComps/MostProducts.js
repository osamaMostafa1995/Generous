import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToBasket } from "../../store/Action";
import Odal from "./Odal";

const Most = () => {
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

  let home3 = paginate(products, 31, 40);

  return (
    <div className="most">
      <div className="container">
        <div className="row">
          <div className="top">
            <h2>The Most Sold Products</h2>
            <p>SO YOU GET TO KNOW ME BETTER</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className=" tab-content" id="myTabContent">
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
                              <i
                                onClick={() => add(addProductToBasket(product))}
                                className="fas fa-shopping-cart"
                              ></i>
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
  );
};

export default Most;
