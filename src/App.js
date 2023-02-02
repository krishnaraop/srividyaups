import About from "./About";
import Announcements from "./Announcements";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Slider1 from "./Slider1";

function App() {
  return (
    <div className="appMain">
      <Navbar />
      <Slider1 />
      <About />
      <Gallery />
      <Announcements />
      <Footer />
    </div>
  );
}

export default App;
