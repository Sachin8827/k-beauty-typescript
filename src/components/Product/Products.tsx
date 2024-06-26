import { Link } from "react-router-dom";
import Rating from "../Common/Rating";
import "../assets/styles/Products.css";
import { ProductProp } from "../../Types/Types";
const Products: React.FC<ProductProp> = ({ data, heading }) => {

  return (
    <>
      <section className="view-all-products">
        <div className='container'>
          <div className="products">
            <div className='pro-heading'>
              <h4>{heading ? heading : "BEST SELLERS"}</h4>
            </div>
            <div className='product-list'>
              {data.map((product, index) => (
                <Link to={`/productdetail/${product.id}`} key={index} className='card'>
                  <div >
                    <div className='product-img'>
                      <img src={`/images/${product.image}`} alt={product.name} />
                    </div>
                    <div className='product-content'>
                      <h6>{product.name}</h6>
                      <div className='star'>
                        <Rating value={product.star} />
                      </div>
                      <p className='price'> $ {product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className='viewAllProduct'>
              <button>View All Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Products;
