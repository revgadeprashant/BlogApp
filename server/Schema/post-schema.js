import mongoose from 'mongoose';
import Mongoose from 'mongoose';
const PostSchema = Mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false
    },
    createdDate: {
        type: Date
    }
});

const post = Mongoose.model('blog', PostSchema);

export default post;