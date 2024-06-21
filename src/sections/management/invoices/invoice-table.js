import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { Stack, Grid, Box, TextField, Button, InputAdornment } from "@mui/material";
import ModalDetail from "../../../components/modal-detail";
import ActionColumn from "../../../components/action-column";
import { Box, Stack, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import InvoiceEdit from "./invoice-edit";

const InvoiceTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditInvoice, setOpenEditInvoice] = useState(false);

    const handleOpenEditInvoice = (params) => {
        setOpenEditInvoice(true);
        setSelectedRow(params.row);
    }

    const handleCloseEditInvoice = () => {
        setOpenEditInvoice(false);
    }

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }

    const rows = [
        { id: 1, stt: 1, invoiceName: 'nguyenthib', tradingCode: 'Nguyễn Thị B', totalMoney: "0987654321", createTime: "2-1-2003", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 2, stt: 2, invoiceName: 'tranvanc', tradingCode: 'Trần Văn C', totalMoney: "0123456789", createTime: "30-4-1975", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 3, stt: 3, invoiceName: 'levand', tradingCode: 'Lê Anh D', totalMoney: "0765432109", createTime: "2-9-2023", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 4, stt: 4, invoiceName: 'phamthie', tradingCode: 'Phạm Thị E', totalMoney: "0345678901", createTime: "12-8-1009", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 5, stt: 5, invoiceName: 'hoangvanf', tradingCode: 'Hoàng Văn F', totalMoney: "0567890123", createTime: "12-09-1234", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 6, stt: 6, invoiceName: 'hoangvanf', tradingCode: 'Hoàng Văn F', totalMoney: "0567890123", createTime: "12-09-1234", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
        { id: 7, stt: 7, invoiceName: 'hoangvanf', tradingCode: 'Hoàng Văn F', totalMoney: "0567890123", createTime: "12-09-1234", customerName: "Van Tien", promotionName: "discount", billStatus: "paid" },
    ];

    const columns = [
        { field: "stt", headerName: "STT", width: 60 },
        { field: "invoiceName", headerName: "Tên hóa đơn", width: 120 },
        { field: "tradingCode", headerName: "Mã giao dịch", width: 100 },
        { field: "totalMoney", headerName: "Tổng tiền", width: 120 },
        { field: "customerName", headerName: "Tên khách hàng", width: 130 },
        { field: "promotionName", headerName: "Tên khuyến mãi", width: 130 },
        { field: "billStatus", headerName: "Trạng thái hóa đơn", width: 110 },
        { field: "createTime", headerName: "Ngày tạo", width: 170 },
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
                        openDialogEdit={handleOpenEditInvoice}
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
            <InvoiceEdit
                open={openEditInvoice}
                onClose={handleCloseEditInvoice}
                rowData={selectedRow}
            />
        </Stack>
    );
}

export default InvoiceTable;
