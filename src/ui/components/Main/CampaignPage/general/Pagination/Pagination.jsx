/* eslint-disable */
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Pagination as MuiPagination } from '@material-ui/lab';
import { useStyles } from './Pagination.styles';
import { PaginationItem } from './PaginationItem/PaginationItem';

export const Pagination = () => {
  const pagination = useStoreState((state) => state.campaigns.campaign.pagination);
  const onLoadKeys = useStoreActions((actions) => actions.campaigns.onLoadKeys);
  const [hidePagination, setHidePagination] = useState(false);
  const classes = useStyles();

  const { lastPage, total, elementsPerPage } = pagination;

  const handleChange = async ({ setLoader }, page) => {
    setHidePagination(true);
    await onLoadKeys({
      page,
      total,
      elementsPerPage,
      showLoader: () => setLoader(true),
      hideLoader: () => setLoader(false),
    });
    setHidePagination(false);
  };

  return (
    <div className={classes.container}>
      {total > elementsPerPage && (
        <MuiPagination
          renderItem={(item) => <PaginationItem hidePagination={hidePagination} item={item} />}
          onChange={handleChange}
          count={lastPage}
          page={pagination.page}
          color="primary"
          siblingCount={0}
        />
      )}
    </div>
  );
};
