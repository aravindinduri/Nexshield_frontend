import React, { useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import OverviewSection from './OverviewSection';
import SettingsSection from './SettingsSection';
import FilesSection from './FilesSection';
import SecuritySection from './SecuritySection';

const ProfilePage = () => {
  const [section, setSection] = useState('overview');

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <OverviewSection />;
      case 'settings':
        return <SettingsSection />;
      case 'files':
        return <FilesSection />;
      case 'security':
        return <SecuritySection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="flex min-h-screen  bg-gray-900">
      <ProfileSidebar setSection={setSection} />
      <main className="flex-1 p-8 mt-16 md:ml-60">
        {renderSection()}
      </main>
    </div>
  );
};

export default ProfilePage;
