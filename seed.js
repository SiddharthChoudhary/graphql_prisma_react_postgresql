const {Client} = require('pg')

// fill this with your credentials and the db to which you want to connect
const connectionString = 'postgresql://quest:quest@localhost:5432/mydb?schema=public'

// clients will also use environment variables
// for connection information

const client = new Client({
    connectionString:connectionString
})

client.connect()

const create_db = client.query(
    `CREATE DATABASE mydb`, (err,res)=>{
        if(err){
            console.log('Error:',err)
            process.exit(1)
        }else{
            console.log('Database creation succeeded, Response is:',res)
        }
    })
const create_table = client.query(`
CREATE TABLE Users(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME VARCHAR (40),
    USERNAME VARCHAR (40),
    EMAIL VARCHAR (150),
    PASSWORD VARCHAR (20),
    PROFILE_PICTURE VARCHAR (200)
)`,(err, res)=>{
    if(err){
        console.log('Error is',err)
        process.exit(1)
    }else{
        console.log('Tabe creation succeeded, Response is:', res)
    }
    client.end()
})