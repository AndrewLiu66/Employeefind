import React, { Fragment } from 'react'
import useSettings from 'app/hooks/useSettings'
import Backdrop from '@mui/material/Backdrop';
import useNotification from 'app/hooks/useNotification'
import AppChat from 'app/views/chat-box/AppChat'
import { useTheme } from '@mui/system'
import {
    Icon,
    Badge,
    IconButton,
    ThemeProvider,
} from '@mui/material'


const NotificationBar = ({ container }) => {
    const { settings } = useSettings()
    const theme = useTheme()
    const secondary = theme.palette.text.secondary
    const [panelOpen, setPanelOpen] = React.useState(false)
    const { deleteNotification, clearNotifications, notifications } =
        useNotification()

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        console.log(123)
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const { palette } = useTheme()
    const textColor = palette.text.primary

    return (
        <Fragment>
            <IconButton onClick={handleToggle}>
                <Badge color="secondary" badgeContent={notifications?.length}>
                    <Icon sx={{ color: textColor }}>notifications</Icon>
                </Badge>
            </IconButton>

            <ThemeProvider theme={settings.themes[settings.activeTheme]}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                // onClick={handleToggle}
                >
                    <AppChat handleClose={handleClose} />
                </Backdrop>
            </ThemeProvider>
        </Fragment>
    )
}

export default NotificationBar
