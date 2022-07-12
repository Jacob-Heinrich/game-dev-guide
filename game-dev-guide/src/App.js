import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/categoryPage';
import ToolPage from './pages/toolPage';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = { < Home /> } exact />
    <Route path = "/tools" element = { <ToolPage />} />
    <Route path = "/categories" element = { <CategoryPage />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
