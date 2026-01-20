import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import db from './db.js'
db()


const app = express()

app.use(cors())
const port =process.env.port || 3000

app.listen(port,()=>{
    console.log(`app listening at port http://localhost:${port}`)
})

