//Imports
import express from "express";
import cors from "cors";

//Settings
const app = express();
app.set("port", process.env.PORT || 3000);

//Usings
app.use(cors());


export default app;