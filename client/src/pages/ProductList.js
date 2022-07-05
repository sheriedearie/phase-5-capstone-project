import ProductCard from './ProductCard'
import { useState } from "react";


const ProductList = ({ prods, deleteProd, onAdd}) => {
  const [productList, setProductList] = useState([]);

  console.log("PRODUCT LIST ADD FUNCTION")
  console.log(onAdd.name)

  console.log("PRODUCT LIST")
  console.log(prods)
  
  const finalProductList = prods ? prods : productList
  const renderProduct = finalProductList?.map(product => {
    return <ProductCard key={product?.id} prod={product} onDelete={deleteProd} onAdd={onAdd}/>
  });

  console.log("These are the prods from the product list" + prods)
  // console.log(product)
  return (
    <div>
      {renderProduct}
    </div>
  )
}

export default ProductList