import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PromotionTable from '../../../sections/management/promotion/promotion-table';
import { Link } from "react-router-dom";


const Promotion = () => {
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
                                <Header title="PROMOTIONS" subtitle="List of promotion" />
                            </Box>
                            <Box>
                                <Link to='/management/promotion/add'>
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
                        <PromotionTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Promotion;
