import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavComponent/>
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/education" element={<Education/>}/>
        </Routes>
      </>
      <hr/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
