import { Checkbox, Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { Link } from './Link/Link';
import { useLinkSelector } from './useLinkSelector';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { links, name, amountPerLink } }) => {
  const onExportLinksCSV = useStoreActions((actions) => actions.campaigns.onExportLinksCSV);
  const { numberOfSelected, isSelectedAll, allLinks, onSelectAll, onSelect } = useLinkSelector(
    links,
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
              Selected {numberOfSelected}/{links.length}
            </span>
            <Button
              onClick={() => onExportLinksCSV({ allLinks, links, name })}
              className={classes.downloadCSV}
              color="primary"
            >
              <GetApp />
              <span className={classes.downloadCSVText}>Download CSV</span>
            </Button>
          </>
        )}
      </div>
      {links.map((link) => (
        <Link
          key={link.publicKey}
          link={link}
          onSelect={onSelect}
          isSelected={allLinks[link.publicKey]}
          amountPerLink={amountPerLink}
        />
      ))}
    </div>
  );
};
