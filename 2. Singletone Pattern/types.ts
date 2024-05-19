export type Mutex = {
  lock: () => void;
  unlock: () => void;
};

export interface IRedis {
  getAll: () => string[];
  get: (key: string) => string;
  put: (key: string, val: string) => void;
}
