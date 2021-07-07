import { IconButton, CircularProgress } from '@material-ui/core';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useStyles } from './ArrowButton.styles';

export const ArrowButton = ({
  type,
  page,
  disabled,
  loader,
  onLoadKeys,
  total,
  elementsPerPage,
  setLoader,
}) => {
  const classes = useStyles();

  const onClick = () => {
    onLoadKeys({
      page,
      total,
      elementsPerPage,
      showLoader: () => setLoader(type),
      hideLoader: () => setLoader(null),
    });
  };

  return (
    <div className={classes.container}>
      {loader === type ? (
        <CircularProgress size={18} />
      ) : (
        <IconButton onClick={onClick} disabled={disabled} color="primary">
          {type === 'prev' ? <ArrowBackIosOutlined /> : <ArrowForwardIosOutlined />}
        </IconButton>
      )}
    </div>
  );
};
