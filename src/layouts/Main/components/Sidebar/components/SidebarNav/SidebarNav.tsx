import { JSX } from 'react';
import Box from '@mui/material/Box';
import NavItem from './components/NavItem';

interface Props {
  pages: Array<PageItem>;
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  return (
    <Box
      paddingTop={5}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {pages.map((page) => (
        <NavItem title={page.title} href={page.href} />
      ))}
    </Box>
  );
};

export default SidebarNav;
