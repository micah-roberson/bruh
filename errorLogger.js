// errorLogger.js

import fs from 'fs';
import path from 'path';

export function logError(error) {
  const logFilePath = path.join(process.cwd(), 'error.log');
  const errorMessage = `[${new Date().toISOString()}] ${error.stack}\n`;

  fs.appendFile(logFilePath, errorMessage, (err) => {
    if (err) {
      console.error('Failed to log error:', err);
    }
  });
}

// Optional: Implement log rotation, configuration, etc.
