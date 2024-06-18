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
import ScheduleEdit from "./schedule-edit";

const ScheduleTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditSchedule, setOpenEditSchedule] = useState(false);

    const handleOpenEditSchedule = (param) => {
        setOpenEditSchedule(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditSchedule = () => {
        setOpenEditSchedule(false);
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
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: '2023-05-01T20:00:00',
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
        {
            id: 2,
            stt: 2,
            name: "Mystery Journey",
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: "2023-05-02T21:30:00",
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
        {
            id: 3,
            stt: 3,
            name: "Tender Moments",
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: "2023-05-03T18:45:00",
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
        {
            id: 4,
            stt: 4,
            name: "Galactic Odyssey",
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: "2023-05-04T17:15:00",
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
        {
            id: 5,
            stt: 5,
            name: "Love in Bloom",
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: "2023-05-05T19:30:00",
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
        {
            id: 6,
            stt: 6,
            name: "Behind Closed Doors",
            code: 1238664768,
            startTime: '2023-05-01T20:00:00',
            endTime: "2023-05-06T22:00:00",
            movieName: "Đảo Hải Tặc",
            roomName: "Phòng vip"
        },
    ]

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        { field: "name", headerName: "Schedule name", width: 130 },
        { field: "code", headerName: "Code", width: 120 },
        { field: "startTime", headerName: "StartTime", width: 150 },
        { field: "endTime", headerName: "EndTime", width: 150 },
        { field: "movieName", headerName: "MovieName", width: 120 },
        { field: "roomName", headerName: "RoomName", width: 120 },
        {
            field: "action",
            headerName: "Action",
            headerAlign: "center",
            width: 260,
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent='center'
                    alignItems="center"
                    height="100%"
                >
                    <ActionColumn
                        handleViewDetail={handleViewDetail}
                        openDialogEdit={handleOpenEditSchedule}
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
            <ScheduleEdit
                open={openEditSchedule}
                onClose={handleCloseEditSchedule}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default ScheduleTable;
