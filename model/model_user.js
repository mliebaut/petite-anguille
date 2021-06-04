let mymongo = require('../main2')

const userM = new mymongo.Schema({
    name: String, // String is shorthand for {type: String}
    pass: String,
    mail: String,
    key: String,
    tasks: [{ title: String, content: String, state: Number }],

});

const userCol = mymongo.model('User', userM)

module.exports = userCol