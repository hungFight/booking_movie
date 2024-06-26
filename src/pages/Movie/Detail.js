import { useRef, useState } from 'react';
import { CiClock2, CiCalendar, CiStar } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../App.css'
import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Typography } from '@mui/material';
import { PlayCircleOutline, PlayCircleOutlineRounded, StarBorder, StarBorderRounded, StarBorderSharp } from '@mui/icons-material';
import sampleVideo from '~/assets/videos/trailerMovie.mp4';
import DetailLayout from '~/app/Layout/LayoutDetail/DetailLayout';
import LayoutHeaderFooter from '~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter';
import { Select } from 'antd';
import Star from '@mui/icons-material/Star';

const movie = {
    posterUrl: 'https://cdn.galaxycine.vn/media/2024/5/6/inside-out-2-3_1714970461256.jpg',
    title: 'Những Mảnh Ghép Cảm Xúc 2',
    duration: 124,
    releaseDate: '14/06/2024',
    rating: 9.5,
    votes: 107,
    country: 'American',
    producer: 'PIXAR, Walt Disney Pictures',
    genre: 'Comic',
    director: 'Kelsey Mann',
    actors: ['Amy Poehler', ' Phyllis Smith', ' Lewis Black'],
};
const schedules = [
    {
        cinema: 'Galaxy Nguyễn Du',
        times: ['22:30'],
        type: '2D Phụ Đề',
    },
    {
        cinema: 'Galaxy Tân Bình',
        times: ['22:00', '22:30'],
        type: '2D Phụ Đề',
    },
    {
        cinema: 'Galaxy Sala',
        times: ['22:15'],
        type: '2D Phụ Đề',
    },
    {
        cinema: 'Galaxy Kinh Dương Vương',
        times: ['22:00', '22:30'],
        type: '2D Phụ Đề',
    },
];



const MovieDetail = () => {
    const [play, setPlay] = useState(false)
    const videoRef = useRef()


    const handlePlay = (play) => {

        setPlay(play)
        console.log(play)
        if (play) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const areaOptions = [
        { value: '1', label: 'Ha Noi' },
        { value: '2', label: 'TP. Ho Chi Minh' },
        { value: '3', label: 'Thai Binh' },
        { value: '4', label: 'Da Nang' },
        { value: '5', label: 'Hai Phong' },
        { value: '6', label: 'Quang Tri' },
    ]

    const theaterOptions = [
        { value: '1', label: 'Galaxy Nguyen Du' },
        { value: '2', label: 'Galaxy Tan Binh' },
        { value: '3', label: 'Galaxy Sala' },
        { value: '4', label: 'Galaxy Quang Trung' },
        { value: '5', label: 'Galaxy Mipec Long Bien' },
        { value: '6', label: 'Galaxy Da Nang' },
    ]

    return (
        <LayoutHeaderFooter>
            <Box>
                <Box className='bg-neutral-900 '>
                    <div className=' relative'>
                        <video
                            onClick={() => handlePlay(false)}
                            ref={videoRef}
                            className='h-[500px] w-full'
                        >
                            <source
                                src={sampleVideo}
                                type="video/mp4"
                            />
                        </video>
                        <PlayCircleOutlineRounded onClick={() => handlePlay(true)} className={play == true ? " hidden " : " block " + 'text-white top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] absolute text-[50px]'} ></PlayCircleOutlineRounded>
                    </div>
                </Box>

                <DetailLayout>
                    <Box className='px-4'>
                        <div className="flex mt-3 mb-20">
                            <div className="movie-poster">
                                <img src={movie.posterUrl} alt={`${movie.title} Poster`} />
                            </div>
                            <div className="movie-info">
                                <h1 className="text-start">{movie.title}</h1>
                                <div className="movie-meta flex items-center">
                                    <div className='mr-2'>
                                        <CiClock2 className='text-orange-500 inline ' />
                                        <span>{movie.duration} phút</span>
                                    </div>
                                    <div>
                                        <CiCalendar className='text-orange-500 inline' />
                                        <span>{movie.releaseDate}</span>
                                    </div>
                                </div>
                                <div className="movie-rating">
                                    <Star fontSize='medium' className='text-orange-500 inline' />
                                    <span>{movie.rating}</span>
                                    <span>({movie.votes} votes)</span>
                                </div>
                                <div className="movie-details text-start">
                                    <p>
                                        <strong className='mr-2'>Quốc gia: </strong> {movie.country}
                                    </p>
                                    <p>
                                        <strong className='mr-2'>Nhà sản xuất: </strong> {movie.producer}
                                    </p>
                                    <p>
                                        <strong className='mr-2'>Thể loại: </strong> {movie.genre}
                                    </p>
                                    <p>
                                        <strong className='mr-2'>Đạo diễn: </strong> {movie.director}
                                    </p>
                                    <p>
                                        <strong className='mr-2'>Diễn viên: </strong> {movie.actors.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 mb-10">
                            <div style={{ fontSize: '20px' }} className="mb-3 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                                <h3 className="w-full text-base font-semibold text-start">Nội Dung Phim</h3>
                            </div>

                            <p className="w-full text-[16px] text-left ">
                                Cửu Long Thành Trại là khu vực phức tạp có rất nhiều băng đảng xã hội đen. Khi Lạc Quân nhập cảnh trái phép vào Hồng Kông, anh được Quyền Phong giúp đỡ để tồn tại ở nơi này. Trong
                                lúc gặp nạn, họ vô tình phát hiện ra quy luật ngầm giữa sự hỗn loạn. Đứng trước những thế lực tội ác, họ đứng lên chống lại âm mưu đen tối của kẻ thù để giữ lời thề bảo vệ sự bình
                                yên. Xem thêm tại: https://www.galaxycine.vn/dat-ve/twilight-of-the-warriors-walled-in/
                            </p>
                        </div>
                        <div className="mb-10">
                            <div style={{ fontSize: '20px' }} className="mb-3 mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2">
                                <h3 className="w-full text-base font-semibold text-start">Lịch Chiếu</h3>
                            </div>
                            <Grid container spacing={1} className="mb-4 items-center">
                                <Grid item xs={7}>
                                    <Swiper
                                        spaceBetween={2}
                                        slidesPerView={4}
                                        scrollbar={{ draggable: true }}

                                    >
                                        <SwiperSlide>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Hôm Nay 17/06</button>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Ba 18/06</button>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Tư 19/06</button>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Năm 20/06</button>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Sáu 21/06</button>

                                        </SwiperSlide>
                                    </Swiper>
                                </Grid>

                                <Grid item xs={5}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} >
                                            <Select
                                                size='large'
                                                className='w-full text-left'
                                                defaultValue="All areas"
                                                options={areaOptions}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                size='large'
                                                className='w-full text-left'
                                                defaultValue="All theaters"
                                                options={theaterOptions}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </div>

                        <div>
                            <Box textAlign='left'>
                                {schedules.map((schedule, index) => (
                                    <div key={index} className="mt-5 pb-14 border-b-2">
                                        <h3 className="text-lg font-semibold">{schedule.cinema}</h3>
                                        <div className='flex items-center'>
                                            <p className="text-[16px] text-gray-500 w-[20%]">{schedule.type}</p>
                                            <div className="flex space-x-2 mt-2 justify-center">
                                                {schedule.times.map((time, idx) => (
                                                    <button key={idx} className="px-4 py-2 border rounded ">
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Box>
                        </div>
                    </Box>
                </DetailLayout>
            </Box>
        </LayoutHeaderFooter>

    );
};

export default MovieDetail;