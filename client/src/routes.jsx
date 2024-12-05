import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import Template from './pages/Template';
import Chatbot from './pages/Chatbot';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='chatbot' element={<Chatbot />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;