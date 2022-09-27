import express from 'express';
import http from 'http';
import remindersRouter from '../routers/reminders'
// require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/reminders', remindersRouter)

// const server  = new http.Server(app);
console.log("changes made again and again");

app.get('/', (req, res) => {
    res.send("initial route");    
});

app.listen(8000, ()=> console.log("server is running on "));
