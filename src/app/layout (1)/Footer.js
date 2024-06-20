import { Row, Menu, Col, Typography } from 'antd';
import Column from 'antd/es/table/Column';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import galaxyCinema from '../../assets/images/galaxy-logo-footer.7a918263.svg';
import boconthuong from '../../assets/images/glx_trade.61f6c35c.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const items1 = [
    {
        key: 'about',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                về chúng tôi
            </a>
        ),
    },
    {
        key: 'agreeUse',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                thỏa thuận sử dụng
            </a>
        ),
    },
    {
        key: 'activePolicy',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                quy chế hoạt động
            </a>
        ),
    },
    {
        key: 'security',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                chính sách bảo mật
            </a>
        ),
    },
];

const items2 = [
    {
        key: 'filmCategory',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                thể loại phim
            </a>
        ),
    },
    {
        key: 'filmComment',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                bình luận phim
            </a>
        ),
    },
    {
        key: 'blog',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                blog điện ảnh
            </a>
        ),
    },
    {
        key: 'goodInMonth',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                phim hay tháng
            </a>
        ),
    },
    {
        key: 'imax',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                phim IMAX
            </a>
        ),
    },
];

const items3 = [
    {
        key: 'subject',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                góp ý
            </a>
        ),
    },
    {
        key: 'sale',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                sale & services
            </a>
        ),
    },
    {
        key: 'cinema',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                rạp / giá vé
            </a>
        ),
    },
    {
        key: 'hiring',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                tuyển dụng
            </a>
        ),
    },
    {
        key: 'faq',
        label: (
            <a href="https://ant.design" target="_blank" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500" rel="noopener noreferrer">
                FAQ
            </a>
        ),
    },
];

function Footer() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Row className="bg-[#333] px-28 p-[30px]">
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    giới thiệu
                </Typography>
                <Menu onClick={onClick} className="bg-transparent" selectedKeys={[current]} mode="vertical" items={items1} />
            </Col>
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    góc điện ảnh
                </Typography>
                <Menu onClick={onClick} className="bg-transparent" selectedKeys={[current]} mode="vertical" items={items2} />
            </Col>
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    hỗ trợ
                </Typography>
                <Menu onClick={onClick} className="bg-transparent" selectedKeys={[current]} mode="vertical" items={items3} />
            </Col>
            <Col span={6} className="text-left">
                <div className="pb-5">
                    <img src={galaxyCinema} />
                </div>
                <ul className="flex items-center gap-2 pb-5">
                    <li>
                        <a>
                            <FacebookIcon fontSize="large" className="text-[#d0d0d0]" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <YouTubeIcon fontSize="large" className="text-[#d0d0d0]" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <InstagramIcon fontSize="large" className="text-[#d0d0d0]" />
                        </a>
                    </li>
                </ul>
                <div>
                    <img width={150} height={57} src={boconthuong} />
                </div>
            </Col>
        </Row>
    );
}

export default Footer;
