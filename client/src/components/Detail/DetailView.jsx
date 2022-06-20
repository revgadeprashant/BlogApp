
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { getPost, deletePost } from '../../service/api';
//Comments
import Comments from '../../comments/Comments';

const useStyle = makeStyles((theme) => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: 'All',
    createdDate: new Date()
}

const DetailView = ({ match }) => {
    const user = useSelector((state) => state.user.currentUser.userLogIn.name);
    const classes = useStyle();
    const history = useHistory();

    const url = 'https://vinciworks.com/blog/wp-content/uploads/2018/01/environment-2196690_960_720.jpg';

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
        // console.log(account, post.username);
    }, []);

    const deleteBlog = async () => {    
        await deletePost(post._id);
        history.push('/')
    }

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="post" className={classes.image} />
            <Box className={classes.icons}>
                {
                    user === post.username &&
                    <>  
                        <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary" /></Link>
                        <span><Delete onClick={() => deleteBlog()} className={classes.icon} color="error" /></span>
                    </>
                }
            </Box>

            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.author}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date().toDateString()}</Typography>
            </Box>

            <Typography className={classes.detail}>{post.description}</Typography>
            <Typography></Typography>
            <Comments post={post} />
        </Box>
    )
}

export default DetailView;