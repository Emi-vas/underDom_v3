//components
import Home from "./pages/Home";
//Router
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />}/>
        </Routes>
    </div>
  );
};

export default App;