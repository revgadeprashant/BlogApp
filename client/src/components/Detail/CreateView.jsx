import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from "@material-ui/core";
import { AddCircle as Add, AddCircle, CallEnd } from '@material-ui/icons';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { createPost, uploadFile } from "../../service/api";
import { useSelector } from 'react-redux';

// const dispatch = useDispatch();

const useStyle = makeStyles(theme => ({
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
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textfieldcat: {
        flex: 1,
        margin: '20px 30px 0 30px',
        fontSize: 18
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));


const CreateView = () => {
    const user = useSelector((state) => state.user.currentUser.userLogIn.name);
    // {user.userLogIn.name}
    const initialValues = {
        title: '',
        description: '',
        picture: '',
        username: user,
        categories: 'All',
        createdDate: new Date()
    }
    const classes = useStyle();
    const history = useHistory();

    const [post, setPost] = useState(initialValues);
    const [file, setfile] = useState('');
    const [image, setImage] = useState('');

    const url = post.picture ? post.picture : 'https://vinciworks.com/blog/wp-content/uploads/2018/01/environment-2196690_960_720.jpg';

    useEffect(() => {
        const getImage = async () => {
            console.log(file);
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
                //    console.log(post.picture);
            }

        }
        getImage();
    }, [file])

    const handleChange = (e) => {
        // e.preventDefault();
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async (e) => {
        // e.preventDefault();
        await createPost(post);
        history.push('/');

    }

    return (

        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setfile(e.target.files[0])}

                />
                <InputBase
                    onChange={(e) => handleChange(e)}
                    name='title' placeholder="Title"
                    className={classes.textfield} />

                <Button
                    onClick={() => savePost()}
                    variant="contained" color="primary">Publish</Button>
            </FormControl>
            <InputBase
                    onChange={(e) => handleChange(e)}
                    name='categories' placeholder="categories"
                    className={classes.textfieldcat} />
            <TextareaAutosize
                // rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)}
            />
        </Box>
    )
}

export default CreateView;