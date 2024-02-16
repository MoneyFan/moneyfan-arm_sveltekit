// NOTE: Service Worker
import { initDb } from './init-db';

// (async function () {
addEventListener('message', async function ({ data }: { data: unknown }) {
  console.log('sqlite worker received message:', data.type);
  await import('../jswasm/sqlite3.mjs');
  const initRes = await initDb();
  console.log('worker initDb result:', initRes);
});
// })();

export {};
