
import { Typography, Box, makeStyles } from "@material-ui/core";
import { Delete } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { deleteComment } from "../service/api";
const useStyles = makeStyles({
    component: {
        marginTop: 30,
        background: '#F5F5F5',
        padding: 10
    },
    container: {
        display: 'flex',
        marginBottom: 5
    },
    name: {
        fontWeight: 600,
        fontSize: 18,
        marginRight: 20
    },
    date: {
        fontSize: 14,
        color: '#878787'
    }, 
    delete: {
        marginLeft: 'auto'
    }
})

const Comment = ({ comment, setToggle,post }) => {
    const classes = useStyles();
    const user = useSelector((state) => state.user.currentUser.userLogIn.name);
    const removeComment = async () => {
       await deleteComment(comment._id) ;
       setToggle(prev => !prev);
    }

    return (
       <> {user&&<Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
               {(user===comment.name ||user===post.username) && <Delete className={classes.delete} onClick={() => removeComment()} />}
            </Box>
            <Typography>{comment.comments} </Typography>
        </Box>}
        </>
    )
}

export default Comment;