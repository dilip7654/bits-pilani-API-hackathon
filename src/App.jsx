import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/home'
import Map from './components/map'
import News from './components/news'
import Schedule from './components/schedule'
import Navbar from './components/navbar'
import Contact from './components/contact'
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/Home" element = {<Home/>}/>;
      <Route path="/Map" element = {<Map/>}/>;
      <Route path="/News" element = {<News/>}/>;
      <Route path="/Schedule" element = {<Schedule/>}/>;
      <Route path="/Contact" element = {<Contact/>}/>;
    </Routes>
    </>
  )
}