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

function OperatingRegulations() {
    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Quy chế hoạt động</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography my={2} variant="h3" className="font-black text-black text-xl">Quy chế hoạt động</Typography>
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
                    <Typography variant="body1" gutterBottom>
                        Xin vui lòng đọc quy chế hoạt động và điều khoản sử dụng trước khi bạn chính thức sử dụng <strong>Galaxy Cinema</strong>.
                        Khi bạn tiếp tục truy cập và sử dụng website này và các sản phẩm liên quan đến <strong>Galaxy Cinema</strong> có nghĩa là bạn đã đồng ý
                        và chấp nhận quy chế hoạt động và điều khoản sử dụng. Nếu bạn không đồng ý, vui lòng không sử dụng website hay bất kỳ sản phẩm nào của <strong>Galaxy Cinema</strong>.
                    </Typography>

                    <Typography variant="h5" gutterBottom mt={2}>
                        <b>
                            1. Chấp nhận và đồng ý các điều khoản sử dụng
                        </b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Chào mừng và cám ơn bạn đã chọn sử dụng dịch vụ của <strong>Galaxy Cinema</strong>. Khi đã sử dụng website và các sản phẩm liên quan đến <strong>Galaxy Cinema</strong> đồng nghĩa với việc bạn đã chấp nhận và đồng ý với những ràng buộc về mặt pháp lý, và tuân thủ theo quy chế hoạt động và điều khoản sử dụng của website.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Galaxy Cinema</strong> có quyền thay đổi, bổ sung quy chế hoạt động và điều khoản sử dụng trên website và các sản phẩm liên quan vào bất cứ lúc nào. Người sử dụng có trách nhiệm cập nhật và theo dõi những thay đổi mới nhất trên website <strong>Galaxy Cinema</strong>. Nếu bạn không đồng ý với những thay đổi mới nhất, bạn có quyền yêu cầu ngưng sử dụng tài khoản tại website và các sản phẩm liên quan của <strong>Galaxy Cinema</strong>.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Tài khoản của bạn trên <strong>Galaxy Cinema</strong> không dùng để trao đổi, mua bán với mục đích thương mại.
                    </Typography>

                    <Typography variant="h5" gutterBottom mt={2}>
                        <b>
                            2. Tạo tài khoản và chế độ bảo mật
                        </b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Khi đăng ký tham gia <strong>Galaxy Cinema</strong>, bạn vui lòng:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Cung cấp những thông tin chính xác, đầy đủ theo bản đăng ký mẫu của Galaxy Cinema." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Duy trì và cập nhật những thông tin, thay đổi mới nhất một cách chính xác và đầy đủ." />
                        </ListItem>
                    </List>
                    <Typography variant="body1" gutterBottom>
                        Sự không chính xác của những thông tin bạn cung cấp có thể làm bạn không tận dụng được hết những sản phẩm và dịch vụ <strong>Galaxy Cinema</strong> cung cấp. Trong một số trường hợp đặc biệt, <strong>Galaxy Cinema</strong> có quyền từ chối cung cấp dịch vụ cho bạn và đình chỉ tài khoản của bạn vào thời điểm hiện tại và trong tương lai nếu những thông tin mà bạn cung cấp không chính xác hoặc <strong>Galaxy Cinema</strong> có lý do nghi ngờ tính trung thực của những thông tin mà bạn cung cấp.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Chúng tôi sẽ không sử dụng những thông tin cá nhân của bạn nếu chưa được sự cho phép của bạn. Bạn có thể yên tâm rằng khi bạn cung cấp thông tin cho <strong>Galaxy Cinema</strong>, thông tin của bạn luôn được bảo mật tuyệt đối. Thông tin của bạn chỉ được sử dụng với mục đích gửi thông báo cho bạn về phim ảnh, các chương trình khuyến mãi… <strong>Galaxy Cinema</strong> cam kết sẽ không tiết lộ thông tin của bạn cho một bên thứ ba mà không có sự đồng ý, ngoại trừ yêu cầu cung cấp bởi pháp luật.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Quyền truy cập và sử dụng tài khoản chỉ dành riêng cho cá nhân có thẩm quyền. Mọi hành vi cố ý truy cập trái phép đều có thể bị truy tố.
                    </Typography>

                    <Typography variant="h5" gutterBottom mt={2}>
                        <b>
                            3. Sự cố phát sinh
                        </b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Khi đã sử dụng dịch vụ của <strong>Galaxy Cinema</strong>, bạn đã chấp nhận một số sự cố có thể phát sinh trong quá trình truy cập và đồng ý rằng <strong>Galaxy Cinema</strong> và các đối tác liên quan sẽ không chịu trách nhiệm pháp lý về những thất thoát, thiệt hại xảy ra một cách trực tiếp hay gián tiếp trong khi truy cập vào website và các sản phẩm liên quan, khi tải dữ liệu, không loại trừ những tổn hại do virus, những tác động ảnh hưởng đến hệ thống máy tính, đường dây điện thoại, huỷ hoại các chương trình phần cứng, phần mềm, các trở ngại của đường truyền máy vi tính hoặc kết nối mạng.
                    </Typography>

                    <Typography variant="h5" gutterBottom mt={2}>
                        <b>
                            4. Ý kiến, bình luận, tranh chấp của người sử dụng
                        </b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Galaxy Cinema</strong> không chịu trách nhiệm sàng lọc, chỉnh sửa hoặc giám sát nội dung được người sử dụng đăng tải lên website và các sản phẩm liên quan, cũng như không thể đảm bảo tính chính xác của những ý kiến, bình luận này. Nếu nhận được thông tin về những vi phạm, gây tổn hại hoặc bất hợp pháp, <strong>Galaxy Cinema</strong> có quyền điều tra những cáo buộc trên để xác minh, và có quyền quyết định chấm dứt cung cấp dịch vụ đối với thành viên vi phạm những điều khoản sử dụng.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Mặc dù đã có những quy định nêu trên, nhưng <strong>Galaxy Cinema</strong> cũng như những cá thể, tập thể liên quan không thể bảo đảm có thể chỉnh sửa hoặc xoá bỏ lập tức những nội dung vi phạm. Cũng như chúng tôi không phải chịu trách nhiệm pháp lý đối với những nội dung do người dùng đăng tải trên <strong>Galaxy Cinema</strong>. Đồng thời, bạn cũng có trách nhiệm cho mối liên hệ giữa bạn và những người dùng khác. <strong>Galaxy Cinema</strong> có quyền, nhưng không có nghĩa vụ theo dõi các tranh chấp giữa các người dùng với nhau.
                    </Typography>

                    <Typography variant="h5" gutterBottom mt={2}>
                        <b>
                            5. Ngưng cung cấp dịch vụ
                        </b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Galaxy Cinema</strong> có quyền ngưng cung cấp dịch vụ cho người dùng nếu vi phạm những điều sau đây:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Thông tin bạn cung cấp không chính xác, không đầy đủ, không trung thực, hoặc galaxycine.vn có căn cứ để nghi ngờ độ chính xác của thông tin." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Đăng tải lên website và các sản phẩm liên quan những nội dung không phù hợp như những nội dung có tính chất khiêu dâm, đồi truỵ, phỉ báng, thô tục, gây hiểu lầm, hoặc phạm pháp." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Quấy rối, đe doạ hoặc phân biệt một cá nhân hoặc một tập thể vì lý do giới tính, tôn giáo, khuynh hướng tình dục, chủng tộc, dân tộc, tuổi tác hoặc khuyết tật." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='"Spam", quảng cáo trái phép hoặc bất kỳ hình thức xổ số, bài bạc nào.' />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Sử dụng tài khoản cá nhân với mục đích thương mại." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Vi phạm những điều khoản khác của Galaxy Cinema." />
                        </ListItem>
                    </List>
                    <Typography variant="body1" gutterBottom>
                        <strong>Galaxy Cinema</strong> không chịu trách nhiệm với những nội dung do thành viên đăng tải và sẽ cung cấp những nội dung này cho các cơ quan có thẩm quyền trong trường hợp cần thiết.
                    </Typography>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default OperatingRegulations