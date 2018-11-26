import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'


// cria uma instancia de express
const app = express() 

// alocação dos middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// cria conexao com mongoose
const uri = 'mongodb://localhost:27017/api_node'
let db = mongoose.connect(uri, {  useNewUrlParser: true })

// chamada de rotas
routes(app)

// estartar server
const port = 3000
app.listen(port, () => { console.log("O servidor foi iniciado")})