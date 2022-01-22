import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles(()=>({
    addres:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    fontSize:"10px",
    marginLeft:"10px",
    padding: "5px 10px",
},
noActive:{
    opacity:"0.5"
},
formContaner:{
    fontSize:"10px",
    display: "flex",
    flexDirection:"column",
    alignContent: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    width:"100%",
    height:"100%",
    backgroundColor:'#25303c',
    borderRadius:"5px",
    padding:"10px",
    margin:"15px 0"
},
mainFromTitle:{
   fontSize:"10px",
   margin:"10px"
},
addUserBtn:{
    color:"#ffcf33",
    cursor:"pointer"
},
userList:{
    width:"100%"

},
userForm:{
    width:"100%"
}
}))