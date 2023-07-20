import React, { useState, useEffect } from 'react'
import styles from '../styles/header.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Imagecard = ({ name, image }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [isOpen, setIsOpen] = useState(false)
    const alet = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className={`rounded overflow-hidden shadow-lg mt-16 w-2/3 ml-12 max-w-xs transition duration-300 ease-in-out hover:scale-110 ${styles.bg}`} onClick={alet} >

                <div className='items-center justify-center ml-6'>
                    <img className="w-2/3 ml-10 mt-2" src={image} alt="Forest" /> </div>

                <div className="flex px-6 py-1 justify-between">
                    <div className="font-bold text-l mb-2">{name}</div>
                    <a  className="font-bold text-l mb-2 order-last">Buy</a>
                </div>
            </div >
            {isOpen && (
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
        </>

    )
}
