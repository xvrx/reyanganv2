import api from './config.js'

export const userApi = {
    getAllUsers: () => api.get('/users'),
    getUserById: (userId) => api.get(`/users/${userId}`),
    createUser: (userData) => api.post('/users', userData),
    updateUser: (userId, userData) => api.put(`/users/${userId}`, userData),
    deleteUser: (userId) => api.delete(`/users/${userId}`),
  };

  