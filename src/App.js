import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contributors from "./Components/Contributors"
import ContactUs from "./Components/ContactUs"
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
   <div>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/contributors" element={<Contributors/>}></Route>
            <Route path='/contactus' element={<ContactUs/>}></Route>
          </Routes>
   </div>
  );
}

export default App;
