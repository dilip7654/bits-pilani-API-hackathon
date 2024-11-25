import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Map from './components/map';
import Signup from './components/Signup';
import Schedule from './components/schedule';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Contact from './components/contact';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import About from './components/about';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
