import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config

const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)

app.get("/", (req, res) => {
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`Server Started on  http://localhost:${port}`);
})

//mongodb+srv://nazmulkarim:<db_password>@cluster0.2muiv.mongodb.net/?


//Using this one email: nazmulkarimtanvir@gmail.com pass: 123456789mojaTa

//mongodb+srv://nazmulkarimtanvir:123456789mojaTa@cluster0.sxgi6.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0