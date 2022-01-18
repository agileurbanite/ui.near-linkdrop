import { useJss } from './StepIndicator.jss';

export const StepIndicator = ({ step, total, title }) => {
  const jss = useJss();
  return (
    <div className={jss.container}>
      <p>{title}</p>
      <p>
        {step} of {total}
      </p>
    </div>
  );
};
