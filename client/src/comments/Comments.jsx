
import { useState, useEffect } from 'react';
import { Box, Typography, TextareaAutosize, Button, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { newComment, getComments } from '../service/api';
//components

import Comment from './Comment';

const useStyles = makeStyles({
    container: {
        marginTop: 100,
        display: 'flex',
        '& > *': {
            // padding: '10px '
        }
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        height: 100,
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    }
})

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const user = useSelector((state) => state.user.currentUser.userLogIn.name);
    const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post, toggle]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: user,
            postId: post._id,
            comments: e.target.value
        });
        setData(e.target.value);
    }

    const addComment = async () => {
        await newComment(comment);
        setData('')
        setToggle(prev => !prev);
    }


    console.log(post);
    return (
        <>
           {user? <Box>
                <Box className={classes.container}>
                    <img src={url} className={classes.image} alt="dp" />
                    <TextareaAutosize
                        rowsMin={3}
                        className={classes.textarea}
                        placeholder="what's on your mind?"
                        onChange={(e) => handleChange(e)}
                        value={data}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}
                        onClick={(e) => addComment(e)}
                    >Post</Button>
                </Box>
                <Box>
                    {
                        comments && comments.map(comment => (
                            <Comment comment={comment} post={post} setToggle={setToggle} />
                        ))
                    }
                </Box>
            </Box>:<p></p>}
        </>
    )
}

export default Comments;