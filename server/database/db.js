import Mongoose from 'mongoose';

const Connection = async(username, password, projectName) => {
    const URL = `mongodb://${username}:${password}@blogweb-shard-00-00.5pnxn.mongodb.net:27017,blogweb-shard-00-01.5pnxn.mongodb.net:27017,blogweb-shard-00-02.5pnxn.mongodb.net:27017/${projectName}?ssl=true&replicaSet=atlas-chz7tc-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await Mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }

}

export default Connection;