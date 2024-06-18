import Header from "../../../components/Header";
import {
    Box,
    Container,
    Stack,
    Button,
    SvgIcon
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BillTicketTable from '../../../sections/management/billTicket/bill-ticket-table';
import { Link } from "react-router-dom";


const BillTicket = () => {
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
                                <Header title="BillTickets" subtitle="List of bill ticket" />
                            </Box>
                            
                        </Stack>
                        <BillTicketTable />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default BillTicket;
