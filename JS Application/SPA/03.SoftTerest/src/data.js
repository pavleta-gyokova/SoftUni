import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

const endpoints = {
    ALL_IDEAS: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    IDEA: 'data/ideas/',
    CREATE_IDEA : 'data/ideas'

};


export async function getIdeas() {
    return await api.get(endpoints.ALL_IDEAS);
}
export async function getIdeaById(id) {
    return await api.get(endpoints.IDEA + id);
}
export async function createIdea(idea){
    return await api.post(endpoints.CREATE_IDEA,idea);
}
export async function deleteIdeaById(id){
    return await api.delete(endpoints.IDEA + id)
}
