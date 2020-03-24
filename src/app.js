import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pug from 'pug';
import logger from 'morgan';
import indexRouter from './api/index';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', pug);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

export default app;
