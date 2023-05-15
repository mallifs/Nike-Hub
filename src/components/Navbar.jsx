import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalQuantity, setOpenCart } from "../app/CartSlice";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(cartTotalQuantity);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);
  return (
    <>
      <nav className={`${navState ? "navFixed" : ""}`}>
        <div className="container">
          <div className={`nav ${navState ? "nav-black" : ""}`}>
            <img
              src={Logo}
              alt="logo"
              onClick={() =>
                window.scrollTo({ top: (0, 0), behavior: "smooth" })
              }
            />

            <div className="nav__icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart"></i>
              <i
                onClick={onCartToggle}
                className="fa-solid fa-bag-shopping"
              ></i>
              <p className="cart-number">{totalQuantity}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
