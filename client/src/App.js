import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Addedit from "./pages/Addedit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addcontact" element={<Addedit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
