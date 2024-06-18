import React from 'react';
import { IconButton, Typography, Button, Menu, Box, Tooltip, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Settings from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { themeColors } from '../data/dummy';
import CheckIcon from '@mui/icons-material/Check';
import { useStateContext } from '../contexts/theme-context';
import { tokens, ColorModeContext } from '../theme';
import { useContext } from 'react';

const UserProfile = ({ anchorElUser, handleCloseUserMenu, colors }) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const { setColor, setMode, currentMode, currentColor } = useStateContext();

    const DrawerList = (
        <Box
            sx={{
                width: 350,
                backgroundColor: colors.blueAccent[600],
                height: "100%"
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                px={2}
                mb={2}
            >
                <Typography variant='h4'>Settings</Typography>
                <CloseIcon onClick={toggleDrawer(false)} />
            </Box>
            <Divider />

            <Box
                mt={2}
                px={2}
                mb={2}
            >
                <Typography variant='h4'>Theme Options</Typography>
                <FormControl>
                    <RadioGroup
                        value={currentMode}
                        onChange={
                            colorMode.toggleColorMode
                        }
                    >
                        <FormControlLabel value="Dark"
                            control={
                                <Radio
                                    color='secondary'
                                    onChange={setMode}
                                    checked={currentMode === 'Dark'}
                                />
                            }
                            label="Dark"
                        />
                        <FormControlLabel
                            value="Light"
                            control={
                                <Radio
                                    color='secondary'
                                    onChange={setMode}
                                    checked={currentMode === 'Light'}
                                />
                            }
                            label="Light"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Divider />

            <Box
                mt={2}
                px={2}
                mb={2}
            >
                <Typography variant='h4'>Theme Colors</Typography>
                <Box className="flex gap-3">
                    {themeColors.map((item, index) => (
                        <Tooltip key={index} title={item.name} placement="top">
                            <Box
                                className="mt-3 cursor-pointer flex items-center"
                                key={item.name}
                            >
                                <button
                                    type="button"
                                    className="h-10 w-10 rounded-full cursor-pointer"
                                    style={{ backgroundColor: item.color }}
                                    onClick={() => {
                                        console.log(item);
                                        setColor(item.color)
                                    }
                                    }
                                >
                                    <CheckIcon sx={{ display: item.color === currentColor ? 'inline-block' : 'none' }} className=" text-white" />
                                </button>
                            </Box>
                        </Tooltip>
                    ))}
                </Box>
            </Box>
        </Box>
    );
    return (
        <>
            <Menu
                id="account-menu"
                anchorEl={anchorElUser}
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
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <Box
                    className="p-5 rounded-lg"
                    sx={{
                        boxShadow: 3,
                        my: -1,
                        backgroundColor: colors.primary[400],
                    }}
                    onClick={handleCloseUserMenu}
                >
                    <Box className="flex justify-between items-center">
                        <Typography variant="h4" className="font-bold">User Profile</Typography>
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box className="flex gap-5 items-center mt-6 border-b border-gray-200 pb-6">
                        <img
                            src="../../assets/user.jpg"
                            alt="user-profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <Box>
                            <Typography className="font-semibold text-xl"> Van Tien </Typography>
                            <Typography className="text-gray-500 text-sm "> Administrator </Typography>
                            <Typography className="text-gray-500 text-sm font-semibold "> phungtien07062003@gmail.com </Typography>
                        </Box>
                    </Box>
                    <Box>
                        {/* {userProfileData.map((item, index) => (
                        <Link to={item.to} key={index} style={{ textDecoration: 'none' }}>
                            <Box
                                className={`flex items-center gap-5 border-b p-3 cursor-pointer ${hoveredIndex === index ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: hoveredIndex === index ? colors.blueAccent[900] : 'initial',
                                }}
                            >
                                <IconButton
                                    type="button"
                                    className="text-xl rounded-lg p-3 "
                                >
                                    {item.icon}
                                </IconButton>
                                <Box>
                                    <Typography className="font-semibold ">{item.title}</Typography>
                                    <Typography className="text-gray-500 text-sm">{item.description}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    ))} */}
                        <Link to="/system/user/user-info" style={{ textDecoration: 'none' }}>
                            <Box
                                className="flex items-center gap-5 border-b p-3 cursor-pointer"
                                sx={{
                                    "&:hover": {
                                        backgroundColor: colors.blueAccent[900],
                                    }
                                }}
                            >
                                <IconButton
                                    type="button"
                                    className="text-xl rounded-lg p-3 "
                                >
                                    <PersonIcon />
                                </IconButton>
                                <Box>
                                    <Typography className="font-semibold ">My Profile</Typography>
                                    <Typography className="text-gray-500 text-sm">Account Settings</Typography>
                                </Box>
                            </Box>
                        </Link>
                        {/* <Link to="/system/user/settings" style={{ textDecoration: 'none' }}> */}
                        <Box
                            className="flex items-center gap-5 border-b p-3 cursor-pointer"
                            sx={{
                                "&:hover": {
                                    backgroundColor: colors.blueAccent[900],
                                }
                            }}

                            onClick={toggleDrawer(true)}
                        >
                            <IconButton
                                type="button"
                                className="text-xl rounded-lg p-3 "
                            >
                                <Settings />
                            </IconButton>
                            <Box>
                                <Typography className="font-semibold ">Settings</Typography>
                                <Typography className="text-gray-500 text-sm">Account Settings</Typography>
                            </Box>
                        </Box>
                        {/* </Link> */}
                    </Box>
                    <Box className="mt-5">
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ borderRadius: 2, width: '100%' }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Menu>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                {DrawerList}
            </Drawer>
        </>
    );
};

export default UserProfile;
