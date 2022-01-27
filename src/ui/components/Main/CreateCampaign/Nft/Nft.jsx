import { memoryRoutes } from '../../../../../config/routes';
import { Route, Routes } from '../../../../providers/MemoryRouter';
import { CampaignMetadata } from './CampaignMetadata/CampaignMetadata';
import { SelectNft } from './SelectNft/SelectNft';
import { Summary } from './Summary/Summary';
import { CreationProgress } from './CreationProgress/CreationProgress';

const { campaignData, selectNft, summary, creationProgress } = memoryRoutes.createCampaign.nft;

export const Nft = () => (
  <Routes>
    <Route path={campaignData} element={<CampaignMetadata />} />
    <Route path={selectNft} element={<SelectNft />} />
    <Route path={summary} element={<Summary />} />
    <Route path={creationProgress} element={<CreationProgress />} />
  </Routes>
);
