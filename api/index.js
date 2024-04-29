import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';
import  multer from 'multer';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
const app=express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  })

// const apiurl=`http://localhost:8000/api`
const upload=multer({ storage});


app.post('/api/upload',upload.single("file"),  function(req,res){
    const file = req.file;
    return res.status(200).json(file.filename);

})
app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/user',userRoutes);

app.listen(8000,()=>{
  console.log("Connected");
})  