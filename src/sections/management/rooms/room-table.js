import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ModalDetail from "../../../components/modal-detail";
import ActionColumn from "../../../components/action-column";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import RoomEdit from "./room-edit";

const RoomTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditRoom, setOpenEditRoom] = useState(false);

    const handleOpenEditRoom = (param) => {
        setOpenEditRoom(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditRoom = () => {
        setOpenEditRoom(false);
    }

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }

    const rows = [
        {
            id: 1,
            stt: 1,
            name: "Epic Adventure",
            code: 2012000,
            capacity: 50,
            type: 'Type 1',
            cinemaName: 'Lotte Cinema',
            description: 'Phòng vip',
        },
        {
            id: 2,
            stt: 2,
            name: "Mystery Journey",
            code: 2012000,
            capacity: 50,
            type: 'Type 2',
            cinemaName: 'Lotte Cinema',
            description: "phòng siêu rộng",
        },
        {
            id: 3,
            stt: 3,
            name: "Tender Moments",
            code: 2012000,
            capacity: 50,
            type: 'Type 3',
            cinemaName: 'Lotte Cinema',
            description: "phòng siêu vip",
        },
        {
            id: 4,
            stt: 4,
            name: "Galactic Odyssey",
            code: 2012000,
            capacity: 50,
            type: 'Type 3',
            cinemaName: 'Lotte Cinema',
            description: "phòng siêu vip",
        },
        {
            id: 5,
            stt: 5,
            name: "Love in Bloom",
            code: 2012000,
            capacity: 50,
            type: 'Type 4',
            cinemaName: 'Lotte Cinema',
            description: "phòng siêu vip",
        },
        {
            id: 6,
            stt: 6,
            name: "Behind Closed Doors",
            code: 2012000,
            capacity: 50,
            type: 'Type 5',
            cinemaName: 'Lotte Cinema',
            description: "phòng siêu vip",
        },
    ]

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        { field: "name", headerName: "Room name", width: 150 },
        { field: "capacity", headerName: "Capacity", width: 120 },
        { field: "type", headerName: "Type", width: 120 },
        { field: "code", headerName: "Code", width: 130 },
        { field: "cinemaName", headerName: "CinemaName", width: 130 },
        { field: "description", headerName: "Description", width: 150 },
        {
            field: "action",
            headerName: "Action",
            headerAlign: "center",
            width: 250,
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent='center'
                    alignItems="center"
                    height="100%"
                >
                    <ActionColumn
                        handleViewDetail={handleViewDetail}
                        openDialogEdit={handleOpenEditRoom}
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
            <RoomEdit
                open={openEditRoom}
                onClose={handleCloseEditRoom}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default RoomTable;
