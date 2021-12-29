import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { useStyles } from './ArrowButton.styles';

export const ArrowButton = ({ disabled, onClick, className, type }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <IconButton onClick={onClick} disabled={disabled} color="primary">
        {type === 'prev' ? (
          <ArrowBackIosOutlined className={classes.arrow} />
        ) : (
          <ArrowForwardIosOutlined className={classes.arrow} />
        )}
      </IconButton>
    </div>
  );
};
