import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CinemaTable from '../../../sections/management/cinema/cinema-table';
import { Link } from "react-router-dom";


const Cinema = () => {
    return (
        <Box >
            <Box
                component="main"
                sx={{
                    py: 6
                }}
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
                                <Header title="CINEMAS" subtitle="List of cinema" />
                            </Box>
                            <Box>
                                <Link to='/management/cinema/add'>
                                    <Button
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <AddCircleIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                        sx={{
                                            background: "#228B22",
                                            color: "white",
                                            "&: hover": {
                                                background: "#008000"
                                            }
                                        }}
                                    >
                                        Thêm
                                    </Button>
                                </Link>
                            </Box>
                        </Stack>
                        <CinemaTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Cinema;
