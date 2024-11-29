const generateMockLogs = () => {
  const actions = [
    'logged in',
    'updated profile',
    'created new project',
    'deleted task',
    'modified settings',
    'viewed dashboard'
  ];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    userId: Math.floor(Math.random() * 5) + 1,
    username: `user${Math.floor(Math.random() * 5) + 1}`,
    action: actions[Math.floor(Math.random() * actions.length)],
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }));
};

const activityLogService = {
  getLogs: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const logs = generateMockLogs();
    
    // Simulate filtering and pagination
    const { page = 1, limit = 10, username, action } = params;
    let filteredLogs = [...logs];
    
    if (username) {
      filteredLogs = filteredLogs.filter(log => log.username === username);
    }
    
    if (action) {
      filteredLogs = filteredLogs.filter(log => log.action === action);
    }
    
    const start = (page - 1) * limit;
    const paginatedLogs = filteredLogs.slice(start, start + limit);
    
    return {
      logs: paginatedLogs,
      total: filteredLogs.length,
      page,
      totalPages: Math.ceil(filteredLogs.length / limit)
    };
  }
};

export default activityLogService; 