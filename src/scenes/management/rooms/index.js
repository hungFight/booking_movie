import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RoomTable from '../../../sections/management/rooms/room-table';
import { Link } from "react-router-dom";


const Room = () => {
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
                                <Header title="ROOMS" subtitle="List of room" />
                            </Box>
                            <Box>
                                <Link to='/management/rooms/add'>
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
                        <RoomTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Room;
