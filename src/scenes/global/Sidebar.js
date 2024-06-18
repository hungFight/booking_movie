import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ReportIcon from "@mui/icons-material/Report";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import TheatersIcon from "@mui/icons-material/Theaters";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { useStateContext } from "../../contexts/theme-context";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DiscountIcon from '@mui/icons-material/Discount';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        backgroundColor: colors.primary[400],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography fontWeight="bold">{title}</Typography>
    </MenuItem>
  );
};

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { currentColor } = useStateContext();

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none",
          background: `${colors.primary[400]} !important`
        },
        "& .ps-sidebar-container": {
          // background: `${colors.greenAccent[700]} !important`,
          background: `${colors.primary[400]} !important`
        },
        "& .ps-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button": {
          // padding: "5px 35px 5px 20px !important",
        },
        "& .css-1tqrhto >.ps-menu-button:hover": {
          color: `${currentColor} !important`,
          backgroundColor: `${colors.primary[400]} !important`
        },
        "& .css-16jesut >.ps-menu-button:hover": {
          color: `${currentColor} !important`,
          backgroundColor: "transparent !important",
        },

        "& .css-1t8x7v1 >.ps-menu-button:hover": {
          backgroundColor: "transparent"
        },

        "& .ps-menu-button:hover": {
          color: `${currentColor} !important`,
          backgroundColor: "transparent",
        },
        "& .ps-menu-button.ps-active": {
          color: `${currentColor} !important`,
        },      
      }}
    >
      <Sidebar collapsed={isCollapsed} style={{ height: "100%"}}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="25px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="45px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  className="rounded-full w-24 h-24 cursor-pointer"
                  alt="profile-user"
                  src={`../../assets/user.jpg`}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Van Tien
                </Typography>
                <Typography variant="h5" color={currentColor}>
                  Admin Management
                </Typography>
              </Box>
            </Box>
          )}

          {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Management
            </Typography>
            <Item
              title="Movies"
              to="/movies"
              icon={<MovieFilterOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Showtimes"
              to="/showtimes"
              icon={<TheatersIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bookings"
              to="/bookings"
              icon={<EventSeatIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Customers"
              to="/customers"
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/invoices"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Reports
            </Typography>
            <Item
              title="Sales Report"
              to="/sales-report"
              icon={<ReportIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Customer Report"
              to="/customer-report"
              icon={<ReportIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box> */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 0px 20px", fontWeight: "bold" }}
            >
              Management
            </Typography>
            <SubMenu
              style={{
                fontWeight: "bold",
              }}
              label="Cinema"
              icon={<MovieFilterOutlinedIcon />}
            >
              <Item
                title="Movies"
                to="/admin/management/movie"
                icon={<MovieFilterOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Schedule"
                to="/admin/management/schedule"
                icon={<CalendarMonthIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Ticket"
                to="/admin/management/ticket"
                icon={<ConfirmationNumberIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Seat"
                to="/admin/management/seat"
                icon={<EventSeatIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices"
                to="/admin/management/invoices"
                icon={<ReceiptIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Rooms"
                to="/admin/management/rooms"
                icon={<MeetingRoomIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="BillTicket"
                to="/admin/management/billTicket"
                icon={<ReceiptLongIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Cinema"
                to="/admin/management/cinema"
                icon={<TheatersIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Promotion"
                to="/admin/management/promotion"
                icon={<DiscountIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 0px 20px", fontWeight: "bold" }}
            >
              System
            </Typography>
            <SubMenu
              style={{
                fontWeight: "bold",
              }}
              label="System"
              icon={<SettingsSuggestIcon />}
            >
              <Item
                title="User"
                to="/admin/system/user"
                icon={<PersonIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/admin/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 0px 20px", fontWeight: "bold" }}
            >
              Reports
            </Typography>
            <Item
              title="Sales Report"
              to="/admin/sales-report"
              icon={<ReportIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Customer Report"
              to="/admin/customer-report"
              icon={<ReportIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;