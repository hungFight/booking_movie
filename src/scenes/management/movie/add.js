import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon,
    Link
} from '@mui/material';
import Header from '../../../components/Header';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import FormAddMovie from '../../../sections/management/movie/movie-add'

const AddMovie = () => {
    return (
        <Box>
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
                            <Stack>
                                <Header title="CREATE MOVIE" subtitle="Create a new movie" />
                            </Stack>
                            <div>
                                <Link href='/admin/management/movie'>
                                    <Button
                                        startIcon={ (
                                            <SvgIcon fontSize="small">
                                                <ArrowLongLeftIcon />
                                            </SvgIcon>
                                        ) }
                                        variant="contained"
                                        sx={ {
                                            background: "#228B22",
                                            color: "white",
                                            "&: hover": {
                                                background: "#008000"
                                            },
                                            margin: '0px 6px'
                                        } }
                                    >
                                        Quay lại
                                    </Button>
                                </Link>
                            </div>
                        </Stack>
                        <FormAddMovie />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default AddMovie;
