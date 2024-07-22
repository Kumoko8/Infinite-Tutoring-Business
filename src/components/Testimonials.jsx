import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RecommendIcon from '@mui/icons-material/Recommend';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const testimonials = [
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Cathy (Austin, TX)',
        testimonial:
            "Jack really looks forward to his classes with Taylor - and Taylor is so tuned into Jack - teaching him great concepts and skills! I highly recommend Taylor as a teacher - he's reliable and fun to work with.",
        imageLight: 'url("/static/images/testimonials/testimonial1-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial1-dark.png")',
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'David (Round Rock, TX)',
        testimonial:
            'Taylor is great at helping you towards specific goals and gearing those goals towards what you want rather than making you shape your goals around a curriculum.',
        imageLight: 'url("/static/images/testimonials/testimonial2-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial2-dark.png")',
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Mia (Omaha, NE)',
        testimonial:
            'Wow, Taylor is such an amazing tutor, but an even better person. He truly cares about helping and guiding his students throughout the entire process. He always provided insightful feedback, and I will definitely be reaching out to him for any further assistance! 10/10 recommend!!!',
        imageLight: 'url("/static/images/testimonials/testimonial3-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial3-dark.png")',
    },
];

export default function Testimonials() {
    const [selectedTestimonialIndex, setSelectedTestimonialIndex] = React.useState(0);

    const handleTestimonialClick = (index) => {
        setSelectedTestimonialIndex(index);
    };

    const selectedTestimonial = testimonials[selectedTestimonialIndex];

    return (
        <Container  sx={{ py: { xs: 8, sm: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <div id="testimonials">
                        <Typography component="h2" variant="h4" color="text.primary">
                            Testimonials
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            Hear what parents are saying about our service:
                        </Typography>
                    </div>
                    {/* testimonials won't be in stack in xsmall screen */}
                    <Stack
                        direction="column"
                        justifyContent="center"
                        // alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { sm: 'flex', md: 'flex' } }}
                    >
                        {testimonials.map(({ icon, name, testimonial }, index) => (
                            <Card
                                key={index}
                                onClick={() => handleTestimonialClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedTestimonialIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedTestimonialIndex === index
                                                ? 'primary.light'
                                                : 'grey.200';
                                        }
                                        return selectedTestimonialIndex === index ? 'primary.dark' : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: { md: 'row'},
                                        alignItems: { lg: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    {/* changes quotes upon click */}
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedTestimonialIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedTestimonialIndex === index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <div>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            sx={{ my: 0.5 }}
                                        >
                                            {testimonial}
                                        </Typography>
                                        {/* Add the Read More button when we get more time to add more info */}
                                        <Button
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <span>Read more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Button>
                                    </div>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
