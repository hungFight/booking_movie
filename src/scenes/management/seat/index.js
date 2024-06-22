import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SeatTable from '../../../sections/management/seat/seat-table';
import { Link } from "react-router-dom";


const Seat = () => {
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
                                <Header title="SEATS" subtitle="List of seat" />
                            </Box>
                            <Box>
                                <Link to='/admin/management/seat/add'>
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
                        <SeatTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Seat;
