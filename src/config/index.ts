import dotenv from 'dotenv';
import { envSchema, type EnvConfig } from './schema.js';

if (process.env['NODE_ENV'] !== 'production') {
  dotenv.config();
}

let envConfig: EnvConfig;

try {
  envConfig = envSchema.parse(process.env);
} catch (error) {
  console.error('invalid configuration');
  if (error instanceof Error) {
    console.error(error.message);
  }
  process.exit(1);
}

/**
 * Application Config
 * Simple & organized, no sensitive data in code
 */
export const config = {
  nodeEnv: envConfig.NODE_ENV,
  isDevelopment: envConfig.NODE_ENV !== 'production',
  isProduction: envConfig.NODE_ENV === 'production',
  port: envConfig.PORT,
  host: envConfig.HOST,

  // database
  database: {
    url: envConfig.DATABASE_URL,
  },

  // jwt
  jwt: {
    secret: envConfig.JWT_SECRET,
    expiry: envConfig.JWT_EXPIRY,
    algorithm: envConfig.JWT_ALGORITHM,
  },

  // redis
  redis: {
    url: envConfig.REDIS_URL,
    password: envConfig.REDIS_PASSWORD,
  },

  // logging
  logging: {
    level: envConfig.LOG_LEVEL,
    dir: envConfig.LOG_DIR,
    maxSizes: envConfig.LOG_MAX_SIZES,
    maxFiles: envConfig.LOG_MAX_FILES,
    retentionDays: envConfig.LOG_RETENTION_DAYS,
  },

  // cors
  cors_origin: envConfig.CORS_ORIGIN,

  // rate limiting
  rateLimit: {
    windowMs: envConfig.RATE_LIMIT_WINDOW_MS,
    maxRequests: envConfig.RATE_LIMIT_MAX_REQUESTS,
  },

  // smtp
  smpt: {
    host: envConfig.SMTP_HOST,
    port: envConfig.SMTP_PORT,
    user: envConfig.SMTP_USER,
    password: envConfig.SMTP_PASSWORD,
    from: envConfig.SMTP_FROM,
  },
} as const;

export type Config = typeof config;
