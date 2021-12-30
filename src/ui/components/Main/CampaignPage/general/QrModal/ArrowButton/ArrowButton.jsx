import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { IconButton, CircularProgress } from '@material-ui/core';
import { useStyles } from './ArrowButton.styles';

export const ArrowButton = ({ disabled, onClick, className, type, loader }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {loader === type ? (
        <CircularProgress size={25} />
      ) : (
        <IconButton onClick={onClick} disabled={disabled} color="primary">
          {type === 'prev' ? (
            <ArrowBackIosOutlined className={classes.arrow} />
          ) : (
            <ArrowForwardIosOutlined className={classes.arrow} />
          )}
        </IconButton>
      )}
    </div>
  );
};
