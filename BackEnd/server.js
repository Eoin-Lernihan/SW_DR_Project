//This page is deadicated to the api server witch is the only page that talk to mongodb
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
  const strConnection = 'mongodb+srv://admin:admin@cluster0.ixqop.mongodb.net/bookings?retryWrites=true&w=majority';
//const strConnection = 'mongodb+srv://admin:admin@cluster0.hrgmz.mongodb.net/Myfilm?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

//This is how the data is stored in mongodb, bookingSchema is very important
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    Name:String,
    Date:Date,
    Time:String,
    NumbersOfPeople:Number,
    ContactNumber:String,
    Email:String
})
const bookingModel = mongoose.model('booking', bookingSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/bookings', (req, res) => {
    //Check if the query parm is future Only
    if(req.query.futureOnly !== undefined && req.query.futureOnly == "true"){
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate());
        bookingModel.find({Date: {$gt: cutoff}}, (err,data)=>{
            res.json(data);
        })  
    }
     //Check if the query parm is today Only
    else if(req.query.todayOnly !== undefined && req.query.todayOnly == "true"){
        var startDate = new Date();
        startDate.setHours(0,0,0,0);
        var endDate = new Date();
        endDate.setHours(23,59,59,999);
      console.log(startDate)
      console.log(endDate)
        bookingModel.find({Date: {$gte: startDate, $lte: endDate}}, (err,data)=>{
            res.json(data);
        })  
    }
    else{
        bookingModel.find((err,data)=>{
            res.json(data);
        })  
    }
    
    
    
})

app.get('/api/bookings/:id',(req, res)=>{

    console.log("get " + req.params.id);

    bookingModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

app.put('/api/bookings/:id',(req,res)=>{
    console.log("Update "+req.params.id);

    bookingModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err,data)=>{
            res.status(201).send(data);
        })
})

app.delete('/api/bookings/:id', (req, res)=>{
    console.log(req.params.id);
    bookingModel.findByIdAndDelete({_id:req.params.id},
         (err, data)=>{
        res.send(data);
    })
})


app.post('/api/bookings', (req, res) => {
    console.log(req.body);
    bookingModel.create({
        Name:req.body.Name,
        Date:req.body.Date,
        Time:req.body.Time,
        NumbersOfPeople:req.body.NumbersOfPeople,
        ContactNumber:req.body.ContactNumber,
        Email:req.body.Email
    })
    .then()
    .catch();

    res.send('Data Recieved!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})