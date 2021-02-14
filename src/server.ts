import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import debug from 'debug';
import { config } from 'dotenv';
import cors from 'cors';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const debugged = debug('index');
config();

app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
