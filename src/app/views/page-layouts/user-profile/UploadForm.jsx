import React from 'react'
import Slide from '@mui/material/Slide';
import { Dialog } from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'
import UploadProject from 'app/components/InfoUpdate/UploadProject'
import UploadHeader from 'app/components/InfoUpdate/UploadHeader'
import UploadExperience from 'app/components/InfoUpdate/UploadExperience'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContentBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
    marginTop: '-80px',
    [theme.breakpoints.down('md')]: {
        marginTop: '-60px',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '-55px',
        paddingLeft: '35px',
        paddingRight: '35px',
    },
}))


const BlueBox = styled(Box)(({ theme }) => ({
    background: '#3576CB',
    minHeight: '260px',
    [theme.breakpoints.down('md')]: {
        minHeight: '230px',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '220px',
        padding: '35px'
    },
}))

export default function UploadForm({ open, handleClose }) {

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
            <BlueBox />
            <ContentBox sx={{ px: 6, mb: 4 }}>
                <UploadHeader handleClose={handleClose} />
                <UploadProject ChunkTitle="Project" data={ProjectData} />
                <UploadExperience ChunkTitle="Experience" data={ExperienceData} />
                <UploadExperience ChunkTitle="Education" data={EducationalData} />
            </ContentBox>
        </Dialog>
    );
}

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

const ProjectData = [
    {
        location: 'Google',
        title: 'Personal Website',
        img: '/assets/images/illustrations/project1.png',
        description: 'Upgraded automation department’s website with new features of listing their products and adding customer reviews using PHP.Added the functionality of monitoring the conditions of manufacturing machines in production on the department’s website. Designed and built a website to introduce the automation department’s functionality, and created a content management web with Vue framework and Node.JS for this web to enable CRUD operations without explicitly changing the MySQL database.'
    },
    {
        location: 'Twitter',
        title: 'Culture',
        img: '/assets/images/illustrations/project4.png',
        description: 'Collaborated in a team and built a scientific website that shows information related to the bionic vision with React framework.Decreased team’s development time and removed repetitive code by building customizable and reusable components.Incorporated email notifications when users submit forms and added reCAPTCHA to prevent bots from submitting forms.Designed database schema, managed platform data in MongoDB, and connected to the backend server with Mongoose.'
    }
]

const ExperienceData = [
    {
        location: 'Google',
        title: 'Software Engineering II',
        img: '/assets/images/logos/Google.png',
        description: 'Upgraded automation department’s website with new features of listing their products and adding customer reviews using PHP.Added the functionality of monitoring the conditions of manufacturing machines in production on the department’s website. Designed and built a website to introduce the automation department’s functionality, and created a content management web with Vue framework and Node.JS for this web to enable CRUD operations without explicitly changing the MySQL database.'
    },
    {
        location: 'Twitter',
        title: 'Software Engineering I',
        img: '/assets/images/logos/Twitter.png',
        description: 'Collaborated in a team and built a scientific website that shows information related to the bionic vision with React framework.Decreased team’s development time and removed repetitive code by building customizable and reusable components.Incorporated email notifications when users submit forms and added reCAPTCHA to prevent bots from submitting forms.Designed database schema, managed platform data in MongoDB, and connected to the backend server with Mongoose.'
    }
]

const EducationalData = [
    {
        location: 'University of Washington',
        date: "2023 - 2024",
        title: 'Master of Computer Science',
        img: '/assets/images/logos/UW.png',
        description: 'Received dean\'s lists for 10 quarters'
    },
    {
        location: 'University of Washington',
        date: "2018 - 2023",
        title: 'Bachelor of Human Centered Design & Engineering',
        img: '/assets/images/logos/UW.png',
        description: 'Received dean\'s lists for 10 quarters'
    }
]
