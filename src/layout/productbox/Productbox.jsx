import './Productbox.scss'
import product1 from '../../assets/images/products1.svg'
import product2 from '../../assets/images/products2.svg'
import product3 from '../../assets/images/products3.svg'
import product4 from '../../assets/images/products4.svg'
import product5 from '../../assets/images/products5.svg'
import product6 from '../../assets/images/products6.svg'
import rateus from '../../assets/images/rateus.svg'
const Productbox = () => {
  return (
    <div className='products'>
        <div className="products-box">
            <img className="products-box-img" src={product1} alt="" />
            <h4>Apple Smart I</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s>$300.00</s>
                <p className='products-box-title-p'>$255.00</p>
            </div>
        </div>
        <div className="products-box">
            <img className="products-box-img" src={product2} alt="" />
            <h4>Apple Smart II</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s>$300.00</s>
                <p className='products-box-title-p'>$255.00</p>
            </div>
        </div>
        <div className="products-box">
            <img className="products-box-img" src={product3} alt="" />
            <h4>Apple Smart III</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s>$300.00</s>
                <p className='products-box-title-p'>$255.00</p>
            </div>
        </div>
        <div className="products-box">
            <img className="products-box-img" src={product4} alt="" />
            <h4>Apple Smart IV</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s>$450.00</s>
                <p className='products-box-title-p'>$399.00</p>
            </div>
        </div>
        <div className="products-box">
            <img className="products-box-img" src={product5} alt="" />
            <h4>Samsung Watch Pro</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s>$300.00</s>
                <p className='products-box-title-p'>$255.00</p>
            </div>
        </div>
        <div className="products-box">
            <img className="products-box-img" src={product6} alt="" />
            <h4>Fitbit Max 1</h4>
            <img src={rateus} alt="" />
            <div className='products-box-title'>
                <s></s>
                <p className='products-box-title-p'>$155.00</p>
            </div>
        </div>
    </div>
  )
}

export default Productbox