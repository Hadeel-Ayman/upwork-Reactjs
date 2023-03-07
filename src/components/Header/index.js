import { Toolbar } from '@mui/material'
import React from 'react';
import Logo from '../Logo';


const style = {
    // backgroundColor: 'black',
    position: 'sticky',
    top: 0
}

const Header = () => {
    return (
        <Toolbar style={style}>
            <Logo />
        </Toolbar>
    )
}

export default Header


