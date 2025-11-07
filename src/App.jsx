import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
