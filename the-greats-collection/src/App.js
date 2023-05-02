
import './App.css';
import Navbar from './components/navbar';
// import SearchStyles from './components/Searchbar';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import Form from './components/form';


function App() {
  
  return (
    <div className='tshirts'>
      <Navbar />
      <Header/>
      {/* <SearchStyles onSearch={onSearch}/> */}
      <Routes> 
      
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/form"  element={<Form/>} />
     
      </Routes>

    </div>
  );
}

export default App;
