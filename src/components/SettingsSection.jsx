import React, { useState, useEffect } from 'react';
import axios from 'axios';
function SettingsSection() {
  const [activeTab, setActiveTab] = useState('personal');

  const [personalDetails, setPersonalDetails] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    organisationName: '',
    notificationReceive: false,
  });

  const [keywords, setKeywords] = useState([]);
  const [newKeyword, setNewKeyword] = useState('');
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?._id;
  console.log(userId)
  useEffect(() => {
    const fetchKeywords = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(`http://localhost:5000/api/getkeywords/${userId}`);
        setKeywords(response.data.keywords);
      } catch (error) {
        console.error('Error fetching keywords:', error);
      }
    };

    fetchKeywords();
  }, [userId]);
  const handleTabSwitch = (tab) => setActiveTab(tab);

  const handlePersonalDetailsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim() !== '') {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const handleSavePersonalDetails = async (e) => {
    e.preventDefault(); 
  
    if (!personalDetails.email || !personalDetails.currentPassword || !personalDetails.newPassword) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      if (!userId) {
        alert("User not found. Please log in.");
        return;
      }
  
      const response = await axios.post("https://nexshield-server.onrender.com/api/edituser", {
        userId,
        email: personalDetails.email,
        currentPassword: personalDetails.currentPassword,
        newPassword: personalDetails.newPassword,
        organisationName: personalDetails.organisationName,
        notificationReceive: personalDetails.notificationReceive,
      });
      console.log(response)
      if (response.data.success) {
        console.log("Personal details saved successfully:", response.data);
        alert("Personal details updated successfully!");
      } else {
        console.error("Failed to save personal details:", response.data.message);
        alert("Error saving personal details. Please try again.");
      }
    } catch (error) {
      console.error("Error saving personal details:", error);
      alert("Error saving personal details. Please try again.");
    }
  };
    const handleSaveKeywords = async () => {
    try {
      if (keywords.length === 0) {
        console.log("No keywords to save.");
        return;
      }
  
      if (!userId) {
        console.log("User not found. Please log in.");
        return;
      }
  
      const response = await axios.post("https://nexshield-server.onrender.com/api/addkeywords", {
        userId,
        keywords,
      });
  
      if (response.data.keywords) {
        console.log("Keywords saved successfully:", response.data.keywords);
        setKeywords(response.data.keywords); 
        alert("Keywords saved successfully!");
      } else {
        console.log("Failed to save keywords:", response.data.message);
        alert("Error saving keywords. Please try again.");
      }
    } catch (error) {
      console.error("Error saving keywords:", error);
      alert("Error saving keywords. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg">
        <div className="flex justify-around">
          <button
            onClick={() => handleTabSwitch('personal')}
            className={`w-full py-3 text-lg font-medium rounded-tl-lg ${activeTab === 'personal'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              } transition duration-300`}
          >
            Edit Personal Details
          </button>
          <button
            onClick={() => handleTabSwitch('keywords')}
            className={`w-full py-3 text-lg font-medium rounded-tr-lg ${activeTab === 'keywords'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              } transition duration-300`}
          >
            Edit Keywords
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl p-8 bg-gray-800 rounded-b-lg shadow-lg mt-2">
        {activeTab === 'personal' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Personal Details</h2>
            <form onSubmit={handleSavePersonalDetails} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={personalDetails.email}
                  onChange={handlePersonalDetailsChange}
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="currentPassword" className="block text-sm text-gray-400">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={personalDetails.currentPassword}
                  onChange={handlePersonalDetailsChange}
                  placeholder="Enter current password"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm text-gray-400">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={personalDetails.newPassword}
                  onChange={handlePersonalDetailsChange}
                  placeholder="Enter new password"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="organisationName" className="block text-sm text-gray-400">Organization Name</label>
                <input
                  type="text"
                  name="organisationName"
                  value={personalDetails.organisationName}
                  onChange={handlePersonalDetailsChange}
                  placeholder="Enter organization name"
                  className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="notificationReceive"
                  checked={personalDetails.notificationReceive}
                  onChange={handlePersonalDetailsChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                />
                <label htmlFor="notificationReceive" className="ml-2 text-gray-300">
                  Receive Notifications
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
              >
                Save Personal Details
              </button>
            </form>
          </div>
        )}

        {activeTab === 'keywords' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Manage Keywords</h2>
            <div className="flex space-x-3">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Add a keyword"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
              />
              <button
                onClick={handleAddKeyword}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
              >
                Add
              </button>
            </div>

            <ul className="mt-4 flex flex-wrap space-x-3">
  {keywords.length > 0 ? (
    keywords.map((keyword, index) => (
      <li
        key={index}
        className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
      >
        <span className="font-semibold text-sm">{keyword}</span>
        <button
          onClick={() => handleRemoveKeyword(index)}
          className="ml-3 text-red-400 hover:text-red-600 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
    ))
  ) : (
    <li className="text-gray-400 text-sm">No keywords added yet.</li>
  )}
</ul>


            <button
              onClick={handleSaveKeywords}
              className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              Save Keywords
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsSection;
