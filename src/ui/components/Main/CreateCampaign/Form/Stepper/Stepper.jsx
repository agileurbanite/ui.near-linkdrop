import { Info, Assignment } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import { Step } from './Step/Step';
import { useStyles } from './Stepper.styles';

export const Stepper = ({ children, activeStep }) => {
  const classes = useStyles({ activeStep });

  const _children = children.filter((_, index) => index + 1 === activeStep);
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Step
          icon={Info}
          className={classes.step1}
          label="Campaign Details"
          sublabel="Step 1"
          isActive={activeStep === 1}
          isCompleted={activeStep > 1}
        />
        <div className={classes.connectorContainer}>
          <Divider className={classes.connector} />
        </div>
        <Step
          icon={Assignment}
          className={classes.step2}
          label="Summary"
          sublabel="Step 2"
          isActive={activeStep === 2}
          isCompleted={activeStep > 2}
        />
      </div>
      {_children}
    </div>
  );
};
