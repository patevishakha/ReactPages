import React from 'react'
import { CssBaseline, Container, Paper, Box, Typography } from "@material-ui/core";
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../../Theme';
import {ThemeProvider} from '@material-ui/core/styles';

import FormElement from '../FormElement';
import Element2 from './Element2';
import Element3 from './Element3';

const useStyle = makeStyles(theme=>({
    backgroundColourClass:{
            backgroundColor: '#eee',
    },
    typographyClass: {
          fontWeight: 'bold'
      },
    rootClass : {

        '& .MuiFormControl-root' : {
        width:'90%',
        margin:theme.spacing(1)
        },

        '& .MuiTypography-root' : {
            width:'90%',
            }
        
    }
}))



function AllComponent2() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component={Box} p={4}>
                <Paper component={Box} p={4}
                //  style={{background: 'linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)'}}
                // style={{background:'linear-gradient(200deg, #f0ecfc 20%, #c797eb 74%)'}}
                    // style ={{background:'#F9F9F8'}}

                >
                
               
            {/* <Box
                boxShadow={10}
                bgcolor="background.paper"
                // bgcolor="primary.light"
                //bgcolor={classes.backgroundCOlourClass}
                p={4}
                m={5}>   */}
                
                <form className={classes.rootClass}>
                    <Grid container>
                       
                        <Grid item lg={6} sm={6} xs={12} >
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Workflow Status</Typography>
                            <FormElement/>
                        </Grid>

                        
                        <Grid item lg={6} sm={6} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Order Details</Typography>
                            <Element2/> 
                        </Grid>
        
                        <Grid item xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Order Details</Typography>
                            <Element3/> 
                        </Grid>
                    </Grid>
                </form>

                </Paper>
            </Container>    
            {/* </Box> */}

        </ThemeProvider>
    )
}

export default AllComponent2;
