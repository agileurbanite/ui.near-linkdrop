import * as React from 'react';

export const viewportContext = React.createContext({});

export const mobileMaxWidth = 800;

export const ViewportProvider = ({ children }) => {
  const [isMobileView, setMobileView] = React.useState(window.innerWidth < mobileMaxWidth);

  const handleWindowResize = () => {
    setMobileView(window.innerWidth < mobileMaxWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return <viewportContext.Provider value={{ isMobileView }}>{children}</viewportContext.Provider>;
};

export const useViewport = () => {
  const { isMobileView } = React.useContext(viewportContext);
  return { isMobileView };
};
