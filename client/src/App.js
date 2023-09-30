import "./App.css";

import { Login, Register } from "./pages/Auth";
import PostContent from "./pages/PostContent";
import CreatePost from "./pages/CreatePost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
