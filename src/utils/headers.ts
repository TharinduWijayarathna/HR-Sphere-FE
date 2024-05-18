const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    const tenant = localStorage.getItem('tenant');
    return {
        'Authorization': `Bearer ${token}`,
        'X-Tenant': tenant,
    };
}

export { getAuthHeaders };
