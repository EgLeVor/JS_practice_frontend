const express = require('express')
bodyParser = require("body-parser")
const app = express()
const port = 3000
const cors = require('cors')
const fs = require('fs')
const LocalStorage = require("node-localstorage").LocalStorage;
ls = new LocalStorage("./scratch")

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(express.json)

let stack = []
let storage = []

app.post('/strings', (req, res) => {
    let info = req.body

    for (i in info){
        storage.push(info[i])
    }

    ls.setItem("params", storage)
    res.status(200).json("Done!")
});

app.get("/strings1", (req, res) => {

let params = ls.getItem("params").split(",")
res.status(200).json({params})

});

app.get('/strings', (req, res) => {
    for (var el in req.body){
        stack.push(req.body[el])
    }
    res.send("Strings!")
});

app.get('/strs', (req, res) => {
    res.status(200).json({stack})
});

app.delete('/strings', (req, res) => {
    let index = req.query.param
    if (index == undefined) {
        stack = []
    }
    else if (index >= 0 && index <= stack.length - 1) {
        stack.splice(index, 1)
    }
    else {
        res.end('error')
    }

    res.status(200).json({stack})

});

app.get('/sum', (req, res) => {
    console.log(`req ${parseInt(req.query.param) + parseInt(req.query.param1)}`);
    res.send(`get, ${parseInt(req.query.param) + parseInt(req.query.param1)}`)
});

app.get('/reverseArray', (req, res) => {
    console.log(req.body.array);
    let arr = [];
    for (var i = req.body.array.length - 1; i > -1; i--){
        arr[req.body.array.length - i - 1] = (req.body.array[i]);
    }
    res.status(200).json({arr})
});

app.get('/reverseCase', (req, res) => {
    let a = req.query.param;
    let b = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) == a.charAt(i).toUpperCase()){
            b += a.charAt(i).toLowerCase();
        }
        else{
            b += a.charAt(i).toUpperCase();
        }
    }
    res.send(b);
    console.log(b);
});

app.get('/get', (req, res) => {
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send(`get`);
});

app.post('/post', (req, res) => {
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send(`post`);
})

app.put('/put', (req, res) => {
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send('put')
})

app.patch('/patch', (req, res) => {
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send('patch')
})

app.delete('/delete', (req, res) => {
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send('delete')
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})