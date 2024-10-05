import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './shared/database/database';
import route from './routes/index';
const { createSSRApp } = require('vue');
import { renderToString } from '@vue/server-renderer';
import fs from 'fs';
import path from 'path';

dotenv.config();
const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 8000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Định nghĩa route cho Vue SSR
app.get('/', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})
// Định nghĩa route khác
route(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
