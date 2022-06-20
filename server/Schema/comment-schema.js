// import mongoose from 'mongoose';
import Mongoose from 'mongoose';
const CommentSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
})


const comment = Mongoose.model('com', CommentSchema);

export default comment;