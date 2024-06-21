import { useRef, useState } from 'react';
import { CiClock2 } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../App.css'
import { Box, Card, CardContent, Typography } from '@mui/material';
// import { CardCover } from '@mui/joy';
import { PlayCircleOutline, PlayCircleOutlineRounded } from '@mui/icons-material';
import sampleVideo from '~/assets/videos/trailerMovie.mp4';

const movie = {
    posterUrl: 'https://cdn.galaxycine.vn/media/2024/5/6/inside-out-2-3_1714970461256.jpg',
    title: 'Những Mảnh Ghép Cảm Xúc 2',
    duration: 124,
    releaseDate: '14/06/2024',
    rating: 9.5,
    votes: 107,
    country: 'Hong Kong',
    producer: 'Đang cập nhật',
    genre: 'Hành Động',
    director: 'Trịnh Bảo Thụy',
    actors: ['Nhậm Hiền Tề', 'Hồng Kim Bảo', 'Lâm Phong', 'Cổ Thiên Lạc'],
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

    return (

        <div >
            <Box className='bg-neutral-900 '>
                <div className=' relative'>
                    <video
                        onClick={ () => handlePlay(false) }
                        ref={ videoRef }
                        className='h-[500px] w-full'
                    >
                        <source
                            src={ sampleVideo }
                            type="video/mp4"
                        />
                    </video>
                    <PlayCircleOutlineRounded onClick={ () => handlePlay(true) } className={ play == true ? " hidden " : " block " + 'text-white top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] absolute text-[50px]' } ></PlayCircleOutlineRounded>
                </div>
            </Box>



            <Box className='px-4'>
                <div className="flex mt-3">
                    <div className="movie-poster">
                        <img src={ movie.posterUrl } alt={ `${ movie.title } Poster` } />
                    </div>
                    <div className="movie-info">
                        <h1 className="text-start">{ movie.title }</h1>
                        <div className="movie-meta flex items-center">
                            <CiClock2 />
                            <span>{ movie.duration } phút</span>
                            <span>{ movie.releaseDate }</span>
                        </div>
                        <div className="movie-rating">
                            <span>{ movie.rating }</span>
                            <span>({ movie.votes } votes)</span>
                        </div>
                        <div className="movie-details text-start">
                            <p>
                                <strong>Quốc gia:</strong> { movie.country }
                            </p>
                            <p>
                                <strong>Nhà sản xuất:</strong> { movie.producer }
                            </p>
                            <p>
                                <strong>Thể loại:</strong> { movie.genre }
                            </p>
                            <p>
                                <strong>Đạo diễn:</strong> { movie.director }
                            </p>
                            <p>
                                <strong>Diễn viên:</strong> { movie.actors.join(', ') }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] mt-3">
                    <h3 className="w-full text-base font-bold text-start">Nội Dung Phim</h3>
                    <p className="w-full text-[12px] text-start">
                        Cửu Long Thành Trại là khu vực phức tạp có rất nhiều băng đảng xã hội đen. Khi Lạc Quân nhập cảnh trái phép vào Hồng Kông, anh được Quyền Phong giúp đỡ để tồn tại ở nơi này. Trong
                        lúc gặp nạn, họ vô tình phát hiện ra quy luật ngầm giữa sự hỗn loạn. Đứng trước những thế lực tội ác, họ đứng lên chống lại âm mưu đen tối của kẻ thù để giữ lời thề bảo vệ sự bình
                        yên. Xem thêm tại: https://www.galaxycine.vn/dat-ve/twilight-of-the-warriors-walled-in/
                    </p>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Lịch Chiếu</h2>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Hôm Nay 17/06</button>
                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Ba 18/06</button>
                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Tư 19/06</button>
                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Năm 20/06</button>
                            <button className="px-4 py-2 bg-gray-200 rounded">Thứ Sáu 21/06</button>
                        </div>
                        <div className="flex space-x-2">
                            <select className="px-4 py-2 border rounded">
                                <option>Toàn quốc</option>
                            </select>
                            <select className="px-4 py-2 border rounded">
                                <option>Tất cả rạp</option>
                            </select>
                        </div>
                    </div>
                    { schedules.map((schedule, index) => (
                        <div key={ index } className="mb-4">
                            <h3 className="text-lg font-semibold">{ schedule.cinema }</h3>
                            <p className="text-sm text-gray-500">{ schedule.type }</p>
                            <div className="flex space-x-2 mt-2 justify-center">
                                { schedule.times.map((time, idx) => (
                                    <button key={ idx } className="px-4 py-2 border rounded ">
                                        { time }
                                    </button>
                                )) }
                            </div>
                        </div>
                    )) }
                </div>
            </Box>
        </div>
    );
};

export default MovieDetail;