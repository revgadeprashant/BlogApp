
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';


const useStyle = makeStyles({
    container: {
        // width:'23%',
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 200
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign:'center'
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
        // wordBreak: 'break-all',
    }
})


const Post = ({post}) => {
    const user=useSelector((state)=>state.user.currentUser);
    const classes = useStyle();
    const url = post.picture ? post.picture :'https://vinciworks.com/blog/wp-content/uploads/2018/01/environment-2196690_960_720.jpg';

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <Typography className={classes.textColor}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addEllipsis(post.title, 20)}</Typography>
            <Typography className={classes.textColor}>Author: {post.username}
            </Typography>
            <Typography className={classes.detail}>{addEllipsis(post.description, 100)}
            </Typography>
        </Box>
    )
}
export default Post;