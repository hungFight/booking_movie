import { FavoriteRounded, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, List, ListItem, Pagination, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import { Select } from "antd";
import { Link } from "react-router-dom";
import DetailLayout from "~/app/Layout/LayoutDetail/DetailLayout";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";

function MovieCommentary() {
    const typeOptions = [
        { value: 1, label: "All" },
        { value: 2, label: "Review" },
        { value: 3, label: "Preview" },
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

    const comments = [
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/19/750_1718788973451.jpg",
            title: "[Review] Cửu Long Thành Trại Vây Thành: Hồi Sinh Thời Huy Hoàng Của Điện Ảnh Hong Kong",
            introduceContent: "Toàn bộ tinh túy của hương vị phim Hong Kong xưa đều có ở Cửu Long Thành Trại: Vây Thành",
            views: 334
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/17/io-2-750_1718617969226.jpg",
            title: "[Review] Inside Out 2: Thảm Họa Cảm Xúc Tuổi Dậy Thì",
            introduceContent: "Câu chuyện thú vị của cô bé Riley trở lại với những cảm xúc đầy bất ổn tuổi dậy thì trong Những Mảnh Ghép Cảm Xúc 2.",
            views: 422
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/11/gia-tai-cua-ngoai-750_1718077521575.jpg",
            title: "[Review] Gia Tài Của Ngoại: Dí Dỏm, Hài Hước Nhưng Vẫn Hút Cạn Nước Mắt Khán Giả",
            introduceContent: "Dẫu không mang quá nhiều sự bất ngờ trong câu chuyện, bộ phim mới Gia Tài Của Ngoại của Thái Lan vẫn là tác phẩm lấy đi không ít nước mắt của khán giả.",
            views: 973
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/10/750_1718006425585.jpg",
            title: "[Review] Bad Boys Ride Or Die: Những Gã Trai Hư Tiếp Tục Tỏa Sáng",
            introduceContent: "Bên cạnh Lethal Weapon, Rush Hour, National Security, Blue Streak…, thì Bad Boys có thể xem là một trong những thương hiệu hành động hài có mô típ cặp đôi cảnh sát thành công nhất.",
            views: 348
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/6/mong-vuot-phim-sinh-ton-moi-la-co-pha-vo-loi-nguyen-flop-6_1717665586851.jpg",
            title: "[Review] Móng Vuốt: Phim Sinh Tồn Mới Lạ Có “Phá Vỡ Lời Nguyền” Flop?",
            introduceContent: "Đề tài sinh tồn rất hiếm ở Việt Nam, cũng chưa có tác phẩm nào thật sự thành công, liệu Móng Vuốt có phá vỡ lời nguyền ấy?",
            views: 557
        },
    ]

    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box className="border-b-2 border-blue-700 pb-4">
                    <div style={{ fontSize: '20px' }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Movie Commentary
                    </div>
                    <Box>
                        <Grid container spacing={1} className="flex">
                            <Grid item xs={2}>
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={typeOptions}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Select
                                    size='large'
                                    className='w-full text-left'
                                    defaultValue={1}
                                    options={statusOptions}
                                />
                            </Grid>
                            <Grid item xs={2}>
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
                            comments.map(comment =>
                                <ListItem className="px-0">
                                    <Card className="w-full shadow-none " >
                                        <Grid container >
                                            <Grid item xs={4}>
                                                <Link>
                                                    <CardMedia
                                                        className="rounded-md"
                                                        component="img"
                                                        height="170"
                                                        image={comment.thumb}
                                                        alt="Avengers: Endgame"
                                                    />
                                                </Link>
                                            </Grid>

                                            <Grid item xs={8}>
                                                <CardContent className="py-0">
                                                    <Link><Typography className="mb-1">{comment.title}</Typography></Link>
                                                    <Box className="mb-1 flex gap-2">
                                                        <Button className="bg-blue-500 hover:bg-blue-800 px-4 py-0 rouned-md">
                                                            <FavoriteRounded className="text-white text-sm mr-1" />
                                                            <span className="text-white capitalize text-[12px]">Like</span>
                                                        </Button>
                                                        <Box className="bg-gray-300 px-4 py-0 w-fit rounded-md">
                                                            <RemoveRedEye className="text-black text-sm mr-1" />
                                                            <span className="text-black capitalize text-[12px]">{comment.views}</span>
                                                        </Box>
                                                    </Box>
                                                    <p style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "3",
                                                        textOverflow: "ellipsis",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",

                                                    }} className="text-gray-400">{comment.introduceContent}</p>
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
                    <p className="text-left mb-2 text-[14px]">Những khi tới rạp chiếu phim để thưởng thức các tác phẩm đang làm mưa làm gió, ít nhiều gì ở phía người xem luôn đọng lại nhiều cảm xúc và suy nghĩ. Có những phim khiến công chúng bàn tán suốt về ý nghĩa thật sự mà nó mang tới. Cũng có lúc người ta nhăn nhó bởi vì quá nhiều tình tiết phức tạp được cài cắm, bắt buộc cần có kiến thức nền về điện ảnh mới có thể thấu hiểu.</p>
                    <p className="text-left mb-2 text-[14px]">Điện ảnh ngay từ những ngày đầu hình thành đã được xem là loại hình giải trí vô cùng tiềm năng. Trải nghiệm do phim ảnh mang tới là muôn vạn điều thú vị. Có lẽ vậy nên với những ai chỉ xem phim trên tinh thần “vui là chính”, thì chỉ cần đấy không phải một tác phẩm quá tệ đã đủ làm hài lòng họ. Lại có khán giả cho rằng điện ảnh là một loại hình nghệ thuật bao quát hết tất cả các hình thức nghệ thuật khác, họ xem phim để khám phá, tìm tòi tầng tầng lớp lớp ý nghĩa ẩn sâu sau những câu thoại và cảnh quay.</p>
                    <p className="text-left mb-2 text-[14px]">Đắn đo khi lựa chọn phim để xem, hoặc muốn hiểu rõ hơn về các thông điệp ẩn mà đạo diễn cài cắm. Galaxy Cinema sẽ cho bạn vài gợi ý với những bài bình luận phim mới nhất, đi cùng các đánh giá kèm sự phân tích mang tính chuyên môn đối với những tác phẩm đang ra mắt tại rạp chiếu phim. Được viết bởi những cây bút có kinh nghiệm và chuyên sâu về kiến thức điện ảnh, bạn sẽ dễ dàng tìm được những bài bình luận hoặc phân tích với đa dạng thể loại từ hành động, tình cảm…, đến khoa học viễn tưởng, kinh dị.</p>
                </Box>
            </Box>
        </LayoutHeaderFooter>
    );
}

export default MovieCommentary;