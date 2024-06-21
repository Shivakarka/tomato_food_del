import { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    deleteItemFromCart,
    getTotalCartAmount,
    addToCart,
    decreaseItemFromCart,
  } = useContext(StoreContext)!;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <br />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="food-item-counter">
                  <img
                    src={assets.remove_icon_red}
                    alt="item remove icon"
                    onClick={() => decreaseItemFromCart(item._id)}
                  />
                  <p>{cartItems[item._id]}</p>
                  <img
                    src={assets.add_icon_green}
                    alt="item add icon"
                    onClick={() => addToCart(item._id)}
                  />
                </div>
                <p>${item.price * cartItems[item._id]}</p>
                <p
                  className="cross"
                  onClick={() => deleteItemFromCart(item._id)}
                >
                  x
                </p>
              </div>
            );
          }

          return null;
        })}
      </div>
      <hr />
      <div className="card-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
