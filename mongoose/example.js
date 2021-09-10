const mongod = require('./mongod.js');
const schemas = require('./schemas.js');
const mongoose = require('mongoose');

const mongoUsers = new mongod.mongoClient('users', schemas.broSchema); //global variable for interactions with 'users' collection

async function main () {
  

    
    var userFindOne = await mongoUsers.findOne({user_id: 1255526475});
    console.log(userFindOne);

    


    
    var userFind = await mongoUsers.find({user_id: 1255526475});
    console.log(userFind);


   

    
    const newUser = new schemas.broSchemaConstructor({
        _id: new mongoose.Types.ObjectId(),
        user_id: 0,
        first_name: "",
        username: "",
        time: "",
        favourites: [],
        daily_uses: 0,
        last_use: "",
        subscription: true
    });
    var userInsertOne = await mongoUsers.insertOne(newUser);
    console.log(userInsertOne);

    

 

    const newUserUpdate = new schemas.broSchemaConstructor({
        user_id: 0,
        first_name: "",
        username: "",
        time: "",
        favourites: [],
        daily_uses: 0,
        last_use: "",
        subscription: true
    });

    var userUpdateOne = await mongoUsers.updateOne({user_id: 1255526475}, newUserUpdate);
    console.log(userUpdateOne);

}

main();