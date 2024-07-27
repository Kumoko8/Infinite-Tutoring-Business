import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #ffee58, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'Work Sans, Roboto, sans-serif',
              color: '#ffee33'
            }}
          >

            <Typography
              component="span"
              variant="h1"
              sx={{
                color:'rgb(255, 0, 181)',
                fontFamily: 'Work Sans, Roboto, sans-serif',
                fontWeight: 600,
              }}
            >
              {/* change font here */}
              Infinite Tutoring
            </Typography>
          </Typography>
          <Typography variant="h4" textAlign="center" color="black">
            Experience progressive results with individualized, dynamic lessons <br />

          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
          
            <Button href="https://share.hsforms.com/1WzGOknO5TPGrVEhr2LzRKQqfs72"variant="contained" color="primary">
              
              Schedule a Session
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Schedule a Session&quot; you agree to our&nbsp;
            <Link href="/terms" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
       
      </Container>
    </Box>
  );
}