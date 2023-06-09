import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/admin' element={<Adminscreen />} />
          </Route>
          <Route path='/BlogGDF' element={<Homescreen />} />
          <Route path='/BlogGDF/login' element={<Loginscreen />} />
          <Route path='/BlogGDF/register' element={<Registerscreen />} />
          <Route path='/BlogGDF/post/:id' element={<Postscreen />} />
          <Route path='/BlogGDF/about' element={<Aboutscreen/>}/>
          <Route path='/BlogGDF/contact' element={<Contactscreen/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
