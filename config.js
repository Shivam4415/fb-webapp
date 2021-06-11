const dotenv = require("dotenv");
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT || 5050;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "";
const JWT_REFERESH_TOKEN = process.env.JWT_REFERESH_TOKEN || "";
const SMS_SECRET_KEY = process.env.SMS_SECRET_KEY || "";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  databaseUrl: DATABASE_URL,
  jwtAuthToken: JWT_AUTH_TOKEN,
  jwtRefreshToken: JWT_REFERESH_TOKEN,
  smsSecretKey: SMS_SECRET_KEY,
};

const config = {
  server: SERVER,
};
module.exports = config;
