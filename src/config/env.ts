import { config } from './index.js';

export { config };

// type save environment variables

export const isDev = (): boolean => config.isDevelopment;
export const isProd = (): boolean => config.isProduction;
