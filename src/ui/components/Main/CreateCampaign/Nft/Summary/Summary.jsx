import { useJss } from './Summary.jss';

export const Summary = () => {
  const jss = useJss();
  return <div className={jss.container}>Summary</div>;
};
