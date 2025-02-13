import  './Firstsection.scss'
import enterLogo from '../../assets/images/entersection-logo.svg'
import icon1 from '../../assets/images/searchblue-icon.svg'
const Firstsection = () => {
  return (
    <div className='enterSection-backround'>
      <div className="enterSection container">
        <div className="enterSection-title">
          <h1>
          Discover Most Suitable Watches
          </h1>
          <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
          <form action="" className='searchbox'>
          <img src={icon1} alt="" />
            <input type="text" className='searchbox-input' placeholder='Find the best brands' />
            <input type="button" className='searchbox-btn' value="Search" />
            </form>    
        </div>
        <img src={enterLogo} alt="watch" className='watch' />
      </div>
    </div>
  )
}

export default Firstsection