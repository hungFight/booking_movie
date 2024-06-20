// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Select, MenuItem, Tab, Box, Card, CardMedia, CardContent, Icon, IconButton, List, ListItem } from '@mui/material';
import thumb1 from '../assets/images/slideThumb/0324-galaxy-on-zalo-2048x683_1713169097223.jpg';
import thumb2 from '../assets/images/slideThumb/2048x682_1707364876796.jpg';
import thumb3 from '../assets/images/slideThumb/doraemon-movie-43-nobitas-earth-symphony-3-1_1716273153699.jpg';
import thumb4 from '../assets/images/slideThumb/furiosa-sneak-2048_1715832037510.jpg';
import thumb5 from '../assets/images/slideThumb/haikyuu-the-dumpster-battle-4_1715681177590.jpg';
import thumb6 from '../assets/images/slideThumb/pn-sneak-2048_1715917058506.jpg';
import thumb7 from '../assets/images/slideThumb/shopee-pay-1_1714114836774.jpg';

// Import Swiper styles
import 'swiper/css';
import { Grid, formControlClasses, InputLabel, Autocomplete, TextField, Tabs } from '@mui/material';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FavoriteOutlined, Image, RemoveRedEye, ViewAgenda } from '@mui/icons-material';

function Homepage() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ];

    return (
        <>
            <Box className="relative">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <img src={thumb1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={thumb2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={thumb3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={thumb4} />
                    </SwiperSlide>
                </Swiper>

                <div className=" shadow-md absolute bottom-0 inset-x-0 w-[70%] z-10 left-[50%] translate-x-[-50%] rounded-sm bg-white">
                    <Grid container spacing={0}>
                        <Grid item lg={3}>
                            <Autocomplete
                                size="medium"
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                renderInput={(params) => <TextField className="border-none" {...params} label="Movie" />}
                            />
                        </Grid>

                        <Grid item lg={9}>
                            <Grid container>
                                <Grid item lg={3}>
                                    <Autocomplete size="medium" disablePortal id="combo-box-demo" options={top100Films} renderInput={(params) => <TextField {...params} label="Cinema" />} />
                                </Grid>
                                <Grid item lg={3}>
                                    <Autocomplete size="medium" disablePortal id="combo-box-demo" options={top100Films} renderInput={(params) => <TextField {...params} label="Day" />} />
                                </Grid>
                                <Grid item lg={3}>
                                    <Autocomplete size="medium" disablePortal id="combo-box-demo" options={top100Films} renderInput={(params) => <TextField {...params} label="Time" />} />
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className="h-[100%] w-[100%]"
                                        disabled
                                        style={{
                                            backgroundColor: 'rgb(245 128 32)',
                                            color: '',
                                        }}
                                    >
                                        Buy tickets quickly
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>

            <Box className="px-28 mt-10">
                <Box className="flex items-center mb-[30px]">
                    <div style={{ fontSize: '20px' }} className="mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        phim
                    </div>
                    <Tabs variant="scrollable">
                        <Tab
                            label="Now showing"
                            className="font-semibold text-neutral-400"
                            sx={{
                                textTransform: 'unset',
                            }}
                        />
                        <Tab
                            label="Coming soon"
                            className="font-semibold text-neutral-400"
                            sx={{
                                textTransform: 'unset',
                            }}
                        />
                        <Tab
                            label="IMAX Film"
                            className="font-semibold text-neutral-400"
                            sx={{
                                textTransform: 'unset',
                            }}
                        />
                    </Tabs>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Link to="/filmDetail">
                                <Card className="shadow-none">
                                    <CardMedia
                                        sx={{
                                            height: 400,
                                            borderRadius: '5px',
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/6/13/io2-2048_1718251991479.jpg"
                                    >
                                        <Box className="flex items-center justify-center w-full h-full transition-opacity opacity-0 hover:opacity-100 hover:bg-[#02020366]">
                                            <Box>
                                                <Button size="large" className="mb-[15px] border-0 bg-orange-500 text-white hover:bg-orange-400 padding">
                                                    Buy ticket
                                                </Button>

                                                <Button size="large" className="block w-full bg-transparent text-white hover:bg-orange-400 hover:border-orange-400">
                                                    Trailer
                                                </Button>
                                            </Box>
                                        </Box>
                                    </CardMedia>

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-left">Những Mảnh Ghép Cảm Xúc 2</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>

                    <Button size="large" className="text-orange-500 border-orange-500 border hover:text-white hover:bg-orange-400">
                        View more
                    </Button>
                </Box>
            </Box>

            <Box className="px-28 mt-10">
                <Box className="flex items-center mb-[30px]">
                    <div style={{ fontSize: '20px' }} className="mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Cinema corner
                    </div>
                    <Tabs variant="scrollable">
                        <Tab
                            label="Film comments"
                            className="font-semibold text-neutral-400"
                            sx={{
                                textTransform: 'unset',
                            }}
                        />
                        <Tab
                            label="Cinema blog"
                            className="font-semibold text-neutral-400"
                            sx={{
                                textTransform: 'unset',
                            }}
                        />
                    </Tabs>
                </Box>

                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card className="shadow-none">
                                <Link to="/" className="hover:scale-150">
                                    <CardMedia sx={{ height: 400, borderRadius: '5px' }} image="https://www.galaxycine.vn/media/2024/6/19/750_1718788973451.jpg" />
                                </Link>
                                <CardContent className="px-0 text-left">
                                    <Link className=" text-black hover:text-blue-700 text-lg font-semibold" to="/">
                                        [Review] Cửu Long Thành Trại Vây Thành: Hồi Sinh Thời Huy Hoàng Của Điện Ảnh Hong Kong Xem thêm tại: https://www.galaxycine.vn/
                                    </Link>
                                    <div className="mt-3">
                                        <span className="bg-blue-600 text-white rounded-md  px-[15px] text-[12px] mr-2">
                                            <FavoriteOutlined fontSize="inherit" />
                                            Like
                                        </span>

                                        <span className="bg-neutral-300 text-black text-[12px] px-[15px] rounded-md">
                                            <RemoveRedEye fontSize="inherit" />
                                            10
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="shadow-none mb-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Link to="/" className="hover:scale-150">
                                            <CardMedia sx={{ height: 130, borderRadius: '5px' }} image="https://www.galaxycine.vn/media/2024/6/17/io-2-750_1718617969226.jpg" />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <CardContent className="p-0 text-left">
                                            <Link
                                                style={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'pre-wrap',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                                className=" text-black hover:text-blue-700 text-lg font-semibold"
                                                to="/"
                                            >
                                                [Review] Cửu Long Thành Trại Vây Thành: Hồi Sinh Thời Huy Hoàng Của Điện Ảnh Hong Kong Xem thêm tại: https://www.galaxycine.vn/
                                            </Link>
                                            <div className="mt-3">
                                                <span className="bg-blue-600 text-white rounded-md  px-[15px] text-[12px] mr-2">
                                                    <FavoriteOutlined fontSize="inherit" />
                                                    Like
                                                </span>

                                                <span className="bg-neutral-300 text-black text-[12px] px-[15px] rounded-md">
                                                    <RemoveRedEye fontSize="inherit" />
                                                    170
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card className="shadow-none mb-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Link to="/" className="hover:scale-150">
                                            <CardMedia sx={{ height: 130, borderRadius: '5px' }} image="https://www.galaxycine.vn/media/2024/6/11/gia-tai-cua-ngoai-750_1718077521575.jpg" />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <CardContent className="p-0 text-left">
                                            <Link
                                                style={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'pre-wrap',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                                className=" text-black hover:text-blue-700 text-lg font-semibold"
                                                to="/"
                                            >
                                                [Review] Gia Tài Của Ngoại: Dí Dỏm, Hài Hước Nhưng Vẫn Hút Cạn Nước Mắt Khán Giả
                                            </Link>
                                            <div className="mt-3">
                                                <span className="bg-blue-600 text-white rounded-md  px-[15px] text-[12px] mr-2">
                                                    <FavoriteOutlined fontSize="inherit" />
                                                    Like
                                                </span>

                                                <span className="bg-neutral-300 text-black text-[12px] px-[15px] rounded-md">
                                                    <RemoveRedEye fontSize="inherit" />
                                                    818
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card className="shadow-none mb-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Link to="/" className="hover:scale-150">
                                            <CardMedia sx={{ height: 130, borderRadius: '5px' }} image="https://www.galaxycine.vn/media/2024/6/10/750_1718006425585.jpg" />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <CardContent className="p-0 text-left">
                                            <Link
                                                className=" text-black hover:text-blue-700 text-lg font-semibold"
                                                style={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'pre-wrap',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                                to="/"
                                            >
                                                [Review] Bad Boys Ride Or Die: Những Gã Trai Hư Tiếp Tục Tỏa Sángggggggggggggggggggggggggggggggggggggggggg
                                            </Link>
                                            <div className="mt-3">
                                                <span className="bg-blue-600 text-white rounded-md  px-[15px] text-[12px] mr-2">
                                                    <FavoriteOutlined fontSize="inherit" />
                                                    Like
                                                </span>

                                                <span className="bg-neutral-300 text-black text-[12px] px-[15px] rounded-md">
                                                    <RemoveRedEye fontSize="inherit" />
                                                    303
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>

                    <Button size="large" className="text-orange-500 border-orange-500 border hover:text-white hover:bg-orange-400">
                        View more
                    </Button>
                </Box>
            </Box>

            <Box className="px-28 mt-10">
                <Box className="flex items-center mb-[30px]">
                    <div style={{ fontSize: '20px' }} className="uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Promotion news
                    </div>
                </Box>

                <Box>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={true}
                        allowSlideNext={true}
                        allowSlidePrev={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide>
                            <Link to="/filmDetail">
                                <Card className="shadow-none rounded-none">
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/5/27/750_1716778702759.jpg"
                                        className="flex items-center justify-center"
                                    />

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-center">Khởi Động “Giải Đua Mùa Hè” GalaXummer 2024</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/filmDetail">
                                <Card className="shadow-none rounded-none">
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/4/16/750_1713257524954.jpg"
                                        className="flex items-center justify-center"
                                    />

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-center">Happy Day - Vé Chỉ Từ 50K</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/filmDetail">
                                <Card className="shadow-none rounded-none">
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/6/6/xummer-combo-1800x1200_1717668953389.jpg"
                                        className="flex items-center justify-center"
                                    />

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-center">Cine Với Cạ Cứng - Tụ Tập Vui "Cóa Chời"</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/filmDetail">
                                <Card className="shadow-none rounded-none">
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/1/19/1350x900_1705628944220.jpg"
                                        className="flex items-center justify-center"
                                    />

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-center">Mưa Quà Tặng Cho Thành Viên Galaxy Cinema 2024</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/filmDetail">
                                <Card className="shadow-none rounded-none">
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            backgroundPosition: 'center',
                                        }}
                                        image="https://cdn.galaxycine.vn/media/2024/4/2/750_1712051414517.jpg"
                                        className="flex items-center justify-center"
                                    />

                                    <CardContent className="py-[10px] px-0">
                                        <h4 className="font-semibold text-center">Xem Phim Hay – Ngất Ngây Cùng Bánh Phồng Dế Rec Rec</h4>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>

            <Box className="mt-10">
                <Card>
                    <CardMedia className="py-16 px-24" image="https://www.galaxycine.vn/_next/static/media/bg-icon-iphone-x.3b4bcdb7.svg">
                        <Grid container>
                            <Grid item xs={6} className="flex justify-center">
                                <img width="200" height="409" src="https://www.galaxycine.vn/_next/static/media/Frame-iphone-x.78ef1223.svg" />
                            </Grid>
                            <Grid item xs={6} className="flex flex-col justify-center">
                                <h1 className="text-left text-white mb-3 text-[30px]">Đặt Vé Online - Không Lo Trễ Nải</h1>
                                <p className="text-left text-white mb-4">
                                    Ghét đông đúc ồn ào? Lười xếp hàng mua vé? Hãy quên đi cách mua vé giấy truyền thống tốn thời gian hay xếp hàng lấy vé online phiền toái.
                                </p>
                                <div className="flex items-end">
                                    <img width={150} height={150} src="https://www.galaxycine.vn/_next/static/media/glx-qr-code-1.218ae7da.svg" />
                                    <span class="text-white text-sm m-4  font-light">
                                        <i>OR</i>
                                    </span>
                                    <ul className="list-none">
                                        <li className="inline-block">
                                            <a>
                                                <img src="https://www.galaxycine.vn/_next/static/media/icon-ios-app-store.65ed00df.svg" width={140} height={40} className="w-auto" />
                                            </a>
                                        </li>

                                        <li className="inline-block ml-1">
                                            <a>
                                                <img src="https://www.galaxycine.vn/_next/static/media/icon-google-app-store.f4c38402.svg" width={140} height={40} className="w-auto" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </CardMedia>
                </Card>
            </Box>

            <Box className="px-28 mt-10">
                <Box className="flex items-center mb-[30px]">
                    <div style={{ fontSize: '20px' }} className="uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                        Homepage
                    </div>
                </Box>

                <List className="text-sm">
                    <ListItem className="px-0">
                        <p>
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                <b>Galaxy Cinema</b>
                            </a>
                            &nbsp;là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích
                            nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,{' '}
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                <b>Galaxy Cinema</b>
                            </a>{' '}
                            còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
                        </p>
                    </ListItem>
                    <ListItem className="px-0">
                        <p>
                            Đến website{' '}
                            <a href="https://www.galaxycine.vn/">
                                <i>galaxycine.vn</i>
                            </a>
                            , khách hàng&nbsp;sẽ dễ dàng tham khảo các{' '}
                            <a href="https://www.galaxycine.vn/phim-dang-chieu">
                                <i>phim hay nhất</i>
                            </a>
                            ,&nbsp;
                            <a href="https://www.galaxycine.vn/phim-dang-chieu">
                                <i>phim mới nhất</i>
                            </a>{' '}
                            đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên.{' '}
                            <a href="https://www.galaxycine.vn/lich-chieu">
                                <i>Lịch chiếu</i>
                            </a>{' '}
                            tại tất cả hệ thống{' '}
                            <a href="https://www.galaxycine.vn/">
                                <i>rạp chiếu phim</i>{' '}
                            </a>
                            của{' '}
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                <b>Galaxy Cinema</b>
                            </a>{' '}
                            cũng được cập nhật đầy đủ hàng ngày hàng giờ trên<i> trang chủ</i>.{' '}
                        </p>
                    </ListItem>
                    <ListItem className="px-0">
                        <p>
                            Giờ đây đặt vé tại{' '}
                            <b>
                                <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                    Galaxy Cinema
                                </a>
                                &nbsp;
                            </b>
                            càng thêm dễ dàng chỉ với&nbsp;vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến
                            hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi <i>Đặt vé thành công</i> của{' '}
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                <b>Galaxy Cinema</b>
                            </a>
                            . Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                {' '}
                                <b>Galaxy Cinema</b>
                            </a>{' '}
                            hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
                        </p>
                    </ListItem>
                    <ListItem className="px-0">
                        <p>
                            Nếu bạn đã chọn được{' '}
                            <a className="text-blue-500" href="https://www.galaxycine.vn/phim-dang-chieu">
                                <i>phim hay</i>
                            </a>{' '}
                            để xem, hãy đặt vé cực nhanh bằng box <i>Mua Vé Nhanh</i> ngay từ{' '}
                            <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                <i>Trang Chủ</i>
                            </a>
                            . Chỉ cần một phút, tin nhắn và email phản hồi của{' '}
                            <b>
                                <a className="text-blue-500" href="https://www.galaxycine.vn/">
                                    Galaxy Cinema
                                </a>{' '}
                            </b>
                            sẽ gửi ngay vào điện thoại và hộp mail của bạn.{' '}
                        </p>
                    </ListItem>
                </List>
            </Box>
        </>
    );
}

export default Homepage;
