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
import FormAddRoom from '../../../sections/management/rooms/room-add'

const AddRoom = () => {
    return (
        <Box>
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
                            <Stack>
                                <Header title="CREATE ROOM" subtitle="Create a new room" />
                            </Stack>
                            <div>
                                <Link href='/management/rooms'>
                                    <Button
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <ArrowLongLeftIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                        sx={{
                                            background: "#228B22",
                                            color: "white",
                                            "&: hover": {
                                                background: "#008000"
                                            },
                                            margin: '0px 6px'
                                        }}
                                    >
                                        Quay lại
                                    </Button>
                                </Link>
                            </div>
                        </Stack>
                        <FormAddRoom />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default AddRoom;