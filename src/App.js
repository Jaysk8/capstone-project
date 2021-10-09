import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      < Header />
      < Navbar />
      < Carousel />
    <div className="content">
        < Home />
      </div>
    </div>
  );
}

export default App;
