/* eslint-disable */
import { useState } from 'react';
import { PaginationItem as MuiPaginationItem } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './PaginationItem.styles';

export const PaginationItem = ({ item, hidePagination }) => {
  const [isLoading, setLoader] = useState(false);
  const classes = useStyles();

  const onClick = () => {
    !hidePagination && item.onClick({ setLoader });
  };

  return isLoading ? (
    <div className={classes.loaderWrapper}>
      <CircularProgress size={18} className={classes.spinner} />
    </div>
  ) : (
    <MuiPaginationItem
      {...item}
      onClick={onClick}
      classes={{
        root: classes.root,
        icon: classes.icon,
        selected: hidePagination ? classes.selectedOn : classes.selectedOff,
      }}
    />
  );
};
