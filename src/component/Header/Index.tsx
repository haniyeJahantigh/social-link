import {BiSearch} from "react-icons/bi"
import flag from "../../assets/icons/ir-flag.png"
import avatar from "../../assets/icons/avatar.jpeg"
import { useStyles } from "./style";


const Index = () => {
    const classes = useStyles();
  return (
    <div className={classes.headerContaner}>
        <div className={classes.headerSearch}><BiSearch/></div>
        <div className={classes.headerLeft}>
            <img alt='ir-flag' src={flag} className={classes.headerFlag}/>
            <img alt='ir-flag' src={avatar} className={classes.headerAvatar}/>
        </div>
    </div>
  )};

export default Index;
