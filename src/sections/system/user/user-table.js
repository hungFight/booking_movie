import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { Stack, Grid, Box, TextField, Button, InputAdornment } from "@mui/material";
import ModalDetail from "../../../components/modal-detail";
import ActionColumn from "../../../components/action-column";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import UserEdit from "./user-edit";

const UserTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditUser, setOpenEditUser] = useState(false);

    const handleOpenEditUser = (params) => {
        setOpenEditUser(true);
        setSelectedRow(params.row);
    }

    const handleCloseEditUser = () => {
        setOpenEditUser(false);
    }

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }

    const rows = [
        { id: 1, stt: 1, image: "https://source.unsplash.com/random?wallpapers", userName: 'nguyenthib', contactPersonName: 'Nguyễn Thị B', email: 'nguyenthib@example.com', phoneNumber: "0987654321", dateOfBirth: "2-1-2003" },
        { id: 2, stt: 2, image: "https://source.unsplash.com/random?wallpapers", userName: 'tranvanc', contactPersonName: 'Trần Văn C', email: 'tranvanc@example.com', phoneNumber: "0123456789", dateOfBirth: "30-4-1975" },
        { id: 3, stt: 3, image: "https://source.unsplash.com/random?wallpapers", userName: 'levand', contactPersonName: 'Lê Anh D', email: 'leanhd@example.com', phoneNumber: "0765432109", dateOfBirth: "2-9-2023" },
        { id: 4, stt: 4, image: "https://source.unsplash.com/random?wallpapers", userName: 'phamthie', contactPersonName: 'Phạm Thị E', email: 'phamthie@example.com', phoneNumber: "0345678901", dateOfBirth: "12-8-1009" },
        { id: 5, stt: 5, image: "https://source.unsplash.com/random?wallpapers", userName: 'hoangvanf', contactPersonName: 'Hoàng Văn F', email: 'hoangvanf@example.com', phoneNumber: "0567890123", dateOfBirth: "12-09-1234" },
        { id: 6, stt: 6, image: "https://source.unsplash.com/random?wallpapers", userName: 'hoangvanf', contactPersonName: 'Hoàng Văn F', email: 'hoangvanf@example.com', phoneNumber: "0567890123", dateOfBirth: "12-09-1234" },
        { id: 7, stt: 7, image: "https://source.unsplash.com/random?wallpapers", userName: 'hoangvanf', contactPersonName: 'Hoàng Văn F', email: 'hoangvanf@example.com', phoneNumber: "0567890123", dateOfBirth: "12-09-1234" },
    ];

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        {
            field: "image",
            headerName: "Image",
            width: 80,
            // headerAlign: "center",
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    height="100%"
                >

                    <img
                        src="https://source.unsplash.com/random?wallpapers"
                        alt="image"
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: '20%',
                            // display: 'block',
                        }}
                    />
                </Box>
            )
        },
        { field: "userName", headerName: "Tên người dùng", width: 140 },
        { field: "contactPersonName", headerName: "Họ và tên", width: 150 },
        { field: "email", headerName: "Email", width: 250 },
        { field: "phoneNumber", headerName: "Số điện thoại", width: 120 },
        { field: "dateOfBirth", headerName: "Ngày sinh", width: 150 },
        {
            field: "action",
            headerName: "Thao tác",
            headerAlign: "center",
            width: 160,
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent='center'
                    alignItems="center"
                    height="100%"
                >
                    <ActionColumn
                        handleViewDetail={handleViewDetail}
                        openDialogEdit={handleOpenEditUser}
                        params={params}
                    // handleDelete={() => handleDelete(params.row)}
                    />

                </Box>
            ),
        },
    ];
    return (
        <Stack>
            <DataGrid
                sx={{
                    "& .name-column--cell": {
                        // color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        // backgroundColor: colors.primary[500],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}

                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            <ModalDetail
                open={isModalDetailOpen}
                onClose={handleCloseDetail}
                rowData={selectedRow}
                columns={columns}
            />
            <UserEdit
                open={openEditUser}
                onClose={handleCloseEditUser}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default UserTable;
