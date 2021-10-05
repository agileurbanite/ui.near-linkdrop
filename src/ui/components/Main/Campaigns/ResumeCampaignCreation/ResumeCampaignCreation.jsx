import { useStoreActions, useStoreState } from 'easy-peasy';
import { ResumeCampaignProcess } from '../general/ResumeCampaignProcess/ResumeCampaignProcess';

export const ResumeCampaignCreation = () => {
  const data = useStoreState((state) => state.general.modals.resumeCampaignCreation);
  const onResumeCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.onResumeCampaignCreation,
  );

  if (!data) return null;

  const { name, campaignId, internalCampaignId } = data.campaign;
  const { total, addedDuringCreation } = data.campaign.keysStats;

  const onMount = (history, setProgress) => {
    onResumeCampaignCreation({
      history,
      setProgress,
      campaignId,
      internalCampaignId,
      total,
      addedDuringCreation,
    });
  };

  return <ResumeCampaignProcess onMount={onMount} campaignName={name} />;
};
