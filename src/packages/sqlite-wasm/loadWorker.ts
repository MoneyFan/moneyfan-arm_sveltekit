let worker: Worker | undefined = undefined;

// NOTE: инициализация воркеров для обработки сообщений от приложения
export default async function initWorker() {
  const SyncWorker = await import('./worker/worker.ts?worker');
  worker = new SyncWorker.default();

  const msg = 'ping';
  console.log(`Sending message to worker:`, msg);
  worker.postMessage({ data: msg });
}
