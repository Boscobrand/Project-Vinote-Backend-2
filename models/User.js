const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema(
    {
        name: String,
        username: String,
        email:String,
        avatar:String,
        myWines: [
            {
                type:mongoose.Schema.Types.ObjectId,
                text:String,
                ref: 'wines'
            }
        ]
        },
        {
            timestamps:true
        }
)

const User = mongoose.model("User", userSchema);

module.exports = User;