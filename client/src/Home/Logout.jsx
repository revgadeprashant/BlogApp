import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    logout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif, */
    },

    logout_button: {
        minWidth: '300px',
        padding: '17px 30px',
        marginTop: '10px',
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
        fontSize: '14px',
        borderRadius: '3px',
    },

    user_name: {
        color: 'rgb(221, 27, 179)',
    }
})


const Logout = () => {
    const classes = useStyle();
    // const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <>
            <div className={classes.logout}>
                <form className={classes.logout_button} onSubmit={(e) => handleLogout(e)}>
                    <h1>Login Here</h1>
                    <input type="text" placeholder='your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="" id="" placeholder='your email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="" id="" placeholder='your password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name="" id="" placeholder='confirm password' value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)} />
                    <button type="submit" className={classes.user_name}
                    // onClick={(e) => handleLogout(e)}
                    >Log Out</button>
                    <Link to='/signin'>Already have Account? login</Link>
                </form>


            </div>
        </>
    )
}
export default Logout;