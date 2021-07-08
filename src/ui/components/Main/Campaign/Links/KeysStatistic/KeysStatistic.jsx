import { useStyles } from './KeysStatistic.styles';

export const KeysStatistic = ({ keysStats }) => {
  const classes = useStyles();

  const { total, active, claimed, created, refunded } = keysStats;

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Links</h3>
      <div className={classes.wrapper}>
        <div className={classes.section}>
          <span className={classes.label}>Total</span>
          <span className={classes.value}>{total}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Active</span>
          <span className={classes.value}>{active}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Created</span>
          <span className={classes.value}>{created}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Claimed</span>
          <span className={classes.value}>{claimed}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Refunded</span>
          <span className={classes.value}>{refunded}</span>
        </div>
      </div>
    </div>
  );
};
