import { Cart } from "../Types/Types";

const RenderCart: React.FC<{ cart: Cart[] }> = ({ cart }) => {
  return <>
    {cart.map((item, index) => (
      <div className='pro-cart' key={index}>
        <div className='pro-image'>
          <img src={`/images/${item.product.image}`} alt='' />
        </div>
        <div className='pro-content'>
          <h6>{item.product.name}</h6>
          <p>{item.product.price} $</p>
          <p>Deliverd by k-beauty</p>
          <h6>Quantity : {item.quantity}</h6>
          <strong>
            Total Price : {item.product.price * item.quantity} $
          </strong>
        </div>
      </div>
    ))}
  </>
}
export default RenderCart;