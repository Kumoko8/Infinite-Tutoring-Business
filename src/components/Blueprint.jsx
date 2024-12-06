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
import ChooseCharacter from '../assets/Choose_Character.png';
import DevelopSkills from '../assets/Develop_Skills.png';
import BuildConfidence from '../assets/Build_Confidence.png';


const items = [

    {
        icon: <AutoStoriesIcon />,
        title: 'Choose Your Character',
        description:
            'Stories make learning more memorable and engaging',
        learnMore: "Take ownership of your learning and choose from our team of original characters; watch them grow as you develop your skills! ",
        imageLight: ChooseCharacter,
    },
    {
        icon: <SwitchAccessShortcutAddIcon />,
        title: 'Develop Skills',
        description:
            'Grow new skills by connecting them with previously mastered skills',
        learnMore: "My curriculum is aligned with TEKS/Common Core, but executed in a creative and enaging way with original material. I believe that every complex concept is a combination of many simpler ones. I teach students to master the components, look for connections, and create solutions!",
        imageLight: DevelopSkills,
    },
    {
        icon: <RecommendOutlinedIcon />,
        title: 'Build Confidence',
        description:
            "Capitalize and reinforce your child's strengths to master areas of improvement",
        learnMore: "As students master more skills they gain more experience points for their character and uncover more of their individual journey. All of their progress is captured in a personalized format that inspires more growth. ",
        imageLight: BuildConfidence,
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

            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6}>
                    <div id="blueprint">
                        <Typography component="h2" variant="h4" color="white" fontFamily='Work Sans, Roboto, sans-serif'>
                           How I Teach
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            Guided by evidence-based teaching techiques, refined curriculum development, and 7 years of teaching experience
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
                                            <Typography color="text.primary" variant="body3" sx={{ mt: 2, textTransform: 'lowercase' }}>
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