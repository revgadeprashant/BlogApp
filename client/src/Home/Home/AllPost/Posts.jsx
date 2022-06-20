import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Post from "./Post";

import { getAllPosts } from "../../../service/api";

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const {search}=useLocation();

    useEffect(() => {
        const fetchData = async() => {
        let data= await getAllPosts(search);
        console.log(data);
        getPosts(data);
        }
        fetchData();
    }, [search])

    // let posts = [1, 2, 3, 4, 5, 6, 7, 8]
    return (

        posts.map((post) => (

            <Grid item lg={3} sm={4} xs={12}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} 
                to={`/details/${post._id}`}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))



    )
}

export default Posts;