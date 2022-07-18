import * as React from 'react';
import Slide from '@mui/material/Slide';
import UserProfileContent from './UserProfileContent'
import { Dialog } from '@mui/material'
import { styled } from '@mui/system'
import {
    Box
} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContentBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
}))


export default function UserProfile({ open, handleClose }) {

    return (
        <Dialog
            sx={{ borderRadius: '20px' }}
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <ContentBox>
                <UserProfileContent handleClose={handleClose} />
            </ContentBox>
        </Dialog>
    );
}
