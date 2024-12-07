import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VulnerabilityCard from './VulnerabilityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Search, AlertTriangle } from 'lucide-react';

const VulnerabilityList = () => {
  const [vulnerabilities, setVulnerabilities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVulnerabilities = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://nexshield-server.onrender.com/vulnerabilities');

        const sortedData = response.data.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

        setVulnerabilities(sortedData);
      } catch (err) {
        console.error('Error fetching vulnerabilities:', err);
        setError('Failed to load vulnerabilities. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVulnerabilities();
  }, []);

  const filteredVulnerabilities = vulnerabilities.filter(vulnerability => 
    vulnerability.cveId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vulnerability.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredVulnerabilities.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVulnerabilities = filteredVulnerabilities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-11">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Shield className="w-12 h-12 text-blue-400 mr-3" />
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              Latest Vulnerabilities
            </h1>
          </motion.div>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Stay informed about the latest security vulnerabilities across various systems and networks.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search vulnerabilities by CVE ID or description"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
        </div>

        {/* Error Handling */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="bg-red-900/50 border border-red-700 p-4 rounded-lg flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
              <p className="text-red-300">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 1, 
                ease: "linear" 
              }}
              className="w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full"
            />
          </div>
        ) : (
          <>
            {/* Vulnerabilities Grid */}
            <AnimatePresence>
              {currentVulnerabilities.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-400 py-12"
                >
                  No vulnerabilities found matching your search.
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-6"
                >
                  {currentVulnerabilities.map((vulnerability) => (
                    <motion.div
                      key={vulnerability.cveId}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="w-full rounded-xl overflow-hidden shadow-lg"
                    >
                      <VulnerabilityCard vulnerability={vulnerability} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 text-white ${
                    currentPage === 1
                      ? 'bg-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-xl'
                  }`}
                >
                  <ChevronLeft className="mr-2" />
                  Previous
                </motion.button>

                <span className="text-gray-300 font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 text-white ${
                    currentPage === totalPages
                      ? 'bg-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-xl'
                  }`}
                >
                  Next
                  <ChevronRight className="ml-2" />
                </motion.button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VulnerabilityList;