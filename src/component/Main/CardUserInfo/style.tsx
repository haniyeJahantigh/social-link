import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles(()=>({
    userInfoContaner:{
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    fontSize:"10px",
    margin:"20px 0",
    padding: "15px 10px",
    backgroundColor:'#3b4651',
    borderRadius:'5px'
},
userInfo:{
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    margin:"0 5px"
},
userId:{
    direction:"ltr",
    marginRight:"5px"
},
userLink:{
    direction:"ltr",
    marginRight:"5px",
    cursor:"pointer",
    color:"#ffcf33",
},
editDeletBtn:{
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
},
deleteBtn:{
   color:'#f44336',
   cursor:"pointer",
   marginLeft:"5px"
},
editBtn:{
    color:"#ffcf33",
    cursor:"pointer",
    marginLeft:"10px"
}
}))