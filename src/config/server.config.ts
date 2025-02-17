export default () => ({
  port: 8080,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DATABASE_PORT,
    name: process.env.DB_NAME,
    logging: process.env.DB_LOGGING,
  },
});
