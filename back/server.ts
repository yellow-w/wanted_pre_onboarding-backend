import express, {Application } from 'express';
import dotenv from 'dotenv'

const backPort = process.env.PORT_BACK || 3007;
const app : Application = express();

app.get('/',(req,res)=>{
    res.send('hey')
})

app.listen(backPort, async()=>{
    console.log(`back server running on port ${backPort}`)
})