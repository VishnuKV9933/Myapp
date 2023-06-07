const express =require("express")
const app=express()
const connecton =require("../Backend/Config/connection")
const cors = require('cors')
const morgon=require('morgan')

const userRouter=require("./Routes/UserRoutes")
 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgon("common"))

app.use(cors(
    {
        origin: ['http://localhost:3000'],
        method: ['GET,PATCH, PUT, POST, DELETE'],
        credentials: true,
      }
));
  
app.use("/api/user",userRouter)

connecton()

app.listen(4000,()=>{
    console.log("server connnected");
})