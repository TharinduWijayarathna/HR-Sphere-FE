import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeIndex from './pages/home';
import EmployeeIndex from './pages/employee';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeIndex />} />
          <Route path='/employee' element={<EmployeeIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
