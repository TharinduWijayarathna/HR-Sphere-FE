//get base url from .env file
const baseURL = process.env.REACT_APP_BASE_URL + 'api/employee';

const CustomerRoutes = ($api: any) => ({
    index: (filters: any) => $api.get(`${baseURL}`, { params: filters }),
    list: () => $api.get(`${baseURL}/list`),
    delete: (id: number) => $api.delete(`${baseURL}/${id}`),
    update: (id: number, data: any) => $api.put(`${baseURL}/${id}`, data),
    create: (data: any) => $api.post(`${baseURL}`, data),
});

export default CustomerRoutes;
