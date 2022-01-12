import React from 'react'
import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

function Element() {
    return (
          <div>
            <form>
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-label3">Created Access No : </InputLabel>
                        <Select
                            labelId="select-label3"
                            label="Created Access No"
                            id="select3"
                            name= "Created_Access_No"
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>
                                
                            </Select>
                        </FormControl>
            </form>
        </div>
    )
}

export default Element
