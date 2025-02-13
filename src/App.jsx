import Header from './components/header/Header'
import Firstsection from './components/firstsection/Firstsection'
import Carousel from './components/carousel/Carousel'
import Products from './components/products/Products'
import Comments from './components/comments/Comments'
import Email from './layout/email/Email'

const App = () => {
  return (
    <div>
      <Header/>
      <Firstsection/>
      <Carousel/>
      <Products/>
      <Comments/>
      <Email/>
    </div>
  )
}

export default App