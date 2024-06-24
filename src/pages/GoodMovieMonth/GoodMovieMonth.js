import { FavoriteRounded, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, List, ListItem, Pagination, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import { Select } from "antd";
import { Link } from "react-router-dom";
import DetailLayout from "~/app/Layout/LayoutDetail/DetailLayout";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";

function GoodMovieMonth() {
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

    const goodMovies = [
        {
            thumb: "https://www.galaxycine.vn/media/2024/6/3/pht-750_1717403843227.jpg",
            title: 'Phim Hay Tháng 06.2024: Hè Vui "Cóa Chời"',
            introduceContent: "Sự nóng nực của mùa hè là mang đến không ít sự khó chịu cho mọi người, nhằm góp phần tăng thêm sự náo nhiệt, Galaxy Cinema mang đến những thước phim còn nóng hơn cả mùa hè để các mọt phim cùng thưởng thức.",
            views: 393
        },
        {
            thumb: "https://www.galaxycine.vn/media/2024/5/7/pht-750_1715052867945.jpg",
            title: "Phim Hay Tháng 05.2024: Tháng Của Người Hùng",
            introduceContent: "Các phim mà Galaxy Cinema mang tới trong tháng 5 này cũng rất đa dạng từ kinh dị đến hành động, hoạt hình và hài hước… đều có đủ để phù hợp với mọi người, mọi lứa tuổi khán giả.",
            views: 544
        }
    ]

    return (
        <LayoutHeaderFooter>
            <DetailLayout>
                <Box className="border-b-2 border-blue-700 pb-0">
                    <div style={{ fontSize: '20px' }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Good Movie Month
                    </div>

                </Box>

                <Box className="mt-5">
                    <List>
                        {
                            goodMovies.map(movie =>
                                <ListItem className="px-0">
                                    <Card className="w-full shadow-none " >
                                        <Grid container >
                                            <Grid item xs={4}>
                                                <Link>
                                                    <CardMedia
                                                        className="rounded-md"
                                                        component="img"
                                                        height="170"
                                                        image={movie.thumb}
                                                        alt="Avengers: Endgame"
                                                    />
                                                </Link>
                                            </Grid>

                                            <Grid item xs={8}>
                                                <CardContent className="py-0">
                                                    <Link><Typography className="mb-1">{movie.title}</Typography></Link>
                                                    <Box className="mb-1 flex gap-2">
                                                        <Button className="bg-blue-500 hover:bg-blue-800 px-4 py-0 rouned-md">
                                                            <FavoriteRounded className="text-white text-sm mr-1" />
                                                            <span className="text-white capitalize text-[12px]">Like</span>
                                                        </Button>
                                                        <Box className="bg-gray-300 px-4 py-0 w-fit rounded-md">
                                                            <RemoveRedEye className="text-black text-sm mr-1" />
                                                            <span className="text-black capitalize text-[12px]">{movie.views}</span>
                                                        </Box>
                                                    </Box>
                                                    <p style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "3",
                                                        textOverflow: "ellipsis",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",

                                                    }} className="text-gray-400">{movie.introduceContent}</p>
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
                    <p className="text-left mb-2 text-[14px]">Phim hay tháng là tập hợp những bộ phim chiếu rạp hay nhất, mới nhất, được công chiếu trong tháng. Những bộ phim thuộc đủ các thể loại hành động, lãng mạn, kinh dị, sử thi... chất lượng, được đánh giá cao, hứa hẹn mang đến những giờ phút giải trí tuyệt vời trong rạp chiếu bóng. Phim hay tháng sẽ cung cấp đầy đủ thông tin phim, dễ dàng thuận tiện để các bạn có thể tìm kiếm vùa lựa chọn bộ phim phù hợp nhất để thưởng thức cùng gia đình và bạn bè. </p>
                </Box>
            </Box>
        </LayoutHeaderFooter>
    );
}

export default GoodMovieMonth;