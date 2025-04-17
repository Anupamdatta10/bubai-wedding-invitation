import './App.css';
import Whiteboard from './component/Whiteboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './cookies/index'
import WeddingApp from "./component/HomeScreen";
import FamilyScreen from "./component/FamilyScreen";
import GalleryPage from './component/GalleryPage';

function App() {
  return (
  <Router>
    <Routes>
    {/* <Route path="/" element={<Home/>} />
    <Route path="/whiteboard" element={<Whiteboard/>} /> */}
    <Route path="/" element={<WeddingApp />} />
    <Route path="/family" element={<FamilyScreen />} />
    <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router>

  );
}

export default App;
