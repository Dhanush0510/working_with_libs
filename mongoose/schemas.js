const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user_id: Number,
    first_name: String,
    username: String,
    time: String,
    favourites: Array,
    daily_uses: Number,
    last_use: String,
    subscription: Boolean
}, {
    versionKey: false
});
const broSchema = ({
    type1 : String,
    type2 : String,
})

const userSchemaConstructor = mongoose.model('user', userSchema,'users');
const broSchemaConstructor = mongoose.model('bros',broSchema,'users');


module.exports = {userSchema, userSchemaConstructor,broSchema,broSchemaConstructor};

const date = new Date();

console.log(date.getDate)