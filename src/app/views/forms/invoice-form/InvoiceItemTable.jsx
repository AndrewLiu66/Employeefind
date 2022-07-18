import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    IconButton,
    Icon,
    Select,
    MenuItem,
    Autocomplete
} from '@mui/material'
import { getProductList, calculateAmount } from './InvoiceFormService'
import { Box, styled } from '@mui/system'
import { Formik, Form, Field, FieldArray } from 'formik'

const FlexBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const IMG = styled('img')(() => ({
    width: '100%'
}))

const StyledCell = styled(TableCell)(() => ({
    padding: 0,
}))

const InvoiceItemTable = ({ values, handleChange, setFieldValue }) => {
    const [isAlive, setIsAlive] = useState(true)
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductList().then(({ data }) => {
            if (isAlive) setProductList(data)
        })

        return () => setIsAlive(false)
    }, [isAlive])

    const handleSubmit = () => {
        console.log(123)
    }
    return (

        <div>
            <h1>Friend List</h1>
            <Formik
                initialValues={{ friends: ['jared', 'ian', 'brent'] }}
                onSubmit={handleSubmit}
                render={formikProps => (
                    <FieldArray name="friends">
                        {({ move, swap, push, insert, unshift, pop, form }) => {
                            return (
                                <Form>
                                    123
                                </Form>
                            );
                        }}
                    </FieldArray>
                )}
            />
        </div>
        // <FieldArray name="items">
        //     {(arrayHelpers) => (
        //         <Box overflow="auto">
        //             <Table sx={{ whiteSpace: 'pre', minWidth: 600 }}>
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell colSpan={3}>Project Image</TableCell>
        //                         <TableCell colSpan={8}>Content </TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {values.items?.map((item, ind) => (
        //                         <TableRow
        //                             key={ind}
        //                             sx={{ position: 'relative' }}
        //                         >
        //                             <StyledCell colSpan={3} align="left">
        //                                 <FlexBox>
        //                                     {/* <IMG alt="" src={item?.imgUrl} /> */}
        //                                     <IMG
        //                                         src="/assets/images/screenshots/layout3-customizer.png"
        //                                         alt="temp"
        //                                     />

        //                                 </FlexBox>
        //                             </StyledCell>

        //                             <StyledCell colSpan={8} align="left">
        //                                 <TextField
        //                                     name={`items[${ind}].price`}
        //                                     size="small"
        //                                     variant="outlined"
        //                                     type="number"
        //                                     fullWidth
        //                                     value={item.price || ''}
        //                                     onChange={handleChange}
        //                                 />
        //                             </StyledCell>
        //                             <StyledCell colSpan={1} align="center">
        //                                 <IconButton
        //                                     size="small"
        //                                     onClick={() =>
        //                                         arrayHelpers.remove(ind)
        //                                     }
        //                                 >
        //                                     <Icon
        //                                         color="error"
        //                                         fontSize="small"
        //                                     >
        //                                         clear
        //                                     </Icon>
        //                                 </IconButton>
        //                             </StyledCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        //                 <Box />
        //                 <Button
        //                     sx={{ mt: '16px !important' }}
        //                     color="primary"
        //                     variant="contained"
        //                     onClick={() => arrayHelpers.push({})}
        //                 >
        //                     + Add New Item
        //             </Button>
        //             </Box>
        //         </Box>
        //     )}
        // </FieldArray>
    )
}

export default InvoiceItemTable
