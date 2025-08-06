import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import nasaLogo from '../assets/NASA.svg';

const StyledLogo = styled('img')(() => ({
  cursor: 'pointer',
  height: '34px',
  width: 'auto',
}));

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <StyledLogo src={nasaLogo} alt="NASA logo" onClick={() => navigate('/')} />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'NASA API Project '}
            &nbsp;
            {new Date().getFullYear()}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/JamesBonney"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
            target='_blank'
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/james-bonney-8a194a58/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
            target='_blank'
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
