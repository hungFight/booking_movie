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
import room from "~/restfulAPI/room";

const RoomTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditRoom, setOpenEditRoom] = useState(false);
    const [rows, setRows] = useState([]);

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
    const handleDelete = async (data) => {
        console.table(data, 'data')
        const res = await room.deleteById(data.id)
        if (res) setRows(pre => pre.filter((r, index) => r.id !== data.id))
    }
    async function getAll() {
        const res = await room.getAll()
        setRows(res.map((r, index) => {
            return { ...r, stt: index + 1, cinemaName: r.cinema.nameOfCinema }
        }))
    }
    React.useEffect(() => {
        getAll()
    }, [])


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
                        handleViewDetail={ handleViewDetail }
                        openDialogEdit={ handleOpenEditRoom }
                        params={ params }
                    
                        handleDelete={ () => handleDelete(params.row) }
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
            <RoomEdit
                getAll={ getAll }
                open={ openEditRoom }
                onClose={ handleCloseEditRoom }
                rowData={ selectedRow }
            />
        </Stack>
    );
}

export default RoomTable;
