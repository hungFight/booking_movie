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
import BillTicketEdit from "./bill-ticket-edit";

const BillTicketTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditBillTicket, setOpenEditBillTicket] = useState(false);

    const handleOpenEditBillTicket = (param) => {
        setOpenEditBillTicket(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditBillTicket = () => {
        setOpenEditBillTicket(false);
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
            billName: "Epic Adventure",
            ticketCode: 2012000,
            quantity: 5
        },
        {
            id: 2,
            stt: 2,
            billName: "Mystery Journey",
            ticketCode: 2012000,
            quantity: 5
        },
        {
            id: 3,
            stt: 3,
            billName: "Tender Moments",
            ticketCode: 2012000,
            quantity: 5
        },
        {
            id: 4,
            stt: 4,
            billName: "Galactic Odyssey",
            ticketCode: 2012000,
            quantity: 5
        },
        {
            id: 5,
            stt: 5,
            billName: "Love in Bloom",
            ticketCode: 2012000,
            quantity: 5
        },
        {
            id: 6,
            stt: 6,
            billName: "Behind Closed Doors",
            ticketCode: 2012000,
            quantity: 5
        },
    ]

    const columns = [
        { field: "stt", headerName: "STT", width: 60 },
        { field: "quantity", headerName: "Capacity", width: 150 },
        { field: "billName", headerName: "Bill name", width: 250 },
        { field: "ticketCode", headerName: "TicketCode", width: 180 },
        {
            field: "action",
            headerName: "Action",
            headerAlign: "center",
            width: 460,
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent='center'
                    alignItems="center"
                    height="100%"
                >
                    <ActionColumn
                        handleViewDetail={handleViewDetail}
                        openDialogEdit={handleOpenEditBillTicket}
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
            <BillTicketEdit
                open={openEditBillTicket}
                onClose={handleCloseEditBillTicket}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default BillTicketTable;
