import React from 'react';
import Settings from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export const chatData = [
  {
    // image:
    //   avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    // time: '9:08 AM',
  },
  {
    // image:
    //   avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    // time: '11:56 AM',
  },
  {
    // image:
    //   avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    // time: '4:39 AM',
  },
  {
    // image: "",
    //   avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    // time: '1:12 AM',
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <PersonIcon />,
    title: 'My Profile',
    description: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    to: '/system/user/user-info'
  },
  {
    icon: <Settings />,
    title: 'Settings',
    description: 'Account Settings',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    to: '/system/user/settings'
  }
];
