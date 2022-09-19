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

app.get("/api/get",(req,res)=>{
    const sql_get = "SELECT * FROM contact_db";
    db.query(sql_get,(error,result)=>{
        // console.log(result);
        res.send(result);
    })
})


app.post("/api/post", (req, res) => {
    const {name, email, contact} = req.body;
    const sqlInsert ="INSERT INTO contact_db (name, email, contact) VALUES(?,?,?)"
    db.query(sqlInsert, [ name, email, contact], (error, result)=>{
        if (error) {
            console.log(error);
        }
    })
    })

app.get('/',(req,res)=>{
    // const sqlinsert = "INSERT INTO contact_db (name, email, contact) VALUES('Cam','scam@gmail.com',9845543210)"
    // db.query(sqlinsert,(err,result)=>{
    //     console.log("Error", error);
    //     console.log("Results", result);
    //     res.send("hey dood") 
    // })
    
})

app.listen(Port, ()=>{
    console.log("Server is running on 5000")
} )