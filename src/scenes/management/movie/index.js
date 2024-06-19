import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MovieTable from '../../../sections/management/movie/movie-table';
import { Link } from "react-router-dom";


const Movie = () => {
    return (
        <Box >
            <Box
                component="main"
                sx={ {
                    py: 6
                } }
            >
                <Container maxWidth="lg">
                    <Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginBottom="25px"
                        >
                            <Box>
                                <Header title="MOVIES" subtitle="List of Movie" />
                            </Box>
                            <Box>
                                <Link to='/admin/management/movie/add'>
                                    <Button
                                        startIcon={ (
                                            <SvgIcon fontSize="small">
                                                <AddCircleIcon />
                                            </SvgIcon>
                                        ) }
                                        variant="contained"
                                        sx={ {
                                            background: "#228B22",
                                            color: "white",
                                            "&: hover": {
                                                background: "#008000"
                                            }
                                        } }
                                    >
                                        Thêm
                                    </Button>
                                </Link>
                            </Box>
                        </Stack>
                        <MovieTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Movie;
