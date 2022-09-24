import React from 'react';
import  Typography  from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';




const useStyles = makeStyles((theme)=> ({
    root:{
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta"
    }
}))


function Header() {

  
    const styles = useStyles()
   

  return (
    
    <Typography className={styles.root} variant='h1'>
      The Ultimate Form Challenge
    </Typography>
  
   
  )
}

export default Header


// import React from 'react';
// import { Typography } from '@mui/material';
// //  import {makeStyles} from '@mui/material'

// function Header() {
//   return (
//     <div>
//       <Typography variant='h1'>
//       Form challenge
//       </Typography>
//     </div>
//   )
// }

// export default Header
