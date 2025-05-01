import { JSX } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const linkColor = mode === 'dark' ? 'white' : 'black';
  const hoverColor = mode === 'dark' ? 'white' : 'black';

  return (
    <Button
      variant="text"
      component="a"
      size="large"
      href={href}
      sx={{
        color: linkColor,
        '&:hover': {
          color: hoverColor,
          backgroundColor: '#10B981',
        },
      }}
    >
      {title}
    </Button>
  );
};

export default NavItem;
