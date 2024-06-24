import React from 'react'
import { Box, Button } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';

function PrivacyPolicy() {
    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Chính sách bảo mật</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography my={2} variant="h3" className="font-black text-black text-xl">Chính sách bảo mật</Typography>
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
                <Box mt={4} mb={5}>
                    <Typography variant="h5" gutterBottom>
                        <b>
                            1. Phạm vi thu thập thông tin
                        </b>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Việc cung cấp thông tin cá nhân của thành viên được thực hiện chủ yếu trực tiếp trên ứng dụng / website Galaxy Cinema trong quá trình thành viên đăng ký tài khoản và tương tác với Galaxy Cinema (Ví dụ, Galaxy Cinema sử dụng "cookies" giống như nhiều website khác để ghi nhận một số loại thông tin khi trình duyệt web của thành viên truy cập vào Galaxy Cinema hoặc các quảng cáo và các nội dung khác được hiển thị trên Galaxy Cinema, hoặc về Galaxy Cinema trên các website khác..) Các thông tin thu thập chủ yếu bao gồm: Họ tên, ngày tháng năm sinh, địa chỉ, số điện thoại, email, thông tin đăng nhập tài khoản (tên đăng nhập,, địa chỉ đăng nhập,...).
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Ngoài ra, khi tải ứng dụng Galaxy Cinema, ứng dụng sẽ yêu cầu người dùng cho phép truy cập thêm những thông tin trên thiết bị di động để cung cấp một số tính năng nâng cao. Sau khi nhận được thông báo, Khách hàng được quyền lựa chọn việc cho phép hay không cho phép thu thập thông qua cơ chế của ứng dụng.
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            2. Mục đích thu thập thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Galaxy Cinema thu thập thông tin cá nhân nhằm phục vụ cho các mục đích sau:
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemText primary="Duy Trì Tài Khoản: để tạo và duy trì tài khoản của thành viên, bao gồm cả các chương trình thành viên thân thiết hoặc các chương trình thưởng đi kèm với tài khoản của thành viên;" />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Đặt vé: Galaxy Cinema sẽ dựa trên thông tin thành viên cung cấp để đặt vé cho thành viên." />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Dịch Vụ Chăm Sóc Thành viên: để nhận và phản hồi cho các yêu cầu, khiếu nại và phản hồi của thành viên;" />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Cá Nhân Hóa: Galaxy Cinema có thể tổ hợp dữ liệu được thu thập để có một cái nhìn hoàn chỉnh hơn về từng thành viên và từ đó cho phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng không giới hạn..." />
                        </ListItem>
                    </List>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            3. Nguyên tắc thu thập và quản lí thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Thông tin cá nhân của thành viên trên ứng dụng Galaxy Cinema được Galaxy Cinema cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của Galaxy Cinema, phù hợp với quy định của Luật Bảo về quyền lợi người tiêu dùng. Việc thu thập và sử dụng thông tin của mỗi Thành viên chỉ được thực hiện khi có sự đồng ý của thành viên đó trừ những trường hợp pháp luật có quy định khác. Thành viên có quyền cung cấp thông tin cá nhân cho Galaxy Cinema và có thể thay đổi quyết định đó vào bất cứ lúc nào.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Mọi thông tin cá nhân do thành viên cung cấp sẽ được lưu giữ bởi Galaxy Cinema. Nhân viên và Đối tác của Galaxy Cinema trong quá trình thực hiện các mục đích nêu tại điều này có thể tiếp cận với thông tin của thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ được phép sử dụng thông tin của thành viên cho mục đích được chỉ định, không sử dụng cho mục đích của riêng họ (kể cả tiếp thị trực tiếp) trừ khi được thành viên đồng ý.
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            4. Trách nhiệm của thành viên trong quá trình cung cấp và quản lý thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Đảm bảo tính xác thực, đầy đủ, chính xác, và cập nhật thường xuyên đối với các thông tin cung cấp cho Galaxy Cinema và chịu trách nhiệm về tính pháp lý của những thông tin đó. Galaxy Cinema không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của Thành viên đó nếu xét thấy thông tin cá nhân thành viên đó cung cấp không chính xác.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Bảo mật thông tin và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Thông báo kịp thời cho Galaxy Cinema về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            5. Sử dụng thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Thông tin cá nhân thu thập được sử dụng chủ yếu để:
                    </Typography>

                    <List>
                        <ListItem >
                            <ListItemText primary="Xác minh thông tin tài khoản, xử lý giao dịch, bảo mật và hỗ trợ quản lí dịch vụ." />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Đảm bảo an toàn khi giao dịch và ngăn chặn lạm dụng." />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Cung cấp thông tin, chăm sóc khách hàng, và phản hồi khiếu nại từ thành viên." />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Cá Nhân Hóa: Galaxy Cinema có thể tổ hợp dữ liệu được thu thập để có một cái nhìn hoàn chỉnh hơn về từng thành viên và từ đó cho phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng không giới hạn..." />
                        </ListItem>
                    </List>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            6. Thời hạn lưu trữ thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Thông tin cá nhân của thành viên sẽ được lưu giữ cho đến khi thành viên yêu cầu xóa bỏ hoặc thực hiện hành động chấm dứt tài khoản, tuân theo quy định pháp lý có liên quan.
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        <b>
                            7. Đối tượng sử dụng thông tin
                        </b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Nhân viên, đối tác hoặc các nhà cung cấp dịch vụ độc lập có thể được cấp phép truy cập thông tin của thành viên, theo yêu cầu và để thực hiện các hoạt động giao dịch, đảm bảo tính bảo mật của thông tin.
                    </Typography>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default PrivacyPolicy