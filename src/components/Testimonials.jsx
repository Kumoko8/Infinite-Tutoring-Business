import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import Link from '@mui/material/Link';


const testimonials = [
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Cathy (Austin, TX)',
        testimonial:
            "Jack really looks forward to his classes with Taylor - and Taylor is so tuned into Jack - teaching him great concepts and skills! I highly recommend Taylor as a teacher - he's reliable and fun to work with.",
        imageLight: 'url("/static/images/testimonials/testimonial1-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial1-dark.png")',
        additionalInfoText: "Cathy purchased drawing lessons as a gift for her grandson. Infinite tutoring taught him how to use basic 2D and 3D shapes in combination to draw complex organic and inorganic forms like cars and trees. "
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'David (Round Rock, TX)',
        testimonial:
            'Taylor is great at helping you towards specific goals and gearing those goals towards what you want rather than making you shape your goals around a curriculum.',
        imageLight: 'url("/static/images/testimonials/testimonial2-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial2-dark.png")',
        additionalInfoText: "David wanted to improve his drawing skills to make storyboards for skits. Infinite Tutoring began by teaching him the basic concepts of art including line, shape, form, movement, perspective, color, and value among others. We then began applying them by drawing different characters in different poses. "
    },
    {
        icon: <FormatQuoteRoundedIcon />,
        name: 'Mia (Omaha, NE)',
        testimonial:
            'Wow, Taylor is such an amazing tutor, but an even better person. He truly cares about helping and guiding his students throughout the entire process. He always provided insightful feedback, and I will definitely be reaching out to him for any further assistance! 10/10 recommend!!!',
        imageLight: 'url("/static/images/testimonials/testimonial3-light.png")',
        imageDark: 'url("/static/images/testimonials/testimonial3-dark.png")',
        additionalInfoText: "Mia wanted to adapt her book into a school curriculum. Infinite Tutoring helped edit and improve the middle/high school lesson plans she had by giving them structure, more aligned content, and connecting them to ELA standards. We also mapped out the flow and timetable of each lesson plan, and created student exemplars."
    },
];

export default function Testimonials() {
    const [selectedTestimonialIndex, setSelectedTestimonialIndex] = React.useState(0);
    const [expandedTestimonialIndex, setExpandedTestimonialIndex] = React.useState(null);

    const handleTestimonialClick = (index) => {
        setSelectedTestimonialIndex(index);
    };

    const handleReadMoreClick = (index) => {
        setExpandedTestimonialIndex(expandedTestimonialIndex === index ? null : index);
    };

    const selectedTestimonial = testimonials[selectedTestimonialIndex];
    const expandedTestimonial = testimonials[expandedTestimonialIndex];

    return (
        <Container  sx={{ py: { xs: 8, sm: 16 }, maxWidth: '85%' }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <div id="testimonials">
                        <Typography component="h2" variant="h4" color="white" fontFamily='Work Sans, Roboto, sans-serif'>
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
                                                handleReadMoreClick(index);
                                            }}
                                        >
                                            <span>Read more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Button>
                                        {expandedTestimonialIndex === index && (
                                            <Box sx={{ mt: 2, p: 2, border: '1px solid', borderColor: 'grey.300' }}>
                                                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                                                    {expandedTestimonial.additionalInfoText}
                                                </Typography>
                                            </Box>
                                        )}
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
