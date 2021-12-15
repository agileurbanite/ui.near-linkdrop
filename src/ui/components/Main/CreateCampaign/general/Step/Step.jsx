import { useJss } from './Step.jss';

export const Step = ({ step }) => {
  const jss = useJss();
  return <div className={jss.container}>Step: {step}</div>;
};
