import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';
import withAuth from './utils/auth';

const EmployeeWithAuth = withAuth(Employee);
const HomeWithAuth = withAuth(Home);

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeWithAuth/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<EmployeeWithAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
