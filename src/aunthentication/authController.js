

//import the userService and authService module
const userService  =  require('../Users/userService') 

const  authService  =  require('./authService')
 
//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData,done){
      userService.findUser(userData.email  , (err , res)=>{
        if (err){
          done(err) 
        }else {
          if(res){
            done(res)
          }else{
            userService.registerUser(userData  ,  done )
          }
        }
      })  
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
        userService.findUser(email  ,  (err  ,  res  )=>{
          if (err ){
            done(err) 
          }else{
            const  verifiedUser = authService.verifyUser({email  , password } , res )
            if (res){
              const JWT =  authService.createJWT(res) 
              done(undefined , JWT )
          }else{
              done({error : "User not verified!"})
          }
          }
        })
  
  }

module.exports = {
    registerUser,loginUser

}