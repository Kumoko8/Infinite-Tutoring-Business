import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const pricingOptions = [
    {
        icon: <OnlinePredictionIcon />,
        title: 'Online Session',
        price: '$60/hour',
        description: 'Enjoy a 1-hour online session from the comfort of your home.',
    },
    {
        icon: <LocationOnIcon />,
        title: 'In-Person Session',
        price: '$70/hour',
        description: 'Attend a 1-hour in-person session at an agreed upon location.',
    },
];

export default function Pricing() {
    return (
        <Container  sx={{ py: { xs: 8, sm: 16 } }}>
            <Typography id="pricing" component="h2" variant="h4" color="text.primary" align="center" gutterBottom>
                Pricing
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: { xs: 2, sm: 4 } }}>
                Choose the option that best suits your needs:
            </Typography>
            <Grid container spacing={6} justifyContent="center">
                {pricingOptions.map((option, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                backgroundColor: 'background.paper',
                                borderColor: 'divider',
                                boxShadow: 3,
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                {option.icon}
                            </Box>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {option.title}
                            </Typography>
                            <Typography variant="h4" color="text.primary" gutterBottom>
                                {option.price}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                {option.description}
                            </Typography>
                            <Button variant="contained" color="primary">
                                Book Now
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
