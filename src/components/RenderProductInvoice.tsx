import { Cart } from "../Types/Types";

const RenderCartInvoice: React.FC<{ item: Cart }> = ({ item }) => {
  return (
    <>
      {
        <tr className='item'>
          <td>{item.product.name}</td>
          <td>${item.product.price}</td>
          <td>{item.quantity}</td>
          <td>${item.product.price * item.quantity}</td>
        </tr>
      }
    </>
  );
}
export default RenderCartInvoice;
