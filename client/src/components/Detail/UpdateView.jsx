import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from "@material-ui/core";
import { AddCircle as Add } from '@material-ui/icons';
import { useEffect, useState } from "react";
import { getPost, updatePost, uploadFile } from "../../service/api";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

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



const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: 'All',
    createdDate: new Date()
}
const UpdateView = ({ match }) => {
    const user = useSelector((state) => state.user.currentUser);
    const classes = useStyle();
    const history = useHistory();

    const [post, setPost] = useState(initialValues);
    const [file, setfile] = useState('');
    const [image, setImage] = useState('');

    const url = post.picture ? post.picture : 'https://vinciworks.com/blog/wp-content/uploads/2018/01/environment-2196690_960_720.jpg';

    useEffect(() => {
        const getImage = async () => {
            console.log(file.name);
            if (file) {

                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);

            }
        }
        getImage();
    }, [file])

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, [])



    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
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
                    value={post.title}
                    name='title' placeholder="Title"
                    className={classes.textfield} />

                <Button
                    onClick={() => updateBlog()}
                    variant="contained" color="primary">Update</Button>
            </FormControl>

            <TextareaAutosize
                // rowsMin={5}
                value={post.description}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)}
            />
        </Box>
    )
}

export default UpdateView;