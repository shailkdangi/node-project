require('dotenv').config(); 
const connectDB = require('./config');
const mongoose = require('mongoose')
const path = require("path");
const { Logger } = require("./logEvents");

connectDB();
const express = require("express");
const cors = require("cors");

const PORT = process.env.port || 3500;
const app = express();
console.log(process.env.DATABASE_URL);
console.log('process.env.DATABASE_URL');
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use(Logger);
const Whitelist = ["http://localhost"];
const coresOptions = {
    origin: (origin, callback) => {}
}
//app.use(cors());

app.use("/", require("./routes/roots"));
app.use("/employee", require("./routes/employee"));
mongoose.connection.once('open', ()=>{

    console.log('mongodb connected!');
    app.listen(PORT, () => console.log(`Server connected on ${PORT}`));
});
 

 



console.log("\n----------------------------------------------------\n"); 