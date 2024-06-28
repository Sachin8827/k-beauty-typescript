import * as React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CircleLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, buyNow } from "../../Redux/UserSlice";
import { useSelector } from "react-redux";
import { Product } from "../../Types/Types";
import { RootState } from "../../Redux/Store";
import SimpleSlider from "../common/Slider";
import RenderImage from "../common/RenderImage";
import productImage from "../../utils/constants/ProductImage";
import Rating from "../common/Rating";
import delivery from "/images/delivery.png";
import Accordion from "../common/Accordion";
import accordionData from "../../utils/constants/AccordianData";
import data from "../../utils/constants/data";

const ProductDetail: React.FC<{ id: number }> = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, cartMessage } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const foundProduct = data.find((item: Product) => item.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleQuantity = (num: number) => {
    if (num) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleBuyNow = (product: Product) => {
    dispatch(buyNow({ product, quantity }));
    if (typeof user.street === "undefined") {

      navigate('/address')
    } else {

      navigate("/summary");
    }
  };

  if (loading) {
    return <div style={{ display: "flex", justifyContent: 'center', width: "100%", height: '30rem', alignItems: 'center' }}><CircleLoader color="#ff9966"
      size={100} /></div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleCart = () => {
    if (product) {
      dispatch(addToCart({ product, quantity }));
      setTimeout(() => {
        toast.success(cartMessage ? cartMessage : "Item Added");
      }, 200);
    }
  };



  return (
    <>
      <div className='container'>
        <div className='product-row'>
          <div className='imagecol'></div>
          <div className='forSwap'>
            <SimpleSlider
              data={[{ image: product && product.image }, ...productImage]}
            />
          </div>
          <div className='details'>
            <p>A'PIEU</p>
            <p>{product?.name}</p>
            <Rating value={product ? product.star : -1} text='reviews' />
            <p>$ {product?.price}</p>
            <div className='quantity'>
              <i
                className='fa-solid fa-minus'
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: quantity === 1 ? "grey" : "var(--content-color)",
                }}
                onClick={() => handleQuantity(1)}
              ></i>
              <input
                type='number'
                min='1'
                value={quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                style={{
                  width: "50px",
                  textAlign: "center",
                  border: "none",
                  backgroundColor: "transparent",
                  color: "var(--content-color)",
                  MozAppearance: "textfield"
                }}
              />
              <i
                className='fa-solid fa-plus'
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => handleQuantity(0)}
              ></i>
            </div>
            <div className='add-to-cart' onClick={() => handleCart()}>
              <p>
                ADD TO CART &nbsp;&nbsp; &#9679; &nbsp;&nbsp;{" "}
                {product && product.price * quantity}$
              </p>
            </div>
            <div className='buy-now' onClick={() => product && handleBuyNow(product)}>
              <button>BUY IT NOW</button>
            </div>
            <i className='fa-regular fa-heart'></i>
            <span>ADD TO WISHLIST</span>
            <hr />
            <RenderImage
              classOfDiv={"dilevery"}
              classOfImage={"dilevery-image"}
              imageName={delivery}
            />
            <div className='override-green'>
              Free UAE Shipping on orders above AED 100.
            </div>
            <div className='override-pink'>Usually ships within 3-5 days</div>
            <div className='product-discription'>
              <p>PRODUCT DETAILS</p>
              <p>{product?.description}</p>
              <p>
                Isntree’s range of broad spectrum sun protection products are
                lightweight and suitable for daily use. Not only do they help
                control skin shine, but also keep skin feeling cool and
                comfortable. These suncreens also contain hyaluronic acid which
                helps deliver deep hydration and strengthen the skin’s moisture
                barrier. Available in a variety of formulations to suit every
                skin type.
              </p>
            </div>
            <div>
              <p
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                Product of Korea.
              </p>
              <hr style={{ border: "1px solid #E2E2E2" }} />
              <Accordion accordionData={accordionData} />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid #E2E2E2", marginTop: "15px" }} />


    </>
  );
}
export default ProductDetail;
