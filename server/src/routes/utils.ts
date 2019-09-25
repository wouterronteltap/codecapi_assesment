interface IParsedLinks {
    [key: string]: string
}

export const linkHeaderParser = (header: string): IParsedLinks => {
    if (header.length == 0) {
        throw new Error("input must not be of zero length");
    }
    const parts: Array<string> = header.split(',');
    const links: IParsedLinks = {};
    // Parse each part into a named link
    parts.forEach( function(p: string) {
        const section: Array<string> = p.split(';');
        if (section.length != 2) {
            throw new Error("section could not be split on ';'");
        }
        const url: string = section[0].replace(/<(.*)>/, '$1').trim();
        const name: string = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
    });
    return links;
}

const GITHUB_URL: string = 'https://api.github.com';

interface IConstants {
    GET_USERS_URL(query:string, page:string): string,
    GET_USER_DETAILS_URL(query:string): string
}

export const CONSTANTS: IConstants = {
    GET_USERS_URL: (query, page) => `${GITHUB_URL}/search/users?q=${query}&page=${page}`,
    GET_USER_DETAILS_URL: (query) => `${GITHUB_URL}/users/${query}`
}

