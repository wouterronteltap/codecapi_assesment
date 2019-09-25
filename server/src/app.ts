import http from 'http';
import express, { Application } from 'express';
import { initMiddleWare } from './middleware';
import { initClient } from "./cache";
import { initRoutes } from "./routes";

const app: Application = express();
const port: number = 8080;

initClient();
initMiddleWare(app);
initRoutes();
// const server = http.createServer(router);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

export { app }