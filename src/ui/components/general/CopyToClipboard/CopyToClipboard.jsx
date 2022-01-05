import { IconButton, Tooltip } from '@material-ui/core';
import { FileCopyOutlined } from '@material-ui/icons';

export const CopyToClipboard = ({ value, classNames }) => {
  const onClick = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <IconButton onClick={onClick} className={classNames?.copyButton}>
      <Tooltip title="Copy to clipboard" placement="top" classes={{ tooltip: classNames?.tooltip }}>
        <FileCopyOutlined className={classNames?.icon} />
      </Tooltip>
    </IconButton>
  );
};
