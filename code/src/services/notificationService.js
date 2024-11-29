let notifications = [
  {
    id: 1,
    type: 'info',
    message: 'Welcome to the dashboard!',
    read: false,
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    type: 'warning',
    message: 'Your subscription will expire soon',
    read: false,
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  }
];

const notificationService = {
  getNotifications: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [...notifications];
  },

  markAsRead: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    notifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    return notifications.find(n => n.id === id);
  },

  markAllAsRead: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    notifications = notifications.map(notification => ({ ...notification, read: true }));
    return [...notifications];
  },

  deleteNotification: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    notifications = notifications.filter(notification => notification.id !== id);
    return true;
  }
};

export default notificationService; 