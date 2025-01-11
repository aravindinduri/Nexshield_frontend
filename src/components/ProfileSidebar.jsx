import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  LayoutDashboard,
  Settings,
  Folder,
  Shield
} from 'lucide-react';

const ProfileSidebar = ({ setSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('overview');

  const handleListItemClick = (section) => {
    setSection(section);
    setValue(section);
  };

  const sidebarStyle = {
    background: '#1a1a2e',
    color: 'white',
  };

  const listItemStyle = (isActive) => ({
    margin: '8px 16px',
    borderRadius: '8px',
    backgroundColor: isActive ? '#16213e' : 'transparent',
    '&:hover': {
      backgroundColor: '#0f3460',
    },
  });

  const iconStyle = (isActive) => ({
    color: isActive ? '#3498db' : 'white',
  });

  const navItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'files', icon: Folder, label: 'My Files' },
    { id: 'security', icon: Shield, label: 'Security' },
  ];

  return isMobile ? (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleListItemClick(newValue)}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        ...sidebarStyle,
      }}
    >
      {navItems.map((item) => (
        <BottomNavigationAction
          key={item.id}
          value={item.id}
          icon={<item.icon size={24} style={iconStyle(value === item.id)} />}
          sx={{ color: 'white', '&.Mui-selected': { color: '#3498db' } }}
        />
      ))}
    </BottomNavigation>
  ) : (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: '#1a1a2e',
          color: 'white',
          marginTop: '64px',
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => handleListItemClick(item.id)}
            sx={listItemStyle(value === item.id)}
          >
            <ListItemIcon>
              <item.icon size={24} style={iconStyle(value === item.id)} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: value === item.id ? 'bold' : 'normal',
                  color: value === item.id ? '#3498db' : 'white',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default ProfileSidebar;
