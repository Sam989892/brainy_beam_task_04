let settings = {
  theme: 'light',
  notifications: true,
  language: 'en',
  timezone: 'UTC'
};

const settingsService = {
  getSettings: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { ...settings };
  },

  updateSettings: async (newSettings) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    settings = { ...settings, ...newSettings };
    return { ...settings };
  }
};

export default settingsService; 