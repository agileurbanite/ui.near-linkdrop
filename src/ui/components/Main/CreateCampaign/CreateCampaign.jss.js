import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  body: {
    gridArea: 'b',
  },
};

export const useJss = makeStyles(styles, { name: 'CreateCampaign' });
