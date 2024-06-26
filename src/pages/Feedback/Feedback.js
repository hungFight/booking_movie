import React from 'react'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';

function Feedback() {
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Góp ý</Typography>
                    </Breadcrumbs>
                </Box>
                <span className="border-l-4 border-solid border-blue-800 mr-2"></span>
                <Typography my={2} variant="h3" className="text-xl inline-block uppercase font-black text-gray-700">Góp ý</Typography>
                <Box>
                    <Tabs
                        value={0}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="tabs"
                        sx={{
                            paddingTop: 2
                        }}
                    >
                        <Link to="/admin/feedback"><Tab className='Mui-selected' label="Góp ý" /></Link>
                        <Link to="/admin/answers"><Tab label="Giải đáp" /></Link>
                    </Tabs>
                </Box>
                <Box mt={3}>
                    <Typography variant="h3">
                        <b>Góp ý</b>
                    </Typography>
                    <Box className="my-5">
                        <Box className="mb-2">

                            <Link to="tel:19002224">

                                <Typography variant="subtitle1" className=" text-blue-600">
                                    <strong className="text-gray-800">HOTLINE hỗ trợ:</strong>19002224 (9:00 - 22:00)
                                </Typography>
                            </Link>
                        </Box>
                        <Box>

                            <Link to="mailto:hotro@galaxystudio.vn">
                                <Typography variant="subtitle1" className=" text-blue-600">
                                    <strong className="text-gray-800">Email:</strong> hotro@galaxystudio.vn
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body2" className="text-xs font-bold">
                                    Họ và tên
                                </Typography>
                                <TextField
                                    color="secondary"
                                    type="text"
                                    name="name"
                                    placeholder="Họ và tên"
                                    variant="outlined"
                                    fullWidth
                                    className="mt-1"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body2" className="text-xs font-bold">
                                    Email
                                </Typography>
                                <TextField
                                    color="secondary"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    fullWidth
                                    className="mt-1"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body2" className="text-xs font-bold">
                                    Số điện thoại
                                </Typography>
                                <TextField
                                    color="secondary"
                                    type="tel"
                                    name="phone"
                                    placeholder="Số điện thoại"
                                    variant="outlined"
                                    fullWidth
                                    className="mt-1"
                                />
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <TextField
                                color="secondary"
                                name="message"
                                id="note"
                                placeholder="Nội dung"
                                multiline
                                rows={5}
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Box className="text-end text-white mt-4">
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                size='large'
                                sx={{
                                    color: 'white'
                                }}
                            >
                                Gửi góp ý
                            </Button>
                        </Box>
                    </form>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default Feedback