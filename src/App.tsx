import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Routes/Portfolio";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/image" element={<Portfolio />} />
        <Route path="/detail/:id" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
