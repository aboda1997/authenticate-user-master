

//import the required module
const express  = require('express' )
const router  =  express.Router() 
const  userController = require('./userController')

//This get method will get the user with token
router.get('/',(req,res)=>{
    
       //retrive userdata from req claims
       userdata  =  req.claims   // holds the payload i created when create JWT token 
       console.log(userdata ) 

       
       

        //Calling controller findUser method return the error or result
        userController.findUser(userdata.email,(err,result)=>{
           if (err){
                res.status(400).send("err getting the user",  err) 

           }else{
                res.status(200).send({STATUS : "OK" ,  data: result} )
           }
           
        })
   
})


module.exports = router