import app from '@/app.js';
import { createServer } from 'node:http';
import { config } from '@/config/index.js';

// create server instance
const server = createServer(app);

// turn on server
const startServer = (): void => {
  server.listen(config.port, () => {
    console.info(`server running on http://${config.host}:${config.port}`);
  });
};

// health check & graceful shutdown
const handleGracefulShutdown = (signal: string): void => {
  console.info(`received ${signal}, Initiating Graceful Shutdown....`);

  // make server for not receiving new requests and start shutting down
  server.close((err?: Error) => {
    if (err) {
      console.error('Error while stopping HTTP Server: ', err);
      process.exit(1);
    }

    console.info('HTTP server stopped successfully.');

    // any logic here

    console.info('all connection cleaned. Shutting down Node.js process.');
    process.exit(0);
  });

  // force timeout policy: if shutdown takes longer than 10 seconds, force termination
  setTimeout(() => {
    console.error('Gracefull Shutdown timeout exceeded. Forcing process termination! ');
    process.exit(1);
  }, 10000);
};

// capture termination signals from os/orchestrator
process.on('SIGTERM', () => handleGracefulShutdown('SIGTERM')); // standard shutdown signal
process.on('SIGINT', () => handleGracefulShutdown('SIGINT')); // shutdown signal via terminal interupt (ctrl + c)

// handle unexpected errors at the global node.js process level
process.on('unhandledRejection', (reason: unknown) => {
  console.error('Unhandled rejection detected at global process level: ', reason);
  handleGracefulShutdown('unhandledRejection');
});

process.on('uncaughtException', (error: Error) => {
  console.error('💥 Uncaught Exception detected at global process level:', error);
  handleGracefulShutdown('uncaughtException');
});

startServer();
