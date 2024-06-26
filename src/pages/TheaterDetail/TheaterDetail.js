import { Check, CheckCircle, Star } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";
import movie from "~/restfulAPI/movie";


function TheaterDetail() {
    const [movieSelected, setMovieSelected] = useState(null)
    const [slotSelected, setSlotSelected] = useState(null)
    const [daySelected, setDaySelected] = useState(0)

    const handleSelecteMovie = (index, event) => {
        if (index == movieSelected) {
            setMovieSelected(null)
        } else {
            setMovieSelected(index)
        }
    }

    const handleSelecteSlot = (index) => {
        setSlotSelected(index)
    }

    const handleSelecteDay = (index) => {
        setDaySelected(index)
    }

    const theaterInfomation = [{
        theaterName: "galaxy nguyễn du",
        thumbs: [
            "https://cdn.galaxycine.vn/media/2023/10/23/galaxy-nguyen-du-1_1698051240852.jpg",
            "https://cdn.galaxycine.vn/media/2023/10/23/galaxy-nguyen-du-2_1698051251352.jpg",
            "https://cdn.galaxycine.vn/media/2023/10/23/galaxy-nguyen-du-3_1698051255427.jpg",
            "https://cdn.galaxycine.vn/media/2023/10/23/galaxy-nguyen-du-4_1698051246666.jpg"
        ],
        address: "116 Nguyễn Du, Quận 1, Tp.HCM",
        hotline: 19002224

    }]

    const areaOptions = [
        { value: 1, label: "TP Hồ Chí Minh" },
        { value: 2, label: "Hà Nội" },
        { value: 3, label: "Đà Nẵng" }
    ]

    const theaterOptions = [
        { value: 1, label: "Galaxy Nguyễn Du" },
        { value: 2, label: "Galaxy Mipec Long Biên" },
        { value: 3, label: "Galaxy Đà Nẵng" },

    ]

    const movies = [
        {
            title: "gia tài của ngoại",
            thumb: "https://cdn.galaxycine.vn/media/2024/6/7/gtcn-500_1717732724699.jpg",
            rates: 9.3,
            ageLimit: "T13",
        },
        {
            title: "cửu long thành trại: vây thành",
            thumb: "https://cdn.galaxycine.vn/media/2024/6/3/cuu-long-thanh-trai-vay-thanh-1_1717402596500.jpg",
            rates: 9.4,
            ageLimit: "T18",
        },
        {
            title: "trư bát giới: đại náo thế giới mới",
            thumb: "https://cdn.galaxycine.vn/media/2024/6/10/tru-bat-gioi-dai-nao-the-gioi-moi-3_1718003587616.jpg",
            rates: 8.5,
            ageLimit: "K",
        },
        {
            title: "Phim Điện Ảnh Doraemon: Nobita Và Bản Giao Hưởng Địa Cầu",
            thumb: "https://cdn.galaxycine.vn/media/2024/5/21/doraemon-movie-43-nobitas-earth-symphony-1-1_1716273120350.jpg",
            rates: 9.5,
            ageLimit: "",
        },
    ]

    const days = [
        "Today 17/06",
        "Monday 18/06",
        "Tuesday 19/06",
        "Thursday 20/06",
        "Wednesday 21/06",
        "Friday 22/06",
        "Saturday 23/06",
        "Sunday 24/06",
    ]

    return (
        <LayoutHeaderFooter>
            <Box>
                <Box className="relative">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        allowSlideNext={true}
                        allowSlidePrev={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            
                        }}
                        
                    >
                        {theaterInfomation[0].thumbs.map(thumb =>
                            <SwiperSlide className="h-[450px]">
                                <img src={thumb} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Box>

                <Box className="mt-10 px-28 flex items-center justify-between">
                    <Box textAlign="left">
                        <Typography className="capitalize font-semibold mb-5 text-neutral-700" variant="h5">{theaterInfomation[0].theaterName}</Typography>
                        <p className="text-neutral-500">Địa chỉ: {theaterInfomation[0].address}</p>
                        <p className="text-neutral-500" >Hotline: <a className="text-blue-500" href={'tel:' + theaterInfomation[0].hotline}>{theaterInfomation[0].hotline}</a></p>
                    </Box>

                    <Box>
                        <Select className="mr-4" value={1} options={areaOptions} />
                        <Select value={1} options={theaterOptions} />
                    </Box>
                </Box>
            </Box>

            <Box className="px-28 mt-10">
                <div style={{ fontSize: '20px' }} className="text-left mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                    Movie
                </div>

                <Box className="px-[150px] pb-5 border-b-2 border-blue-700">
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={7}
                        scrollbar={{ draggable: true }}

                    >
                        {
                            days.map((day, index) =>
                                <SwiperSlide>
                                    <button onClick={() => handleSelecteDay(index)} className={"w-full py-2 rounded " + (daySelected == index && " bg-blue-700 text-white")}>
                                        <span className="block">{day.slice(0, day.indexOf(" "))}</span>
                                        <span>{day.slice(day.indexOf(" "), day.length)}</span>
                                    </button>
                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                </Box>
            </Box>

            <Box className="px-28 mt-5">
                <Grid container spacing={4} >
                    {movies.map((movie, index) =>
                        <Grid item xs={2}>
                            <Card className="shadow-none cursor-pointer relative overflow-visible">
                                <CardMedia
                                    sx={{
                                        height: 250,
                                        borderRadius: '5px',
                                        backgroundPosition: 'center',
                                    }}
                                    image={movie.thumb}
                                    id={"movieThumb" + index}
                                    className="relative"
                                    onClick={(event) => handleSelecteMovie(index, event)}
                                >
                                    <div className="flex flex-col items-end ">
                                        <div className=" w-fit bg-[#00000066] rounded-l-md px-3 mb-3 absolute bottom-10 right-0">
                                            <Star className="text-yellow-400 text-[20px] align-sub" />
                                            <span className="text-white text-[25px]">{movie.rates}</span>
                                        </div>
                                        <div className='bg-orange-500 mr-2 text-white w-fit py-1 px-2 rounded-md absolute bottom-3 right-0'>
                                            {movie.ageLimit}
                                        </div>
                                    </div>

                                    {
                                        movieSelected == index &&
                                        <div className="bg-[#034ea26e] flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
                                            <div className="w-[40px] h-[40px] bg-orange-500 rounded-[50%]">
                                                <Check className="text-[40px] text-white" />
                                            </div>
                                        </div>

                                    }


                                </CardMedia>

                                <CardContent className="py-[10px] px-0">
                                    <h4 style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }} title={movie.title} className=" text-center capitalize">{movie.title}</h4>
                                </CardContent>

                                {movieSelected == index &&
                                    <Box className="border border-neutral-300 rounded-md w-[500px] p-3 z-[1] text-left bg-white absolute bottom-[-30%]">
                                        <Typography fontSize={14} className="font-semibold mb-5">Showing Slot</Typography>
                                        <div className="flex items-center ">
                                            <span className="mr-10">
                                                2D Phụ Đề
                                            </span>
                                            <div >
                                                <div onClick={() => handleSelecteSlot(1)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 1 && " bg-blue-600 text-white")}>14:15</div>
                                                <div onClick={() => handleSelecteSlot(2)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 2 && " bg-blue-600 text-white")}>16:00</div>
                                                <div onClick={() => handleSelecteSlot(3)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 3 && " bg-blue-600 text-white")}>17:00</div>
                                                <div onClick={() => handleSelecteSlot(4)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 4 && " bg-blue-600 text-white")}>18:00</div>
                                            </div>
                                        </div>
                                    </Box>}
                            </Card>
                        </Grid>
                    )}
                </Grid>

            </Box>

            <Box className="px-28 mt-16">
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <div style={{ fontSize: '20px' }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                            ticket price
                        </div>

                        <img alt="" loading="lazy" width="1280" height="650" decoding="async" src="https://cdn.galaxycine.vn/media/2023/12/29/banggiave-2024-nguyen-du_1703839637247.jpg"></img>
                    </Grid>

                    <Grid item xs={6}>
                        <div style={{ fontSize: "20px" }} className="text-left mb-5 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                            detail information
                        </div>
                        <div className="text-left mb-3">
                            <p className="font-semibold text-neutral-500">Address: <span className="text-black">{theaterInfomation[0].address}</span></p>
                            <p className="font-semibold text-neutral-500">Phone: <span className="text-black">{theaterInfomation[0].hotline}</span></p>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.497872789142!2d106.6906125748824!3d10.773128089375398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c0189fa2b%3A0x6e75dc36d4dba07d!2z6Ziu5pS46YqA5rKz6Zu75b2x6Zmi!5e0!3m2!1szh-TW!2s!4v1719142433442!5m2!1szh-TW!2s"
                                width="600"
                                height="250"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>=
                        </div>
                        <div>
                            <p className="text-left text-[14px] mb-6">
                                Là rạp chiếu đầu tiên và đông khách nhất trong hệ thống, Galaxy Nguyễn Du chính thức đi vào hoạt động từ ngày 20/5/2005 và được xem là một trong những cụm rạp mang tiêu chuẩn quốc tế hiện đại bậc nhất đầu tiên xuất hiện tại Việt Nam. Galaxy Nguyễn Du là một trong những rạp chiếu phim tiên phong mang đến cho khán giả những trải nghiệm phim chiếu rạp tốt nhất.
                            </p>
                            <p className="text-left text-[14px] mb-6">
                                Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi, trong đó có 1 phòng chiếu phim 3D và 4 phòng chiếu phim 2D, với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem những bộ phim hay một cách thoải mái và thuận tiện nhất. Chất lượng hình ảnh rõ nét, âm thanh Dolby 7.1 cùng màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.
                            </p>
                            <p className="text-left text-[14px] mb-6">
                                Bên cạnh đó, với lợi thế gần khu vực sầm uất bậc nhất ở trung tâm thành phố, bãi để xe rộng rãi, có tiệm cafe ngoài trời – đây là nơi cực thu hút bạn trẻ đến xem phim và check-in.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </LayoutHeaderFooter >
    );
}

export default TheaterDetail;