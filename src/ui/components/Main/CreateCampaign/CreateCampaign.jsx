import { Topbar } from './Topbar/Topbar';
import { Routes, Route } from '../../../providers/MemoryRouter';
import { SelectType } from './SelectType/SelectType';
import { Near } from './Near/Near';
import { memoryRoutes } from '../../../../config/routes';
import { useJss } from './CreateCampaign.jss';

const { selectType, near } = memoryRoutes.createCampaign;

export const CreateCampaign = () => {
  // TODO remove
  // const createCampaign = useStoreState((state) => state.general.modals.createCampaign);
  const jss = useJss();

  return (
    <div className={jss.container}>
      <Topbar />
      <div className={jss.body}>
        <Routes defaultRoute={selectType}>
          <Route path={selectType} element={<SelectType />} />
          <Route path={near.root} element={<Near />} />
        </Routes>
      </div>
    </div>
  );
};

// const create_campaign = [
//   'select_type',
//   'near',
//   'nft',
//   'near_nft',
// ]
//
// const near = [
//   'near.general',
//   'near.summary',
//   'near.creation',
// ]
//
// const nft = [
//   'nft.general',
//   'nft.select_nft',
//   'nft.summary',
//   'nft.creation',
// ]
