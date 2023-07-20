import React, { useState, useEffect } from 'react'
import styles from '../styles/header.module.css'
import logo from '../assets/logo.png'
import headerimg from '../assets/header.png'
import tshirt from '../assets/tshirt.png'
import shampoo from '../assets/shampoo.png'
import teddy from '../assets/teddy.png'
import book from '../assets/book.png'
import watch from '../assets/watch.png'
import applicance from '../assets/applicance.png'
import bitcoin from '../assets/bitcoin.png'
import { Imagecard } from '../Components/Imagecard'
import { Partner } from '../Components/Partner'
import binance from '../assets/binance.png'
import coindcx from '../assets/coindcx.png'
import opnesea from '../assets/opnesea.png'
import huobi from '../assets/huobi.png'
import chainlink from '../assets/chainlink.png'
import graph from '../assets/graph.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [isCodeInvalid, setIsCodeInvalid] = useState(false)
    const [code, setCode] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [alet, setAlet] = useState(false)
    const closeModal = () => {
        setAlet(false)
    }
    const handleCodeChange = (e) => {
        let value = e.target.value.toUpperCase();
        value = value.trimStart();
        setCode(value);
        if (value.length == 0) {
            setIsCodeInvalid(false)
            return

        }
        if (value.length !== 5) {
            setIsCodeInvalid(true);
        }
        else {
            setIsCodeInvalid(false);
        }
    };

    const metamask = () => {
        if (code === '' || code.length !== 5) {
            setIsCodeInvalid(true);
            return
        }
        localStorage.setItem('code', code);
        window.open('/metamask', 'target=_blank', `window=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,height=580px,width=350px,top=0,left=${window.screen.width - 300}`)
    }

    return (
        <div>
            <header className={`${styles.header} h-screen`}>
                <nav>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <a href="" className="flex items-center mt-3 ">
                            <img src={logo} className="h-20" alt="MetaMarket" />
                        </a>
                        <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <a href="" className="block py-2 pl-3 pr-4 text-2xl mt-3 md:p-0 lg:text-xl " aria-current="page">Home</a>
                            </li>

                            <li>
                                <a href="#services" className="block py-2 pl-3 pr-4 0 text-2xl mt-3 lg:text-xl hover:bg-transparent md:border-0  md:p-0  ">Services</a>
                            </li>
                            <li>
                                <a href="#partner" className="block py-2 pl-3 pr-4 text-2xl mt-3 lg:text-xl hover:bg-transparent md:border-0  md:p-0 ">Our Partner</a>
                            </li>
                            <li>
                                <button className={`${styles.btn} mr-10`} onClick={() => setShowModal(true)} >Connect Wallet</button>
                                {showModal ? (
                                    <>
                                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                                                    <div className="relative p-6 flex-auto">
                                                        <div className="rounded-lg px-8 pb-8 w-full">
                                                            <label className="block text-black mb-1">
                                                                Link Code
                                                            </label>
                                                            <input className="shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                                                                type="text"
                                                                placeholder="Enter code"
                                                                value={code}
                                                                onChange={handleCodeChange} />
                                                            {isCodeInvalid && (
                                                                <p className="text-red-600 text-sm mb-2">Invalid code</p>
                                                            )}

                                                            <div className=''>
                                                                <button className='mt-8 shadow flex gap-2 bg-blue-400 hover:bg-blue-500 text-tt font-bold py-2 px-4 rounded  transition duration-300 ease-in-out hover:scale-110' target="_blank" onClick={metamask}>
                                                                    <svg aria-hidden="true" className="h-7" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726" /><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625" /><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625" /><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625" /><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625" /><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625" /><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625" /><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625" /><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2" /><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2" /><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447" /><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447" /><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228" /><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228" /><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228" /><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228" /><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525" /><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525" /><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525" /><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525" /><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F" /><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F" /><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D" /><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616" /><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A" /><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A" /><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F" /><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F" /><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F" /></svg>
                                                                    Connect Metamask</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center mb-4  border-solid rounded-b">
                                                        <button
                                                            className="bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                            type="button"
                                                            onClick={() => {
                                                                setCode('')
                                                                setIsCodeInvalid(false)
                                                                setShowModal(false)
                                                                localStorage.removeItem('code')                                                       
                                                            }}
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='flex grid grid-cols-2'>
                    <p data-aos="zoom-in-right" className='mt-20 ml-20 w-2/3 h-20 text-3xl font-extrabold  2xl:mt-12 lg:w-full  xl:w-2/3'>Streamline your purchasing power with Crypto</p>
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className={` ${styles.shadow} hover:scale-125 transition-all duration-500 cursor-pointer`} src={headerimg} alt="Image" />
                    <p className={`text-xl w-2/3 ml-20 font-extralight ${styles.buy} 2xl:mt-12`}>Buy real products effortlessly and securely, unlocking a world of convenience</p>
                    <p className={`text-xl w-2/3 ml-20 font-extralight mt-5`}>Our platform simplifies the purchasing process, allowing you to buy real products effortlessly</p>
                    <p data-aos="zoom-out-down" className={`text-xl w-2/3 ml-20 font-extralight relative bottom-32`}> Experience the freedom of purchasing real products in within click. Embrace the convenience and efficiency of crypto powered transactions on our user friendly platform</p>
                    <a href='#product' className={`${styles.recbtn} lg:mt-12`}>Know More</a>
                </div>
            </header>
            <div id='product' className={`${styles.new}  h-screen`}>
                <img />
                <h1 className='flex text-3xl mt-10 font-extrabold items-center justify-center'>New Arrivals</h1>
                <hr className="w-24 h-1 mx-auto  bg-gray-100 border-0 rounded md:my-2 dark:bg-red-400"></hr>
                <div className='flex grid grid-cols-3'><Imagecard data-aos='fade-right' name={"Shampoo"} image={shampoo} />
                    <Imagecard name={"Clothing"} image={tshirt} />
                    <Imagecard name={"Watch"} image={watch} />
                    <Imagecard name={"Book"} image={book} />
                    <Imagecard name={"Applicance"} image={applicance} />
                    <Imagecard name={"Teddy"} image={teddy} />
                </div>
            </div>
            <div id='services' className={`${styles.service} h-screen`}>
                <img />
                <h1 data-aos="zoom-out" className='flex text-3xl font-extrabold items-center justify-center mt-10'>Services</h1>
                <hr className="w-24 h-1 mx-auto  bg-gray-100 border-0 rounded mt-2 md:my-2 dark:bg-red-400"></hr>
                <p data-aos="zoom-in" className='flex text-3xl font-extrabold items-center justify-center'>We accept payment in crypto</p>
                <div className='mt-10 flex grid grid-cols-2'>
                    <p data-aos='fade-right' className='ml-20 w-2/3 h-20 text-3xl font-extrabold lg:text-2xl  lg:w-full md:w-full md:text-xl'>Say goodbye to tedious authorization processes and hello to instant gratification.</p>
                    <img data-aos="fade-up" data-aos-duration="300" className={`ml-20 ${styles.shadow}  lg:w-4/5 md:w-2/3`} src={bitcoin} alt="Image" />
                </div>
                <div data-aos='fade-right' className={`text-xl w-1/2 ml-20 font-extralight ${styles.by} lg:mt-52 md:w-1/2 md:mt-60 xl:mt-32 2xl:mt-12`}>By embracing cryptocurrency, we enable you to complete transactions swiftly, ensuring that your desired products reach your doorstep in no time</div>
                <div data-aos='fade-left' className={`text-3xl w-1/2 mt-10 ml-20 font-extrabold ${styles.by} lg:text-2xl lg:w-1/2 md:w-1/2 md:text-xl`}>Your time is valuable, and we're committed to providing you with the most efficient buying process possible.</div>
                <div data-aos='fade-left' className={`text-xl w-1/2 ml-20 mb-4 mt-10 font-extralight ${styles.by}`}> Join us in the movement towards decentralized finance and experience the freedom to control your money like never before</div>
                <button className={`
                bg-blue-300 hover:bg-blue-700 font-bold py-2 px-5 mt-5 ml-20 rounded focus:outline-none focus:shadow-outline ${styles.by}`} onClick={() => { setAlet(true) }}>Join Now</button>
                {alet && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen p-4">
                            <div className="bg-white rounded-lg p-8">
                                <div className="mb-6 text-xl font-extrabold">
                                    This feature is in development
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="bg-blue-300 hover:bg-blue-700 font-bold py-2 px-5 mt-5 rounded focus:outline-none focus:shadow-outline"
                                        onClick={closeModal}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div id='partner' className={`${styles.h} h-screen`}>
                <img />
                <h1 data-aos="fade-up" data-aos-duration="1500" className='flex text-3xl font-extrabold items-center justify-center mt-10'>Our Partners</h1>
                <hr className="w-24 h-1 mx-auto  bg-gray-100 border-0 rounded mt-2 md:my-2 dark:bg-red-400"></hr>
                <h1 data-aos="zoom-out-down" className='text-xl mt-10 flex font-extrabold items-center justify-center lg:ml-10 lg:mr-10'>We believe in the power of partnerships to create a stronger ecosystem and deliver exceptional value to our customers</h1>
                <div data-aos="zoom-in-up" className='flex grid grid-cols-3'>
                    <Partner image={binance} />
                    <Partner image={coindcx} />
                    <Partner image={opnesea} />
                    <Partner image={huobi} />
                    <Partner image={chainlink} />
                    <Partner image={graph} />
                </div>
            </div>
            <div id='ft' className={`${styles.partner}`}>
                <div className="max-w-screen-xl  items-center justify-between mx-auto  flex  grid grid-cols-3">

                    <a href="/" className="flex items-center">
                        <img src={logo} className="" alt="MetaMarket" />
                    </a>
                    <div className=' mt-12 flex flex-col mx-auto'>
                        <a href=''>Accessories (6)</a>
                        <a href=''>Cards (6)</a>
                        <a href=''>Clothing (6)</a>
                        <a href=''>Handbags (6)</a>
                        <a href=''>Jewelry (6)</a>
                        <a href=''>Office & Stationery (6)</a>
                        <a href=''>Toys (6)</a>
                        <a href=''> Wallets (6)</a>
                    </div>

                    <div className=" border-red-900 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-2xl">Sign up for special offers</h2>

                        <div className="mx-auto max-w-screen-md sm:text-center">
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium" >Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center  rounded-lg border cursor-pointer bg-primary-700 border-slate-950 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='text-xl ml-10 font-extrabold mt-12 py-12'>Copyright © 2023 | Powered by MetaMarket</div>
            </div>


        </div >

    )
}
