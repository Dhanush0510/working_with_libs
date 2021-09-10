const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017`, {useNewUrlParser: true, useUnifiedTopology: true});

class mongoClient {
    constructor (collection, schema) {
        this.model = mongoose.model(collection, schema);
    }
    async findOne(obj) {
      
        var result;
        await this.model.findOne(obj)
            .then(res => {result = res});
        return result;
    }
    async find(obj) {
        var result;
        await this.model.find(obj)
            .then(res => {result = res});
        return result;
    }
    async insertOne(schema) {
        var result;
        await schema.save()
            .then(res => {result = res});
        return result;
    }
    async updateOne(find, edit) {
        var result;
        await this.model.updateOne(find, edit)
            .then(res => {result = res});
        return result;
    }
}

module.exports = {mongoClient};
