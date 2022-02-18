import { thunk } from 'easy-peasy';
import { keyStores } from 'near-api-js';
import qs from 'query-string';
import { matchPath } from 'react-router';
import { routes } from '../../../config/routes';
import { getNear } from '../../general/helpers/getNearPack';
import { getNftCampaignContract } from '../../helpers/getContracts';
import { setKeyToKeyStore } from '../../helpers/setKeyToKeyStore';
import { terraGas } from '../../helpers/terraGas';

const getUrlParams = (history) => {
  const match = matchPath(history.location.pathname, {
    path: routes.claim,
    exact: true,
  });
  const { redirectTo } = qs.parse(history.location.search);

  return {
    contractId: match.params.contractId,
    secretKey: match.params.secretKey,
    redirectTo,
  };
};

// TODO move from campaigns;
export const onClaimNFT = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const actions = getStoreActions();

  const { contractId, secretKey } = getUrlParams(state.navigation.history);
  const { beneficiaryId, onSuccessfulClaim } = payload;

  try {
    const keyStore = new keyStores.InMemoryKeyStore();
    await setKeyToKeyStore(keyStore, contractId, secretKey);
    const near = await getNear(keyStore);

    const res = await getNftCampaignContract(near.connection, contractId).claim({
      args: { beneficiary_id: beneficiaryId },
      gas: terraGas(100),
    });
    // TODO navigate to Wallet or to redirect URL
    /* eslint-disable no-console */
    console.log(res);
    onSuccessfulClaim();
  } catch (e) {
    actions.general.setError({ isError: true, description: e.message });
  }
});
