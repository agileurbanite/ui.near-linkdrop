import { Routes, Route } from '../../../../providers/MemoryRouter';
import { GeneralData } from './GeneralData/GeneralData';
import { memoryRoutes } from '../../../../../config/routes';
import { useJss } from './Near.jss';

const { generalData, summary } = memoryRoutes.createCampaign.near;

export const Near = () => {
  const jss = useJss();

  return (
    <Routes>
      <Route path={generalData} element={<GeneralData />} />
    </Routes>
  );
};
