import React from 'react';
import MainFile from './UI/MainFile';
import AllComponent from './Components/AllComponent';
import AllComponent2 from './Components/Page6/AllComponent2';
import AllComponent3 from './Components/Page7/AllComponent3';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
    toolbarMargin : {
        ...theme.mixins.toolbar
    },
    // root: {
    //   background: 'linear-gradient(100deg, #b39ddb 30%, #ce93d8 60%)',
    //   height : '100%',
    //   // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //   // margin : '10px',
    //   // padding: '40px 40px',
    // },
}));

const App = () => {
  const classes = useStyles();
  return (

     <div className={classes.root}>
        <MainFile/> 
        <div  className={classes.toolbarMargin}/> 
        <AllComponent/> 
        <AllComponent2/>
        <AllComponent3/>
        
    </div>
  );
}

export default App;
