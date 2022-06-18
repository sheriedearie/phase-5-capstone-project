import ProductCard from './ProductCard'

const ProductList = ({products}) => {
     console.log("this is the product list")
     console.log(products)
  return (
    <div>
        {products?.map((product) => (<ProductCard key={product.id}{...product} />))
        }
      </div>
  )
}

export default ProductList