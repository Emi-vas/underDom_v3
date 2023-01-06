//components
import Home from "./pages/Home";
//Router
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/services"} element={<Services />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;