import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { usersignup } from '../service/api';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url("https://th.bing.com/th/id/R.9df48717dd86165e563683d41b3da5eb?rik=GmO7fxLP6OloUQ&riu=http%3a%2f%2fcdn-image.travelandleisure.com%2fsites%2fdefault%2ffiles%2fstyles%2f1600x1000%2fpublic%2fbrownbearcentre0815.jpg%3fitok%3d5tcXuI3H&ehk=KZmuVnFyhybW3uKTnd5TyJK2pGi1TpcMPfghuynN%2bLE%3d&risl=&pid=ImgRaw&r=0")',
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
        color:'#FFFF'
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

const Signup = () => {
    const classes = useStyle();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const history = useHistory();
    const user={name,email,password,cpassword};     
   

    const handleSubmit = async () => {
        await usersignup(user)
        history.push('/signin')
    }

    return (
        <div className={classes.login}>
            <form className={classes.login_form} onSubmit={(e) => handleSubmit()} >
                <h1 className={classes.login_formh1}>Register</h1>
                <input className={classes.login_forminput} type="text" placeholder='your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className={classes.login_forminput} type="text" name="" id="" placeholder='your email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input className={classes.login_forminput} type="password" name="" id="" placeholder='your password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <input className={classes.login_forminput} type="password" name="" id="" placeholder='confirm password' value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)} />
                <button type="submit" className={classes.login_button} >Register</button>
            </form>
            <Link to='/signin' className={classes.link}>Already have account? Sign in here</Link>
        </div>
    )
}

export default Signup