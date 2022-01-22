import { makeStyles,useTheme,createStyles } from "@mui/styles";
import { yellow } from '@mui/material/colors';

// const theme= useTheme()
export const useStyles=makeStyles(()=>
    createStyles({
    form:{
       marginTop:"20px",
       padding: "15px 10px",
       backgroundColor:'#3b4651',
       borderRadius:'5px',
       '& .MuiTextField-root': {
        //    margin: theme.spacing(1),
           width: '30%',
           borderColor:"#fff",
           color:"#fff"
         },
         '&.Mui-focused fieldset': {
            borderColor: 'yellow',
          },
},
input:{
 display:"flex",
 justifyContent:"space-between"

},
title:{
    margin:"10px"

},
FormBtn:{
    display:"flex",
    justifyContent:"flex-end",
    margin:"10px"
},
okBtn:{
    backgroundColor: "#ffcf33",
    boxShadow:"",
    margin:" 0 20px"
}

}))