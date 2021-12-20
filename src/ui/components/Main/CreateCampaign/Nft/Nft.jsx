import { memoryRoutes } from '../../../../../config/routes';
import { Route, Routes } from '../../../../providers/MemoryRouter';
import { CampaignData } from './CampaignData/CampaignData';
import { SelectNft } from './SelectNft/SelectNft';

const { campaignData, selectNft } = memoryRoutes.createCampaign.nft;

export const Nft = () => {
  return (
    <Routes>
      <Route path={campaignData} element={<CampaignData />} />
      <Route path={selectNft} element={<SelectNft />} />
    </Routes>
  );
};
