import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';



function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route  path='/' Component={ListEmployeeComponent}/>
          <Route path='/employees' Component={ListEmployeeComponent}/>
          <Route path='/add-employee' Component={AddEmployeeComponent}/>
          <Route path='/edit-employee/:id' Component={AddEmployeeComponent}/>
        </Routes>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
