import express from 'express' 
import userRoutes from './routes/userRoutes.js'

//crear la app
const app = express()

//hagilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica
app.use( express.static ('public'))

//routing
app.use('/auth', userRoutes)


//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
}); 
