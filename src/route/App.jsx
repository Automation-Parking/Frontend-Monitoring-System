import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Monitoring from "../pages/Monitoring";
import Analitics from "../pages/Analitics";
import ReportPaper from "../pages/ReportPapers";
import NotFound from "../components/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Monitoring/:content" element={<Monitoring />} />
        <Route path="/Analitics/:content" element={<Analitics />} />
        <Route path="/ReportPaper/:content" element={<ReportPaper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
