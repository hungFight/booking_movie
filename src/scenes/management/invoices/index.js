import Header from '../../../components/Header';
import {
  Box,
  Container,
  Stack,
} from '@mui/material';
import InvoiceTable from '../../../sections/management/invoices/invoice-table';

const Invoices = () => {

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
                <Header title="INVOICES" subtitle="List of invoice" />
              </Box>
            </Stack>
            <InvoiceTable />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Invoices;