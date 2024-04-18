import React from 'react'
import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import Home from './component/Home'
import Addcontact from './component/Addcontact';

import Update from './pages/Update';
import Delete from './pages/Delete';
import ContactView from './component/ContactView';
import Signin from './component/Signin';
import Signup from './component/Signup';


const App = () => {
  return (
   <>
  
  <Router>
    <Routes>
      <Route path='/' element={< Signin/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Addcontact" element={<Addcontact/>} />
     <Route path='/Signup' element={<Signup/>}/>
      <Route path="/ContactView/:contactId" element={<ContactView/>}/>
      <Route path="/Delete/:contactId" element={<Delete/>} />
      <Route path="/Update/:contactId" element={<Update/>} />
    </Routes>
  </Router>
   </>
  )
}

export default App
