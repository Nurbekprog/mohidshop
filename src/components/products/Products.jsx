import Productbox from '../../layout/productbox/Productbox'
import './Products.scss'

const Products = () => {
  return (
    <div className='our-products container'>
        <p className='our-products-p'>Find your favourite smart watch.</p>
        <h3>Our Latest Products</h3>
        <Productbox/>
        <button>View More</button>
    </div>
  )
}

export default Products