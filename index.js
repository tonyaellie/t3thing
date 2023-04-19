#! /usr/bin/env node

const { spawn } = require('child_process');

// shamelessly stolen from https://github.com/t3-oss/create-t3-app/blob/next/cli/src/utils/getUserPkgManager.ts
const userAgent = process.env.npm_config_user_agent;

if (userAgent) {
  if (userAgent.startsWith('yarn')) {
    spawn('yarn', ['dlx', 'create-t3-app'], {
      stdio: 'inherit',
    });
  } else if (userAgent.startsWith('pnpm')) {
    spawn('pnpm', ['dlx', 'create-t3-app'], {
      stdio: 'inherit',
    });
  } else {
    spawn('npx', ['create-t3-app'], {
      stdio: 'inherit',
    });
  }
} else {
  // If no user agent is set, assume npm
  spawn('npx', ['create-t3-app'], {
    stdio: 'inherit',
  });
}
