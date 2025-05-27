
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/login/login"; 
import ChatApp from "./ChatApp/chatApp";
import UserForm from "./components/userForm"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;
