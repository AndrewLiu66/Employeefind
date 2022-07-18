import React from 'react'
import Slide from '@mui/material/Slide';
import { IconButton } from '@mui/material'
import { H4 } from 'app/components/Typography'
import {
    Card,
    TextField,
    Grid,
    Button,
} from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Formik, Form, FieldArray } from 'formik'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
const FlexBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const StyledInput = styled(TextField)(() => ({
    marginBottom: '6px'
}))


const IMG = styled('img')(() => ({
    borderRadius: '4px',
    width: '70px',
    height: '70px',
    // objectFit: 'cover',
}))
const CardContainer = styled(Card)(() => ({
    marginTop: '20px'
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

export default function UploadExperience({ ChunkTitle, data }) {
    const { palette } = useTheme()
    const textError = palette.error.main
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }
    return (
        <CardContainer sx={{ p: 1 }}>
            <FlexBox sx={{ mb: 1 }}>
                <H4 sx={{ ml: 1 }}>{ChunkTitle}</H4>
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
                <Formik
                    initialValues={{ friends: data }}
                    onSubmit={values =>
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 500)
                    }
                    render={({ values, handleChange }) => (
                        <Form>
                            <FieldArray
                                name="friends"
                                render={arrayHelpers => (
                                    <Grid container spacing={5} sx={{ p: 1 }}>
                                        {values.friends && values.friends.length > 0 ? (
                                            values.friends.map((item, index) => (
                                                <Grid item lg={12} md={12} sm={12} xs={12} key={index}>
                                                    <Grid container key={index} spacing={2}>
                                                        <Grid item lg={2} md={2} sm={4} xs={12} display="flex" alignItem="center" justifyContent="center">
                                                            <IMG
                                                                src={item.img}
                                                                alt="temp"
                                                            />
                                                        </Grid>
                                                        <Grid item lg={9} md={9} sm={7} xs={12}>
                                                            <Grid container spacing={1}>
                                                                <Grid item lg={6} md={6} sm={7} xs={12}>
                                                                    <StyledInput
                                                                        required
                                                                        id="outlined-required"
                                                                        label="Profile Name"
                                                                        defaultValue=""
                                                                        value={item.title}
                                                                        fullWidth
                                                                        onChange={handleChange}
                                                                    />
                                                                </Grid>

                                                                <Grid item lg={6} md={6} sm={7} xs={12}>
                                                                    <StyledInput
                                                                        required
                                                                        id="outlined-required"
                                                                        label="date"
                                                                        defaultValue="May.2020 - Sep.2021"
                                                                        fullWidth
                                                                        onChange={handleChange}
                                                                    />
                                                                </Grid>
                                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        required
                                                                        id="outlined-required"
                                                                        label="Description"
                                                                        defaultValue={item.description}
                                                                        rows={3}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={handleChange}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item lg={1} md={1} sm={1} xs={12}
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}
                                                        >
                                                            <IconButton
                                                                sx={{
                                                                    color: textError,
                                                                    p: 0
                                                                }}
                                                                size="small"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >
                                                                <RemoveCircleIcon />
                                                            </IconButton>

                                                            <IconButton
                                                                sx={{
                                                                    color: '#3576CB',
                                                                }}
                                                                size="small"
                                                                onClick={() => arrayHelpers.insert(index, '')}
                                                            >
                                                                <AddCircleIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        ) : (
                                                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex' }}>
                                                    <Button
                                                        sx={{ backgroundColor: '#3576CB', color: 'white' }}
                                                        variant="contained"
                                                        type="submit"
                                                        onClick={() => arrayHelpers.push('')}
                                                    >
                                                        Add a Project
                                                    </Button>
                                                </Grid>
                                            )}

                                        {/* toggle save button */}
                                        { values.friends && values.friends.length > 0 &&
                                            <Grid item lg={12} md={12} sm={12} xs={12} display='flex' justifyContent='flex-end'>
                                                <Fab size="small" color="secondary" aria-label="edit">
                                                    <EditIcon />
                                                </Fab>
                                            </Grid>
                                        }
                                    </Grid>
                                )}
                            />
                        </Form>
                    )}
                />
            </Collapse>
        </ CardContainer>
    );
}
