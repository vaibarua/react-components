import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import Home from './components/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
   
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
