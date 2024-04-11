import React from 'react'
import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import Home from './component/Home'
import Addcontact from './component/Addcontact';
import Contact from './component/Contact';
import Update from './pages/Update';
import Delete from './pages/Delete';

const App = () => {
  return (
   <>
   {/* <Navigation/>
  <Contact/> */}
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Addcontact" element={<Addcontact/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Delete" element={<Delete/>} />
      <Route path="/Update" element={<Update/>} />
    </Routes>
  </Router>
   </>
  )
}

export default App
