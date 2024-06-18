import React, { useState, useContext } from 'react';
import { Box, IconButton, Tooltip, Typography, useTheme, Badge } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Notification from '../../components/Notification';
import UserProfile from '../../components/UserProfile';

const NavButton = ({ title, customerFunc, icon, color, quantity }) => (
  <Tooltip title={title} arrow>
    <IconButton type='button' onClick={customerFunc} style={{ color }}>
      <Badge badgeContent={quantity} color={color}>
        {icon}
      </Badge>
    </IconButton>
  </Tooltip>
);

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotification, setAnchorElNotification] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNotificationMenu = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotificationMenu = () => {
    setAnchorElNotification(null);
  };

  return (
    <Box display={'flex'} justifyContent={'space-between'} p={2}>
      {/* SEARCH BAR */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        {/* <NavButton
          title="Switch Mode"
          customerFunc={colorMode.toggleColorMode}
          icon={theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
        /> */}
        <NavButton
          title="Notifications"
          quantity={4}
          customerFunc={handleOpenNotificationMenu}
          color="error"
          icon={<NotificationsOutlined />}
        />
        <Tooltip title="Profile" arrow>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 ml-2'
            onClick={handleOpenUserMenu}
          >
            <img
              className='rounded-full w-8 h-8 '
              src={`../../assets/user.jpg`}
              alt='avatar'
            />
            <Typography variant='subtitle1'>
              <Typography variant='body1' className='text-gray-400 font-bold'>Hi, </Typography>
              <Typography variant='body1' className='text-gray-400 font-bold text-15' >Van Tien</Typography>
            </Typography>
            <ExpandMoreIcon className='text-gray-400 text-14' />
          </div>
        </Tooltip>
        <Notification
          anchorElNotification={anchorElNotification}
          handleCloseNotificationMenu={handleCloseNotificationMenu}
          colors={colors}
        />
        <UserProfile
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
          colors={colors}
        />
      </Box>
    </Box>
  );
};

export default Topbar;