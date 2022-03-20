import express  from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import router from './routes';
import authRoute from './routes/auth'
import path from 'path'
import passport from 'passport'
import session from 'express-session'
import {configurePassport} from './core/passport'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
//import  MongoStore from 'connect-mongo'
const MongoStore = require('connect-mongo')
dotenv.config()


const app = express()
if (process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"))
}
configurePassport(passport)

// Hadlebars
app.engine('.hbs', engine({extname: '.hbs',defaultLayout:'main', layoutsDir:"views/layout"}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Configuring express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || "test_secret",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env?.DATABASE?.replace(
        '<password>',
        process.env.DATABASE_PASSWORD || ''
      ) || ''})
}));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static
app.use(express.static(path.join(__dirname,"public")))

app.use(express.json())

app.use("/", router)
app.use("/auth", authRoute)

export default app
