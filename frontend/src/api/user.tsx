import api from './axiosClient';

export const user = {
    async getAll() {
        try {
            const {status, data} = await api.get('/user');
            return {status, data};
        }
        catch (e: any) {
            return {status: e.status, data: e.response.data.error};
        }
    },
    async createUser(username: string) {
        try{
            const {status, data} = await api.post('/user', { name: username });
            return {status, data};   
        }
        catch (e: any) {
            return {status: e.status, data: e.response.data.error};
        }
    },
}