import express, { Application } from 'express';
import { initMiddleWare } from './middleware';
import { initClient } from "./cache";
import { initRoutes } from "./routes";

const dotenv = require('dotenv');

dotenv.config()

const app: Application = express();
const port: string | undefined = process.env.PORT;
export const GITHUB_URL: string | undefined = process.env.GITHUB_URL;
console.log(GITHUB_URL);

initClient();
initMiddleWare(app);
initRoutes();
// const server = http.createServer(router);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

export { app }