import type { Request, Response, NextFunction } from 'express';
import logger from './logger.js';

/**
 * HTTP Logger Middleware
 * Log setiap HTTP request & response
 *
 * Using Winston 'http' level
 * https://github.com/winstonjs/winston#logging
 */

export const httpLogger = (req: Request, res: Response, next: NextFunction): void => {
  // Skip health check
  // if (req.path === '/health') {
  //   return next();
  // }

  const startTime = Date.now();
  const originalJson = res.json.bind(res);

  // Intercept res.json() to log HTTP response
  res.json = function <T>(body: T): Response<T> {
    const duration = Date.now() - startTime;

    logger.log('http', `${req.method} ${req.path}`, {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });

    return originalJson(body);
  };

  next();
};

export default httpLogger;
