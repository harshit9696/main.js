const express=require('express')
const mysql=require('mysql')
const bodyParser=require('body-parser')



let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

let db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'harshit@amethi',
    database:'login'
})
db.connect((err)=>{
    if(err) throw err
    else {
        console.log('database is connected')
    }
})
