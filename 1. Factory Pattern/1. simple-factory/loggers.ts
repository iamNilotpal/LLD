import { ILogger } from './types';

export class ErrorLogger implements ILogger {
  log(val: string): void {
    console.error('ERROR :', val);
  }
}

export class DefaultLogger implements ILogger {
  log(val: string): void {
    console.log('DEFAULT :', val);
  }
}

export class WarnLogger implements ILogger {
  log(val: string): void {
    console.warn('WARN :', val);
  }
}

export class DebugLogger implements ILogger {
  log(val: string): void {
    console.debug('DEBUG :', val);
  }
}
