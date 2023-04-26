import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter> 
      <Navbar/>
   <Routes>
      <Route path='/' element={<Contacts/>} />
      <Route path='/favorites' element={<Favorites/>} />
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
