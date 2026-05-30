import fs from 'fs';
import path from 'path';
import { config } from '@/config/index.js';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

/**
 * Winston Logger - Official Implementation
 * Following: https://github.com/winstonjs/winston
 *
 * Features:
 * - Multiple transports (console, file, daily-rotate)
 * - Custom formats (development & production)
 * - Separate error logs
 * - Auto rotation & cleanup
 * - Exception & Rejection handling
 */

// ============================================
// CONSTANTS
// ============================================

// Winston log levels (custom with HTTP level)
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// Winston colors
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'grey',
};

// Add custom colors to Winston
winston.addColors(colors);

// ============================================
// ENSURE LOGS DIRECTORY
// ============================================

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// ============================================
// FORMATS - Following Official Winston Docs
// https://github.com/winstonjs/winston#formats
// ============================================

/**
 * Development format - Pretty print with colors
 * Format: timestamp [level] message metadata
 */
const developmentFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ level, message, timestamp, stack, ...meta }) => {
    const metaStr = Object.keys(meta).length > 0 ? JSON.stringify(meta, null, 2) : '';

    if (stack) {
      return `${timestamp} [${level}]: ${message}\n${stack}${metaStr ? '\n' + metaStr : ''}`;
    }

    return `${timestamp} [${level}]: ${message}${metaStr ? '\n' + metaStr : ''}`;
  }),
);

/**
 * Production format - JSON structured
 * For log aggregation tools (ELK, Datadog, etc)
 */
const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  // Add environment info
  winston.format.printf(({ level, message, timestamp, ...meta }) => {
    return JSON.stringify({
      timestamp,
      level,
      message,
      environment: config.nodeEnv,
      ...meta,
    });
  }),
);

// ============================================
// TRANSPORTS - Following Official Winston Docs
// https://github.com/winstonjs/winston#transports
// ============================================

/**
 * Create transports based on environment
 */
const createTransports = (): winston.transport[] => {
  const transports: winston.transport[] = [];

  if (config.isDevelopment) {
    // Development: Console with pretty print
    transports.push(
      new winston.transports.Console({
        format: developmentFormat,
      }),
    );

    // Development: File - General logs for reference
    transports.push(
      new DailyRotateFile({
        filename: path.join(logsDir, 'general-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxSize: '10m', // 10MB per file
        maxFiles: '7d', // Keep 7 days
        format: productionFormat,
      }),
    );

    // Development: File - Error logs only
    transports.push(
      new DailyRotateFile({
        filename: path.join(logsDir, 'error-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxSize: '10m',
        maxFiles: '7d',
        level: 'error',
        format: productionFormat,
      }),
    );
  } else {
    // Production: Console JSON (for Docker/K8s capture)
    transports.push(
      new winston.transports.Console({
        format: productionFormat,
      }),
    );

    // Production: File - General logs
    transports.push(
      new DailyRotateFile({
        filename: path.join(logsDir, 'general-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxSize: '10m',
        maxFiles: '7d',
        format: productionFormat,
      }),
    );

    // Production: File - Error logs only
    transports.push(
      new DailyRotateFile({
        filename: path.join(logsDir, 'error-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxSize: '10m',
        maxFiles: '7d',
        level: 'error',
        format: productionFormat,
      }),
    );
  }

  return transports;
};

// ============================================
// CREATE LOGGER - Following Official Winston Docs
// https://github.com/winstonjs/winston#creating-your-own-logger
// ============================================

const logger = winston.createLogger({
  // Level dari environment
  level: config.logging.level,

  // Custom levels
  levels,

  // Format default
  format: productionFormat,

  // Default metadata
  defaultMeta: { service: 'express-api', env: config.nodeEnv },

  // Transports
  transports: createTransports(),

  // Exception handling
  // https://github.com/winstonjs/winston#handling-uncaught-exceptions
  exceptionHandlers: [
    new DailyRotateFile({
      filename: path.join(logsDir, 'exceptions-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '10m',
      maxFiles: '7d',
      format: productionFormat,
    }),
  ],

  // Rejection handling
  // https://github.com/winstonjs/winston#handling-unhandled-promise-rejections
  rejectionHandlers: [
    new DailyRotateFile({
      filename: path.join(logsDir, 'rejections-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '10m',
      maxFiles: '7d',
      format: productionFormat,
    }),
  ],

  // Exit on error (optional - default false)
  exitOnError: false,
});

// ============================================
// EXPORT
// ============================================

export default logger;
