// const workerImp = await import('./worker/worker.ts?worker');
import workerUrl from './worker/worker.ts?url';
// const worker = new Worker(workerUrl, { type: 'module' });
// NOTE: инициализация воркеров для обработки сообщений от приложения
export default function initWorker() {
  const worker = new Worker(workerUrl, { type: 'module' });
  // const worker = new workerImp.default();

  const msg = 'ping';
  console.log(`Sending message to worker:`, msg);
  worker.postMessage({ data: msg });
}
