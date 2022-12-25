const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    username : {
        type : String,
        required :true,
        unique:true,
        minlength:3
    },
    password : {
        type:String,
        required:true,
        minlength:5
    },
},{
    timestamps:true
});
const Users = mongoose.model('Users',userSchema);

module.exports = Users;