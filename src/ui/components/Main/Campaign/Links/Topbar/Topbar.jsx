import { Button, Checkbox } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useStyles } from './Topbar.styles';

export const Topbar = ({ numberOfSelected, isSelectedAll, onSelectAll, allLinks, keys, name }) => {
  const onExportLinksCSV = useStoreActions((actions) => actions.campaigns.onExportLinksCSV);
  const classes = useStyles();

  return (
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
  );
};
