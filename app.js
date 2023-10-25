const express = require('express');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routers/home');
const usersRouter = require('./routers/users');

const app = express()
app.set('port',process.env.PORT||5000)
const PORT = app.get('port');

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')))
app.use('/home', indexRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {console.log(`${PORT}이 포트에서 웹서버 실행.`)})