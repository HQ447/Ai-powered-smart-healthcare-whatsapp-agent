import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect_DB from "./config/db.js"

dotenv.config();

const app = express();
const PORT =process.env.PORT
const db_url=process.env.MONGO_URI

app.use(cors());
app.use(express.json());



 connect_DB(db_url)


app.get("/", (req, res) => {
    console.log("testing");
    res.send("Server working");
});

app.listen(PORT || 9000, () => {
    console.log(`Server is running on port ${PORT}`);
});