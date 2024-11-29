const generateRandomData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    users: Math.floor(Math.random() * 100),
    sessions: Math.floor(Math.random() * 200),
    pageViews: Math.floor(Math.random() * 500)
  }));
};

const analyticsService = {
  getDashboardStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      totalUsers: 1234,
      activeUsers: 789,
      totalSessions: 5678,
      averageSessionDuration: '12m 30s',
      bounceRate: '23.5%',
      dailyStats: generateRandomData(7)
    };
  },

  getUserActivity: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      mostActiveUsers: [
        { username: 'john_doe', activities: 45 },
        { username: 'jane_smith', activities: 38 },
        { username: 'bob_wilson', activities: 32 }
      ],
      recentActions: [
        { user: 'john_doe', action: 'Created new project', timestamp: new Date().toISOString() },
        { user: 'jane_smith', action: 'Updated profile', timestamp: new Date(Date.now() - 3600000).toISOString() },
        { user: 'bob_wilson', action: 'Deleted task', timestamp: new Date(Date.now() - 7200000).toISOString() }
      ]
    };
  }
};

export default analyticsService; 