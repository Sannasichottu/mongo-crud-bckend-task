const express = require ('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const UserRouter = require('./routes/user')
require('dotenv').config();

/*app.get('/',(req,res)=>{
    res.send("Hello Nanba");
});*/
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.set('strictQuery', false);
mongoose.connect(uri,err=>{
    if(err)throw err;
})


app.use('/Users',UserRouter);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongoose connection successfully")
})

app.listen(process.env.PORT,()=>{
    console.log("Server running on port 3001")
})