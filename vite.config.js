// vite.config.js
const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        'about-me': resolve(__dirname, 'about-me/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        'project-details': resolve(
          __dirname,
          'project-details/index.html'
        ),
        skills: resolve(__dirname, 'skills/index.html'),
        social: resolve(__dirname, 'social/index.html'),
      },
    },
  },
};
