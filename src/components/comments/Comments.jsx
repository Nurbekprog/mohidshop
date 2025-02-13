import './Comments.scss'
import people1 from '../../assets/images/people1.svg'
import people2 from '../../assets/images/people2.svg'
import dots from '../../assets/images/dots.svg'
import rateus from '../../assets/images/rateus.svg'
const Comments = () => {
  return (
    <div className='comments container'>
        <div className='comments-head'>
            <p>Here are our some of the best clients.</p>
            <h3>What People Say About Us</h3>
        </div>
        <div className='comments-cards'>
            <div className="comments-cards-box">
                <img src={people1} alt="people" />
                <div className="comments-cards-box-title">
                    <h4>Hamza Faizi</h4>
                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                    <img src={rateus} alt="" />
                </div>
            </div>
            <div className="comments-cards-box">
                <img src={people2} alt="people" />
                <div className="comments-cards-box-title">
                    <h4>Hafiz Huzaifa</h4>
                    <p>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                    <img src={rateus} alt="" />
                </div>
            </div>
        </div>
        <img src={dots} alt="" />
    </div>
  )
}

export default Comments