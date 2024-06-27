import { Cart } from "../Types/Types";
import * as React from 'react'
const RenderBuyNow: React.FC<{ item: Cart }> = ({ item }) => {
  return <>

    <div className='pro-cart'>
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

  </>
}
export default RenderBuyNow;