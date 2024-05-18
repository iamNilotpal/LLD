import { LoggerFactory } from './factory';
import { LogLevel } from './types';

function main() {
  const warnLogger = LoggerFactory.create(LogLevel.WARN);
  const debugLogger = LoggerFactory.create(LogLevel.DEBUG);
  const errorLogger = LoggerFactory.create(LogLevel.ERROR);
  const defaultLogger = LoggerFactory.create(LogLevel.DEFAULT);

  warnLogger.log('Hello');
  debugLogger.log('Hello');
  errorLogger.log('Hello');
  defaultLogger.log('Hello');
}

main();
