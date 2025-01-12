import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';
import Client from './Components/Product';
import Services from './Components/Services';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Client />
      <Services />
      <Footer />
    </>
  );
}

export default App;
