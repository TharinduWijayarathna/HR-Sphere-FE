import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerRoutes from '../../routes/EmployeeRoutes';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
}

const CustomerIndex: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerRoutes(api).list();
        setCustomerData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api]);


  return (
    <div>
      <h1>Customer Index Test</h1>
      {customerData ? (
        <div>
          <p>Name: {customerData.name}</p>
          <p>Email: {customerData.email}</p>
          <p>Phone: {customerData.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerIndex;
