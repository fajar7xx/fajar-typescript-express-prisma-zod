import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '@/app.js';

describe('Express API integration test', (): void => {
  test('GET /health', async (): Promise<void> => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});
