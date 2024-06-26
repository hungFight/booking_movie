import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';

function Answers() {

    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Giải đáp</Typography>
                    </Breadcrumbs>
                </Box>
                <span className="border-l-4 border-solid border-blue-800 mr-2"></span>
                <Typography my={2} variant="h3" className="text-xl inline-block uppercase font-black text-gray-700">Giải đáp</Typography>
                <Box>
                    <Tabs
                        value={1}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="tabs"
                        sx={{
                            paddingTop: 2
                        }}
                    >
                        <Link to="/admin/feedback"><Tab label="Góp ý" /></Link>
                        <Link to="/admin/answers"><Tab className='Mui-selected' label="Giải đáp" /></Link>
                    </Tabs>
                </Box>
                <Box mt={5}>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="#f58020" variant="h5">
                                Trường hợp tôi có nhiều tài khoản thành viên, tôi có thể tích các Star vào 1 tài khoản không?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Số Star của mỗi tài khoản sẽ không được tích gộp vào 1 tài khoản bạn nhé.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="#f58020" variant="h5">
                                Thẻ thành viên Star/G-Star/X-Star có hết hạn sử dụng không?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Sau khi đăng ký tài khoản thành viên, điểm tích lũy của bạn (Star) sẽ được sử dụng trong năm (tính từ ngày 01/01/2023 đến 31/12/2023), sau thời gian 01 năm, điểm tích lũy (Star) sẽ trừ khỏi tài khoản thành viên.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="#f58020" variant="h5">
                                Tôi có thể dùng tài khoản thành viên của mình để mua vé nhóm được không?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Chính sách thành viên áp dụng cho khách cá nhân, không áp dụng cho các chính sách Co-Sales nên bạn có thể lựa chọn theo nhu cầu để sử dụng
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="#f58020" variant="h5">
                                Tôi có thể hủy hoặc thay đổi thông tin của vé đã mua online được không?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Theo quy định của Galaxy vé đã mua thành công rồi thì không thể hủy/thay đổi thông tin được ạ. Tuy nhiên, trong trường hợp bạn không thể sắp xếp xem đúng suất chiếu mà bạn đã đặt nhầm, bạn vui lòng mang mã đặt vé đến trực tiếp tại rạp trước suất chiếu và liên hệ Ban quản lý để được hỗ trợ bạn nhé.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="#f58020" variant="h5">
                                Khi mua vé online tôi có được tích điểm hay không?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Khi bạn mua vé online trên Web/App của Galaxy, bạn vui lòng đăng nhập tài khoản thành viên của Galaxy để hệ thống tích điểm vào tài khoản của bạn nhé. Hệ thống Galaxy sẽ không tích điểm được khi bạn thực hiện mua vé online tại Web/App của 123Phim, Momo….
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box mt={3} className="text-center">
                    <Button
                        size='large'
                        variant='contained'
                        color='warning'
                    >
                        Xem thêm
                    </Button>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default Answers