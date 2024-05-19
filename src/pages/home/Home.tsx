import React, { useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <AppLayout>
      <h1>Home</h1>
    </AppLayout>
  );
};

export default Home;
