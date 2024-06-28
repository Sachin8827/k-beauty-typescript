import { useSelector } from 'react-redux'
import { calculatePrice } from './common/CommanFunctions'
import { RootState } from '../Redux/Store'
import { User } from '../Types/Types'
import logo from '../../public/images/logo.png'
import RenderCartInvoice from './RenderCartInvoice'
import RenderProductInvoice from './RenderProductInvoice'
const GenerateInvoice: React.FC<{ user: User }> = ({ user }) => {
    const { buyNowProduct } = useSelector((state: RootState) => state.user)
    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    let newDate = currentDate.toLocaleDateString();
    return <>
        <table>
            <tr className="top">
                <td colSpan={4}>
                    <table>
                        <tr>
                            <td className="title">
                                <img src={logo} alt="Company logo" style={{ width: "100%", maxWidth: "220px", imageRendering: "pixelated" }} />
                            </td>

                            <td style={{ textAlign: 'right' }}>
                                Invoice #: 123<br />
                                Created: {new Date().toLocaleDateString()}<br />
                                Due: {newDate}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className="information">
                <td colSpan={4}>
                    <table>
                        <tr style={{ borderBottom: '1px solid #555' }}>
                            <td>
                                {user.street}<br />
                                {user.city}<br />
                                Sunnyville, TX 12345
                            </td>

                            <td style={{ textAlign: 'right' }}>
                                Acme Corp.<br />
                                {user.firstName + " " + (user.lastName ? " " + user.lastName : "")}<br />
                                {user.email}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className="invoice-heading">
                <th>Payment Method</th>
                <th colSpan={2}>Check #</th>
                <th></th>
                <th></th>
            </tr>

            <tr className="invoice-details">
                <td>Dummy</td>
                <td>1000</td>
                <td></td>
                <td></td>
            </tr>

            <tr className="invoice-heading">
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {typeof buyNowProduct == 'object' ? (Object.keys(buyNowProduct).length ? <RenderProductInvoice item={buyNowProduct} /> : <RenderCartInvoice user={user} />) : <RenderCartInvoice user={user} />}

            <tr className="total">
                <td></td>
                <td></td>
                <td></td>
                <td>Total: ${typeof buyNowProduct == 'object' ? buyNowProduct.quantity * buyNowProduct.product.price : calculatePrice(user.cart || [])}</td>
            </tr>
        </table>

    </>
}
export default GenerateInvoice