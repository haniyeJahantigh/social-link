import { useStyles } from "./style";
import {HiTrash} from 'react-icons/hi'
import {FaPen} from 'react-icons/fa'
import {deleteData} from "../../../services/services"
import { Button } from "@mui/material";
import {FaTwitter,
    FaTelegramPlane,
    FaInstagram,
    FaFacebookF,
    FaGlobe,
    FaLinkedin,
    } from "react-icons/fa";

type Props = {
    setEdit?:any,
    setOpen?: any,
    data?:any,
    setEditData:any,
    setUpdatePage:any,
    updatePage:boolean
};

const Index = ({setEdit,setOpen,data,setEditData,setUpdatePage,updatePage}: Props) => {
    const classes = useStyles();
    const handleEdit=()=>{
            setOpen(true)
            setEdit(true)
            setEditData(data)
    }
    console.log(data);

    const handleDelete=(e:any)=>{
        console.log(e.target.value);       
        deleteData(e.target.value).then(res=>{
            setUpdatePage(!updatePage)

        })
    }   
    const switchIcon = (param: any) => {
        switch (param) {
          case 1:
            return < FaInstagram/>;
          case 2:
            return <FaTelegramPlane />;
          case 3:
            return <FaTwitter />;
          case 4:
            return <FaFacebookF />;
          case 5:
            return <FaLinkedin />;
          case 6:
            return <FaGlobe />;
          default:
            return <FaTwitter />;
        }
      };
      const switchSocials = (param: any) => {
        switch (param) {
          case 1:
            return "اینستاگرام";
          case 2:
            return "تلگرام";
          case 3:
            return "توییتر";
          case 4:
            return "فیسبوک";
          case 5:
            return "لینکدین";
          case 6:
            return "وبسایت";
          default:
            return "پیدا نشد";
        }
      };
  
  return <div className={classes.userInfoContaner}>
      <div className={classes.userInfo}> 
          <div>{switchIcon(data.social)} {switchSocials(data.social)}</div>
          <div className={classes.userInfo}>
            <span> آی دی (ID) :</span>
            <div className={classes.userId}>{data?.social_id}</div>
          </div>
          <div className={classes.userInfo}>
          <span> لینک :</span>
            <div className={classes.userLink}>{data?.link}</div>
          </div>
      </div>
      <div className={classes.editDeletBtn}>
          <div className={classes.editBtn} onClick={handleEdit}><FaPen/> ویرایش </div>
          <Button className={classes.deleteBtn} onClick={handleDelete} value={data?.id}  color="error" startIcon={<HiTrash/>}>  حذف</Button>
      </div>
  </div>;
};

export default Index;
