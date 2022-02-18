import GenerateKeysWorker from './generateKeys.worker';
import GenerateKeysWorkerV2 from './generateKeysV2.worker';

// TODO maybe we can improve performance - open and reuse one worker instance instead of recreate it
//  every time
export const getKeysFromMnemonic = (params) => {
  const worker = params.internalCampaignId ? new GenerateKeysWorker() : new GenerateKeysWorkerV2();
  worker.postMessage(params);

  return new Promise((resolve) => {
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };
  });
};
