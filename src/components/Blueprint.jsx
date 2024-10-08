import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import demoImage from '../assets/demoForm.webp';
import kumoImage from '../assets/kumoTform.webp';
import compImage from '../assets/compForm.webp';

const items = [
    {
        icon: <RecommendOutlinedIcon />,
        title: 'Build Confidence',
        description:
            "Capitalize and reinforce your child's strengths to master areas of improvement",
        learnMore: "Each student gets a personalized progress chart with skills unique to their strengths and areas of growth. Students can choose or create their own character that grows along with them as they gain more experience points. Not only does it build intrinsic motivation, but also allows students to visualize their growth. ",
        imageLight: demoImage,
    },
    {
        icon: <AutoStoriesIcon />,
        title: 'Craft a Narrative',
        description:
            'Characters and narrative to make learning more memorable and engaging',
        learnMore: "Character narratives are formed organically depending on the content being taught. Students get the option of choosing one of Infinite Tutoring's original characters or creating their own. Students can choose colors, add gear, and watch them change as they master more skills! Once a character reaches its ultimate stage, students can choose another! ",
        imageLight: kumoImage,
    },
    {
        icon: <SwitchAccessShortcutAddIcon />,
        title: 'Develop Skills',
        description:
            'Grow new skills by connecting them with previously mastered skills',
        learnMore: "We believe that every complex concept is a combination of many simpler ones. We teach students to master the simpler building blocks, look for connections, and put them together one step at a time! We create and use our own original content, but also guide students through any existing content required of them!",
        imageLight: compImage,
    },
];

export default function Blueprint() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const [showLearnMore, setShowLearnMore] = React.useState(false);
    const [showLearnMoreArray, setShowLearnMoreArray] = React.useState(items.map(() => false));


    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const handleLearnMore = () => {
        setShowLearnMore(!showLearnMore);
    };

    const handleLearnMoreClick = (index) => {
        setShowLearnMoreArray((prev) =>
            prev.map((showLearnMore, i) => (i === index ? !showLearnMore : false))
        );
    };


    const selectedFeature = items[selectedItemIndex];

    return (
        <Container sx={{ py: { xs: 8, sm: 16 } }}>
            <Stack spacing={1} sx={{ mb: 10 }}>
                <Typography
                    fontSize="5em"
                    color="white"
                    fontFamily="Work Sans, Roboto, sans-serif"
                    textAlign="center"
                >
                    Your Adventure
                </Typography>
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
            </Stack>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6}>
                    <div id="blueprint">
                        <Typography component="h2" variant="h4" color="white" fontFamily='Work Sans, Roboto, sans-serif'>
                            Success Blueprint
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            Guided by evidence-based teaching techiques, refined curriculum development, and 7 years of teaching experience, students can expect to:
                        </Typography>
                    </div>
                    {/* For small screens */}
                    <Grid container item gap={4} sx={{ display: { sm: 'none' }, justifyContent: 'center' }}>
                        {items.map(({ title }, index) => (
                            <Chip
                                key={index}
                                label={title}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        }
                                        return selectedItemIndex === index ? 'primary.light' : '';
                                    },
                                    background: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'none' : '';
                                        }
                                        return selectedItemIndex === index ? 'none' : '';
                                    },
                                    backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                    '& .MuiChip-label': {
                                        color: selectedItemIndex === index ? '#fff' : '',
                                    },
                                }}
                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        variant="outlined"
                        sx={{
                            display: { sm: 'none' },
                            mt: 4,
                            backgroundColor: 'transparent'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${items[selectedItemIndex].imageLight})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                minHeight: 280,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Box sx={{ px: 2, pb: 2 }}>
                            <Typography color="white" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.primary" variant="body2" sx={{ my: 0.5 }}>
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color="#ffee33"
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
                                    handleLearnMore();

                                }}
                            >
                                <span>Learn more</span>
                                <ChevronRightRoundedIcon
                                    fontSize="small"
                                    sx={{ mt: '1px', ml: '2px' }}
                                />
                            </Link>
                            {
                                showLearnMore && (
                                    <Typography color="text.primary" variant="body1" sx={{ mt: 2 }}>
                                        {selectedFeature.learnMore}
                                    </Typography>
                                )
                            }
                        </Box>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
                    >
                        {items.map(({ icon, title, description, learnMore }, index) => (
                            <Card
                                key={index}
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'primary.light'
                                                : 'grey.200';
                                        }
                                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        alignItems: { md: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedItemIndex === index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <div>
                                        <Typography
                                            color="white"
                                            variant="body1"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            sx={{ my: 0.5, textTransform: 'lowercase' }}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="#ffee33"
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
                                                handleLearnMoreClick(index);
                                            }}
                                        >
                                            <span>Learn more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Link>
                                        {showLearnMoreArray[index] && (
                                            <Typography color="text.primary" variant="body3" sx={{ mt: 2 }}>
                                                {learnMore}
                                            </Typography>
                                        )}
                                    </div>
                                </Box>
                            </Card>
                        ))}
                    </Stack>

                </Grid>
                <Grid
                    item
                    sm={6}
                    md={6}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%', }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            pointerEvents: 'none',
                            backgroundColor: 'transparent'
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${items[selectedItemIndex].imageLight})`

                            }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}