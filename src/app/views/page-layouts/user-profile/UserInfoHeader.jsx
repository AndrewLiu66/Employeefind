import react, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { H3, H4, H5, Span } from 'app/components/Typography'
import {
    Card,
    Grid,
    Avatar,
    IconButton,
    Icon,
} from '@mui/material'
const StyledSpan = styled(Span)(({ theme }) => ({
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
}))

const StyledCard = styled(Card)(({ theme }) => ({
    height: 96,
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, 0.15)',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
        marginTop: '5px'
    },
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    height: 90,
    width: 90,
    [theme.breakpoints.down('md')]: {
        height: 80,
        width: 80,
    },
}))

const AvatarBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative'
}))

const Blue = styled(Box)(({ theme }) => ({
    minHeight: '330px',
    paddingTop: '30px !important',
    background: '#3576CB',
    [theme.breakpoints.down('md')]: {
        minHeight: '450px',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '550px',
        padding: '35px'
    },
}))

const HiddenInput = styled('input')(() => ({
    display: 'none',
}))

export default function UserInfoHeader({ handleClose }) {

    return (
        <Blue sx={{ px: 8, py: 6 }}>
            <Grid container spacing={3}>
                <Grid item lg={11} md={11} sm={11} xs={11}>
                </Grid>

                <Grid item lg={1} md={1} sm={1} xs={1} sx={{ marginBottom: '-15px' }}>
                    <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                        <Icon>close</Icon>
                    </IconButton>
                </Grid>

                {/* header content - regular */}
                <Grid item lg={2} md={2} sm={12} xs={12}>
                    <AvatarBox>
                        <StyledAvatar
                            sx={{
                                mb: '15px'
                            }}
                            src="/assets/images/faces/Andrew.png"
                        />
                        <H4 sx={{ color: '#fff' }}>
                            Andrew Liu
                        </H4>
                    </AvatarBox>
                </Grid>


                {TopContent.map((item) => (
                    <Grid
                        item
                        lg={5}
                        md={5}
                        sm={6}
                        xs={12}
                        key={item.title}
                    >
                        <StyledCard>
                            <div>
                                <StyledSpan
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.54)',
                                    }}
                                >
                                    {item.title}
                                </StyledSpan>
                                <H5
                                    sx={{
                                        color: '#fff',
                                        paddingTop: 1,
                                        fontWeight: 'normal',
                                    }}
                                >
                                    {item.amount}
                                </H5>
                            </div>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Blue>
    );
}

const TopContent = [
    {
        title: 'Currently Looking For: ',
        amount: 'Software Development Engineer',
    },
    {
        title: 'Project Completed',
        amount: 15,
    }
]
