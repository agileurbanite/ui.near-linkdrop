import { IconButton, Tooltip } from '@material-ui/core';
import { FileCopyOutlined } from '@material-ui/icons';

export const CopyToClipboard = ({ value, classNames }) => {
  const onClick = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <IconButton onClick={onClick} className={classNames?.iconButton}>
      <Tooltip title="Copy to clipboard" placement="top">
        <FileCopyOutlined className={classNames?.icon} />
      </Tooltip>
    </IconButton>
  );
};
