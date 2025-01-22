import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
// import Map from './components/map';
import Signup from './components/Signup';
// import Schedule from './components/Schedule';
import Navbar from './components/navbar';
import Contact from './components/contact';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import AboutUs from './components/aboutus';
import ForgotPassword from './components/forgetpassword';
// import Dashboard from './components/Patientinterface/Dashboard'
import UserInterFace from './components/PatientInterface/Dashbord'
import PatientData from './components/PatientInterface/PatientData'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Dashboard from '../src/components/PatientInterface/Dashbord';
import News from './components/news';
import Schedule from './components/Schedule.jsx';
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>;
      {/* <Route path="/Map" element = {<Map/>}/>;  */}
      <Route path="/signup" element = {<Signup/>}/>;
      <Route path="/Profile" element = {<Dashboard/>}/>;
      <Route path="/login" element = {<Login/>}/>;
      <Route path="/Contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {/* <Route path="/dashboard" element={<Dashbord />} /> */}
      <Route path='/UIF' element={<UserInterFace/>}/>
      <Route path='/pdata' element={<PatientData/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="Schedule" element={<Schedule/>}/>

    </Routes>
      <Footer />
    </>
  );
}
