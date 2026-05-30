import express, { type Express, type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { config } from '@/config/index.js';
import httpLogger from '@/utils/http-logger.js';

const app: Express = express();

// 1. security
app.disable('x-powered-by');
app.use(
  helmet({
    contentSecurityPolicy: false, // REST API tidak menyajikan HTML, tidak butuh csp
    crossOriginEmbedderPolicy: false,
  }),
);
app.use(
  cors({
    origin: config.cors_origin, //just temporary
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['X-Request-Id'],
    credentials: true, // wajib jika fe mengirimkan cookie session atau authorization header
    maxAge: 86400, // mengurangi beban request preflight options di browser selama 24 jam
  }),
);

// 2. performance & limits
// compress payloadd response JSON untuk meminimalkan latency & hemat bandwidth
app.use(compression());

// rate limiting untuk mencegah DOS attack
app.use(
  rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.maxRequests,
    message: 'Too many requests, please try again later.',
  }),
);

// parse request body sebagai JSON & URL-encoded dengan limitasi ketat untuk menghindari DOS via payload besar
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// 3. konfigurasi multer

app.use(httpLogger);

app.get('/', (_req: Request, res: Response): void => {
  res.send('Hello World');
});

app.get('/health', (_req: Request, res: Response): void => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

export default app;
