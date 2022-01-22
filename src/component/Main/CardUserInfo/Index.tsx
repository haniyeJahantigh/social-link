import { useState } from "react";
import { useStyles } from "./style";
import {HiTrash} from 'react-icons/hi'
import {FaPen} from 'react-icons/fa'
import {deleteData} from "../../../services/services"
import { Button ,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from "@mui/material";
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
    const [openModal, setOpenModal] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true)
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
          setOpenModal(false);
    }   
    const handleClose = () => {
      setOpenModal(false);
    };
    const handleOpenMdal = () => {
      setOpenModal(true);
    };
    const switchIcon = (param: any) => {
        switch (param) {
          case 1:
            return < FaInstagram size={15}/>;
          case 2:
            return <FaTelegramPlane size={15}/>;
          case 3:
            return <FaTwitter size={15}/>;
          case 4:
            return <FaFacebookF size={15}/>;
          case 5:
            return <FaLinkedin size={15}/>;
          case 6:
            return <FaGlobe size={15}/>;
          default:
            return <FaTwitter size={15}/>;
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

          <div className={classes.userInfo}>
            {switchIcon(data.social)}
            <div className={classes.userInfo}>{switchSocials(data.social)}</div>
          </div>

          <div className={classes.userInfo}>
            <span> آی دی (ID):</span>
            <div className={classes.userId}>{data?.social_id}</div>
          </div>

          <div className={classes.userInfo}>
          <span> لینک:</span>
            <div className={classes.userLink}>{data?.link}</div>
          </div>

      </div>

      <div className={classes.editDeletBtn}>
          <div className={classes.editBtn} onClick={handleEdit}><FaPen/> ویرایش </div>
          <Button onClick={handleOpenMdal} value={data?.id}  color="error" 
                  startIcon={<HiTrash style={{ marginLeft:"5px" }}/>}
                  sx={{fontFamily:"iransans", fontSize:"10px"}} > 
                  حذف
          </Button>
          <Dialog open={openModal} onClose={handleClose} className={classes.dialog}  >
            <DialogTitle sx={{fontFamily:"iransans", fontSize:"10px"}}>آیا از تصمیم خود مطمين هستید؟</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{fontFamily:"iransans", fontSize:"10px"}}>
                برای حذف مسیر ارتباطی {data?.social_id} لطفا تایید را بنویسید.
              </DialogContentText>
              <TextField
                onChange={(text) => setBtnDisabled(!text.target.value)}
                autoFocus
                margin="dense"
                id="name"
                type="text"
                fullWidth
                variant="outlined"
              />
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClose} sx={{fontFamily:"iransans", fontSize:"10px", color:"#ffcf33"}} >انصراف</Button>
              <Button onClick={handleDelete} value={data?.id} color="error" sx={{fontFamily:"iransans", fontSize:"10px"}} disabled={btnDisabled}>حذف</Button>
            </DialogActions>
          </Dialog>
      </div>

  </div>;
};

export default Index;
