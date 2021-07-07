import { Link } from './Link/Link';
import { Topbar } from './Topbar/Topbar';
import { useLinkSelector } from './useLinkSelector';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { campaignId, keys, name, tokensPerKey } }) => {
  const { numberOfSelected, isSelectedAll, allLinks, onSelectAll, onSelect } =
    useLinkSelector(keys);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Topbar
        numberOfSelected={numberOfSelected}
        isSelectedAll={isSelectedAll}
        onSelectAll={onSelectAll}
        allLinks={allLinks}
        keys={keys}
        name={name}
      />
      {keys.map((key) => (
        <Link
          key={key.pk}
          link={key}
          onSelect={onSelect}
          isSelected={allLinks[key.pk]}
          amountPerLink={tokensPerKey}
          campaignId={campaignId}
        />
      ))}
    </div>
  );
};
