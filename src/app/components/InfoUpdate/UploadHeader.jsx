import React from 'react'
import {
    Card,
    TextField,
    Grid,
    Avatar,
    Icon,
    IconButton
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { Formik } from 'formik'
import { H3, H4 } from 'app/components/Typography'
import { themeShadows } from 'app/components/MatxTheme/themeColors'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    height: 90,
    width: 90,
    boxShadow: themeShadows[8],
    [theme.breakpoints.down('md')]: {
        height: 80,
        width: 80,
    },
}))

const TitleBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px'
}))


export default function UploadMainContent({ handleClose }) {
    const handleSubmit = async (values) => {
        console.log(values)
    }

    return (
        <Grid container spacing={3} sx={{ marginTop: '-160px' }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TitleBox>
                    <H3 sx={{ color: '#fff' }}>
                        My Profile
                    </H3>
                    <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                        <Icon>close</Icon>
                    </IconButton>
                </TitleBox>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Card sx={{ p: 1 }}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <form
                                style={{ padding: '16px', background: '#ffffff' }}
                                onSubmit={handleSubmit}
                            >
                                <Grid container spacing={2}>
                                    {/* image */}
                                    <Grid item lg={2} md={2} sm={2} xs={12} display="flex" justifyContent="center" alignItems="center">
                                        <StyledAvatar
                                            src="/assets/images/faces/Andrew.png"
                                        />
                                    </Grid>
                                    {/* input boxes */}
                                    <Grid item lg={9} md={9} sm={9} xs={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Profile Name"
                                            defaultValue="Andrew Liu"
                                            fullWidth
                                        />
                                        <Box sx={{ p: 1 }} />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Job Title"
                                            defaultValue="Software Development Engineer"
                                            fullWidth
                                        />
                                    </Grid>
                                    {/* submit button */}
                                    <Grid item lg={1} md={1} sm={1} xs={12}
                                        display="flex"
                                        justifyContent="flex-end"
                                        alignItems="flex-end">
                                        <Fab size="small" color="secondary" aria-label="edit">
                                            <EditIcon />
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
    );
}
const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}
