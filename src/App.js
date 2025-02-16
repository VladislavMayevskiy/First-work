import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar"; // Зазвичай Navbar зберігається в components, виправ шлях, якщо треба

export default function App() {
    return (
        <Router>
            <Navbar /> {/* Виправлено запис */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
