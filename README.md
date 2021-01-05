# SW_DR_Project
G00365942, Eoin lernihan, year 3, computer science, 48898 -- DATA REPRESENTATION AND QUERYING


Additional function
Passing a querry parm allows to use mongodb querrys on the bookings to make a more completecated querry(FutureOnly bookings, Todays bookings){server.js}
```
    if(req.query.futureOnly !== undefined && req.query.futureOnly == "true"){
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate());
        bookingModel.find({Date: {$gt: cutoff}}, (err,data)=>{
            res.json(data);
        })  
    }
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
```

Re-used the Reservations compents in the home page {content.js}
```
 <Reservations reservations={this.state.reservations} loadData={this.loadData}></Reservations>
```

use postman collection to test sever.js without having to write web code
