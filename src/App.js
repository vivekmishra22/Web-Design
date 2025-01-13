import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';
import Product from './Components/Product';
import Services from './Components/Services';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Product />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
