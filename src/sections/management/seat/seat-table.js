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
import seat from "~/restfulAPI/seat";
// import ScheduleEdit from "./schedule-edit";

const SeatTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditSchedule, setOpenEditSchedule] = useState(false);
    const [rows, setRows] = useState([]);

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
    async function getAll() {
        const res = await seat.getAll()
        setRows(res.map((r, index) => {
            return { ...r, stt: index + 1, seatStatus: r.seatStatus.nameStatus, roomName: r.room.name, cinemaName: r.room.cinema?.nameOfCinema }
        }))
    }
    React.useEffect(() => {
        getAll()
    }, [])
    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        { field: "number", headerName: "Seat Number", width: 170 },
        { field: "seatStatus", headerName: "Seat Status", width: 160 },
        { field: "line", headerName: "Line", width: 160 },
        { field: "roomName", headerName: "Room Name", width: 150 },
        { field: "cinemaName", headerName: "Cinema Name", width: 150 },
        { field: "seatType", headerName: "Seat Type", width: 150 },
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
                        handleViewDetail={ handleViewDetail }
                        openDialogEdit={ handleOpenEditSchedule }
                        params={ params }
                    // handleDelete={() => handleDelete(params.row)}
                    />
                </Box>
            ),
        },
    ];
    return (
        <Stack>
            <DataGrid
                sx={ {
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
                        color: `${ colors.greenAccent[200] } !important`,
                    },
                } }
                rows={ rows }
                columns={ columns }
                initialState={ {
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                } }

                pageSizeOptions={ [5, 10] }
                checkboxSelection
            />
            <ModalDetail
                open={ isModalDetailOpen }
                onClose={ handleCloseDetail }
                rowData={ selectedRow }
                columns={ columns }
            />
            {/* <ScheduleEdit
                open={ openEditSchedule }
                onClose={ handleCloseEditSchedule }
                rowData={ selectedRow }
            /> */}
        </Stack>
    );
}

export default SeatTable;
