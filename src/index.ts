import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import util from 'util';

const port = parseInt(process.env.PORT) || 3000;

const app = express();
const server = http.createServer(app);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/info', (req, res) => {
  res.json({
    name: 'Sadra Samadi',
    title: 'Full-stack Developer'
  });
});

(async () => {

  let listen = server.listen.bind(server);
  await util.promisify(listen)(port);
  console.log(`server started on port ${port}`);

})();
