const mysql = require('mysql')
const express = require('express')
const fs = require('fs')
const { error } = require('console')

const port = 3000
const host = 'localhost'
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QJL5&S$d**zm#>',
    database: 'db'
})

fs.readFile('./public/sql/db.sql', 'utf8', (err, data) => {
    if(err){
        console.error(err)
    }
    else 
        sql = data
})



app.get('/', (req, res) => {
    

    connection.query(sql, (error, results, fields) => {
        dataJson = JSON.stringify(results)
    })
    res.render('app')
})


connection.end()

app.listen(port, host, () => {
    console.log(`Server listens http://${host}:${port}`)
})