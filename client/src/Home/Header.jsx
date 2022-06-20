import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const useStyle = makeStyles({
    component: {
        background: 'black',
        color: '#FFFFFF'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})
const Header = () => {

    const user = useSelector((state) => state.user.currentUser);
    const dispatch=useDispatch();
    const classes = useStyle();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());   
    }

    return (

        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to="/"
                    style={{ textDecoration: 'none', color: 'inherit' }}> <Typography>HOME</Typography>
                </Link>
                <Link to="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}><Typography>ABOUT</Typography>
                </Link>
                <Link to="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}> <Typography>CONTACT</Typography>
                </Link>
               {user?<><Typography  style={{  paddingLeft:'10px', color:'white' }}>Hi {user.userLogIn.name}</Typography><Typography style={{  paddingLeft:'10px', color:'white' }} onClick={(e) => handleLogout(e)}> LOGOUT</Typography></>: <Link to="/signin"
                    style={{ textDecoration: 'none', color: 'inherit' }}> <Typography >LOGIN</Typography>
                </Link>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;