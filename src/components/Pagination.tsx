import type { ChangeEvent, FC } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
  page: number;
  pages: number;
}

const PaginationRounded: FC<Props> = ({
  onChange,
  page = 1,
  pages = 1
}) => {

  return (
    <Stack spacing={2}>
      <Pagination count={pages} shape="rounded" page={page} onChange={onChange} />
    </Stack>
  );
};

export default PaginationRounded;
