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
import MovieEdit from "./movie-edit";
import movie from "~/restfulAPI/movie";
import moment from "moment";

const MovieTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [rows, setRows] = useState([]);
    const [openEditMovie, setOpenEditMovie] = useState(false);

    const handleOpenEditMovie = (param) => {
        setOpenEditMovie(true);
        setSelectedRow(param.row)
    }

    const handleCloseEditMovie = () => {
        setOpenEditMovie(false);
    }

    const handleViewDetail = (params) => {
        setSelectedRow(params.row); //lay gia tri cua dong do 
        setIsModalDetailOpen(true);
    }

    const handleCloseDetail = () => {
        setIsModalDetailOpen(false);
    }
    const handleDelete = async (params) => {
        console.log(params, 'params');
        const res = await movie.deleteById(params.id)
        if (res) getMoive()
    }
    async function getMoive() {
        const res = await movie.getAll()
        if (res) setRows(() => {
            return res.map((r, index) => {
                return { ...r, id: r.id, stt: index + 1, movieType: r.movieType, image: `http://localhost:8081/api/movie/images?imageName=${ r.image }`, premiereDate: moment(r?.premiereDate).format('DD-MM-YYYY') }
            })
        })
    }
    React.useEffect(() => {

        getMoive()
    }, [])


    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        {
            field: "image",
            headerName: "Image",
            width: 80,
            // headerAlign: "center",
            renderCell: (params) => {
                console.log(params, 'params');
                return <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    height="100%"
                >

                    <img
                        src={ params.value }
                        alt="image"
                        className="object-cover"
                        style={ {
                            height: 40,
                            width: 40,
                            borderRadius: '20%',
                            // display: 'block',
                        } }
                    />
                </Box>
            }
        },
        { field: "name", headerName: "Movie name", width: 130 },
        { field: "movieDuration", headerName: "Movie duration(minutes)", width: 80 },
        { field: "endTime", headerName: "End time", width: 130 },
        { field: "premiereDate", headerName: "Premiere Date", width: 130 },
        { field: "director", headerName: "Director", width: 130 },
        { field: "movieType", headerName: "MovieType", width: 100 },
        { field: "description", headerName: "Description", width: 240 },
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
                        handleViewDetail={ handleViewDetail }
                        openDialogEdit={ handleOpenEditMovie }
                        params={ params }
                        handleDelete={ () => handleDelete(params) }
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
            { openEditMovie && <MovieEdit
                open={ openEditMovie }
                onClose={ handleCloseEditMovie }
                rowData={ selectedRow }
            /> }
        </Stack>
    );
}

export default MovieTable;
