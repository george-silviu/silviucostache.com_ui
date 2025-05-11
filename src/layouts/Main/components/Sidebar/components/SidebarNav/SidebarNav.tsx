import { JSX } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import ThemeModeToggler from 'components/ThemeModeToggler';

interface Props {
  pages: {
    discoverMore: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { discoverMore } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 200, md: 200 }}
        >
          <Box
            component={'img'}
            src={mode === 'light' ? 'logo_w_bg.svg' : 'logo_b_bg.svg'}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Discover'} items={discoverMore} />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
