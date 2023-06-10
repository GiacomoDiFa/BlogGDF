import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Homescreen from './screen/Homescreen';
import Adminscreen from './screen/Adminscreen';
import Loginscreen from './screen/Loginscreen';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PrivateRoutes from './PrivateRoutes';
import Registerscreen from './screen/Registerscreen';
import Postscreen from './screen/Postscreen';
import CustomNavbar from './component/Navbar';
import Aboutscreen from './screen/Aboutscreen';
import Contactscreen from './screen/Contactscreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/BlogGDF'>
      <CustomNavbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/admin' element={<Adminscreen />} />
          </Route>
          <Route path='/' element={<Homescreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/post/:id' element={<Postscreen />} />
          <Route path='/about' element={<Aboutscreen/>}/>
          <Route path='/contact' element={<Contactscreen/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
