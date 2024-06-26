import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../CustomHooks/useDebounce";
import banner from "/images/Banner.jpeg";
import data from "../utils/constant/data";
import "../assets/styles/Hero.css";
function HeroSection({ inputFieldStatus }) {
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const debouncedValue = useDebounce(productName, 500);
  const handleFilter = () => {
    setFilteredProduct(
      data.filter(
        (item, index) =>
          debouncedValue?.trim() !== "" &&
          item.name.toLowerCase().startsWith(debouncedValue?.toLowerCase())
      )
    );
    !debouncedValue == ""
      ? setSearchBarStatus(true)
      : setSearchBarStatus(false);
  };

  useEffect(() => {
    handleFilter();
  }, [debouncedValue]);
  return (
    <>
      <section>
        <div className='hero-image'>
          <img src={banner} alt='' />

          <div className='gradient'>
            <div className='container'>
              <div className='forCenter'>
                <div className='search-container'>
                  <div
                    className='input-field'
                    style={{ display: inputFieldStatus ? "block" : "none" }}
                  >
                    <input
                      type='text'
                      required
                      placeholder='Search product '
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div
                    className='searchedProduct'
                    style={{
                      display:
                        inputFieldStatus && searchBarStatus ? "block" : "none",
                    }}
                  >
                    {filteredProduct.length > 0 ? (
                      filteredProduct.map((item, index) => (
                        <div className='filtered' key={index}>
                          <Link to={`/productdetail/${item.id}`}>
                            <p>{item.name}</p>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <p style={{ marginTop: "10px", paddingLeft: "8px" }}>
                        No product with the given name
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='hero-text'>
                <h6>DR. CEURACLE</h6>
                <h4>Discover Dr. Ceuracle’s Vegan Kombucha Line</h4>
                <p>
                  Vegan Product Line formulated with Kombucha Extract and Tea
                  Complex to detoxify, refine dull looking skin , detoxify and
                  provide deep hydration. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
