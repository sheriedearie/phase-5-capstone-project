import ProductCard from './ProductCard'

const ProductList = ({ prods }) => {

  console.log("PRODUCT LIST")
  console.log(prods)

  return (
    <div>
      {prods?.map(product => <ProductCard product={product} />)}
    </div>
  )
}

export default ProductList