import React from 'react'
import {AppBar,Toolbar,Box, Typography} from '@material-ui/core';
import {useScrollTrigger} from '@material-ui/core';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
                <Typography variant="h5">Call Traffic Controller</Typography>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
        </Box>
    )
}

export default Header
