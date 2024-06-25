import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log("Error conexion")
}
app.get('/',(req,res)=>{
    res.send('Hoal Mundo')
})
app.listen(8000,()=>{
    console.log('server runnirn')
})