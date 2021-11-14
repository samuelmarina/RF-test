import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
