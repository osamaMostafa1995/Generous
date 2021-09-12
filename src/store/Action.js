export function addProductToBasket(product) {
    return {
      payload: product,
      type: "ADD_PRODUCT_TO_BASKET",
    };
  }
  
  export function removeProductFromBasket(product) {
    return {
      payload: product,
      type: "REMOVE_PRODUCT_FROM_BASKET",
    };
  }
  export const subtractQuantity = product => async (dispatch) => {
    dispatch({
        type: "SUB_QUANTITY",
        payload:product,
    });
  };
  export const addQuantity = product =>async (dispatch) =>  {
    dispatch({
        type: "ADD_QUANTITY",
        payload:product,
    });
  };
  export const emptyCart = () => {
    return {
      type: "EMPTY_CART",
    };
  };