import redis, { RedisClient } from 'redis';

let client: RedisClient;

export const initClient = () => {
    client = redis.createClient();
}

export const addToClient = (query: string, data: object): void => {
    console.log(data);
    client.set(query, JSON.stringify(data))
}

export const loadFromClient = async (query: string): Promise<string>  => {
    return new Promise((resolve, reject) => {
        client.get(query, (err, value) => {
            if (err) {
                reject(err)
            }
            if (value) {
                resolve(value)
            } else {
                resolve("")
            }
        })
    })
}