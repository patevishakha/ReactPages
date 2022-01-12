import React from 'react'
import { Grid,FormLabel,FormControlLabel,RadioGroup } from '@material-ui/core'

function RadioButtonSample() {
    return (
        // <Grid item xs={6}>
        <Grid>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row
                // value={Values.tpRadioButtonGender}
                // name= "tpRadioButtonGender"
                // onChange={handleInputs} 
                >
                    <FormControlLabel value="male" control={<Radio/>} label="MALE"/>
                    <FormControlLabel value="female" control={<Radio/>} label="FEMALE"/>
                    <FormControlLabel value="other" control={<Radio/>} label="OTHER"/>

                </RadioGroup>
            </FormControl>
        </Grid>
    )
}

export default RadioButtonSample
