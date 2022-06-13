//Imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url";
import taskRoutes from "./routes/task.js"

//Settings
const app = express();
app.set("port", process.env.PORT || 3000);

//Routes
app.use('/api/task', taskRoutes);

//Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '../../client/public')));

//Usings
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


export default app;