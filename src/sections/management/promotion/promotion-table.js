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
import PromotionEdit from "./promotion-edit";

const PromotionTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditPromotion, setOpenEditPromotion] = useState(false);

    const handleOpenEditPromotion = (param) => {
        setOpenEditPromotion(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditPromotion = () => {
        setOpenEditPromotion(false);
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
            promotionName: "Epic Adventure",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
        {
            id: 2,
            stt: 2,
            promotionName: "Mystery Journey",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
        {
            id: 3,
            stt: 3,
            promotionName: "Tender Moments",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
        {
            id: 4,
            stt: 4,
            promotionName: "Galactic Odyssey",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
        {
            id: 5,
            stt: 5,
            promotionName: "Love in Bloom",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
        {
            id: 6,
            stt: 6,
            promotionName: "Behind Closed Doors",
            percent: 20,
            quantity: 5,
            type: "phần trăm",
            startTime: "22-12-2023",
            endTime: "07-06-2024",
            rankCustomerName: "Vàng",
            description: "đây là rạp chiếu phim lớn nhất Hà Nội"
        },
    ]

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        { field: "promotionName", headerName: "Promotion name", width: 150 },
        { field: "percent", headerName: "Percent", width: 90 },
        { field: "type", headerName: "Type", width: 100 },
        { field: "quantity", headerName: "Quantity", width: 80 },
        { field: "startTime", headerName: "StartTime", width: 100 },
        { field: "endTime", headerName: "EndTime", width: 100 },
        { field: "rankCustomerName", headerName: "RankCustomerName", width: 120 },
        { field: "description", headerName: "Description", width: 150 },
        {
            field: "action",
            headerName: "Action",
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
                        openDialogEdit={handleOpenEditPromotion}
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
            <PromotionEdit
                open={openEditPromotion}
                onClose={handleCloseEditPromotion}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default PromotionTable;
