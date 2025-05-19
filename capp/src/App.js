
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/login/login"; 
import ChatApp from "./ChatApp/chatApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;
