import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles(()=>({
headerContaner:{
    width: "100%",
    height:"50px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "5px 10px",
},
headerSearch:{
    width:"10px"
},
headerLeft:{
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start"
},
headerFlag:{
    width:"30px",
    height:"20px"
},
headerAvatar:{
    width:"35px",
    borderRadius:"50%",
    margin:"0 20px",
    backgroundColor:"yellow"
}
}))