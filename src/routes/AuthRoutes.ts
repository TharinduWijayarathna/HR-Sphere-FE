const baseURL = process.env.REACT_APP_BASE_URL + 'user';

const AuthRoutes = ($api: any) => ({
    login: (data: any) => $api.post(`${baseURL}/login`, data),
    register: (data: any) => $api.post(`${baseURL}/register`, data),
    logout: () => $api.post(`${baseURL}/logout`),
});

export default AuthRoutes;