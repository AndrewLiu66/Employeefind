import * as React from 'react';
import {
    IconButton, Grid
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { H4, H5 } from 'app/components/Typography'
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Card from "@mui/material/Card";
import { themeShadows } from 'app/components/MatxTheme/themeColors'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    paddingBottom: '0px'
}))

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProjectBox = styled(Box)(() => ({
    height: '280px',
    display: 'flex',
    overflowX: 'scroll',
}))

const StyledCard = styled(Card)(() => ({
    minWidth: '250px',
    margin: '10px',
    Height: '240px',
    boxShadow: 'none !important'
}))

export default function ProjectContent() {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ p: 2 }}  >
            <FlexBox >
                <H4>Project</H4>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </FlexBox>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ProjectBox>
                    {projectList.map((project) => (
                        <StyledCard key={project.title}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140px"
                                image={project.img}
                            />
                            <FlexBox>
                                <H5 >
                                    {project.title}
                                </H5>
                                <a href="https://andrew-liu.co/" target="_blank">
                                    <IconButton aria-label="share" size="small">
                                        <ShareIcon />
                                    </IconButton>
                                </a>
                            </FlexBox>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    padding: '15px',
                                    pt: 0,
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    boxShadow: themeShadows[4],
                                }}

                            >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </StyledCard>
                    ))}
                </ProjectBox>
            </Collapse>
        </Card >
    );
}


const projectList = [
    {
        title: 'Portfolio',
        img: '/assets/images/illustrations/project1.png'
    },
    {
        title: 'Design',
        img: '/assets/images/illustrations/project2.png'
    },
    {
        title: 'Data Visualization',
        img: '/assets/images/illustrations/project3.png'
    },
    {
        title: 'Culture',
        img: '/assets/images/illustrations/project4.png'
    },
]
