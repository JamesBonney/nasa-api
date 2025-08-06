import type { FC } from 'react';
import TablePagination from '../Pagination';
import { useMRPContext } from './MRPContext';

export const Pagination: FC = () => {
  const { page, pages, onChangePage } = useMRPContext();
  return (
    <TablePagination page={page} pages={pages} onChange={onChangePage} />
  );
};

export default Pagination;