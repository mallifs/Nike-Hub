import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";

function Item({ id, ifExists, title, text, img, btn, rating, price }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { id, title, text, img, price };

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div className={`item-div ${ifExists ? "item-div-popular" : ""} `}>
        {/* text */}
        <div className="item-div__title">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="item-div__price-star">
            <p>{price}$</p>
            <span>
              <i className="fa-solid fa-star"></i> {rating}
            </span>
          </div>
          <div className="item-div__bag-buy">
            <button onClick={() => addToCart()}>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
            <button
              onClick={() => {
                addToCart();
                onCartToggle();
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        {/* img */}
        <div className="item-div__item-img">
          <img src={img} alt="shoe-img" />
        </div>
      </div>
    </>
  );
}

export default Item;
