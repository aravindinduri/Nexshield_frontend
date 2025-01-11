import React from 'react';

const OverviewSection = () => {
  // Example user data (can be replaced with dynamic data)
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    uploads: 25,
    streak: 7,
    membership: "Premium",
    profileImage: "https://via.placeholder.com/150"
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Overview</h2>

      {/* Profile Card */}
      <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-6">
        <img
          src={userData.profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold">{userData.name}</h3>
          <p className="text-gray-600">{userData.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-blue-600 rounded">
            {userData.membership} Member
          </span>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-medium">Total Uploads</h4>
          <p className="text-2xl font-bold">{userData.uploads}</p>
        </div>

        <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-medium">Daily Streak</h4>
          <p className="text-2xl font-bold">{userData.streak} days</p>
        </div>

        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-medium">Achievements</h4>
          <p className="text-2xl font-bold">5</p>
        </div>

        <div className="bg-purple-100 text-purple-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-medium">Files Shared</h4>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="bg-white shadow-md rounded-lg divide-y">
          <li className="p-4 hover:bg-gray-50">Uploaded "Project_Report.pdf"</li>
          <li className="p-4 hover:bg-gray-50">Completed a 7-day streak</li>
          <li className="p-4 hover:bg-gray-50">Upgraded to Premium Membership</li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewSection;
