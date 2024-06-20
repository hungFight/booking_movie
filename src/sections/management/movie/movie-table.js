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
                return { ...r, id: r.id, stt: index + 1, movieType: r.movieType.movieTypeName, image: r.heroImage }
            })
        })
    }
    React.useEffect(() => {

        getMoive()
    }, [])

    // const rows = [
    //     {
    //         id: 1,
    //         stt: 1,
    //         movieDuration: 120,
    //         endTime: '2023-05-01T20:00:00',
    //         premiereDate: "15-01-2024",
    //         description: "An epic adventure",
    //         director: "John Doe",
    //         image: "https://example.com/image1.jpg",
    //         movieType: "Kinh dị",
    //         name: "Epic Adventure",
    //     },
    //     {
    //         id: 2,
    //         stt: 2,
    //         image: "https://source.unsplash.com/random?wallpapers",
    //         movieDuration: 150,
    //         endTime: "2023-05-02T21:30:00",
    //         premiereDate: "02-04-2024",
    //         description: "A mysterious thriller",
    //         director: "Jane Smith",
    //         image: "https://example.com/image2.jpg",
    //         movieType: "Kinh dị",
    //         name: "Mystery Journey",
    //     },
    //     {
    //         id: 3,
    //         stt: 3,
    //         image: "https://source.unsplash.com/random?wallpapers",
    //         movieDuration: 110,
    //         endTime: "2023-05-03T18:45:00",
    //         premiereDate: "15-04-2024",
    //         description: "A heartwarming drama",
    //         director: "Michael Johnson",
    //         image: "https://example.com/image3.jpg",
    //         movieType: "Kinh dị",
    //         name: "Tender Moments",
    //     },
    //     {
    //         id: 4,
    //         stt: 4,
    //         image: "https://source.unsplash.com/random?wallpapers",
    //         movieDuration: 100,
    //         endTime: "2023-05-04T17:15:00",
    //         premiereDate: "10-07-2023",
    //         description: "A sci-fi adventure",
    //         director: "David Lee",
    //         image: "https://example.com/image4.jpg",
    //         movieType: "Kinh dị",
    //         name: "Galactic Odyssey",
    //     },
    //     {
    //         id: 5,
    //         stt: 5,
    //         image: "https://source.unsplash.com/random?wallpapers",
    //         movieDuration: 130,
    //         endTime: "2023-05-05T19:30:00",
    //         premiereDate: "10-07-2023",
    //         description: "A romantic comedy",
    //         director: "Emily Brown",
    //         image: "https://example.com/image5.jpg",
    //         movieType: "Kinh dị",
    //         name: "Love in Bloom",
    //     },
    //     {
    //         id: 6,
    //         stt: 6,
    //         image: "https://source.unsplash.com/random?wallpapers",
    //         movieDuration: 140,
    //         endTime: "2023-05-06T22:00:00",
    //         premiereDate: "20-04-2024",
    //         description: "A gripping thriller",
    //         director: "Alex Turner",
    //         image: "https://example.com/image6.jpg",
    //         movieType: "Kinh dị",
    //         name: "Behind Closed Doors",
    //     },
    // ]

    const columns = [
        { field: "stt", headerName: "STT", width: 50 },
        {
            field: "image",
            headerName: "Image",
            width: 80,
            // headerAlign: "center",
            renderCell: (params) => (
                <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    height="100%"
                >

                    <img
                        src="https://source.unsplash.com/random?wallpapers"
                        alt="image"
                        style={ {
                            height: 40,
                            width: 40,
                            borderRadius: '20%',
                            // display: 'block',
                        } }
                    />
                </Box>
            )
        },
        { field: "name", headerName: "Movie name", width: 130 },
        { field: "movieDuration", headerName: "Movie duration(minutes)", width: 80 },
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
            <MovieEdit
                open={ openEditMovie }
                onClose={ handleCloseEditMovie }
                rowData={ selectedRow }
            />
        </Stack>
    );
}

export default MovieTable;
