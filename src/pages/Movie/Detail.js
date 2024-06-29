import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
import { useLocation, useParams } from 'react-router-dom';
import movie from '~/restfulAPI/movie';
import schedule from '~/restfulAPI/schedule';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const MovieDetail = () => {
    const query = useQuery()
    let id = query.get("id")

    const [movieDetail, setMovieDetail] = useState(null)
    async function getMovieById() {
        const res = await movie.getMovieById(id)
        setMovieDetail(res)
    }

    useEffect(() => {
        getMovieById()
    }, [])


    const [movieTypes, setMovieTypes] = useState(null)
    async function getMovieTypesByMovieId() {
        const res = await movie.getMovieTypeByMovieId(id)
        setMovieTypes(res)
    }

    useEffect(() => {
        getMovieTypesByMovieId()
    }, [])


    const [schedules, setSchedules] = useState(null)
    async function getSchedulesByMovieName() {
        const res = await schedule.getScheduleByMovieName(movieDetail?.name)
        let schedulesMap = res.reduce((acc, item) => {
            const key = item.room.cinema.id

            if (!acc[key]) {
                acc[key] = { cinemaId: key, cinemaName: item.room.cinema.nameOfCinema, items: [] }
            }

            acc[key].items.push(item)
            return acc
        }, [])
        setSchedules(schedulesMap)
        console.log(schedulesMap);
    }

    useEffect(() => {
        getSchedulesByMovieName()
    }, [])


    const [timeSelected, setTimeSelected] = useState(null)

    const handleSelectTimeMovie = (id) => {
        setTimeSelected(id)
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
                    <div className=' relative flex justify-center'>
                        <iframe width="50%" height="315" src={movieDetail?.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </Box>

                <DetailLayout>
                    <Box className='px-4'>
                        {
                            movieDetail &&
                            <div className="flex mt-3 mb-20">
                                <div className="movie-poster">
                                    <img src={`http://localhost:8081/api/movie/images?imageName=${movieDetail.image}`} alt={`${movieDetail.name} Poster`} />
                                </div>
                                <div className="movie-info">
                                    <h1 className="text-start">{movieDetail.name}</h1>
                                    <div className="movie-meta flex items-center">
                                        <div className='mr-2'>
                                            <CiClock2 className='text-orange-500 inline ' />
                                            <span>{movieDetail.movieDuration} phút</span>
                                        </div>
                                        <div>
                                            <CiCalendar className='text-orange-500 inline' />
                                            <span>{movieDetail.endTime}</span>
                                        </div>
                                    </div>
                                    <div className="movie-rating">
                                        <Star fontSize='medium' className='text-orange-500 inline' />
                                        <span>9.5</span>
                                        <span>100 votes</span>
                                    </div>
                                    <div className="movie-details text-start">
                                        <p>
                                            <strong className='mr-2'>Quốc gia: </strong>
                                            <span>{movieDetail.language}</span>
                                        </p>
                                        <p>
                                            <strong className='mr-2'>Nhà sản xuất: </strong>
                                            <span>{movieDetail.director}</span>
                                        </p>
                                        <p>
                                            <strong className='mr-2'>Thể loại: </strong>
                                            {
                                                movieTypes &&
                                                movieTypes.map(type =>
                                                    <span className='capitalize'>{type.movieTypeName + ", "}</span>
                                                )
                                            }
                                        </p>
                                        <p>
                                            <strong className='mr-2'>Đạo diễn: </strong>
                                            <span>{movieDetail.director}</span>
                                        </p>
                                        <p>
                                            <strong className='mr-2'>Diễn viên: </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        }
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
                                {
                                    schedules &&
                                    schedules.map((schedule, index) => (
                                        <div key={index} className="mt-5 pb-14 border-b-2">
                                            <h3 className="text-lg font-semibold">{schedule.cinemaName}</h3>
                                            <div className='flex items-center'>
                                                <p className="text-[16px] text-gray-500 w-[20%]">2D Phụ Đề</p>
                                                <div className="flex space-x-2 mt-2 justify-center">
                                                    {schedule.items.map((item, idx) => (
                                                        <button onClick={() => handleSelectTimeMovie(idx)} key={idx} className={"px-4 py-2 border rounded hover:bg-blue-800 hover:text-white transition-all " + (timeSelected == idx && "bg-blue-800 text-white")}>
                                                            {
                                                                (new Date(item.startAt).getHours() < 10 ? "0" + new Date(item.startAt).getHours() : new Date(item.startAt).getHours()) + ":" + (new Date(item.startAt).getMinutes() < 10 ? "0" + new Date(item.startAt).getMinutes() : new Date(item.startAt).getMinutes())
                                                            }
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Box>
                        </div>
                    </Box>
                </DetailLayout>
            </Box>
        </LayoutHeaderFooter>

    );
};

export default MovieDetail;