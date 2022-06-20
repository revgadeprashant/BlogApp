import multer from 'multer';

import { GridFsStorage } from 'multer-gridfs-storage';



const storage = new GridFsStorage({
    url: 'mongodb://user:user@blogweb-shard-00-00.5pnxn.mongodb.net:27017,blogweb-shard-00-01.5pnxn.mongodb.net:27017,blogweb-shard-00-02.5pnxn.mongodb.net:27017/GOGREEN?ssl=true&replicaSet=atlas-chz7tc-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ['image/png', 'image/jpg', "image/jpeg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}.blog.${file.originalname}`;
        return {
            bucketName: "photos",
            filename: `${Date.now()}.blog.${file.originalname}`
        }
    }

})

export default multer({ storage });