export interface ILogger {
  log(val: string): void;
}

export interface ILoggerFactory {
  create(): ILogger;
}

export enum LogLevel {
  WARN = 'WARN',
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
  DEFAULT = 'DEFAULT',
}
