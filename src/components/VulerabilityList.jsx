import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VulnerabilityCard from './VulnerabilityCard';

const VulnerabilityList = () => {
  const [vulnerabilities, setVulnerabilities] = useState([]);

  useEffect(() => {
    const fetchVulnerabilities = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vulnerabilities'); // Replace with your API URL
        setVulnerabilities(response.data);
      } catch (error) {
        console.error('Error fetching vulnerabilities:', error);
      }
    };

    fetchVulnerabilities();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Vulnerabilities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vulnerabilities.map((vulnerability) => (
          <VulnerabilityCard key={vulnerability.cveId} vulnerability={vulnerability} />
        ))}
      </div>
    </div>
  );
};

export default VulnerabilityList;
