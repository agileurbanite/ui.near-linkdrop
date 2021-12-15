import { PaginationItem as MuiPaginationItem } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './PaginationItem.styles';

export const PaginationItem = ({ item, loader }) => {
  const classes = useStyles();

  return item.selected && loader === 'loading' ? (
    <div className={classes.loaderWrapper}>
      <CircularProgress size={18} className={classes.spinner} />
    </div>
  ) : (
    <MuiPaginationItem
      {...item}
      classes={{
        root: classes.root,
        icon: classes.icon,
        selected: classes.selected,
        disabled: classes.disabled,
      }}
    />
  );
};
