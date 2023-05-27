import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/admin' element={<Adminscreen />} />
          </Route>
          <Route path='/' element={<Homescreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path='/register' element={<Registerscreen />}/>
          <Route path='/post/:id' element={<Postscreen/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
