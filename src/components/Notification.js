import React from 'react';
import { Box, IconButton, Typography, Button, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { chatData } from '../data/dummy';

const Notification = ({ anchorElNotification, handleCloseNotificationMenu, colors }) => {
  return (
    <Menu
      id="notification-menu"
      anchorEl={anchorElNotification}
      PaperProps={{
        elevation: 0,
        sx: {
          backgroundColor: colors.primary[400],
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1,
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      open={Boolean(anchorElNotification)}
      onClose={handleCloseNotificationMenu}
    >
      <Box
        className="p-6 rounded-lg"
        sx={{
          boxShadow: 3,
          my: -1,
          backgroundColor: colors.primary[400],
        }}
        onClick={handleCloseNotificationMenu}
      >
        <Box className="flex justify-between items-center ">
          <Box className="flex gap-3">
            <Typography variant="h4" className="font-bold ">Notifications</Typography>
            <Button variant="contained" color="warning" size="small">4 New</Button>
          </Box>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="mt-5">
          {chatData?.map((item, index) => (
            <Box key={index} className="flex items-center leading-8 gap-5 border-b border-gray-200 p-3">
              <img
                src="../../assets/user.jpg"
                alt="user-profile"
                className="w-10 h-10 rounded-full"
              />
              <Box>
                <Typography className="font-semibold">{item.message}</Typography>
                <Typography className="text-gray-500 text-sm">{item.desc}</Typography>
              </Box>
            </Box>
          ))}
          <Box className="mt-5">
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 2, width: '100%' }}
            >
              See all notifications
            </Button>
          </Box>
        </Box>
      </Box>
    </Menu>
  );
};

export default Notification;
