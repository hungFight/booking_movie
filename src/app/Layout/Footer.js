import { Row, Menu, Col, Typography } from 'antd';
import Column from 'antd/es/table/Column';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import galaxyCinema from '../../assets/images/galaxy-logo-footer.7a918263.svg';
import boconthuong from '../../assets/images/glx_trade.61f6c35c.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';


function Footer() {

    return (
        <Row className="bg-[#333] px-28 p-[30px]">
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    introduce
                </Typography>
                <MenuList>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/about-us" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            about us
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/term" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            term of use
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/operating-regulation" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            operating regulation
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/policy" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            privacy policy
                        </Link>
                    </MenuItem>
                </MenuList>
            </Col>
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    cinema corner
                </Typography>
                <MenuList>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/movie-genre" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px] " rel="noopener noreferrer">
                            moive genre
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/term" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            movie commentary
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/operating-regulation" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            cinema blog
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/policy" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            good movie month
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/policy" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            movie IMAX
                        </Link>
                    </MenuItem>
                </MenuList>
            </Col>
            <Col span={6} className="text-left">
                <Typography className="text-sm font-bold text-white uppercase tracking-wider mb-4 ps-5" variant="h3">
                    support
                </Typography>
                <MenuList>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/about-us" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            feedback
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ padding: "10px 20px" }}>
                        <Link to="/policy" style={{ color: 'rgb(208 208 208)' }} className="capitalize hover:text-orange-500 text-[14px]" rel="noopener noreferrer">
                            threaters / ticket prices
                        </Link>
                    </MenuItem>
                </MenuList>
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
