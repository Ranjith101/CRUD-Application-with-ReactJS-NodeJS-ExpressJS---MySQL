const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"crud_contact"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))



const Port = 5000;

app.get('/',(req,res)=>{
    const sqlinsert = "INSERT INTO contact_db (name, email, contact) VALUES('Sam','sam@gmail.com',9876543210)"
    db.query(sqlinsert,(err,result)=>{
        console.log("Error", error);
        console.log("Results", result);
        res.send("hey dood") 
    })
    
})

app.listen(Port, ()=>{
    console.log("Server is running on 5000")
} )