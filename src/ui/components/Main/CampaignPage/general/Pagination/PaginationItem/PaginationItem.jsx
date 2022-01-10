import { PaginationItem as MuiPaginationItem } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './PaginationItem.styles';

export const PaginationItem = (props) => {
  const { item, loader, nextPage } = props;
  const classes = useStyles(loader);

  // console.log(item);
  console.log(props);
  return item.page === nextPage /*&& item.type === 'page'*/ && loader ? (
    <div className={classes.loaderWrapper}>
      <CircularProgress size={18} className={classes.spinner} />
    </div>
  ) : (
    <MuiPaginationItem
      {...item}
      classes={{
        root: classes.root,
        icon: classes.icon,
        selected: loader && classes.selected ,
        disabled: classes.disabled,
      }}
    />
  );
};
