// import jwt from 'jsonwebtoken';
// import User from '../Schema/userSchema.js';

// export const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, process.env.SECRECT_KEY, (err, user) => {
//             if (err) res.status(403).json("Token is not 
// export const verifyToken = async(req, res, next) => {
//     try {

//         const token = req.cookies.jwtoken;
//         const verifyToken = jwt.verify(token, process.env.SECRECT_KEY);
//         const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

//         if (!rootUser) { throw new Error("User not found") }
//         req.token = token;
//         req.rootUser = rootUser;
//         req.userID = rootUser._id;

//         next();

//     } catch (error) {
//         return res.status(401).json("You are not authenticated!");
//     }

// }


import jwt from 'jsonwebtoken';

function verify(req, res, next) {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRECT_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
}
export default verify;