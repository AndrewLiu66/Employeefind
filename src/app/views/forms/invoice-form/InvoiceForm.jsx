import { Formik } from 'formik'
import { Grid, Card } from '@mui/material'
import { H4 } from 'app/components/Typography'
import { styled, Box } from '@mui/system'
import { TextField, MenuItem, Divider, Button, IconButton } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import PickDate from '@mui/lab/DatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import React, { Fragment } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const InvoiceRoot = styled('div')(() => ({
    marginBottom: '15px',
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

const StyledInput = styled(TextField)(({ theme }) => ({
    minWidth: '250px !important',
    '& label': {
        fontSize: '14px',
    },
    '& label.MuiInputLabel-shrink': {
        marginTop: '0px',
    },
    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-input': {
            fontSize: '14px',
            padding: '10px 14px !important',
        },
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '0px !important',
    },
}))

const DatePicker = styled(PickDate)(() => ({
    margin: '8px !important',
    '& label': { fontSize: '14px' },
    '& .MuiOutlinedInput-input': {
        fontSize: '14px',
        padding: '10px 14px !important',
    },
    '& button': { padding: '6px' },
}))

const FlexBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const InvoiceForm = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    return (
        <Fragment>
            <InvoiceRoot>
                <Card elevation={3}>
                    <Box p={1} sx={{ px: 2 }} display="flex" alignItems="center">
                        <H4 sx={{ m: 0 }}>Filter</H4>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Box>
                    {expanded && <Divider sx={{ mb: 1 }} />}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            enableReinitialize={true}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setSubmitting,
                                setFieldValue,
                            }) => (
                                <form
                                    style={{ padding: '16px' }}
                                    onSubmit={handleSubmit}
                                >
                                    <Grid container spacing={3} alignItems="center">
                                        {/* job field input */}
                                        <Grid item md={2} sm={4} xs={12}>
                                            Job field
                                        </Grid>
                                        <Grid item md={10} sm={8} xs={12}>
                                            <StyledInput
                                                select
                                                id="inputField"
                                                label="field name"
                                                name="customerName"
                                                size="small"
                                                variant="outlined"
                                                value={values.customerName || ''}
                                                onChange={handleChange}
                                            >
                                                {jobField.map((item, ind) => (
                                                    <MenuItem value={item} key={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </StyledInput>
                                        </Grid>

                                        {/* job title input */}
                                        <Grid item md={2} sm={4} xs={12}>
                                            Job title
                                        </Grid>
                                        <Grid item md={10} sm={8} xs={12}>
                                            <StyledInput
                                                select
                                                id="inputField"
                                                label="title name"
                                                name="titleName"
                                                size="small"
                                                variant="outlined"
                                                value={values.titleName || ''}
                                                onChange={handleChange}
                                            >
                                                {titleList.map((item, ind) => (
                                                    <MenuItem value={item} key={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </StyledInput>
                                        </Grid>

                                        {/* Availible Date */}
                                        <Grid item md={2} sm={4} xs={12}>
                                            Availible Date
                                        </Grid>

                                        <Grid item md={10} sm={8} xs={12}>
                                            {/* Date Picker */}
                                            <LocalizationProvider
                                                dateAdapter={AdapterDateFns}
                                            >
                                                <DatePicker
                                                    value={values.invoiceDate}
                                                    inputFormat="MMMM dd, yyyy"
                                                    onChange={(date) =>
                                                        setFieldValue(
                                                            'invoiceDate',
                                                            date
                                                        )
                                                    }
                                                    renderInput={(props) => (
                                                        <StyledInput
                                                            {...props}
                                                            variant="outlined"
                                                            label="Starting Date"
                                                            sx={{
                                                                m: '8px !important',
                                                                ml: '0px !important'
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>

                                            {/* Range Picker */}
                                            <StyledInput
                                                sx={{ m: '8px !important' }}
                                                label="availible range"
                                                name="range"
                                                size="small"
                                                variant="outlined"
                                                value={values.range || ''}
                                                onChange={handleChange}
                                                select
                                            >
                                                {dateRangeList.map(
                                                    (item, index) => (
                                                        <MenuItem
                                                            value={item}
                                                            key={item}
                                                        >
                                                            {item}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </StyledInput>
                                        </Grid>
                                        {/* degree selector */}
                                        <Grid item md={2} sm={4} xs={12}>
                                            Degree
                                        </Grid>
                                        <Grid item md={10} sm={8} xs={12}>
                                            <StyledInput
                                                size="small"
                                                variant="outlined"
                                                name="degree"
                                                label="degree"
                                                value={values.degree || ''}
                                                onChange={handleChange}
                                                select
                                            >
                                                {degreeOption.map((item, ind) => (
                                                    <MenuItem value={item} key={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </StyledInput>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                    </Grid>

                                    {/* update button */}
                                    <FlexBox sx={{ mt: 3 }}>
                                        <div></div>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                        >
                                            Update
                                        </Button>
                                    </FlexBox>
                                </form>
                            )}
                        </Formik>
                    </Collapse>
                </Card>
            </InvoiceRoot>
        </Fragment>
    )
}

const dateRangeList = [
    '2 months',
    '3 months',
    '6 months',
    '1 year',
    '>1 year'
]

const jobField = [
    'IT',
]
const degreeOption = [
    'High school',
    'Undergraduate',
    'Graduate',
    'PhD',
    'Other',
]
const titleList = [
    'Software Development Engineer',
    'Front-end Developer',
    'Back-end Developer',
]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}
export default InvoiceForm
