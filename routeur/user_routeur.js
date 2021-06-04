let express = require('express');
let model = require('../model/model_user');
var routeur = express.Router();

routeur.use(express.urlencoded())
routeur.use(express.json())

///////////// CONNECT /////////////

routeur.post('/connect', (req, res) => {
    let auth = false
    model.find().then(data => {
    for (let i in data) {
        if (req.body.name == data[i].name && req.body.pass == data[i].pass ){
            auth = true
            res.json({ mess: "Authentication OK", id:data[i]._id })
            break
        }    
    }   
    if (!auth) {  
        res.json({ mess: "Authentication failed" }) 
        }
    })  
})

///////////// USERS ///////////// 

// Get All
routeur.get('/', (req, res) => {
    model.find().then(datas => {
        res.json(datas)
    })
})

// Get One by ID
routeur.get('/:id', (req, res) => {
    model.findById(req.params.id).then(data => {
        res.json(data)
    })
})

// Add a user
routeur.post('/', (req, res) => {
    let newUser = model({
        name: req.body.name,
        pass: req.body.pass,
        mail: req.body.mail,
        key: req.body.key,
        tasks: []
    })
    newUser.save().then(() => {
        res.json({ mess: "User added" })
    })
})

// Edit a user
routeur.put('/:id', (req, res) => {
    model.findById(req.params.id).then(
        data => {
            data.name = req.body.name,
            data.pass = req.body.pass,
            data.mail = req.body.mail,
            data.key = req.body.key,
            data.tasks = req.body.tasks
            data.save().then(() => {
                res.json({mess: "User edited"})
            })
        }
    )
} )

// Delete a user
routeur.delete('/:id', (req, res) => {
    model.findById(req.params.id).then(data => {
        data.delete().then(() => {
            res.json({ mess: "User deleted" })
        })
    })
})

//////////////////// TASKS //////////////////

// Add a Task
routeur.post('/:id/task', (req, res) => {
    model.findById(req.params.id).then(
        data => {
        data.tasks.push({
            title: req.body.title,
            content: req.body.content,
            state: req.body.state
        })
        data.save().then(() => {
            res.json({mess: "Task added"})
        })
    })
})

// Update a Task
routeur.put('/:id/task/:num', (req, res) => {
    model.findById(req.params.id).then(
        data => {
            for(let i in data.tasks) {
                if (data.tasks[i]._id == req.params.num) {
                    data.tasks[i].title = req.body.title,
                    data.tasks[i].content = req.body.content,
                    data.tasks[i].state = req.body.state
                    data.save().then(() => {
                        res.json({mess: "Task udpated"})
                    })
                }
            }
        }
    )
})

// Delete a Task
routeur.delete('/:id/task/:num', (req, res) => {
    model.findById(req.params.id).then(
        data => {
            for(let i in data.tasks) {
                if(data.tasks[i]._id == req.params.num) {
                    data.tasks.splice(data.tasks[i]._id, 1);
                    data.save().then(() => {
                        res.json({mess: "Task deleted"})
                    })
                }
            }
        }
    )
})

module.exports = routeur