// Hostinger Node.js entry point wrapper
if (require('fs').existsSync('./dist/server.cjs')) {
  require('./dist/server.cjs');
} else {
  // Fallback for direct node execution
  require('./server.ts');
}
