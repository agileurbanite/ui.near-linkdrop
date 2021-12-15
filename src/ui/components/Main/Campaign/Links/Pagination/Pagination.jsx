import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Pagination as MuiPagination } from '@material-ui/lab';

import { useStyles } from './Pagination.styles';
import { PaginationItem } from './PaginationItem/PaginationItem';

export const Pagination = () => {
  const pagination = useStoreState((state) => state.campaigns.campaign.pagination);
  const onLoadKeys = useStoreActions((actions) => actions.campaigns.onLoadKeys);
  const [loader, setLoader] = useState(null);
  const classes = useStyles();
  const { total, elementsPerPage } = pagination;
  const countPage = Math.round(total / elementsPerPage);


  const handleChange = (_, page) => {
    onLoadKeys({
      page,
      total,
      elementsPerPage,
      showLoader: () => setLoader('loading'),
      hideLoader: () => setLoader(null),
    });
  };

  return (
    <div className={classes.container}>
      {total < elementsPerPage ? (
        <div className={classes.container} />
      ) : (
        <MuiPagination
          renderItem={(item) => <PaginationItem item={item} loader={loader} />}
          onChange={handleChange}
          count={countPage}
          color="primary"
          siblingCount={0}
          disabled={loader === 'loading'}
        />
      )}
    </div>
  );
};
