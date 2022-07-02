import ProductCard from './ProductCard'
import { useState } from "react";


const ProductList = ({ prods, deleteProd}) => {
  const [productList, setProductList] = useState([]);

  console.log("PRODUCT LIST DELETE FUNCTION")
  console.log(deleteProd.name)

  console.log("PRODUCT LIST")
  console.log(prods)
  
  const finalProductList = prods ? prods : productList
  const renderProduct = finalProductList?.map(product => {
    return <ProductCard key={product?.id} prod={product} onDelete={deleteProd} />
  });

  console.log("These are the prods from the product list" + prods)
  // console.log(product)
  return (
    <div>
      {/* {prods && prods?.map(product => <ProductCard prods={product} />)} */}
      {renderProduct}
    </div>
  )
}

export default ProductList