import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
