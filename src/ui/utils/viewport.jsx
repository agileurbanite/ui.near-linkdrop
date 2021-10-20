import { useState, useEffect, useContext, createContext } from 'react';
import { mobileMaxWidth } from '../config/constants';

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [isMobileView, setMobileView] = useState(window.innerWidth < mobileMaxWidth);

  const handleWindowResize = () => {
    setMobileView(window.innerWidth < mobileMaxWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return <viewportContext.Provider value={{ isMobileView }}>{children}</viewportContext.Provider>;
};

export const useViewport = () => {
  const { isMobileView } = useContext(viewportContext);
  return { isMobileView };
};
