import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    contactHeading: {
     textAlign:'center',
     marginTop:'100px',
    },
    
})
const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.contactHeading}>Contact Us...!!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error provident vero ut quasi libero itaque dolores dolor rem nobis! Amet id tempora eligendi nihil consequatur aspernatur quos, recusandae deserunt.</p>
        </div>
    )
}

export default Contact