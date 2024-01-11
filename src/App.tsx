import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { About } from './pages/About';

export function App() {
  return (
      <BrowserRouter>
      <div>
        <h2>Server-side Rendering Example</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/articles">Articles</Link></li>
          </ul>
         </nav>
         <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
     </BrowserRouter>
  )
}

