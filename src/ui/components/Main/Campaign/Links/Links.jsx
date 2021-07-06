import { Checkbox, Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { Link } from './Link/Link';
import { useLinkSelector } from './useLinkSelector';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { keys, name, tokensPerKey } }) => {
  const onExportLinksCSV = useStoreActions((actions) => actions.campaigns.onExportLinksCSV);
  const { numberOfSelected, isSelectedAll, allLinks, onSelectAll, onSelect } = useLinkSelector(
    keys,
  );
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Checkbox
          className={classes.checkbox}
          color="primary"
          onChange={(e) => onSelectAll(e.target.checked)}
          checked={isSelectedAll}
        />
        <span className={classes.title}>Links</span>
        {numberOfSelected > 0 && (
          <>
            <span className={classes.selected}>
              Selected {numberOfSelected}/{keys.length}
            </span>
            <Button
              onClick={() => onExportLinksCSV({ allLinks, links: keys, name })}
              className={classes.downloadCSV}
              color="primary"
            >
              <GetApp />
              <span className={classes.downloadCSVText}>Download CSV</span>
            </Button>
          </>
        )}
      </div>
      {keys.map((key) => (
        <Link
          key={key.pk}
          link={key}
          onSelect={onSelect}
          isSelected={allLinks[key.pk]}
          amountPerLink={tokensPerKey}
        />
      ))}
    </div>
  );
};
