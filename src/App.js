import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './components/contacts/Contacts.jsx'

const App=()=> {
  return(
    <Routes>
    
    <Route path='/devem' element={<Home />} />
      <Route path='contact' element={<Contact />} />
    
      
      
  
    </Routes>   
  );
};

export default App;
