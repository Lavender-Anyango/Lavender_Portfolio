import axios from 'axios';

const baseURL = process.env.BASE_URL;

interface IData {
    name: string;
    email: string;
    message: string;
}

export const fetchData = async (url: string, token: string) => {
    const req = await axios.get(`${baseURL}/api/${url}`);
    const res = await req.data;
    return res;
};
export const postData = async (url: string, data: IData) => {
    const req = await axios.post(`${baseURL}/api/${url}`, { data });
    const res = await req.data;
    return res;
};
