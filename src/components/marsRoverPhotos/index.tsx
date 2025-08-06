import type { FC } from 'react';
import { MRPProvider } from './MRPProvider';
import Header from '../Header';
import Pagination from './Pagination';

export const MarsRoverPhotos: FC = () => {

  return (
    <MRPProvider>
      <Header header="Mars Rover Photos">Some description about Mars Rover Photos</Header>
      <div>Controls/Filters</div>
      <div>Table</div>
      <Pagination />
    </MRPProvider>
  );
};

export default MarsRoverPhotos;