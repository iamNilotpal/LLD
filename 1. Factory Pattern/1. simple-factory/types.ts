export interface ILogger {
  log(val: string): void;
}

export enum LogLevel {
  WARN = 'WARN',
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
  DEFAULT = 'DEFAULT',
}
