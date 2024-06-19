import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../App.css'
const movie = {
    posterUrl: 'https://i.pinimg.com/736x/dc/4b/da/dc4bdad654becb004232f1c4ab12dd69.jpg',
    title: 'Cửu Long Thành Trại: Vây Thành',
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
    return (
        <div className="movie-detail">
            <div className="w-full h-[450px]">
                <Swiper navigation={ true } modules={ [Navigation] } className="mySwiper h-full">
                    <SwiperSlide className="h-full">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/01/fighter-movie-review-01.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <div className="w-full h-full">
                            <img
                                className="w-full h-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljuUBBqDnd2bMZxjnVoaFIjzxsGvkGbCWne4EfGmTdWkGlpMXj99Qs6uWvNBMxxd8PoQ&usqp=CAU"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <div className="w-full h-full">
                            <img
                                className="w-full h-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zdqi_RNwGhWETiMgnOfrF8IfN_eOsF8yqW0v6Waj22_ZyLLNyWa9j1eV1x0lQcIb-RY&usqp=CAU"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
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
        </div>
    );
};

export default MovieDetail;