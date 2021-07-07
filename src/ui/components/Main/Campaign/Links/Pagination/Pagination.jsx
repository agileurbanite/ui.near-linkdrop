import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { ArrowButton } from './ArrowButton/ArrowButton';
import { useStyles } from './Pagination.styles';

export const Pagination = () => {
  const pagination = useStoreState((state) => state.campaigns.campaign.pagination);
  const onLoadKeys = useStoreActions((actions) => actions.campaigns.onLoadKeys);
  const [loader, setLoader] = useState(null);
  const classes = useStyles();

  const { page, total, range, elementsPerPage } = pagination;

  // const prevPage = () => {
  //   onLoadKeys({
  //     page: page - 1,
  //     total,
  //     elementsPerPage,
  //     loaderOn: () => setLoader('prev'),
  //     loaderOff: () => setLoader(''),
  //   });
  // };
  //
  // const nextPage = () => {
  //   onLoadKeys({
  //     page: page + 1,
  //     total,
  //     elementsPerPage,
  //     loaderOn: () => setLoader('next'),
  //     loaderOff: () => setLoader(''),
  //   });
  // };

  return (
    <div className={classes.container}>
      <ArrowButton
        type="prev"
        page={page - 1}
        disabled={range.start === 1}
        total={total}
        elementsPerPage={elementsPerPage}
        onLoadKeys={onLoadKeys}
        loader={loader}
        setLoader={setLoader}
      />
      <div className={classes.pageInfo}>
        <Typography variant="subtitle2" color="textSecondary">
          {`${range.start}-${range.end} from ${total}`}
        </Typography>
      </div>
      <ArrowButton
        type="next"
        page={page + 1}
        disabled={range.end === total}
        total={total}
        elementsPerPage={elementsPerPage}
        onLoadKeys={onLoadKeys}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
};
