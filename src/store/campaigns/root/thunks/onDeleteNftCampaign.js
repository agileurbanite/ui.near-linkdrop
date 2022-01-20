import { thunk } from 'easy-peasy';

export const onDeleteNftCampaign = thunk(async (_, payload) => {
  const { onFinishDeleting } = payload;
  // console.log('delete NFT');
  onFinishDeleting();
});
