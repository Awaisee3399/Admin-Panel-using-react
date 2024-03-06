import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Sidebar from './pages/sidebar/Sidebar';
import Administration from './pages/Administration/Administration';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Contact from './pages/contact/Contact';
import Supervisors from './pages/supervisors/Supervisors'
import Building from './pages/building/Building'


function App() {
  return (
    <div>
      {/* <Home/>
      <Sidebar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        <Route path='/Administration' element={<Administration/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Supervisors'element={<Supervisors/>}/>
        <Route path='/Building' element={<Building/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
