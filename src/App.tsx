import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { Calculator } from './pages/Calculator';
import { Events } from './pages/Events';
import { Packages } from './pages/Packages';
import { Reviews } from './pages/Reviews';
import './index.css';

// УМНЫЙ СКРОЛЛ: Если в ссылке есть # (например /#about), скроллим к этому блоку
function ScrollToAnchor() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToAnchor />
            <Header />
            <main className="page">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/events/:id" element={<Events />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/reviews" element={<Reviews />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;