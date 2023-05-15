import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQYT,
  setIncreaseItemQYT,
  setRemoveItemFromCart,
} from "../../app/CartSlice";

function CartItem({ item: { id, title, text, img, price, cartQuantity } }) {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({ id, title, text, img, price, cartQuantity })
    );
  };

  const onIncreaseItem = () => {
    dispatch(setIncreaseItemQYT({ id, price }));
  };

  const onDecreaseItem = () => {
    dispatch(setDecreaseItemQYT({ id }));
  };

  return (
    <>
      <div className="cart-item-div">
        {/* left side */}
        <div className="cart-item-div__img-side">
          <img src={img} alt="item-img" />
          <div className="cart-item-div__img-side__title-btns">
            <h4>{title}</h4>
            <p>{text}</p>
            <span>
              <button onClick={onDecreaseItem}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <button>{cartQuantity}</button>
              <button onClick={onIncreaseItem}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </span>
          </div>
        </div>
        {/* right side */}
        <div className="cart-item-div__price-side">
          <p>{price}$</p>
          <i onClick={onRemoveItem} className="fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
}

export default CartItem;
