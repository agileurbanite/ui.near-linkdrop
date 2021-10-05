import { useStoreActions, useStoreState } from 'easy-peasy';
import { ResumeCampaignProcess } from '../general/ResumeCampaignProcess/ResumeCampaignProcess';

export const ResumeCampaignDeletion = () => {
  const data = useStoreState((state) => state.general.modals.resumeCampaignDeletion);
  const onResumeCampaignDeletion = useStoreActions(
    (actions) => actions.campaigns.onResumeCampaignDeletion,
  );

  if (!data) return null;

  const { name, campaignId, internalCampaignId } = data.campaign;
  const { total, deletedDuringDeletion } = data.campaign.keysStats;

  const onMount = (history, setProgress) => {
    onResumeCampaignDeletion({
      history,
      setProgress,
      campaignId,
      internalCampaignId,
      total,
      deletedDuringDeletion,
    });
  };

  return <ResumeCampaignProcess onMount={onMount} campaignName={name} process="deletion" />;
};
