interface IConstants {
    GET_USERS_URL: string,
    GET_USER_DETAILS_URL: string,
    QUERY_TEMPLATE(query:string): string,
    PAGE_TEMPLATE(page: number): string
}

const API_URL: string = 'http://localhost:8080';

export const CONSTANTS: IConstants = {
    GET_USERS_URL: `${API_URL}/users`,
    GET_USER_DETAILS_URL: `${API_URL}/user?query=`,
    QUERY_TEMPLATE: (query) => `?query=${query}`,
    PAGE_TEMPLATE: (page) => `&page=${page}`
}