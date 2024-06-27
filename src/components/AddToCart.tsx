import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuantity, removeCartItem, setNullProduct } from "../Redux/UserSlice";
import { calculatePrice } from '../components/Common/CommanFunctions'
import { AddToCartProp } from "../Types/Types";
import "../assets/styles/Cart.css";


const AddToCart: React.FC<AddToCartProp> = ({ isCartOpen, handleCart, cart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleQuantity = (id: number, num: number) => {
    dispatch(updateQuantity({ id, num }));
  };
  const removeItem = (index: number) => {
    dispatch(removeCartItem(index));
  };

  const handleCheckout = () => {
    if (cart.length) {
      dispatch(setNullProduct(1))
      handleCart();
      navigate("/summary");
    }

  };
  return (
    <>
      <section className='cart'>
        <div className={`cart ${isCartOpen ? "cart-open" : ""}`}>
          <div className='cart-heading'>
            <h2>CART</h2>
            <i
              className='fa fa-times'
              onClick={handleCart}
              aria-hidden='true'
            ></i>
          </div>
          <div className='cart-content'>
            <p>Spend $28 more and get free shipping!</p>
            <div className='carts'>
              {/* yaha map lagega */}
              {cart
                ? cart?.map((item, index) => (
                  <div
                    className='cart-item'
                    key={index}
                    style={{
                      paddingBottom: "15px",
                      borderBottom: "1px solid #E2E2E2",
                    }}
                  >
                    <div className='cart-image'>
                      <img src={`/images/${item.product.image}`} alt='' />
                    </div>
                    <div className='cart-info'>
                      <h6>{item.product.name}</h6>
                      <sub>{item.product.price}$</sub>
                      <div className='manage'>
                        <div className='changeQuantity'>
                          <i
                            className='fa-solid fa-minus'
                            style={{
                              fontSize: "0.8rem",
                              cursor: "pointer",
                              color: item.quantity == 1 ? "grey" : "black",
                            }}
                            onClick={() => handleQuantity(item.product.id, 1)}
                          ></i>
                          <h6>{item.quantity}</h6>
                          <i
                            className='fa-solid fa-plus'
                            style={{
                              fontSize: "0.8rem",
                              cursor: "pointer",
                            }}
                            onClick={() => handleQuantity(item.product.id, 0)}
                          ></i>
                        </div>
                        <a
                          onClick={() => removeItem(index)}
                          style={{ cursor: "pointer" }}
                        >
                          REMOVE
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                : "No Product in cart"}
              {cart?.length ? (
                <div className='checkoutButton'>
                  <strong>Add Order Note</strong>
                  <h5>Shipping & taxes calculated at checkout</h5>
                  <button onClick={handleCheckout}>
                    Checkout &nbsp;&nbsp; &#9679; &nbsp;&nbsp;{" "}
                    {calculatePrice(cart)} $
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddToCart;
