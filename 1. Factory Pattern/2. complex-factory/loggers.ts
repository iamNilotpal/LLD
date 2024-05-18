import { ILogger, ILoggerFactory } from './types';

export class DebugLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new DebugLogger();
  }
}

export class ErrorLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new ErrorLogger();
  }
}

export class WarnLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new WarnLogger();
  }
}

export class DefaultLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new DefaultLogger();
  }
}

class ErrorLogger implements ILogger {
  log(val: string): void {
    console.error('ERROR :', val);
  }
}

class DefaultLogger implements ILogger {
  log(val: string): void {
    console.log('DEFAULT :', val);
  }
}

class WarnLogger implements ILogger {
  log(val: string): void {
    console.warn('WARN :', val);
  }
}

class DebugLogger implements ILogger {
  log(val: string): void {
    console.debug('DEBUG :', val);
  }
}
