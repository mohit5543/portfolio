import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ScrollToTop from "./components/features/ScrollToTop";

function App() {
  return (
    
    <div >
      <Navbar />
      <div className="container">
        <section><Hero /></section>

        <section><Skills /></section>
      
        <section><Projects /></section>
      
        <section><About /></section>

        <section><Contact /></section>
      </div>

      <ScrollToTop />

      <Footer />
    </div>
  );
}

export default App;