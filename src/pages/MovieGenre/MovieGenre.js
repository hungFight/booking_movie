import { FavoriteRounded, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, List, ListItem, Pagination, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import { Select } from "antd";
import { Link } from "react-router-dom";
import DetailLayout from "~/app/Layout/LayoutDetail/DetailLayout";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";

function MovieGenre() {
    const genreOptions = [
        { value: 1, label: "Comic" },
        { value: 2, label: "Wars" },
        { value: 3, label: "Romatic" },
        { value: 4, label: "History" },
        { value: 5, label: "Sports" },
        { value: 6, label: "Horror" },
    ]
    const countryOptions = [
        { value: 1, label: "Viet Nam" },
        { value: 2, label: "Japan" },
        { value: 3, label: "American" },
        { value: 4, label: "England" },
        { value: 5, label: "Mexico" },
        { value: 6, label: "China" },
    ]
    const yearOptions = [
        { value: 1, label: "2024" },
        { value: 2, label: "2023" },
        { value: 3, label: "2022" },
        { value: 4, label: "2021" },
        { value: 5, label: "2020" },
        { value: 6, label: "1999" },
    ]
    const statusOptions = [
        { value: 1, label: "Showing/Coming Soon" },
        { value: 2, label: "Showing" },
        { value: 3, label: "Coming Soon" },
    ]

    const filterOptions = [
        { value: 1, label: "Most view" },
        { value: 2, label: "Newest" },
        { value: 3, label: "Best reviews" },
    ]

    const blogs = [
        {
            thumb: "https://www.galaxycine.vn/media/2019/4/10/640wx396h_1554864314405.jpg",
            title: "Avengers: Endgame",
            introduceContent: "Cú búng tay của Thanos đã khiến toàn bộ dân số biến mất một nửa. Các siêu anh hùng đánh mất bạn bè, người thân và đánh mất cả chính mình. Bộ sáu Avengers đầu tiên tứ tán. Iron Man kẹt lại ngoài không gian, Hawkeye mất tích. Thor, Captain America, Hulk và Black Widow đều chìm trong nỗi đau vô tận vì mất đi những người thân yêu. Họ phải làm gì để cứu vãn mọi chuyện ở ",
            views: 2601887
        },
        {
            thumb: "https://www.galaxycine.vn/media/2020/9/3/avengers-infinity-war-4k-8k_1599105170451.jpg",
            title: "AVENGERS: INFINITY WAR",
            introduceContent: "Biệt Đội Siêu Anh Hùng và đồng minh tiếp tục bảo vệ thế giới khỏi những mối đe dọa đến từ ngoài vũ trụ. Đối thủ lần này của họ là kẻ hùng mạnh nhất: Thanos. ",
            views: 1334290
        },
        {
            thumb: "https://www.galaxycine.vn/media/2020/9/5/75ee82f4d66dc6458306b811aff66370a269cd9d_1599240814983.jpg",
            title: "Aquaman",
            introduceContent: "Arthur Curry là kết tinh tình yêu của một người đàn ông bình thường và vị nữ vương đại dương. Mặc dù không muốn dính líu vào cuộc tranh giành quyền lực của hoàng tộc nhưng rốt cuộc, anh vẫn phải đối mặt với người em cùng mẹ khác cha để quyết định xem ai sẽ là người ngồi lên ngai vàng.",
            views: 926631
        },
        {
            thumb: "https://www.galaxycine.vn/media/2019/3/20/lat-mat3_1553053164611.jpg",
            title: "Lật Mặt: Nhà Có Khách",
            introduceContent: "Dự án điện ảnh tiếp theo thuộc series phim Lật Mặt của đạo diễn Lý Hải là câu chuyện xoay quanh chuyến về thăm quê đầy trắc trở của Vy và những người bạn. Theo đó, tại nhà của Vy, nhóm bạn lần lượt gặp phải các tình huống vô cùng kỳ bí, lạ lùng. Đâu là lời giải đáp cho những bí ẩn đang rình rập quanh họ?",
            views: 801474
        },
        {
            thumb: "https://www.galaxycine.vn/media/2019/1/4/49342929-2672020322815721-8079929164292947968-o-2_1546569274157.jpg",
            title: "Captain Marvel",
            introduceContent: "Không chỉ từng là một người người lính thuộc quân đội Mỹ, Carol Denvers còn chính là Captain Marvel. Liệu bộ phim đầu tiên về nữ chiến binh đầy quyền uy và sức mạnh của vũ trụ điện ảnh Marvel có đáp ứng được mong đợi của khán giả?",
            views: 786000
        },
    ]

    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box className="border-b-2 border-blue-700 pb-4">
                    <div style={{ fontSize: '20px' }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Movie
                    </div>
                    <Box>
                        <Grid container spacing={1} className="flex">
                            <Grid item className="flex-auto">
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={genreOptions}
                                />
                            </Grid>
                            <Grid item className="flex-auto">
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={countryOptions}
                                />
                            </Grid>
                            <Grid item className="flex-auto">
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={yearOptions}
                                />
                            </Grid>
                            <Grid item className="flex-auto">
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={statusOptions}
                                />
                            </Grid>
                            <Grid item className="flex-auto">
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={filterOptions}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className="mt-5">
                    <List>
                        {
                            blogs.map(blog =>
                                <ListItem className="px-0">
                                    <Card className="w-full shadow-none " >
                                        <Grid container >
                                            <Grid item xs={4}>
                                                <Link>
                                                    <CardMedia
                                                        className="rounded-md"
                                                        component="img"
                                                        height="170"
                                                        image={blog.thumb}
                                                        alt="Avengers: Endgame"
                                                    />
                                                </Link>
                                            </Grid>

                                            <Grid item xs={8}>
                                                <CardContent className="py-0">
                                                    <Link><Typography className="mb-1">{blog.title}</Typography></Link>
                                                    <Box className="mb-1 flex gap-2">
                                                        <Button className="bg-blue-500 hover:bg-blue-800 px-4 py-0 rouned-md">
                                                            <FavoriteRounded className="text-white text-sm mr-1" />
                                                            <span className="text-white capitalize text-[12px]">Like</span>
                                                        </Button>
                                                        <Box className="bg-gray-300 px-4 py-0 w-fit rounded-md">
                                                            <RemoveRedEye className="text-black text-sm mr-1" />
                                                            <span className="text-black capitalize text-[12px]">{blog.views}</span>
                                                        </Box>
                                                    </Box>
                                                    <p style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "3",
                                                        textOverflow: "ellipsis",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",

                                                    }} className="text-gray-400">{blog.introduceContent}</p>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </ListItem>
                            )
                        }
                    </List>

                    <Pagination className="flex justify-center mt-8 mb-8" count={10} variant="outlined" shape="rounded" />
                </Box>
            </DetailLayout>

            <Box className="px-28 mb-20">
                <div style={{ fontSize: '20px' }} className="text-left mb-8 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                    galaxy cinema
                </div>
                <Box>
                    <p className="text-left mb-2 text-[14px]">Bạn là một người mê phim, bạn thích khám phá bí mật phía sau hậu trường của các bom tấn, bạn thần tượng nhà làm phim nào đấy bởi tư duy vượt thời đại, phong cách quay phim đặc biệt và những câu chuyện đầy mới lạ, bạn ngưỡng mộ một ngôi sao bởi khả năng diễn xuất cực đỉnh… Thậm chí nếu bạn muốn tìm hiểu sâu hơn về điện ảnh, các trào lưu chủ nghĩa từng tạo tiếng vang trong lịch sử, sự ra đời của các thể loại và bản sắc riêng của từng nền điện ảnh đến từ các quốc gia khác nhau.</p>
                    <p className="text-left mb-2 text-[14px]">Chào mừng đến chuyên trang điện ảnh, nơi được xem như một thư viện với đầy đủ các thông tin về những bộ phim, đạo diễn, diễn viên dành cho người yêu phim. Tại đây bạn dễ dàng tìm hiểu được tiểu sử của vị đạo diễn yêu thích, có được thông tin bên lề của các bộ phim hay đang chiếu tại rạp. Ngoài ra nếu đam mê những tác phẩm kinh điển trong quá khứ, vẫn có những bài bình luận với hạng mục Phim Kinh Điển.</p>
                    <p className="text-left mb-2 text-[14px]">Đối với những ai có hứng thú tìm hiểu đời tư của các minh tinh hạng A, Galaxy Cinema cũng luôn cập nhật các tin tức nóng hổi từ họ. Bên cạnh đó còn bao gồm các bài phân tích mang tính chuyên môn, các chủ đề giúp nâng cao kiến thức điện ảnh cũng được giới thiệu qua loạt bài Ký Sự Điện Ảnh.</p>
                    <p className="text-left mb-2 text-[14px]">Galaxy Cinema – rạp chiếu được trang bị hệ thống âm thanh và hình ảnh hàng đầu Việt Nam, tự hào là Trạm Điện Ảnh sẵn sàng đưa bạn vào thế giới Phim Như Sống – Sống Như Phim, cùng những chuyến tàu với trải nghiệm thú vị tuyệt vời nhất trên màn ảnh.</p>

                </Box>
            </Box>
        </LayoutHeaderFooter>
    );
}

export default MovieGenre;