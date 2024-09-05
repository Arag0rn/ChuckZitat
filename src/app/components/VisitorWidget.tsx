'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorWidget = () => {
  const [data, setData] = useState({ count: 0 });

  const fetchVisitData = async () => {
    try {
      const response = await axios.get('/api/visitors');
      const visitData = response.data;
      setData(visitData); 
    } catch (error) {
      console.error('Error fetching visit data:', error);
    }
  };

  useEffect(() => {
    fetchVisitData();
  }, []);

  return (
    <div>
      <h2>Visitor Statistics</h2>
      <p>Visits: {data.count}</p>
    </div>
  );
};

export default VisitorWidget;