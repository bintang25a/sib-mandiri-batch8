import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Books from "./pages/Books.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/book" element={<Books/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
