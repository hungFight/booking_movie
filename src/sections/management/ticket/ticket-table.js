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
import TicketEdit from "./ticket-edit";

const TicketTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditTicket, setOpenEditTicket] = useState(false);

    const handleOpenEditTicket = (param) => {
        setOpenEditTicket(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditTicket = () => {
        setOpenEditTicket(false);
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
            scheduleName: "Epic Adventure",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768,
        },
        {
            id: 2,
            stt: 2,
            scheduleName: "Mystery Journey",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768,
        },
        {
            id: 3,
            stt: 3,
            scheduleName: "Tender Moments",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768,
        },
        {
            id: 4,
            stt: 4,
            scheduleName: "Galactic Odyssey",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768,
        },
        {
            id: 5,
            stt: 5,
            scheduleName: "Love in Bloom",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768,
        },
        {
            id: 6,
            stt: 6,
            scheduleName: "Behind Closed Doors",
            seatNumber: 1,
            priceTicket: 20000,
            code: 1238664768
        },
    ]

    const columns = [
        { field: "stt", headerName: "STT", width: 60 },
        { field: "scheduleName", headerName: "Schedule name", width: 200 },
        { field: "code", headerName: "Code", width: 160 },
        { field: "seatNumber", headerName: "Seat Number", width: 160 },
        { field: "priceTicket", headerName: "Price Ticket", width: 160 },
        {
            field: "action",
            headerName: "Action",
            headerAlign: "center",
            width: 360,
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent='center'
                    alignItems="center"
                    height="100%"
                >
                    <ActionColumn
                        handleViewDetail={handleViewDetail}
                        openDialogEdit={handleOpenEditTicket}
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
            <TicketEdit
                open={openEditTicket}
                onClose={handleCloseEditTicket}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default TicketTable;
