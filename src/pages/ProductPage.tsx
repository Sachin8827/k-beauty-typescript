import { useParams } from "react-router-dom";
import ProductDetail from "../components/product/ProductDetail";
import ViewProducts from "../components/product/Products";
import productData from "../utils/constants/data";
import "../assets/styles/ProductPage.css";

function ProductPage() {

  return (
    <>
      <ProductDetail id={Number(useParams().id)} />
      <ViewProducts data={productData.slice(0, 4)} heading="YOU MAY ALSO LIKE" />
      <hr style={{ border: "1px solid #E2E2E2" }} />
      <ViewProducts data={productData.slice(0, 4)} heading="RECENTLY VIEWED PRODUCTS" />
    </>
  );
}
export default ProductPage;
