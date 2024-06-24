import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';

function TermsOfUse() {
    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">Thỏa thuận sử dụng</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography my={2} variant="h3" className="font-black text-black text-xl">Thỏa thuận sử dụng</Typography>
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
                    <Typography variant="body1" paragraph>
                        Chào mừng bạn đã đến với website của <b>Galaxy Cinema</b>. <b>Galaxy Cinema</b> cung cấp các sản phẩm và dịch vụ dựa trên những điều kiện dưới đây.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <b>Khi bạn sử dụng sản phẩm và dịch vụ do Galaxy Cinema cung cấp, bạn đồng ý với những điều khoản sử dụng sau. Vui lòng đọc kỹ các điều khoản dưới đây.</b>
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>1. Bản quyền</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Tất cả nội dung được hiển thị trên website và các sản phẩm liên quan <b>Galaxy Cinema</b> dưới bất kỳ hình thức nào như ký tự, hình ảnh, logo, video clip… là tài sản của <b>Galaxy Cinema</b> hoặc các đối tác cung cấp nội dung của <b>Galaxy Cinema</b>, được bảo vệ bởi luật pháp Việt Nam và các quy định bản quyền quốc tế. Sự biên soạn và hiển thị các nội dung này thông qua <b>Galaxy Cinema</b> là tài sản riêng của <b>Galaxy Cinema</b>.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>2. Quyền tự do</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Với điều kiện bạn tuân theo các <i>Thỏa thuận sử dụng</i> và các khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử dụng các dịch vụ của <b>Galaxy Cinema</b>. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của <b>Galaxy Cinema</b>; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu. <b>Galaxy Cinema</b> có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ <b>Galaxy Cinema</b>. Bạn có thể bị tước quyền truy cập vào <b>Galaxy Cinema</b> nếu bạn không tuân theo các <i>Thỏa thuận sử dụng</i> này.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>3. Tài khoản của bạn</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Nếu bạn sử dụng dịch vụ của <b>Galaxy Cinema</b>, bạn có trách nhiệm duy trì sự bảo mật tài khoản và mật khẩu của bạn, cũng như hạn chế sự truy cập vào máy tính cá nhân. Bạn cũng đồng ý chịu trách nhiệm cho tất cả các hoạt động phát sinh dưới tài khoản và mật khẩu của bạn. Bạn có trách nhiệm đảm bảo các bộ phim hoặc sản phẩm bạn mua từ <b>Galaxy Cinema</b> phù hợp với độ tuổi của bạn. <b>Galaxy Cinema</b> có quyền đơn phương từ chối cung cấp dịch vụ, đóng tài khoản cá nhân, xóa bỏ hoặc thay đổi nội dung, hoặc hủy đơn hàng của bạn.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>4. Bình luận, đánh giá và những nội dung khác</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Khách hàng có thể đăng tải các bình luận/ đánh giá/những nội dung khác và gửi các gợi ý/ ý tưởng/ bình luận/ câu hỏi hoặc những loại thông tin khác nếu như những thông tin này không chứa các nội dung bất hợp pháp, đồi trụy, đe dọa, phỉ báng, xâm phạm quyền riêng tư cá nhân, xâm phạm quyền sở hữu trí tuệ, những nội dung gây hại cho bên thứ ba hoặc những nội dung không phù hợp với thuần phong mỹ tục; không chứa virus, nội dung vận động chính trị, nội dung mang tính thương mại hoặc bất kỳ hình thức thư rác nào.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Khi bạn đăng tải thông tin hoặc gửi các loại tài liệu cho <b>Galaxy Cinema</b> thì <b>Galaxy Cinema</b> có toàn quyền sử dụng, sao chép, thay đổi, biên dịch, công bố, hiển thị nội dung đó cho tất cả mọi người dưới bất kỳ hình thức nào trừ trường hợp có thỏa thuận khác giữa <b>Galaxy Cinema</b> và người dùng. Đồng thời, bạn cũng cho phép <b>Galaxy Cinema</b> có quyền được sử dụng tên đi kèm với nội dung mà bạn gửi hoặc đăng tải. Bạn đảm bảo rằng bạn sở hữu và có toàn quyền sử dụng nội dung mà bạn đăng tải; rằng nội dung được đăng tải là chính xác; rằng việc sử dụng các nội dung bạn cung cấp không vi phạm <i>Thỏa thuận sử dụng</i> này và không gây hại cho bên thứ ba nào và rằng bạn sẽ bồi thường cho <b>Galaxy Cinema</b> nếu như có bất kỳ khiếu kiện nào phát sinh từ những nội dung mà bạn cung cấp. <b>Galaxy Cinema</b> có quyền nhưng không phải là nghĩa vụ kiểm soát và thay đổi hoặc xóa bỏ bất kỳ nội dung nào. <b>Galaxy Cinema</b> không chịu bất kỳ trách nhiệm pháp lý nào cho những nội dung được đăng tải từ người dùng hoặc bất kỳ bên thứ 3 nào.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>5. Thông tin phim, chương tình, sự kiện</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <b>Galaxy Cinema</b> luôn cố gắng cung cấp cho bạn những thông tin chính xác và đa chiều về các bộ phim có hệ thống phân phối vé thông qua <b>Galaxy Cinema</b>. Nếu vé bạn nhận được không tương ứng với chỗ ngồi bạn chọn khi đặt, bạn vui lòng liên hệ với nhân viên chăm sóc khách hàng của <b>Galaxy Cinema</b> để có thêm chi tiết theo email <Link to="mailto:supports@galaxy.com.vn" style={{ textDecoration: "none", color: "blue" }}>supports@galaxy.com.vn</Link> hoặc fanpage <b>Galaxy Cinema</b>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Tuy nhiên, <b>Galaxy Cinema</b> không chịu bất kỳ trách nhiệm nào liên quan đến mức độ yêu thích của bạn đối với bộ phim.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>6. Giá cả</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Trừ phi có ghi chú khác bằng văn bản, mức giá được hiển thị cho mỗi loại sản phẩm trên <b>Galaxy Cinema</b> là mức giá bán lẻ cuối cùng của sản phẩm.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Chúng tôi không cam kết mức giá của chỗ ngồi bạn đặt sẽ không thay đổi cho đến khi bạn đặt vé. Tuy nhiên, đối với những chỗ ngồi bị sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao hơn mức giá hiển thị trên <b>Galaxy Cinema</b>, thì chúng tôi sẽ liên lạc trực tiếp với bạn về vấn đề này.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>7. Tình trạng chỗ ngồi</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <b>Galaxy Cinema</b> cố gắng cung cấp cho bạn những chỗ ngồi tốt nhất có thể. Tuy nhiên, khi bạn tìm kiếm được chỗ ngồi vừa ý trên <b>Galaxy Cinema</b> và tiến hành đặt vé, thì chỗ ngồi đó có thể không còn trống vào thời điểm bạn đặt vé. Trong những trường hợp đó, <b>Galaxy Cinema</b> có quyền hủy vé đã đặt của bạn. Bạn có thể đặt lại chỗ ngồi khác tùy theo tình trạng chỗ ngồi còn trống tại thời điểm đó.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>8. Điều khoản chung</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Những điều kiện và điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh từ việc sử dụng dịch vụ sẽ được giải quyết bằng hình thức thương lượng tại <b>Galaxy Cinema</b>. Nếu không thương lượng được sẽ được giải quyết bằng con đường tòa án tại Việt Nam.
                    </Typography>

                    <Typography variant="h5" paragraph>
                        <b>9. Điều khoản bổ sung</b>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <b>Galaxy Cinema</b> có quyền thay đổi, điều chỉnh những điều khoản sử dụng này vào bất kỳ thời điểm nào. Mọi thay đổi đều có hiệu lực ngay khi được đăng tải trên website của <b>Galaxy Cinema</b>. Việc bạn tiếp tục sử dụng dịch vụ của <b>Galaxy Cinema</b> sau khi các thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận những thay đổi đó.
                    </Typography>
                </Box>
            </DetailLayout>
        </LayoutHeaderFooter>
    )
}

export default TermsOfUse