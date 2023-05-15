import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import { heroapi, topratesales, popularsales } from "./data/data.js";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales ifExists endpoint={popularsales} />
        <Sales endpoint={topratesales} />
      </main>
      <Footer />
    </>
  );
}

export default App;
