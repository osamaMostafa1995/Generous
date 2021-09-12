const initialState = {
  products: [
    {
      id: 1,
      name: "lime",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "1.jpg",
      quantity : 1,
    },
    {
      id: 2,
      name: "Lemon",
      LPrice: 16,
      NPrice: 12,
      descr:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "2.jpg",
      quantity : 1,
    },
    {
      id: 3,
      name: "Cherry",
      LPrice: 10,
      NPrice: 8,
      descr:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "3.jpg",
      quantity : 1,
    },
    {
      id: 4,
      name: "Celery Stick",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The Celery Stick, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "4.jpg",
      quantity : 1,
    },
    {
      id: 5,
      name: "Baby Spinach",
      LPrice: 10,
      NPrice: 8,
      descr:
        "The Baby Spinach, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "5.jpg",
      quantity : 1,
    },
    {
      id: 6,
      name: "Mix Vegetable Platter",
      LPrice: 10,
      NPrice: 7,
      descr:
        "The  Mix Vegetable Platter, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "6.jpg",
      quantity : 1,
    },
    {
      id: 7,
      name: "French Green Beans",
      LPrice: 16,
      NPrice: 8,
      descr:
        "The  French Green Beans, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "7.jpg",
      quantity : 1,
    },
    {
      id: 8,
      name: "Cucumber",
      LPrice: 10,
      NPrice: 7,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "8.jpg",
      quantity : 1,
    },
    {
      id: 9,
      name: "Green Beans",
      LPrice: 20,
      NPrice: 18,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "9.jpg",
      quantity : 1,
    },
    {
      id: 10,
      name: "French Green Beans",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "10.jpg",
      quantity : 1,
    },
    {
      id: 11,
      name: "Pepper",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "11.jpg",
      quantity : 1,
    },
    {
      id: 12,
      name: "Cucumber",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "12.jpg",
      quantity : 1,
    },
    {
      id: 13,
      name: "Blueberries",
      LPrice: 18,
      NPrice: 13.5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "13.jpg",
      quantity : 1,
    },
    {
      id: 14,
      name: "Fruits parts",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "14.jpg",
      quantity : 1,
    },
    {
      id: 15,
      name: "Peeled Baby Carrot",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "15.jpg",
      quantity : 1,
    },
    {
      id: 16,
      name: "Brussels Sprout",
      LPrice: 18,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "16.jpg",
      quantity : 1,
    },
    {
      id: 17,
      name: "Signature Salmon",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "17.jpg",
      quantity : 1,
    },
    {
      id: 18,
      name: "Cod Fillet",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "18.jpg",
      quantity : 1,
    },
    {
      id: 19,
      name: "Swordfish Fillet",
      LPrice: 25,
      NPrice: 20,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "19.jpg",
      quantity : 1,
    },
    {
      id: 20,
      name: "Cucumber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "20.jpg",
      quantity : 1,
    },
    {
      id: 21,
      name: "Halibut Fillet",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "21.jpg",
      quantity : 1,
    },
    {
      id: 22,
      name: "Cucumber",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "22.jpg",
      quantity : 1,
    },
    {
      id: 23,
      name: "Fresh Beef",
      LPrice: 10,
      NPrice: 9,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "23.jpg",
      quantity : 1,
    },
    {
      id: 24,
      name: "Cucumber",
      LPrice: 15,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "24.jpg",
      quantity : 1,
    },
    {
      id: 25,
      name: "Juli S Cheese Crackers",
      LPrice: 25,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "25.jpg",
      quantity : 1,
    },
    {
      id: 26,
      name: "Cucumber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "26.jpg",
      quantity : 1,
    },
    {
      id: 27,
      name: "Cuufer",
      LPrice: 15,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "27.jpg",
      quantity : 1,
    },
    {
      id: 28,
      name: "oil food",
      LPrice: 25,
      NPrice: 20,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "28.jpg",
      quantity : 1,
    },
    {
      id: 29,
      name: "oil cooking",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "29.jpg",
      quantity : 1,
    },
    {
      id: 30,
      name: "Cuc ber",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "30.jpg",
      quantity : 1,
    },
    {
      id: 30,
      name: "Cucum Citrus limonber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "30.jpg",
      quantity : 1,
    },
    {
      id: 32,
      name: "Cu umber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "32.jpg",
      quantity : 1,
    },
    {
      id: 33,
      name: "Cucum ober",
      LPrice: 10,
      NPrice: 8,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "33.jpg",
      quantity : 1,
    },
    {
      id: 34,
      name: "cook umber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "34.jpg",
      quantity : 1,
    },
    {
      id: 35,
      name: "cook oli  ",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "35.jpg",
      quantity : 1,
    },
    {
      id: 36,
      name: "Cucum oofr",
      LPrice: 20,
      NPrice: 15,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "36.jpg",
      quantity : 1,
    },
    {
      id: 37,
      name: "Cucu ber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "37.jpg",
      quantity : 1,
    },
    {
      id: 38,
      name: "Woerd umber",
      LPrice: 10,
      NPrice: 5,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "37.jpg",
      quantity : 1,
    },
    {
      id: 39,
      name: "Cuc mber",
      LPrice: 15,
      NPrice: 12,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "39.jpg",
      quantity : 1,
    },
    {
      id: 40,
      name: "Cuc oof ber",
      LPrice: 20,
      NPrice: 15,
      descr:
        "The  French Cucumber, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      img: "40.jpg",
      quantity : 1,
    },
  ],
  basket: JSON.parse(localStorage.getItem("cart")) || [],
};

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":
      const product = state.products.map((prod) => prod.id === action.payload);
      const inCart = state.basket.find((product) =>
        product.id === action.payload.id ? true : false
      );
      return {
        ...state,
        basket: inCart
          ? state.basket.map(
              (product) =>
                product.id === action.payload.id
                  ? {
                      ...action.payload,
                      quantity: (action.payload.quantity =
                        action.payload.quantity + 1),
                    }
                  : product,
              localStorage.setItem("cart", JSON.stringify(state.basket))
            )
          : [...state.basket, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_PRODUCT_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter(
          (product) => product.id !== action.payload.id,
          localStorage.setItem("cart", JSON.stringify(state.basket))
        ),
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        basket: state.basket.map(
          (product) =>
            product.id === action.payload.id
              ? {
                  ...action.payload,
                  quantity: (action.payload.quantity =
                    action.payload.quantity + 1),
                }
              : product,
          localStorage.setItem("cart", JSON.stringify(state.basket))
        ),
      };
    case "SUB_QUANTITY":
      return {
        ...state,
        basket: state.basket.map(
          (product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,

          localStorage.setItem("cart", JSON.stringify(state.basket))
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}
export default basketReducer;
