import React from 'react'
import Header from './Header';
import theme from '../Theme';

import {ThemeProvider} from '@material-ui/core/styles';

function MainFile() {
    return (
        <ThemeProvider theme={theme}>
             <Header/>
        </ThemeProvider>
    )
}

export default MainFile
