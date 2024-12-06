import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VulnerabilityCard from './VulnerabilityCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VulnerabilityList = () => {
  const [vulnerabilities, setVulnerabilities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVulnerabilities = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://nexshield-server.onrender.com/vulnerabilities');
        setVulnerabilities(response.data);
      } catch (error) {
        console.error('Error fetching vulnerabilities:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVulnerabilities();
  }, []);

  const totalItems = vulnerabilities.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVulnerabilities = vulnerabilities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20 text-white font-sans tracking-tight">
          Latest Vulnerabilities
        </h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentVulnerabilities.map((vulnerability) => (
              <motion.div 
                key={vulnerability.cveId}
                variants={item}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <VulnerabilityCard vulnerability={vulnerability} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 
                     transition-colors duration-300 hover:bg-blue-700 disabled:bg-blue-400
                     disabled:cursor-not-allowed font-medium"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2
                     transition-colors duration-300 hover:bg-blue-700 disabled:bg-blue-400
                     disabled:cursor-not-allowed font-medium"
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VulnerabilityList;