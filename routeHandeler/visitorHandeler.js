const express=require('express');
const mongoose =require('mongoose')
const router =express.Router();
const visitorSchema = require('../schemas/visitorSchema')
const Visitor = new mongoose.model('Visitor', visitorSchema)


//get all Products
router.get('/', async (req,res)=>{
    await Visitor .find({},(err,data)=>{
    if(err){

        res.status(500).json({
            error:"there was a serverside error"
        })
    }
    else{
        res.status(200).json(data)
    }
}).clone()

})

router.get('/:id', async (req,res)=>{
    await Visitor .find({_id:req.params.id},(err,data)=>{
        if(err){
    
            res.status(500).json({
                error:"there was a serverside error"
            })
        }
        else{
            res.status(200).json({
               data
            })
        }
    })
})

router.post('/', async (req,res)=>{
const newVisitor  = new Visitor (req.body);
await newVisitor .save(err=>{
    if(err){

        res.status(500).json({
            error:"there was a serverside error"
        })
    }
    else{
        res.status(200).json({
            msg:"Visitor  was inserted succesfully"
        })
    }
    
})
})

router.post('/all', async (req,res)=>{

    await Visitor .insertMany(req.body, err=>{
        if(err){
    
            res.status(500).json({
                error:"there was a serverside error"
            })
        }
        else{
            res.status(200).json({
                msg:"Many Visitor  was inserted succesfully"
            })
        }
        
    })
    })

router.put('/:id', async (req,res)=>{
   

        // your code
        await Visitor.updateOne({_id:req.params.id},{
            $set:req.body}
            ).then(() => {
                
                res.status(200).json({
                    msg:" Visitor  was updated succesfully"
                })
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
                
            }
            )
      }
     


)

router.delete('/:id', async (req,res)=>{
    await Visitor .deleteMany({_id:req.params.id})
    .then(() => {
                
        res.status(200).json({
            msg:" Visitor  was deleted succesfully"
        })
    })
    .catch(err => {
        res.status(500).json({
            error:"there was a serverside error" 
        })
        
    }
    )

})

router.delete('/', async (req,res)=>{

    console.log(req.body.ids)
    await Visitor .deleteMany({_id:req.body.ids})
    .then((data) => {
                
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({
            error:"there was a serverside error" 
        })
        
    }
    )

})



module.exports=router;
