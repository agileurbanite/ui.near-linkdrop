import { Topbar } from './Topbar/Topbar';
import { Routes, Route } from '../../../providers/MemoryRouter';
import { SelectType } from './SelectType/SelectType';
import { Near } from './Near/Near';
import { Nft } from './Nft/Nft';
import { memoryRoutes } from '../../../../config/routes';
import { useJss } from './CreateCampaign.jss';

const { selectType, near, nft } = memoryRoutes.createCampaign;

export const CreateCampaign = () => {
  // TODO remove
  // const createCampaign = useStoreState((state) => state.general.modals.createCampaign);
  const jss = useJss();

  return (
    <div className={jss.container}>
      <Topbar />
      <div className={jss.body}>
        <Routes startRoute={selectType}>
          <Route path={selectType} element={<SelectType />} />
          <Route path={near.root} element={<Near />} />
          <Route path={nft.root} element={<Nft />} />
        </Routes>
      </div>
    </div>
  );
};
