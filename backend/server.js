import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"








const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//dp connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))



app.get("/",(req,res)=>{
    res.send("API Workinf")

})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://ishitasaxena437:pd4inc3ttMRlbvLy@cluster0.dlzzd.mongodb.net/?