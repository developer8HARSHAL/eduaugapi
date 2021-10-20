var express = require('express');
const app = express();
const port =process.env.PORT|| 5785;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017"
//const mongourl="mongodb+srv://first:1234@cluster0.ywotg.mongodb.net/eduaug?retryWrites=true&w=majority"
var db;
let col_name = "first"



app.get('/', (req, res) => {
    res.send('welcome to node api 2')
})

app.get('/location/',(req,res) =>{
           db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/cuisine', (req, res) => {
        db.collection('cuisine').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
app.get('/mealType', (req, res) => {
        db.collection('mealType').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
app.get('/restaurant', (req,res) =>{
        db.collection('restaurant').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
    /////queryparams example/////
/*app.get('/restaurant', (req,res) =>{
    var cityId = req.query.cityId?req.query.cityId:2;
        db.collection('restaurant').find({city: cityId}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})*/
     ////params example////
/*app.get('/restaurant/:cityId', (req,res) =>{
    var cityId = req.params.cityId;
        db.collection('restaurant').find({city:cityId}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})*/



app.get('/first', (req, res) => {
    db.collection(col_name).find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl, (err, client) => {
    if (err) console.log("Error While Connecting");
    db = client.db('eduaug');
    app.listen(port, () => {
        console.log(`listening on port no ${port}`)
    });
})