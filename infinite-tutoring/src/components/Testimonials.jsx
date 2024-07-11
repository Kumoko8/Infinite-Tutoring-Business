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
        name: 'John Doe',
        testimonial:
            "This service has transformed my child's learning experience. The personalized approach is outstanding!",
        imageLight: 'url("/static/images/testimonials/testimonial1-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial1-dark.png")',
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Jane Smith',
        testimonial:
            'The storytelling method is highly engaging and helps my child remember concepts better.',
        imageLight: 'url("/static/images/testimonials/testimonial2-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial2-dark.png")',
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Alice Johnson',
        testimonial:
            'I have seen significant improvement in my child’s skills since we started using this service.',
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
        <Container id="testimonials" sx={{ py: { xs: 8, sm: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <div>
                        <Typography component="h2" variant="h4" color="text.primary">
                            Testimonials
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
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
                                component={Button}
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
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 0.5 }}
                                        >
                                            {testimonial}
                                        </Typography>
                                        {/* Add the Read More button when we get more time to add more info */}
                                        {/* <Button
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
                                        </Button> */}
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