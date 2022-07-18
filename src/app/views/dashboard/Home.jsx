import { styled, Box, useTheme } from '@mui/system'
import { Grid, Card, Divider, TablePagination } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import InvoiceForm from '../forms/invoice-form/InvoiceForm'
import UserInfoCard from 'app/components/UserInfoCard/UserInfoCard'

const AnalyticsRoot = styled('div')(({ theme }) => ({
    margin: '40px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Home = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [rowsPerPage, setRowsPerPage] = useState(16)
    const [userList, setUserList] = useState([])
    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    useEffect(() => {
        Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) setUserList(data)
        })
        return () => setIsAlive(false)
    }, [isAlive])

    return (
        <AnalyticsRoot>
            <InvoiceForm />

            <Grid container spacing={3}>
                {userList
                    .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                    )
                    .map((user, ind) => (
                        <Grid key={user.id} item sm={3} xs={12}>
                            <UserInfoCard user={user} />
                        </Grid>
                    ))}
                <Box mt={2}>
                    <TablePagination
                        sx={{ px: 2 }}
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={userList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Grid>
        </AnalyticsRoot>
    )
}
export default Home
