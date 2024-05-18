import {
  DebugLoggerFactory,
  ErrorLoggerFactory,
  WarnLoggerFactory,
} from './loggers';

function main() {
  const debugLoggerFactory = new DebugLoggerFactory();
  const debugLogger = debugLoggerFactory.create();

  const errorLoggerFactory = new ErrorLoggerFactory();
  const errorLogger = errorLoggerFactory.create();

  const warnLoggerFactory = new WarnLoggerFactory();
  const warnLogger = warnLoggerFactory.create();

  warnLogger.log('YAY');
  debugLogger.log('YAY');
  errorLogger.log('YAY');
}

main();
