import axios from 'axios';

const url = 'http://localhost:8000';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.acessToken || "";
// console.log(TOKEN);

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser ?.acessToken;
// console.log(TOKEN);

export const createPost = async(post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log("error while calling createPost API", error);
    }
}


export const getPost = async(id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log("error while calling getAllPosts API", error);
    }
}


export const getAllPosts = async(param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        

        return response.data;
    } catch (error) {
        console.log("error while calling getAllPosts API", error);
    }
}


export const updatePost = async(id, post) => {

    try {
        await axios.post(`${url}/update/${id}`, post);
    } catch (error) {
        console.log("error while calling updatePost API", error);
    }
}

export const deletePost = async(id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch (error) {
        console.log('Error while calling deletePost API ', error)
    }
}

// export const deletePost = async(id) => {
//     try {
//         await axios.delete(`${url}/delete/${id}`, {
//                 headers: {
//                     token: "Bearer " + JSON.parse(localStorage.getItem("user")).acessToken,
//                 }
//             }
//         );
//     } catch (error) {
//         console.log("error while calling deletPost API", error);
//     }
// }

//for image

export const uploadFile = async(post) => {
    console.log(post);
    try {
        return await axios.post(`${url}/file/upload`, post);
    } catch (error) {
        console.log("error while calling deletPost API", error);
    }
}


//for comments

export const newComment = async(data) => {
    try {
        return await axios.post(`${url}/comment/new`, data);
    } catch (error) {
        console.log("error while calling newComment API", error);
    }
}



export const getComments = async(id) => {
    try {
        let response = await axios.get(`${url}/comments/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getComments API ', error)
    }
}

export const deleteComment = async(id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch (error) {
        console.log('Error while calling deleteComments API ', error)
    }
}

export const usersignup = async(user) => {
    try {
        await axios.post(`${url}/signup`, user);
    } catch (error) {
        console.log('Error while calling usersignup API ', error)
    }
}

export const usersignin = async(user) => {
    try {
        return await axios.post(`${url}/signin`, user);
    } catch (error) {
        console.log('Error while calling usersignin API ', error)
    }
}

export const publicRequest = async(user) => {
    try {
        // const { name, email, phone, password, cpassword } = user;
        return await axios.post(`${url}/signin`, user);
        // console.log(res)
    } catch (error) {
        console.log('Error while calling usersignup API ', error)
    }
}
