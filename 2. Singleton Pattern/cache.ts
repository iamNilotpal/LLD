import type { IRedis, Mutex } from './types';

const Mutex: Mutex = {
  lock: () => console.log('Locking...'),
  unlock: () => console.log('Unlocking...'),
};

class Redis implements IRedis {
  getAll() {
    return new Array(10).fill(crypto.randomUUID());
  }

  get(key: string) {
    return `${key}-${crypto.randomUUID()}`;
  }

  put(key: string, val: string) {
    console.log(`PUT : ${key}-${val}`);
  }
}

export class CacheDB {
  private static mutex = Mutex;
  private static instance: IRedis;

  private constructor() {}

  static getInstance() {
    // Double Checked Locking
    if (!CacheDB.instance) {
      CacheDB.mutex.lock();
      if (!CacheDB.instance) CacheDB.instance = new Redis();
      CacheDB.mutex.unlock();
    }

    return CacheDB.instance;
  }
}
