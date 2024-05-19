import { CacheDB } from './cache';

function main() {
  const instance1 = CacheDB.getInstance();
  const instance2 = CacheDB.getInstance();

  console.log(instance1 === instance2);
}

main();
