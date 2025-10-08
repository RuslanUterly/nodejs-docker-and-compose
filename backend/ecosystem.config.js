require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3001,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT,
        POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
        POSTGRES_PGDATA: process.env.POSTGRES_PGDATA
      },
    },
  ],
};