import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// Styles
import '../styles/index.css'

// Pages / Components
import { Home }     from './components/Home';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { Admin }    from './pages/Admin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/blog"       element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin"      element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
