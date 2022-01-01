const mongoose = require('mongoose');

const visitorSchema=mongoose.Schema(
    {
       
        name:String,
        details:String,
        arrival_time:Date,

        
      }



)

module.exports=visitorSchema;