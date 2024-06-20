import { Container, Icon } from '@mui/material';
import { Button, Grid, Input, Layout, List, Row, Col, Popover } from 'antd';
import React from 'react';
import HeaderLogo from '../../assets/images/galaxy-logo-mobile.074abeac.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import { Search, Star, SearchIcon } from '@mui/icons-material';
import ruleEvent from '../../assets/images/icon-rules.9c822007.png';
import benefitEvent from '../../assets/images/icon-login.fbbf1b2d.svg';
import guidEvent from '../../assets/images/faq.ce7c4be4.png';
import registerEvent from '../../assets/images/bear_glx.d5131c11.png';
import joinStar from '../../assets/images/join-Gstar.24c52de9.png';
import getTicker from "../../assets/images/btn-ticket.42d72c96.webp"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const InputSearch = <Input placeholder="Tìm kiếm..." variant="filled" />;
    const Event = () => (
        <Row gutter={16} className="bg-white">
            <Col className="gutter-row" span={6}>
                <div className="flex flex-col items-center gap-2 pt-11 ">
                    <div>
                        <img style={{ height: '80px' }} src={ruleEvent} />
                    </div>
                    <h5 className="text-justity text-sm font-bold text-zinc-500">Thể Lệ</h5>
                    <Button type="primary" size="middle" className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                        Chi Tiết
                    </Button>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="flex flex-col items-center gap-2 pt-11 ">
                    <div>
                        <img style={{ height: '80px' }} src={benefitEvent} />
                    </div>
                    <h5 className="text-justity text-sm font-bold text-zinc-500">Quyền Lợi</h5>
                    <Button type="primary" size="middle" className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                        Chi Tiết
                    </Button>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="flex flex-col items-center gap-2 pt-11 ">
                    <div>
                        <img style={{ height: '80px' }} src={guidEvent} />
                    </div>
                    <h5 className="text-justity text-sm font-bold text-zinc-500">Hướng Dẫn</h5>
                    <Button type="primary" size="middle" className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                        Chi Tiết
                    </Button>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="flex flex-col items-center gap-2 pt-6">
                    <div>
                        <img style={{ height: '80px' }} src={registerEvent} />
                    </div>
                    <h5 className="text-justity text-sm font-bold text-zinc-500">Đăng Ký Thành Viên G-Star Nhận Ngay Ưu Đãi!</h5>
                    <Button type="primary" size="middle" className="bg-orange-500 text-white">
                        Đăng Ký
                    </Button>
                </div>
            </Col>
        </Row>
    );

    return (
        <div className="py-6 flex justify-between items-center px-28">
            <div className="">
                <Link to="/homepage">
                    <img className="" width={120} src={HeaderLogo} />
                </Link>
            </div>

            <div className="">
                <ul className="flex items-center">
                    <li className="px-6 py-2">
                        <img src={getTicker} width={112} height={36} />
                    </li>
                    <li className="px-6 py-2 text-zinc-500 hover:text-orange-500 cursor-pointer">
                        <span>Phim</span>
                        <KeyboardArrowDownIcon style={{ color: 'currentcolor' }} />
                    </li>
                    <li className="px-6 py-2 text-zinc-500 hover:text-orange-500 cursor-pointer">
                        <span>Góc điện ảnh</span>
                        <KeyboardArrowDownIcon style={{ color: 'currentcolor' }} />
                    </li>
                    <li className="px-6 py-2 text-zinc-500 hover:text-orange-500 cursor-pointer">
                        <span>Sự kiện</span>
                        <KeyboardArrowDownIcon style={{ color: 'currentcolor' }} />
                    </li>
                    <li className="px-6 py-2 text-zinc-500 hover:text-orange-500 cursor-pointer">
                        <span>Rạp/Giá vé</span>
                        <KeyboardArrowDownIcon style={{ color: 'currentcolor' }} />
                    </li>
                </ul>
            </div>

            <div>
                <div className="flex items-center gap-3">
                    <Popover content={InputSearch} trigger="click">
                        <Button type="text">
                            <Search color="primary" />
                        </Button>
                    </Popover>
                    <Link to="/login" className="hover:text-orange-500 cursor-pointer">Đăng nhập</Link>
                    <div>
                        <Popover content={Event} placement="bottomRight">
                            <img src={joinStar} className="ant-popover-open" />
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
