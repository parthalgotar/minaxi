import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Admin from "./components/Admin";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Delivery from "./components/Delivery";
import Review from "./components/Review";
import Proces1 from "./components/Proces1";
import Banner from "./components/Banner";




function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
       <Admin />
       <Order />
       <Delivery />
       <Review />
       <Proces1 />
       <Banner />
       


      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;