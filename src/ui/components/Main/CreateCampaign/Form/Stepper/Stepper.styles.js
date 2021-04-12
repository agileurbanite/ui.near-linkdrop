import { makeStyles } from '@material-ui/core';

const isSecondStep = (yes, no) => ({ activeStep }) => (activeStep === 2 ? yes : no);

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: ' column',
    alignItems: 'center',
  },
  topbar: {
    width: 680,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b'
    `,
    marginTop: 24,
  },
  step1: {
    gridArea: 'a',
    justifySelf: 'start',
  },
  connectorContainer: {
    gridArea: '1 / 1 / 2 / 3',
    justifySelf: 'center',
    height: 48,
    width: 'calc(100% - 2 * (140px - 36px))',
    display: 'flex',
    alignItems: 'center',
  },
  connector: {
    width: '100%',
    backgroundColor: isSecondStep(theme.palette.primary.main, theme.colors.dividerOnWhite),
  },
  step2: {
    gridArea: 'b',
    justifySelf: 'end',
  },
});

export const useStyles = makeStyles(styles, { name: 'Stepper' });
