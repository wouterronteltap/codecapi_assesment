interface IConstants {
    GET_USERS_URL(query:string, page:number): string,
    GET_USER_DETAILS_URL(name:string): string
}

const API_URL: string = 'http://localhost:8080';

export const CONSTANTS: IConstants = {
    GET_USERS_URL: (query, page) =>  `${API_URL}/users?query=${query}&page=${page}`,
    GET_USER_DETAILS_URL: (name) => `${API_URL}/user?query=${name}`
}