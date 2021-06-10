if (process.env.ENVIRONMENT === 'yap-local') {
  // eslint-disable-next-line import/no-unresolved,no-unused-vars,global-require
  require('dotenv').config();
}

const config = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'DEVELOPMENT',
  MICROSERVICE_NAME: process.env.MICROSERVICE_NAME || 'NODE_BOILERPLATE',
  MICROSERVICE_IP: process.env.MICROSERVICE_IP || '0.0.0.0',
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_PORT: process.env.APP_PORT || '8080',
  SWAGGER_PORT: process.env.SWAGGER_PORT || '8080',
  SENTRY_PROJECT_DSN: process.env.SENTRY_PROJECT_DSN || '',
  MYSQL_HOST: process.env.MYSQL_HOST || '0.0.0.0',
  MYSQL_USERNAME: process.env.MYSQL_USERNAME || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'thanksgiving',
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
};

module.exports = config;
