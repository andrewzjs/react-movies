import * as usersAPI from './usersApi';

export async function signUp(userData) {
    // delegating our network request to an api module
    // that will eventually return a token
    const token = await usersAPI.signUp(userData)
    return token
}