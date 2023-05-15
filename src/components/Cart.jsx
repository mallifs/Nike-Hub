import { useDispatch, useSelector } from "react-redux";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import {
  cartTotalAmount,
  cartTotalQuantity,
  selectCartItems,
  selectCartState,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(cartTotalAmount);
  const totalQuantity = useSelector(cartTotalQuantity);

  // console.log(cartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      {/* overlay */}
      <div
        className={`overlay ${ifCartState ? "open-overlay" : "close-overlay"}`}
      ></div>

      <div className={`cart-div ${ifCartState ? "cart-open" : "cart-closed"}`}>
        <CartCount totalQuantity={totalQuantity} onCartToggle={onCartToggle} />

        {cartItems.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="cart-scroll">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          </div>
        )}

        <div className="checkout-div">
          <div className="checkout-div__subtotal">
            <h4>Subtotal</h4>
            <p>{totalAmount}$</p>
          </div>
          <div className="checkout-div__btn">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
