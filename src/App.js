// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Opportunities from './pages/opportunities/opportunities';
import MyOpportunities from './pages/myOpportunities/myOpportunitese';
import EmployerDashboard from './pages/employerDashboard/employerDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/opportunities' element={<Opportunities></Opportunities>}></Route>
        <Route path='my-opportunities' element={<MyOpportunities></MyOpportunities>}></Route>
        <Route path='/employer-dashboard' element={<EmployerDashboard></EmployerDashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
