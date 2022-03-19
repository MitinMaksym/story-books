import express  from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import router from './routes';
import path from 'path'

const app = express()
if (process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"))
}

// Hadlebars
app.engine('.hbs', engine({extname: '.hbs',defaultLayout:'main', layoutsDir:"views/layout"}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Static
app.use(express.static(path.join(__dirname,"public")))

app.use(express.json())

app.use("/", router)

export default app
