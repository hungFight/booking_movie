import { FavoriteRounded, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, List, ListItem, Pagination, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import { Select } from "antd";
import { Link } from "react-router-dom";
import DetailLayout from "~/app/Layout/LayoutDetail/DetailLayout";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";

function MovieBlog() {
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

    const blogs = [
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/6/venom-3-venom-se-chet-7_1717645169505.jpg",
            title: "Venom 3: Venom Sẽ Chết?",
            introduceContent: "Venom và Eddie Brock lâm nguy ở The Last Dance!",
            views: 32
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/4/23/boc-tach-trailer-deadpool--wolverine-phan-dien-la-em-gai-giao-su-x1_1713863069247.jpg",
            title: "Bóc Tách Trailer Deadpool & Wolverine: Phản Diện Là Em Gái Giáo Sư X?",
            introduceContent: "Nhân vật cực kì quan trọng – phần còn lại của tựa đề Deadpool 3: Wolverine đã xuất hiện!",
            views: 53
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/4/12/joker-folie-a-deux-harley-quinn-thay-doi-hoan-toan-so-voi-comic-2_1712891394699.jpg",
            title: "Joker 2: Harley Quinn Thay Đổi Hoàn Toàn So Với Comic?",
            introduceContent: "Lady Gaga áp dụng lối method acting vốn gắn liền với tên tuổi Joaquin Phoenix để thể hiện Harley Quinn!",
            views: 56
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/4/5/750_1712304565055.jpg",
            title: "Top 10 Phim Kinh Dị Hay Nhất 2024",
            introduceContent: "Những tác phẩm kinh dị được mong chờ nhất năm 2024 đã  sẵn sàng gieo rắc “kinh hoàng” đến phòng vé toàn cầu.",
            views: 111
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/4/5/phim-hai-750_1712308219444.jpg",
            title: "Top 10 Phim Hài Hay Nhất 2024",
            introduceContent: "Ngoài lựa chọn như kinh dị hay hành động, những bộ phim hài vẫn luôn được phần đông khán giả yêu thích, liều thuốc tinh thần hoàn hảo sau ngày dài làm việc căng thẳng.",
            views: 82
        },
    ]

    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box className="border-b-2 border-blue-700 pb-0">
                    <div style={{ fontSize: '20px' }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Movie Blog
                    </div>

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
                    <p className="text-left mb-2 text-[14px]">Thế giới điện ảnh được ví như một vùng đất đang phát triển mở rộng mỗi ngày. Nói đến điện ảnh thì càng đi sâu sẽ càng khám phá ra nhiều khía cạnh mới.</p>
                    <p className="text-left mb-2 text-[14px]">Sẽ có người thích thú với vai trò của đạo diễn. Muốn hiểu rõ xem đạo diễn cần làm những công việc gì, nguyên nhân và động lực gì khiến họ gắn bó làm nghề. Bên cũng có lúc lại muốn biết lý do vì sao những nhà làm phim kia lại có thể sáng tạo nhiều câu chuyện thú vị đến thế.</p>
                    <p className="text-left mb-2 text-[14px]">Nói về diễn viên, đời tư của các ngôi sao luôn là điều khiến công chúng tò mò. Họ thay đổi nhà cửa, mua thêm siêu xe…, thậm chí là cuộc sống tình cảm có vấn đề. Tất cả đều là những tin tức luôn hấp dẫn mọi người.</p>
                    <p className="text-left mb-2 text-[14px]">Một tác phẩm đang chiếu tại rạp chiếu phim và được bàn tán khắp nơi. Bạn tự hỏi rằng nó có hay không, có nên cuốn theo số đông để thử trải nghiệm, nhưng giờ bạn cần một lời gợi ý hoặc một lời khuyên khách quan nhất, phải làm sao?</p>
                    <p className="text-left mb-2 text-[14px]">Bạn vô tình xem được một thước phim cũ, cảm thấy nó quá tuyệt vời, càng bất ngờ hơn khi trong quá khứ phim từng càn quét vô số giải thường. Giờ đây khi muốn hiểu rõ hơn về thông điệp của phim, những câu chuyện bí mật phía sau hậu trường. Liệu phải làm thế nào?</p>
                </Box>
            </Box>
        </LayoutHeaderFooter>
    );
}

export default MovieBlog;