# SW_DR_Project
G00365942, Eoin lernihan, year 3, computer science, 48898 -- DATA REPRESENTATION AND QUERYING


Additional function
Passing a querry parm allows to use mongodb querrys on the bookings to make a more completecated querry
```
if(req.query.futureOnly !== undefined && req.query.futureOnly == "true"){
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate());
        bookingModel.find({Date: {$gt: cutoff}}, (err,data)=>{
            res.json(data);
        })  
    }
```
