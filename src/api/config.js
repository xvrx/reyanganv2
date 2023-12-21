// src/api/api.js

import axios from 'axios';

// Common API configuration, such as base URL
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    // Add any common headers here
  },
});

export default api;