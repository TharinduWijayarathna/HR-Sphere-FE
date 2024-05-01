import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeIndex from './pages/employee';
import Login from './pages/auth/login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employee' element={<EmployeeIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
