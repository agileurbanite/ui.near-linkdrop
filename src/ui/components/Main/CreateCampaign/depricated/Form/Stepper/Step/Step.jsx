import cn from 'classnames';
import { useStyles } from './Step.styles';

export const Step = ({ className, icon, label, sublabel, isActive, isCompleted }) => {
  const classes = useStyles({ isActive, isCompleted });
  const Icon = icon;
  return (
    <div className={cn(classes.step, className)}>
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
      <span className={classes.label}>{label}</span>
      <span className={classes.sublabel}>{sublabel}</span>
    </div>
  );
};
