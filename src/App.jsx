import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./ui/Navbar";
import Home from "./ui/Home";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Mobiles from "./pages/mobiles/Mobiles";
// import Iphone from "./pages/mobiles/Iphone";
// import Samsung from "./pages/mobiles/Samsung";
// import Xiaomi from "./pages/mobiles/Xiaomi";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/mobiles" element={<Mobiles />} /> */}
        {/* <Route path="/mobiles/iphone" element={<Iphone />} /> */}
        {/* <Route path="/mobiles/samsung" element={<Samsung />} /> */}
        {/* <Route path="/mobiles/xiaomi" element={<Xiaomi />} />  */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
