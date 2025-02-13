import './Header.scss'
import logo from '../../assets/images/applewatch-logo.svg'
import search from '../../assets/images/search-icon.svg'
import person from '../../assets/images/person-icon.svg'
import cart from '../../assets/images/cart-icon.svg'
import menu from '../../assets/images/menu.svg'
const Header = () => {
  return (
    <div className='header'>
        <ul className='container header-list'>
            <li className='logo'>
                <img src={logo} alt="logo" />
                <h1>Mohid</h1>
            </li>
            <li className='header-links'>
              <a href="/">Home</a>
              <a href="/">Brands</a>
              <a href="/">Recent Products</a>
              <a href="/">Contact</a>
              <a href="/">About</a>
            </li>
            <li className='header-func'>
              <img src={search} alt="search" />
              <img src={person} alt="person" />
              <img src={cart} alt="cart" />
            </li>
            <img id='menu' src={menu} alt="menu" />
        </ul>
    </div>
  )
}

export default Header