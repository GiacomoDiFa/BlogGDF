import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homescreen from './screen/Homescreen';
import Adminscreen from './screen/Adminscreen';
import Loginscreen from './screen/Loginscreen';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/login' element={<Loginscreen/>}/>
        <Route path='/admin' element={<Adminscreen/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
