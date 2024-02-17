// NOTE: Service Worker
import { initDb } from './init-db';

(async function () {
  // NOTE: ручное переключение для деплоя
  const production = true;
  self.addEventListener('message', async function ({ data }: { data: unknown }) {
    console.log('sqlite worker received message:', data.type);

    if (production) {
      const path = './../../../jswasm/sqlite3.mjs';
      const jswasmUrl = new URL(path, import.meta.url).href;
      console.log(import.meta.url, jswasmUrl);
      await import(jswasmUrl);
    } else {
      await import('./../jswasm/sqlite3.mjs');
    }

    const initRes = await initDb();
    console.log('worker initDb result:', initRes);
  });
})();

export {};
