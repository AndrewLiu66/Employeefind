import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import { styled, Box } from '@mui/system'
import { Span } from '../../../components/Typography'
import { themeShadows } from 'app/components/MatxTheme/themeColors'
import Brand from 'app/components/Brand/Brand'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    Hidden,
} from '@mui/material'
import { topBarHeight } from 'app/utils/constant'
import MatxMenu from 'app/components/MatxMenu/MatxMenu'
import MatxSearchBox from 'app/components/MatxSearchBox/MatxSearchBox'
import { NotificationProvider } from 'app/contexts/NotificationContext'
import NotificationBar from '../../NotificationBar/NotificationBar'
import useSettings from 'app/hooks/useSettings'
import UploadForm from '../../../views/page-layouts/user-profile/UploadForm'

const TopbarRoot = styled('div')(() => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
    },
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,
    },
}))


const Layout1Topbar = () => {
    const { logout, user } = useAuth()

    const [dialogOpen, setDialogOpen] = useState(false)

    const { settings, updateSettings } = useSettings()

    const updateUploadStatus = (status) => {
        updateSettings({
            uploadForm: {
                uploadStatus: status
            }
        })
        setDialogOpen(true)
    }
    const handleClose = () => {
        updateUploadStatus(false)
        setDialogOpen(false);
    };


    return (
        <TopbarRoot>
            <TopbarContainer>
                <Brand>
                </Brand>
                <Box display="flex" alignItems="center">
                    <MatxSearchBox />

                    <NotificationProvider>
                        <NotificationBar />
                    </NotificationProvider>

                    <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span>
                                        Hi <strong>{user.name}</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    src="/assets/images/faces/Andrew.png"
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <Span> Home </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem onClick={() => updateUploadStatus(true)}>
                            <Icon> person </Icon>
                            <Span> Profile </Span>
                        </StyledItem>
                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu>
                </Box>
            </TopbarContainer>

            <UploadForm handleClose={handleClose} open={dialogOpen} />
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
