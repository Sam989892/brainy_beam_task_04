// Mock user data
let users = [
  { id: 1, username: 'admin', role: 'admin', name: 'Admin User', email: 'admin@example.com', status: 'active' },
  { id: 2, username: 'user', role: 'user', name: 'Regular User', email: 'user@example.com', status: 'active' },
  { id: 3, username: 'manager', role: 'manager', name: 'Manager User', email: 'manager@example.com', status: 'inactive' }
];

const userService = {
  getUsers: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [...users];
  },

  addUser: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser = {
      id: users.length + 1,
      ...userData,
      status: 'active'
    };
    users.push(newUser);
    return newUser;
  },

  updateUser: async (id, userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    users = users.map(user => 
      user.id === id ? { ...user, ...userData } : user
    );
    return users.find(user => user.id === id);
  },

  deleteUser: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    users = users.filter(user => user.id !== id);
    return true;
  }
};

export default userService; 