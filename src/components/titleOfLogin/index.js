import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ title }) => {
    return (
        <Typography variant='h4' textAlign={'center'} marginBottom={'20px'}>{title}</Typography>
    )
}

export default Title