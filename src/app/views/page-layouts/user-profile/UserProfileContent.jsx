import React, { Fragment } from 'react'
import { Box, styled } from '@mui/system'
import UserMainContent from './UserMainContent'
import ProjectContent from './ProjectContent'
import UserInfoHeader from './UserInfoHeader'

const ContentBox = styled(Box)(({ theme }) => ({
    marginTop: '-80px',
    [theme.breakpoints.down('lg')]: {
        marginTop: '-80px',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '-55px',
        paddingLeft: '35px',
        paddingRight: '35px',
    },
}))

const UserProfileContent = ({ handleClose, editMode }) => {

    return (
        <Fragment>
            <UserInfoHeader handleClose={handleClose} />
            <ContentBox sx={{ px: 9, mb: 7 }}>
                <ProjectContent />
                <UserMainContent ContentData={ExperienceData} />
                <UserMainContent ContentData={EducationalData} />
            </ContentBox>
        </ Fragment >
    )
}

export default UserProfileContent

const ExperienceData = [
    {
        location: 'Google',
        title: 'Software Engineering II',
        img: '/assets/images/logos/Google.png',
        paragraph: 'Upgraded automation department’s website with new features of listing their products and adding customer reviews using PHP.Added the functionality of monitoring the conditions of manufacturing machines in production on the department’s website. Designed and built a website to introduce the automation department’s functionality, and created a content management web with Vue framework and Node.JS for this web to enable CRUD operations without explicitly changing the MySQL database.'
    },
    {
        location: 'Twitter',
        title: 'Software Engineering I',
        img: '/assets/images/logos/Twitter.png',
        paragraph: 'Collaborated in a team and built a scientific website that shows information related to the bionic vision with React framework.Decreased team’s development time and removed repetitive code by building customizable and reusable components.Incorporated email notifications when users submit forms and added reCAPTCHA to prevent bots from submitting forms.Designed database schema, managed platform data in MongoDB, and connected to the backend server with Mongoose.'
    }
]

const EducationalData = [
    {
        location: 'University of Washington',
        date: "2023 - 2024",
        title: 'Master of Computer Science',
        img: '/assets/images/logos/UW.png',
        paragraph: 'Received 2 Deans\'List and a cumulative GPA of 4.0'
    },
    {
        location: 'University of Washington',
        date: "2018 - 2023",
        title: 'Bachelor of Human Centered Design & Engineering',
        img: '/assets/images/logos/UW.png',
        paragraph: 'Received 10 Deans\'List and a cumulative GPA of 4.0'
    }
]
