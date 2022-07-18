
import * as React from 'react';
import { Box, styled } from '@mui/system'
import { Card, Grid, IconButton } from '@mui/material'
import { H4, H5, H6, Paragraph } from 'app/components/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

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

const IMG = styled('img')(() => ({
    marginBottom: 32,
    width: '60px',
    height: '60px'
}))

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const ContentBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column'
}))
export default function UserMainContent({ ContentData }) {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ p: 2, marginTop: '20px' }}>
            <FlexBox>
                <H4>Experience</H4>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </FlexBox>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {ContentData.map((content, index) => (
                            <Grid key={index} container spacing={3} sx={{ mb: 2 }}>
                                <Grid item lg={2} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                    <IMG src={content.img} alt="company" />
                                </Grid>
                                <Grid item lg={10} md={12} sm={12} xs={12}>
                                    <ContentBox>
                                        <H5 sx={{ mb: 1 }}>{content.title}</H5>
                                        {content.date && <H6>{content.date}</H6>}
                                        <Paragraph>{content.paragraph}</Paragraph>
                                    </ContentBox>
                                </Grid>
                            </Grid>
                        ))}
                    </Collapse>
                </Grid>
            </Grid>
        </Card>
    );
}
