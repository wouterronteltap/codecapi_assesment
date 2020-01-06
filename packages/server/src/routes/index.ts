import { Request, Response } from "express";
import { AxiosResponse } from 'axios';

import { app } from '../app'
import { loadFromClient, addToClient } from "../cache";
import { fetchUsers, fetchUser } from "../users";
import { linkHeaderParser } from "./utils";

interface IUsersQuery {
    query: string,
    page?: string,
}

export const initRoutes: () => void = () => {
    app.get('/user', async (req: Request, res: Response ) => {
        const query: IUsersQuery = req.query;
        const key: string = 'user:'+query.query;
        const fromCache = await loadFromClient(key);
        if(fromCache) {
            const parsed = JSON.parse(fromCache);
            res.json({users: [parsed]});
        }else{
            fetchUser(query)
                .then((response: AxiosResponse ) => {
                    if(response.status !== 200 && response.status !== 204){
                        res.status(response.status).send();
                    }else{
                        const { data } = response;
                        addToClient(key, data);
                        res.json({users: [data]})
                    }
                })
                .catch(e => {
                    console.log(e);
                    res.status(500).send()
                })
        }
    });
    app.get('/users', async (req: Request, res: Response ) => {
        const query: IUsersQuery = req.query;
        const key: string = 'users:'+Object.values(query).join('');
        const fromCache = await loadFromClient(key);
        if(fromCache){
            const parsed = JSON.parse(fromCache);
            res.json({...parsed, source: 'cache'});
        }else{
            fetchUsers(query)
                .then((response: AxiosResponse) => {
                    if(response.status !== 200 && response.status !== 204){
                        res.status(response.status).send();
                    }else{
                        const { total_count, items } = response.data;
                        const { link } = response.headers;
                        if(!items.length){
                            res.status( 204).send();
                        }
                        const parsedLinks = link ? {links: linkHeaderParser(link)} : {};
                        const data = { total: total_count, users: items, ...parsedLinks };
                        addToClient(key, data);
                        res.json(data);
                    }

                })
                .catch(e => {
                    console.log(e);
                    res.status(500).send()
                })
        }
    });
};