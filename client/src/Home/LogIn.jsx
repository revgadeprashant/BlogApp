import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { loginacc } from '../redux/apiCalls';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',      
        background: 'linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url("https://i.pinimg.com/originals/97/30/5a/97305a0490fcc5b7259edce30544e12e.jpg")',
        backgroundSize: 'cover',
        position: 'relative',
    },
    login_form: {
        display: 'flex',
        flexDirection: 'column',
    },
    login_formh1: {
        fontSize: '35px',
        marginBottom: '15px',
        paddingBottom: '10px',
        letterSpacing: '1px',
    }, login_forminput: {
        minWidth: '380px',
        padding: '20px 0',
        paddingLeft: '15px',
        marginBottom: '10px',
        outline: 'none',
        border: '1px solid rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
        fontSize: '15px',
    },
    login_button: {
        padding: '17px 30px',
        marginTop: '10px',
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
        fontSize: '14px',
        borderRadius: '3px',
    },
    link:{
        textDecoration:'none',
        color:'#FFFF'
            }

})

const Login = () => {
    const classes = useStyle();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginacc(dispatch, {
            email: email,
            password: password,
        });
        history.push('/')
    }

    return (
        <div className={classes.login}>
            <form className={classes.login_form} onSubmit={(e) => handleSubmit(e)} disabled={isFetching}>
                <h1 className={classes.login_formh1}>Login Here</h1>
                <input className={classes.login_forminput} type="text" name="" id="" placeholder='your email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input className={classes.login_forminput} type="password" name="" id="" placeholder='your password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className={classes.login_button} >LogIn</button>
            </form>
            <Link to='/signup' className={classes.link}>Create New Account</Link>
        </div>
    )
}

export default Login