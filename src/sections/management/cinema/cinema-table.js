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
import CinemaEdit from "./cinema-edit";
import cinema from "~/restfulAPI/cinema";

const CinemaTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openEditCinema, setOpenEditCinema] = useState(false),
        [rows, setRows] = useState([])

    const handleOpenEditCinema = (param) => {
        setOpenEditCinema(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditCinema = () => {
        setOpenEditCinema(false);
    }

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }
    React.useEffect(() => {
        async function getAll() {
            const res = await cinema.getAll()
            setRows(res.map((r, index) => {
                return { ...r, stt: index + 1 }
            }))
        }
        getAll()
    }, [])
    const columns = [
        { field: "stt", headerName: "STT", width: 60 },
        { field: "nameOfCinema", headerName: "Cinema name", width: 170 },
        { field: "code", headerName: "Code", width: 170 },
        { field: "address", headerName: "Address", width: 170 },
        { field: "description", headerName: "Description", width: 170 },
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
                        handleViewDetail={ handleViewDetail }
                        openDialogEdit={ handleOpenEditCinema }
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
            <CinemaEdit
                open={ openEditCinema }
                onClose={ handleCloseEditCinema }
                rowData={ selectedRow }
            />
        </Stack>
    );
}

export default CinemaTable;
