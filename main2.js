const mongo = require('mongoose')

mongo.connect("mongodb+srv://melusine:1234@clustermylove.0xnzg.mongodb.net/ClusterMyLove", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => {
            console.log('mongo connecté')            
        },
        err => console.error('soucis de connexion :' + err)
    )

    module.exports = mongo