import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Headlines =() => {


    return (
        
        <Stack spacing={1} sx={{ mb: 10 }}>
                
                <Typography
                    fontSize="5em"
                    color="white"
                    fontFamily="Work Sans, Roboto, sans-serif"
                    textAlign="center"
                    >
                    Your Skills
                </Typography>
                <Typography
                    fontSize="5em"
                    color="white"
                    fontFamily="Work Sans, Roboto, sans-serif"
                    textAlign="center"
                    >
                    Your Success
                </Typography>
                <Typography
                    fontSize="5em"
                    color="white"
                    fontFamily="Work Sans, Roboto, sans-serif"
                    textAlign="center"
                    >
                    Your Adventure
                </Typography>
            </Stack>
                )
            };

export default Headlines;