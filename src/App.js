import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';
import Client from './Components/Product';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Client />
      <Footer />
    </>
  );
}

export default App;
