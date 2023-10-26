import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  BrowserRouter
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/newsDetails" element={<NewsDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;