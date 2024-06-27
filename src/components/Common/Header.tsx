import { useSelector, useDispatch } from 'react-redux'
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { logOut } from '../../Redux/UserSlice'
import { ThemeContext } from "../../App";
import { toast } from 'react-toastify';
import { HeaderProp } from '../../Types/Types';
import { RootState } from '../../Redux/Store';
import AddToCart from '../AddToCart';
import logo from "/images/logo.png";
import LogoutModal from '../LogoutModal';
import "../../assets/styles/Header.css";
import "../../assets/styles/Cart.css";
const Header: React.FC<HeaderProp> = ({ handleInputField }) => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user, isLoggedIn, cart } = useSelector((state: RootState) => state.user);
  const { isDark, toggleMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const dispatch = useDispatch();
  const handleCart = () => {
    isLoggedIn ? setIsCartOpen(!isCartOpen) : toast.success("please Login first")
  };
  const handleCloseModal = () => setShowModal(false);
  const handleConfirmLogout = () => {
    dispatch(logOut(1)); // Example: Dispatch logout action
    setShowModal(false);
  };
  const handleLogout = () => {
    if (isLoggedIn) {
      setShowModal(true);
    }
    else {
      toast.success("You are not logged in")
    }
  }

  return (
    <>
      <header
        className={
          isHome ? "headerforhome" : "headerforother"
        }
      >
        <div className='header'>
          <div className='heading'>
            <p>FREE, FAST SHIPPING FOR ALL UAE ORDERS OVER AED 100</p>
          </div>
          <div className='head-img-icons'>
            <div className='empty'></div>
            <div className='head-img'>
              <img src={logo} alt='Logo' />
            </div>
            <div className={`head-icons ${isHome ? "icons-for-home" : ""}`} >
              <a href='#' onClick={handleLogout}>
                <i className='fa-regular fa-user'></i>
              </a>
              <a href='#' onClick={handleInputField}>
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
              <a href='#' onClick={toggleMode}>
                <i className={!isDark ? 'fa fa-moon-o' : 'fa-solid fa-sun'}></i>
              </a>
              <a onClick={handleCart} style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
                <i className='fa-solid fa-bucket'></i>
                <span className={`badgeStyle ${isHome ? "badge" : ""}`}>{user?.cart?.length}</span>
              </a>
            </div>
          </div>
          <nav className='navbar'>
            <div className={`nav-item ${isHome ? "" : "navs"}`}>
              <ul>
                <li>
                  <a href='#'>SHOP ALL</a>
                </li>
                <li>
                  <a href='#'>NEW</a>
                </li>
                <li>
                  <a href='#'>BRANDS</a>
                </li>
                <li>
                  <a href='#'>VALUE SETS</a>
                </li>
                <li>
                  <a href='#'>BLOG</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <AddToCart handleCart={handleCart} isCartOpen={isCartOpen} cart={user.cart || []} />
      <LogoutModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
}

export default Header;
