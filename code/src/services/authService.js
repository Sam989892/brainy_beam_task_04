import axios from 'axios';

// Simulated user database
const users = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Admin User' },
  { id: 2, username: 'user', password: 'user123', role: 'user', name: 'Regular User' },
  { id: 3, username: 'manager', password: 'manager123', role: 'manager', name: 'Manager User' }
];

const authService = {
  login: async (username, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      // Create a mock token
      const token = btoa(JSON.stringify({
        id: user.id,
        username: user.username,
        role: user.role,
        name: user.name
      }));

      // Store token in localStorage
      localStorage.setItem('token', token);
      return { user, token };
    }

    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(atob(token));
    }
    return null;
  }
};

export default authService; 