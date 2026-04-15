const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect("mongodb+srv://rk572003kumar_db_user:0Tw5HutnhasAkzpa@cluster0.eium8yn.mongodb.net/cohort")
    .then(()=>{
        console.log("connected to DB")
    })
}

module.exports = connectToDB