import './Carousel.scss'
import watch1 from '../../assets/images/watch1.svg'
import watch2 from '../../assets/images/watch2.svg'
import watch3 from '../../assets/images/watch3.svg'

const Carousel = () => {
  return (
    <div className='carousel container'>
        <div className="carousel-watchbox">
            <img src={watch1} alt="" />
            <div className="carousel-watchbox-title">
                <h3>Apple</h3>
                <p>Apple is one of the most famous smart watches providing company.</p>
            </div>
        </div>
        <div className="carousel-watchbox">
            <img src={watch2} alt="" />
            <div className="carousel-watchbox-title">
                <h3>Xiaomi</h3>
                <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
        </div>
        <div className="carousel-watchbox">
            <img src={watch3} alt="" />
            <div className="carousel-watchbox-title">
                <h3>FitBit</h3>
                <p>FitBit smart watches are best for there health and fitness features.</p>
            </div>
        </div>
    </div>
  )
}

export default Carousel