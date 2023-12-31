export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.NODE_ENV !== 'production',
  },
  server: {
    port: parseInt(process.env.PORT_APP, 10) || 3000,
  },
});
