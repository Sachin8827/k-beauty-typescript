import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Summary from "../components/Summary";
import "../assets/styles/Summary.css";
const OrderSummary: React.FC = () => {
  const { user, buyNowProduct } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()
  if (!user.street || !user.city) {
    navigate('/address')
  }
  return (
    <>
      <Summary user={user} buyNowProduct={buyNowProduct} />
    </>
  );
}
export default OrderSummary;
