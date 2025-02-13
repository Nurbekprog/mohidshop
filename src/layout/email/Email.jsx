import './Email.scss'
import watchemail from '../../assets/images/products1.svg'
const Email = () => {
  return (
    <div className='emailbox container'>
        <div className="emailbox-title">
            <h4>Subscribe To Newsletter</h4>
            <p>Get free guide about smart watches daily. </p>
            <form action="" className='form'>
                <input type="text" className='input' placeholder='Enter Email Address'/>
                <input type="button" className='emailbtn' value="Subscribe" />
            </form>
        </div>
        <img src={watchemail} alt="" />
    </div>
  )
}

export default Email