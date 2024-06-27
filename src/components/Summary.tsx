import { useNavigate } from "react-router-dom";
import { calculatePrice } from "../components/Common/CommanFunctions";
import { SummaryProp } from "../Types/Types";
import RenderBuyNow from "./BuyNow";
import RenderCart from "./RenderCart";
const Summary: React.FC<SummaryProp> = ({ user, buyNowProduct }) => {
  const totalPrice =
    buyNowProduct
      ? buyNowProduct.quantity * buyNowProduct.product.price
      : calculatePrice(user.cart || []);
  const deliveryPrice = 0.0;
  const navigate = useNavigate();
  return (
    <>
      <section className='order'>
        <div className='container'>
          <div className='order-div'>
            <div className='cart-summary'>
              <div className='delivery'>
                <div className='dilevery-heading'>
                  <h6>1. Delivery Address</h6>
                </div>
                <div className='dilevery-address'>
                  <p>Street : {user.street}</p>
                  <p>City : {user.city}</p>
                </div>
              </div>
              <div className='payment'>
                <div className='dilevery-heading'>
                  <h6>2. Payment Method</h6>
                </div>
                <div className='dilevery-address'>
                  <p>Dummy</p>
                  {/* <p></p> */}
                </div>
              </div>
              <div className='review-items'>
                <div className='review-heading'>
                  <h6>3. Review items</h6>
                </div>
                <div className='review-products'>
                  {typeof buyNowProduct == "object" ? (
                    <RenderBuyNow item={buyNowProduct} />
                  ) : (
                    <RenderCart cart={user.cart || []} />
                  )}
                </div>
              </div>
            </div>

            <div className='order-summary'>
              <h5>Order Summary</h5>
              <div className='breakdown'>
                <div className='order-price-breakdown'>
                  <span>Items : </span>
                  <span>{totalPrice} $</span>
                </div>
                <div className='order-price-breakdown'>
                  <span>Delivery : </span>
                  <span>+{deliveryPrice}$</span>
                </div>
                <div className='order-price-breakdown'>
                  <span>Discount : </span>
                  <span>-{0}$</span>
                </div>
                <div className='order-price-breakdown'>
                  <span>Total : </span>
                  <span>{totalPrice + deliveryPrice}$</span>
                </div>
              </div>
              <div className='order-price-breakdown'>
                <h4> Order Total : </h4>
                <h4>{totalPrice + deliveryPrice}$</h4>
              </div>
              <div className='your-savings'>
                <h5>Your Savings : 2$(100%)</h5>
                <ul>
                  <li>Promotion Applied</li>
                  <li>Promotion Applied</li>
                  <li>Promotion Applied</li>
                  <li>Promotion Applied</li>
                  <li>Item Discount</li>
                </ul>
              </div>
              <div className='placeButton'>
                <button
                  onClick={() => navigate("/invoice")}
                  className='belowSmallScreen'
                >
                  Place Order&nbsp;&nbsp; &#9679; &nbsp;&nbsp; {totalPrice} $
                </button>
              </div>
              <p>
                By placing your order , you agreed to K-Beauty{" "}
                <a href='' style={{ color: "blue" }}>
                  privacy notice
                </a>{" "}
                and{" "}
                <a href='' style={{ color: "blue" }}>
                  conditons of use
                </a>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Summary;
