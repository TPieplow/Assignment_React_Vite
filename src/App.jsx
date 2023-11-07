import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { ArticleProvider } from './components/contexts/ArticleContext';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ArticleProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ArticleProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

