import React, { useState } from 'react';
import Images from '../assets/images/image';
import { Button, Input } from 'antd';
import { IoIosSend } from 'react-icons/io';
import authentication from '~/restfulAPI/authentication';

const ResetPassword = () => {
    const [ok, setOk] = useState(false);
    const [okOTP, setOkOTP] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [check, setCheck] = useState({ code: false, phone: false, email: false, pass: false, reType: false });
    const [password, setPassword] = useState({ pass: '', rePass: '' });
    const handleSubmit = async (e) => {
        console.log(ok);
        setLoading(true);
        if (okOTP) {
            if (!value) setCheck((pre) => ({ ...pre, phone: 'error' }));
            if (!password.pass) setCheck((pre) => ({ ...pre, pass: 'error' }));
            if (!password.rePass) setCheck((pre) => ({ ...pre, reType: 'error' }));
            if (password.rePass !== password.pass) setCheck((pre) => ({ ...pre, reType: 'error' }));
            if (password.pass && password.rePass === password.pass) {
                const res = await authentication.sendOTP({ email, phoneNumber: value, newPassword: password.pass, confirmPassword: password.rePass });
                setOkOTP(res);
            }
        } else if (ok) {
            if (!password.code || !(otp.length <= 6 && otp.length > 0)) setCheck((pre) => ({ ...pre, code: 'error' }));

            if (otp && otp.length <= 6 && otp.length > 0) {
                const res = await authentication.verify({ email, otp: otp });
                if (!res) setOkOTP(res);
            }
        } else {
            if (!value) setCheck((pre) => ({ ...pre, phone: 'error' }));
            if (!email) setCheck((pre) => ({ ...pre, email: 'error' }));
            if (value && email) {
                const res = await authentication.sendOTP({ email, phone_number: value });
                setOk(res);
            }
        }
        setLoading(false);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex items-center ">
                    <img src={Images.logoApp} alt="MovieValley" className="w-20 h20" />
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">MovieValley</h1>
                </div>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {ok && !okOTP ? 'Verify' : ok && okOTP ? 'Change password' : 'Send OTP'}
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 text-center" action="#">
                        <div>
                            {!ok ? (
                                <>
                                    {' '}
                                    <Input
                                        status={check.email}
                                        placeholder="Enter your email to send OTP code"
                                        type="text"
                                        name="email"
                                        style={{ backgroundColor: '#374151' }}
                                        id="email"
                                        value={email}
                                        disabled={ok}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setCheck((pre) => ({ ...pre, email: '' }));
                                        }}
                                        className="changColor mb-2   bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <Input
                                        status={check.phone}
                                        placeholder="Phone number"
                                        type="phone"
                                        name="phone"
                                        style={{ backgroundColor: '#374151' }}
                                        id="phone"
                                        value={value}
                                        disabled={ok}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                            setCheck((pre) => ({ ...pre, phone: '' }));
                                        }}
                                        className="changColor bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </>
                            ) : (
                                <Input
                                    status={check.phone}
                                    placeholder="Enter your OTP"
                                    type="phone"
                                    name="otp"
                                    style={{ backgroundColor: '#374151' }}
                                    id="otp"
                                    value={otp}
                                    onChange={(e) => {
                                        setOtp(e.target.value);
                                        setCheck((pre) => ({ ...pre, code: '' }));
                                    }}
                                    className="changColor bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            )}
                            {okOTP && (
                                <>
                                    <Input.Password
                                        status={check.pass}
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        style={{ backgroundColor: '#374151' }}
                                        id="password"
                                        value={password.pass}
                                        onChange={(e) => {
                                            setPassword((pre) => ({ ...pre, pass: e.target.value }));
                                            setCheck((pre) => ({ ...pre, pass: '' }));
                                        }}
                                        className="changColor bg-gray-50 border my-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <Input.Password
                                        status={check.reType}
                                        placeholder="Enter your password again"
                                        type="password"
                                        name="reType"
                                        style={{ backgroundColor: '#374151' }}
                                        id="reType"
                                        value={password.rePass}
                                        onChange={(e) => {
                                            setCheck((pre) => ({ ...pre, reType: '' }));
                                            setPassword((pre) => ({ ...pre, rePass: e.target.value }));
                                        }}
                                        className="changColor bg-gray-50 border  border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                    />
                                </>
                            )}
                        </div>
                        <Button loading={loading} type="primary" className="flex items-center" onClick={handleSubmit}>
                            Send
                            <IoIosSend className="text-[20px]" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
