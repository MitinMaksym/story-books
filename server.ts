import app from './app'
import dotenv from 'dotenv'
import connectMongoDB from './core/db'

dotenv.config({path:`${__dirname}/config.env`})

const port = process.env.PORT || 8080
connectMongoDB()

app.listen(port,() => {
    console.log(`Server is working on ${port}`)
})