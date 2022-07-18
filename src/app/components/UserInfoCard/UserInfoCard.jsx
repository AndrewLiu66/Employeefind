import React from 'react'
import { styled, Box } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { H5, Paragraph } from 'app/components/Typography'
import { Card, Button, Avatar, Divider, IconButton } from '@mui/material'
import { convertHexToRGB } from 'app/utils/utils'
import UserProfile from 'app/views/page-layouts/user-profile/UserProfile'
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledP = styled(Paragraph)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

const ContentBox = styled(Box)(() => ({
    padding: '20px',
    margin: '-8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
}))
const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'space-between',
}))

const StyledButton = styled(Button)(({ theme }) => ({
    paddingLeft: '20px',
    paddingRight: '20px',
    transition: 'all 250ms',
    color: theme.palette.primary.main,
    background: `rgba(${convertHexToRGB(theme.palette.primary.main)}, 0.15)`,
    '&:hover': {
        color: '#ffffff',
        fallbacks: [{ color: 'white !important' }],
        background: `${theme.palette.primary.main} !important`,
        backgroundColor: `${theme.palette.primary.main} !important`,
    },
}))

const StyledIonButton = styled(IconButton)(() => ({
    width: '32px',
    height: '32px',
    '& svg': { fontSize: '14px' },
}))
const FacebookButton = styled(StyledIonButton)(() => ({
    color: '#3765c9',
    backgroundColor: 'rgba(55,101,201,.1)',
    borderColor: '#3765c9',
    '&:hover': {
        background: `#3765c9`,
        color: '#ffffff',
    },
}))

const LinkedInButton = styled(StyledIonButton)(() => ({
    color: '#039ff5',
    '& svg': { fontSize: '19px' },
    backgroundColor: 'rgba(3,159,245,.1)',
    borderColor: '#039ff5',
    '&:hover': {
        background: `#039ff5`,
        color: '#ffffff',
    },
}))

const PortfolioButton = styled(StyledIonButton)(() => ({
    color: '#ec412c',
    backgroundColor: 'rgba(236,65,44,.1)',
    borderColor: '#ec412c',
    '&:hover': {
        background: `#ec412c`,
        color: '#ffffff',
    },
}))

const UserInfoCard = ({ user }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card>
            <JustifyBox p="20px" m={-1} flexWrap="wrap">
                <FlexBox m={1}>
                    <Avatar
                        src={user.imgUrl}
                        sx={{ width: 48, height: 48 }}
                    />
                    <Box ml={2}>
                        <H5>{user.name}</H5>
                        <StyledP
                            sx={{
                                mt: 1,
                                fontWeight: 'normal',
                                textTransform: 'capitalize',
                            }}
                        >
                            {user.company?.toLowerCase()}
                        </StyledP>
                    </Box>
                </FlexBox>
                <FlexBox m={1}>
                    <a href="https://www.linkedin.com/in/andrew-liu-6a4980192/" target="_blank">
                        <LinkedInButton>
                            <LinkedInIcon sx={{ fontSize: '28px' }} />
                        </LinkedInButton>
                    </a>
                    <a href="https://www.instagram.com/zhao_yu_liu/" target="_blank">
                        <FacebookButton sx={{ mx: '5px' }}>
                            <InstagramIcon />
                        </FacebookButton>
                    </a>
                    <a href="https://andrew-liu.co/" target="_blank">
                        <PortfolioButton>
                            <LanguageIcon />
                        </PortfolioButton>
                    </a>
                </FlexBox>
            </JustifyBox>
            <Divider />
            <ContentBox>
                <Box m={1} mr={3} maxWidth={220} flexGrow={1}>
                    <JustifyBox>
                        <StyledP sx={{ fontWeight: '500' }}>
                            Viewed by:
                        </StyledP>
                        <StyledP>100 people</StyledP>
                    </JustifyBox>
                </Box>
                <Box m={1} display="flex">
                    <StyledButton
                        size="small"
                        sx={{ mr: '4px' }}
                    >
                        CHAT
                    </StyledButton>
                    <StyledButton size="small" onClick={handleClickOpen}>
                        PROFILE
                    </StyledButton>
                    <UserProfile handleClose={handleClose} open={open} />
                </Box>
            </ContentBox>
        </Card>
    )
}

export default UserInfoCard
