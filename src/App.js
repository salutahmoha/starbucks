import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';

import HOME from './Components/Pages/Home';
import SHOP from './Components/Pages/Shop';
import APP from './Components/Pages/App';
import DELIVERY from './Components/Pages/Delivery';
import ABOUT from './Components/Pages/About';
import CONTACT from './Components/Pages/Contact';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/shop" element={<SHOP/>}/>
        <Route path="/delivery" element={<DELIVERY/>}/>
        <Route path="/app" element={<APP/>}/>
        <Route path="/about" element={<ABOUT/>}/>
        <Route path="/contact" element={<CONTACT/>}/>
      </Routes>
    </div>
  );
}

export default App;
