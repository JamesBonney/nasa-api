import { createContext, useContext } from 'react';

export interface MRPContextState {
  page: number,
  pages: number,
  onChangePage: () => void;
}

export const mrpContextDefaults: MRPContextState = {
  page: 1,
  pages: 1,
  onChangePage: () => null,
};

export const MRPContext = createContext(mrpContextDefaults);

export const useMRPContext = () => useContext(MRPContext);
