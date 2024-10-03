

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarTop from './Components/Navbar/NavbarTop';
import Carsouel from './Components/Carsuel/Carsouel';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import Coffee from './Components/Coffee/Coffee';
import Teams from './Components/Teams/Teams';
import Testmonition from './Components/Testmoition/Testmonition';
import Priceing from './Components/Priceing/Priceing';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
    <NavbarTop/>
    <Carsouel/>
    <About/>
    <Product/>
    <Coffee/>
    <Teams/>
    <Testmonition/>
    <Priceing/>
    <Contact/>
    <footer id='footer'>
    <Footer/>
    </footer>
  
    </>
  )
}

export default App
