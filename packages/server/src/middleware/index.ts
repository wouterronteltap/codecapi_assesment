import { Router } from "express";
import cors from "cors";
import compression from "compression";

const handleCors = (router: Router) => {
    router.use(cors());
};

const handleCompression = (router: Router) => {
    router.use(compression());
};

export const initMiddleWare: (app: Router) => void = (app) => {
    handleCors(app);
    handleCompression(app);
}