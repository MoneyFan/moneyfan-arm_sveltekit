const workerImp = await import('./worker/worker.ts?worker');

// NOTE: инициализация воркеров для обработки сообщений от приложения
export default function initWorker() {
  const worker = new workerImp.default();

  const msg = 'ping';
  console.log(`Sending message to worker:`, msg);
  worker.postMessage({ data: msg });
}
