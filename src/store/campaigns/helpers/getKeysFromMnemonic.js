import GenerateKeysWorker from './generateKeys.worker';

// TODO Terminate worker after job is done

export const getKeysFromMnemonic = (params) => {
  const worker = new GenerateKeysWorker();
  worker.postMessage(params);

  return new Promise((resolve) => {
    worker.onmessage = (event) => {
      resolve(event.data);
    };
  });
};
