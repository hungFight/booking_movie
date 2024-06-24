import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';
function AboutUs() {
    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Về chúng tôi</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography my={2} variant="h3" className="font-black text-black text-xl">Về chúng tôi</Typography>
                <Box mt={2}>
                    <Button
                        variant="contained"
                        startIcon={<ThumbUpIcon />}
                        size="small"
                        color="info"
                    >
                        Thích
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<ShareIcon />}
                        size="small"
                        color="info"
                        sx={{
                            mx: 1
                        }}
                    >
                        Chia sẻ</Button>
                    <Button
                        variant="contained"
                        startIcon={<VisibilityIcon />}
                        size="small"
                        color="grey"
                    >88780</Button>
                </Box>

                <Box mt={3}>
                    <Typography variant="body1" fontSize={15} mt={2} className="text-justify" >
                        Tính đến nay, <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Galaxy Cinema</Link> đã có gần 30 năm hình thành và phát triển, hệ thống <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>rạp chiếu phim</Link> đang có 20 cụm rạp trải khắp cả nước.
                        <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Galaxy Cinema</Link> trở thành điểm đến quen thuộc cho giới trẻ cả nước để tiếp cận nhanh nhất với các <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>phim hay phim mới</Link> không chỉ Việt Nam hay
                        Hollywood mà còn từ Hàn Quốc, Thái Lan, Nhật Bản…
                    </Typography>
                    <Typography variant="body1" fontSize={15} mt={2} className="text-justify">
                        Chẳng những nổi tiếng về chất lượng dịch vụ tốt, địa điểm đắc địa và nhân viên trẻ trung thân thiện,
                        Galaxy Cinema còn có nhiều chương trình khuyến mãi xuyên suốt năm và theo từng mùa phim. Mỗi tuần, rạp có chương trình <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Very Happy Day</Link> - giá vé chỉ từ 50k,
                        nâng cấp Combo 2 chỉ thêm 10k. Mỗi thứ 2 đầu tiên hằng tháng, ra rạp xem phim <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Ngày Tri Ân</Link> sẽ đồng giá vé và miễn phí châm thêm bắp nước.
                    </Typography>
                    <Typography variant="body1" fontSize={15} mt={2} className="text-justify">
                        Trở thành thành viên <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Galaxy Cinema</Link>, bạn sẽ nhận được hàng loạt đặc quyền. Ngoài tích Star đổi bắp nước, các G-Stars và X-Stars còn được miễn phí đổi vị bắp.
                        Mỗi năm, <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>Galaxy Cinema</Link> đều có chương trình tri ân siêu khủng cho các khách hàng thân thiết gồm nhiều phần quà,
                        vé miễn phí hay bắp nước miễn phí.
                    </Typography>
                    <Typography variant="body1">
                        <Link className="cursor-pointer" style={{ textDecoration: "none", color: "blue" }}>ĐẶT VÉ NGAY</Link> Và trải nghiệm
                    </Typography>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default AboutUs