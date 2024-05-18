import { DebugLogger, DefaultLogger, ErrorLogger, WarnLogger } from './loggers';
import { ILogger, LogLevel } from './types';

export class LoggerFactory {
  static create(level: LogLevel): ILogger {
    if (level === LogLevel.DEBUG) return new DebugLogger();
    else if (level === LogLevel.WARN) return new WarnLogger();
    else if (level === LogLevel.ERROR) return new ErrorLogger();
    else if (level === LogLevel.DEFAULT) return new DefaultLogger();
    else throw new Error(`Invalid log level - ${level}`);
  }
}
