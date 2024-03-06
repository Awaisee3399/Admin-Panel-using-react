
import { BackgroundImg } from './Styled'
import Logo from '../image/icon.png'
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
    const [visible, setvisible] = useState(false);
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    const [userErr, setuserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);

    function loginHandle(e) {

        if (user.length < 5 || password.length < 5) {
            alert("type correct values")
        }
        else {
            alert("All Good")
        }
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 5) {
            setuserErr(true)
        }
        else {
            setuserErr(false)
        }
        setuser(item)
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 5) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
        setpassword(item)
    }

    const navigate = useNavigate()
    const nextPage = (state) => {
        navigate('/Dashboard', { state })
    }

    return (
        <>
            <BackgroundImg>
                <form onSubmit={loginHandle} >
                    <div className='parent'>

                        <div className='card'>
                            <div className='Heading'>
                                <img src={Logo} className='w-100' />
                            </div>
                            <h4 className='main-head'>USERNAME</h4>
                            <input type='text' className='user' placeholder='  Your Username  ' onChange={userHandler} />
                            {userErr ? <span className='span'>Username required</span> : ""}
                            {/* {errors.name && <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>} */}
                            <diV className='password'>
                                <h4 className='main-headd'>PASSWORD </h4>
                                <h4 className='main-headdd'>Forget Password?</h4>
                            </diV>
                            <div className='relative'>
                                <input type={visible ? "text" : "password"} className='user' placeholder=' Password  ' onChange={passwordHandler} />
                                {passErr ? <span className='span'>password required</span> : ""}
                                {/* {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>} */}
                                <span className="absolute" onClick={() => setvisible(!visible)}>
                                    {visible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <button type='submit' className='btn' onClick={() => nextPage()}>Login</button>
                        </div>
                    </div>
                </form>
            </BackgroundImg>
        </>
    )
}
export default Home
