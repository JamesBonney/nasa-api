import type { FC, PropsWithChildren } from 'react';
import { MRPContext } from './MRPContext';
import type { MRPContextState } from './MRPContext';

export const MRPProvider: FC<PropsWithChildren> = ({ children }) => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  const apiUrl = import.meta.env.VITE_NASA_API_URL || 'https://api.nasa.gov';

  const value: MRPContextState = {
    page: 1,
    pages: 1,
    onChangePage: () => null,
  };
  
  return <MRPContext.Provider value={value}>{children}</MRPContext.Provider>
};
