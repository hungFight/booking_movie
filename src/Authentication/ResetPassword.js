import React, { useState } from 'react';
import Images from '../assets/images/image';
import { Input } from 'antd';
import { IoIosSend } from 'react-icons/io';

const ResetPassword = () => {
    const [value, setValue] = useState('');
    const [check, setCheck] = useState('');
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const handledata = (e) => {
        setCheck(e.target.value.match(regexPhoneNumber) ? '' : 'warning');
        setValue(e.target.value);
    };

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex items-center ">
                    <img src={Images.logoApp} alt="MovieValley" className="w-20 h20" />
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">MovieValley</h1>
                </div>
                <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Send OTP</h2>
                    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5 text-center" action="#">
                        <div>
                            <Input
                                status={check}
                                placeholder="Phone number"
                                type="phone"
                                name="phone"
                                style={{ backgroundColor: '#374151' }}
                                id="phone"
                                onChange={handledata}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setCheck(value.match(regexPhoneNumber) ? ' ' : 'error');
                            }}
                            class=" text-white bg-[#355889] m-auto my-5 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center"
                        >
                            Send
                            <IoIosSend className="text-[20px]" />
                        </button>
                    </form>
                    {/* <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Change Password</h2>
                    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                New Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Confirm password
                            </label>
                            <input
                                type="confirm-password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="newsletter"
                                    aria-describedby="newsletter"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">
                                    I accept the{' '}
                                    <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Reset passwod
                        </button>
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
