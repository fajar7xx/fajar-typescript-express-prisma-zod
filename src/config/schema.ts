import * as z from 'zod';

const env: string[] = ['development', 'production', 'testing', 'staging'];
const defaultPort = 3000;
const logLevel: string[] = ['debug', 'info', 'warn', 'error'];

export const envSchema = z.object({
  NODE_ENV: z.enum(env).default('development'),
  PORT: z.coerce.number().int().min(1000).max(65535).default(defaultPort),
  HOST: z.string().default('localhost'),

  // database
  DATABASE_URL: z.url().startsWith('postgresql://'),

  // jwt
  JWT_SECRET: z.string().min(32, 'JWT secret must be at least 32 characters'),
  JWT_EXPIRY: z.string().regex(/^\d+[smhd]$/, 'Invalid expiry format (e.g., 7d, 24h)'),
  JWT_ALGORITHM: z.string().default('HS256'),

  // redis
  REDIS_URL: z.url().startsWith('redis://'),
  REDIS_PASSWORD: z.string().optional(),

  // logging
  LOG_LEVEL: z.enum(logLevel).default('info'),
  LOG_DIR: z.string().default('./logs'),
  LOG_MAX_SIZES: z.coerce.number().int().positive().optional(),
  LOG_MAX_FILES: z.coerce.number().int().positive().optional(),
  LOG_RETENTION_DAYS: z.coerce.number().int().positive().optional(),

  // cors
  CORS_ORIGIN: z.string().transform((val) => val.split(',').map((url) => url.trim())),

  // rate limiting
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(100),

  // smtp
  SMTP_HOST: z.string().default('localhost'),
  SMTP_PORT: z.coerce.number().int().positive().default(1025),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().optional(),
});

// auto-generate type from schema(no redundancy)
export type EnvConfig = z.infer<typeof envSchema>;
